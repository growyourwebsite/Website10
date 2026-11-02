// Usage: node screenshot.mjs <url> [label] [--mobile]
// Saves full-page screenshots to "./temporary screenshots/screenshot-N[-label].png"
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

const args = process.argv.slice(2);
const mobile = args.includes('--mobile');
const [url = 'http://localhost:3000', label] = args.filter(a => a !== '--mobile');

const root = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(root, 'temporary screenshots');
fs.mkdirSync(dir, { recursive: true });
const nums = fs.readdirSync(dir).map(f => f.match(/^screenshot-(\d+)/)).filter(Boolean).map(m => +m[1]);
const n = (nums.length ? Math.max(...nums) : 0) + 1;
const out = path.join(dir, `screenshot-${n}${label ? `-${label}` : ''}.png`);

const browser = await chromium.launch();
const page = await browser.newPage(mobile
  ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  : { viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log(out);
