// Usage: node screenshot.mjs <url> [label] [--mobile]
// Saves full-page screenshots to "./temporary screenshots/screenshot-N[-label].png"
//
// The cloud container's network blocks cdn.tailwindcss.com and placehold.co.
// So that screenshots still match what visitors see, this script:
//  - answers cdn.tailwindcss.com with a stub and compiles the page's CSS locally
//    with the official tailwindcss v3 package (same engine as the Play CDN),
//    using the page's own `tailwind.config` and <style type="text/tailwindcss">;
//  - answers placehold.co with an equivalent grey SVG placeholder.
// The published index.html keeps the real CDN links; nothing here ships to visitors.
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.join(root, 'package.json'));

let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

function loadTailwind() {
  try { return { tailwindcss: require('tailwindcss'), postcss: require('postcss') }; }
  catch {
    console.error('Installing local Tailwind (one time)…');
    execSync('npm install --no-audit --no-fund --silent', { cwd: root, stdio: 'inherit' });
    return { tailwindcss: require('tailwindcss'), postcss: require('postcss') };
  }
}

const PLUGINS = {
  forms: '@tailwindcss/forms',
  typography: '@tailwindcss/typography',
  'aspect-ratio': '@tailwindcss/aspect-ratio',
  'container-queries': '@tailwindcss/container-queries',
};

const args = process.argv.slice(2);
const mobile = args.includes('--mobile');
const ipad = args.includes('--ipad');
const [url = 'http://localhost:3000', label] = args.filter(a => a !== '--mobile' && a !== '--ipad');

const dir = path.join(root, 'temporary screenshots');
fs.mkdirSync(dir, { recursive: true });
const nums = fs.readdirSync(dir).map(f => f.match(/^screenshot-(\d+)/)).filter(Boolean).map(m => +m[1]);
const n = (nums.length ? Math.max(...nums) : 0) + 1;
const out = path.join(dir, `screenshot-${n}${label ? `-${label}` : ''}.png`);

const browser = await chromium.launch();
const page = await browser.newPage(mobile
  ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  : ipad
    ? { viewport: { width: 1000, height: 750 }, deviceScaleFactor: 2 } // iPad landscape, as in the reference screenshots
    : { viewport: { width: 1440, height: 900 } });

// --- cdn.tailwindcss.com → stub; CSS is compiled locally after load ---
let usesTailwindCdn = false;
let cdnPlugins = [];
await page.route(/^https:\/\/cdn\.tailwindcss\.com(\/.*)?(\?.*)?$/, route => {
  usesTailwindCdn = true;
  const q = new URL(route.request().url()).searchParams.get('plugins');
  if (q) cdnPlugins = q.split(',').map(s => s.trim().split('@')[0]).filter(Boolean);
  route.fulfill({
    contentType: 'text/javascript',
    body: 'window.tailwind = window.tailwind || {}; window.tailwind.config = window.tailwind.config || {};',
  });
});

// --- placehold.co → local grey SVG with the same size and label ---
await page.route(/^https:\/\/placehold\.co\//, route => {
  const u = new URL(route.request().url());
  const parts = u.pathname.split('/').filter(Boolean);
  const m = (parts[0] || '600x400').match(/^(\d+)(?:x(\d+))?/) || [];
  const w = +m[1] || 600, h = +(m[2] || m[1]) || 400;
  const hex = s => (s && /^[0-9a-f]{3,8}$/i.test(s.replace(/\.\w+$/, '')) ? '#' + s.replace(/\.\w+$/, '') : null);
  const bg = hex(parts[1]) || '#cccccc', fg = hex(parts[2]) || '#969696';
  const text = (u.searchParams.get('text') || `${w} × ${h}`).replace(/[<&>]/g, '').replace(/\\n/g, ' ');
  const fs_ = Math.max(10, Math.round(Math.min(w, h) / 8));
  route.fulfill({
    contentType: 'image/svg+xml',
    body: `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="100%" height="100%" fill="${bg}"/><text x="50%" y="50%" fill="${fg}" font-family="sans-serif" font-size="${fs_}" text-anchor="middle" dominant-baseline="central">${text}</text></svg>`,
  });
});

// Report anything else the network blocked, so a broken screenshot is never silent.
const blocked = new Set();
page.context().on('requestfailed', r => blocked.add(new URL(r.url()).host));

await page.goto(url, { waitUntil: 'networkidle' });

if (usesTailwindCdn) {
  const { tailwindcss, postcss } = loadTailwind();
  const { config, customCss, html } = await page.evaluate(() => {
    const strip = v => JSON.parse(JSON.stringify(v ?? {}, (k, x) => (typeof x === 'function' ? undefined : x)));
    return {
      config: strip(window.tailwind && window.tailwind.config),
      customCss: [...document.querySelectorAll('style[type="text/tailwindcss"]')].map(s => s.textContent).join('\n'),
      html: document.documentElement.outerHTML,
    };
  });
  const input = /@tailwind\s/.test(customCss)
    ? customCss
    : `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n${customCss}`;
  const plugins = cdnPlugins.filter(p => PLUGINS[p]).map(p => require(PLUGINS[p]));
  const { css } = await postcss([
    tailwindcss({ ...config, content: [{ raw: html, extension: 'html' }], plugins }),
  ]).process(input, { from: undefined });
  await page.evaluate(css => {
    const el = document.createElement('style');
    el.id = '__local-tailwind';
    el.textContent = css;
    document.head.append(el);
    window.dispatchEvent(new Event('resize'));
  }, css);
  await page.evaluate(() => document.fonts && document.fonts.ready);
}

// Scroll through the page so lazy-loaded images load, then return to the top.
await page.evaluate(async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight / 2) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
  // Force every image to load and decode before capturing.
  const imgs = [...document.images];
  imgs.forEach(i => { i.loading = 'eager'; });
  await Promise.all(imgs.map(i => (i.complete ? i.decode().catch(() => {}) : new Promise(r => { i.onload = i.onerror = r; }))));
});
await page.waitForLoadState('networkidle').catch(() => {});
await page.waitForTimeout(500);

// Chromium renders blank areas past ~16k device pixels; drop to 1x scale for very tall pages.
const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
const scale = (mobile || ipad) && fullHeight * 2 > 16000 ? 'css' : 'device';
await page.screenshot({ path: out, fullPage: true, scale });
await browser.close();

if (blocked.size) console.error(`Blocked by network (not rendered): ${[...blocked].join(', ')}`);
console.log(out);
