// Shared header, brand menu, footer and search for every page.
(function () {
  const SHOP = {
    naam: 'Smartphone Repair Veenendaal',
    straat: 'Passage 87',
    plaats: '3901 AZ Veenendaal',
    tel: '0318-308781', telHref: 'tel:+31318308781',
    whatsapp: '06-24436406', waNummer: '31624436406',
    email: 'smartphonerepairveenendaal@gmail.com',
  };
  const UREN = [
    ['ma', 'Maandag', '13:00', '18:00'], ['di', 'Dinsdag', '09:30', '18:00'], ['wo', 'Woensdag', '09:30', '18:00'],
    ['do', 'Donderdag', '09:30', '18:00'], ['vr', 'Vrijdag', '09:30', '21:00'], ['za', 'Zaterdag', '09:30', '17:00'],
    ['zo', 'Zondag', null, null],
  ];
  window.SHOP = SHOP;

  const slug = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\+/g, '-plus').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const wa = text => `https://wa.me/${SHOP.waNummer}${text ? '?text=' + encodeURIComponent(text) : ''}`;
  window.SITE = { slug, wa };

  const icon = {
    clock: '<svg viewBox="0 0 48 48" class="h-6 w-6 flex-none" aria-hidden="true"><circle cx="24" cy="24" r="20" fill="none" stroke="#1B6EC2" stroke-width="4.5"/><path d="M24 13v12h-7" fill="none" stroke="#1B6EC2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    phone: '<svg viewBox="0 0 26 40" class="h-[21px] w-[14px] flex-none" aria-hidden="true"><rect x="1" y="1" width="24" height="38" rx="4" fill="#1B6EC2"/><rect x="4" y="6" width="18" height="25" rx="1" fill="#fff"/><circle cx="13" cy="35" r="2" fill="#fff"/></svg>',
    search: '<svg viewBox="0 0 48 48" class="h-[28px] w-[28px]" aria-hidden="true"><circle cx="29" cy="19" r="13" fill="none" stroke="#BDBDBD" stroke-width="2.5"/><circle cx="29" cy="19" r="9" fill="none" stroke="#D5D5D5" stroke-width="1.5"/><path d="M19.5 28.5 7 41" stroke="#BDBDBD" stroke-width="5" stroke-linecap="round"/></svg>',
    wa: '<svg viewBox="0 0 24 24" class="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.5l5.92-1.55a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02z"/></svg>',
    tel: '<svg viewBox="0 0 24 24" class="h-[21px] w-[21px]" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" class="h-[22px] w-[22px]" fill="currentColor" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7v.3l8 5.2 8-5.2V7z"/></svg>',
  };
  window.SITE.icon = icon;

  const pagina = document.body.dataset.page;
  const actief = new URLSearchParams(location.search).get('m');

  // ---------- Header + brand menu ----------
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
      <div class="wrap flex items-center justify-between gap-4 py-5 md:grid md:min-h-[128px] md:grid-cols-[26%_32%_1fr_auto] md:gap-0 md:py-0">
        <a href="index.html" class="press flex items-center gap-3" aria-label="${SHOP.naam}, naar de homepage">
          <svg viewBox="0 0 64 64" class="h-10 w-10 flex-none md:h-[40px] md:w-[40px]" aria-hidden="true">
            <path d="M8 46C10 22 26 8 50 6c-14 8-22 20-24 38" fill="#5AA2E6"/>
            <path d="M18 54C22 30 36 16 58 12 44 22 36 36 34 54" fill="#1B6EC2"/>
          </svg>
          <span class="leading-none">
            <span class="block text-[17px] font-bold tracking-[-0.01em] text-[#222] md:text-[16px]">Smartphone Repair</span>
            <span class="mt-0.5 block text-[11px] font-extrabold tracking-[0.2em] text-brand md:text-[10px]">VEENENDAAL</span>
            <span class="mt-1 hidden text-[6.5px] text-[#222] sm:block">Telefoon reparatie | Simlock | Accessoires</span>
          </span>
        </a>
        <div class="hidden items-center gap-4 md:flex">
          ${icon.clock}
          <table class="text-[10.5px] font-light leading-[13.2px] text-muted"><tbody>
            ${UREN.map(([k, , o, s]) => `<tr><td class="pr-3">${k}:</td><td>${o ? `${o} t/m ${s}` : 'Gesloten'}</td></tr>`).join('')}
          </tbody></table>
        </div>
        <a href="${SHOP.telHref}" class="press hidden items-center gap-5 md:flex">
          ${icon.phone}
          <span class="leading-tight"><span class="block text-[12px] font-light text-muted">Bel ons!</span><span class="block text-[10px] font-bold text-muted">${SHOP.tel}</span></span>
        </a>
        <div class="flex items-center gap-1">
          <a href="${SHOP.telHref}" class="press rounded p-2 text-brand md:hidden" aria-label="Bel ons">${icon.tel}</a>
          <button type="button" class="press rounded" data-open-search aria-label="Zoek uw toestel">${icon.search}</button>
        </div>
      </div>
      <div class="border-t border-line">
        <div class="wrap flex h-[42px] items-center justify-between gap-6 md:h-[37px]">
          <nav aria-label="Merken" class="brandnav -mx-1 flex flex-1 items-center gap-[18px] overflow-x-auto whitespace-nowrap px-1 font-slab text-[12.5px] font-light text-[#444]">
            ${window.MERKEN.map(m => `<a class="navlink py-2" href="merk.html?m=${m.slug}"${actief === m.slug ? ' aria-current="page"' : ''}>${m.naam}</a>`).join('')}
          </nav>
          <div class="hidden flex-none items-center gap-5 text-brand sm:flex">
            <a class="press" href="${SHOP.telHref}" aria-label="Bel ons">${icon.tel}</a>
            <a class="press" href="mailto:${SHOP.email}" aria-label="E-mail ons">${icon.mail}</a>
            <a class="press" href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon.wa}</a>
          </div>
        </div>
      </div>`;
  }

  // ---------- Footer ----------
  const footer = document.getElementById('site-footer');
  if (footer) {
    const populair = [['apple', 'iPhone 13'], ['apple', 'iPhone 15'], ['samsung', 'Galaxy S24'], ['samsung', 'Galaxy A55'], ['apple', 'iPad (10e generatie)']];
    footer.innerHTML = `
      <div class="bg-night pb-10 pt-12 text-[#ddd] md:pt-[44px]">
        <div class="wrap-inner grid gap-10 md:grid-cols-[1fr_2fr_1fr] md:gap-[22px]">
          <div class="text-[11px] font-light leading-[17.5px] text-[#ccc]">
            <h2 class="text-[13px] font-light uppercase text-[#eee]">Info Smartphone Repair</h2>
            <p class="mt-3">${SHOP.naam}<br>${SHOP.straat}<br>${SHOP.plaats}</p>
            <h2 class="mt-10 text-[13px] font-light uppercase text-[#eee]">Openingstijden</h2>
            <table class="mt-3"><tbody>
              ${UREN.map(([, d, o, s]) => `<tr><td class="pr-5">${d}</td><td>${o ? `${o}-${s}` : 'Gesloten'}</td></tr>`).join('')}
            </tbody></table>
            <p class="mt-4">Tel: <a class="press text-brand-light" href="${SHOP.telHref}">0318 308 781</a><br>
            WhatsApp: <a class="press text-brand-light" href="${wa()}" target="_blank" rel="noopener">06 2443 6406</a><br>
            Email : <a class="press break-all text-brand-light" href="mailto:${SHOP.email}">${SHOP.email}</a></p>
          </div>
          <div>
            <h2 class="text-[13px] font-light uppercase text-[#eee]">Contact</h2>
            <form id="contactform" class="mt-3" novalidate>
              <div class="grid gap-2 sm:grid-cols-2">
                <label class="sr-only" for="cf-naam">Uw naam</label>
                <input id="cf-naam" name="naam" required placeholder="Uw naam.." class="h-[27px] border-2 border-night-edge bg-night-field px-2 text-[11px] text-white placeholder:text-[#999] focus:border-brand-light focus:outline-none">
                <label class="sr-only" for="cf-mail">Uw e-mailadres</label>
                <input id="cf-mail" name="email" type="email" required placeholder="Uw e-mailadres.." class="h-[27px] border-2 border-night-edge bg-night-field px-2 text-[11px] text-white placeholder:text-[#999] focus:border-brand-light focus:outline-none">
              </div>
              <label class="sr-only" for="cf-bericht">Uw bericht</label>
              <textarea id="cf-bericht" name="bericht" required placeholder="Uw bericht" rows="7" class="mt-2 block w-full border-2 border-night-edge bg-night-field px-2 py-2 text-[11px] text-white placeholder:text-[#999] focus:border-brand-light focus:outline-none"></textarea>
              <p id="cf-fout" class="mt-2 hidden text-[11px] text-[#ffb4a8]" role="alert"></p>
              <button class="press mt-3 rounded-[3px] bg-brand px-[11px] py-[5px] text-[11px] text-white hover:bg-brand-dark">Versturen</button>
              <p class="mt-2 text-[10px] text-[#999]">Uw e-mailprogramma opent met het bericht klaar om te verzenden.</p>
            </form>
            <h2 class="mt-8 text-[13px] font-light uppercase text-[#eee]">Contact via</h2>
            <div class="mt-3 flex gap-4 text-brand-light">
              <a class="press" href="${SHOP.telHref}" aria-label="Bel ons">${icon.tel}</a>
              <a class="press" href="${wa()}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon.wa}</a>
              <a class="press" href="mailto:${SHOP.email}" aria-label="E-mail ons">${icon.mail}</a>
            </div>
          </div>
          <div class="text-[12px] font-light leading-[17.5px]">
            <h2 class="text-[13px] font-light uppercase text-[#eee]">Algemeen</h2>
            <ul class="mt-3 text-brand-light">
              <li><a class="press" href="index.html#merken">Reparaties</a></li>
              <li><a class="press" href="index.html#vragen">Veelgestelde vragen</a></li>
              <li><a class="press" href="#contactform">Contact</a></li>
            </ul>
            <h2 class="mt-8 text-[13px] font-light uppercase text-[#eee]">Populaire reparaties</h2>
            <ul class="mt-3 text-brand-light">
              ${populair.map(([m, n]) => `<li><a class="press" href="merk.html?m=${m}#${slug(n)}">${n}</a></li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="wrap-inner mt-10 border-t border-[#555] pt-5 text-[10px] font-light text-[#999]">© ${new Date().getFullYear()} ${SHOP.naam} · ${SHOP.straat}, Veenendaal</div>
      </div>`;

    document.getElementById('contactform').addEventListener('submit', e => {
      e.preventDefault();
      const f = e.target, fout = document.getElementById('cf-fout');
      const leeg = [...f.querySelectorAll('[required]')].find(i => !i.value.trim());
      if (leeg) { fout.textContent = 'Vul uw naam, e-mailadres en bericht in.'; fout.classList.remove('hidden'); leeg.focus(); return; }
      if (!f.email.checkValidity()) { fout.textContent = 'Dit e-mailadres klopt niet. Controleer het en probeer opnieuw.'; fout.classList.remove('hidden'); f.email.focus(); return; }
      fout.classList.add('hidden');
      const body = `${f.bericht.value}\n\n${f.naam.value}\n${f.email.value}`;
      location.href = `mailto:${SHOP.email}?subject=${encodeURIComponent('Vraag via de website')}&body=${encodeURIComponent(body)}`;
    });
  }

  // ---------- Search overlay ----------
  const alle = window.MERKEN.flatMap(m => m.categorieen.flatMap(c => c.modellen.map(model => ({ model, merk: m }))));
  document.body.insertAdjacentHTML('beforeend', `
    <div id="zoek" hidden class="fixed inset-0 z-50 bg-white/[.97]" role="dialog" aria-modal="true" aria-label="Zoek uw toestel">
      <div class="wrap pt-10">
        <div class="flex items-center gap-4 border-b-2 border-brand pb-2">
          <label for="zoekveld" class="sr-only">Zoek uw toestel</label>
          <input id="zoekveld" type="search" autocomplete="off" placeholder="Zoek uw toestel, bijvoorbeeld iPhone 13" class="min-w-0 flex-1 bg-transparent py-2 text-[22px] font-light outline-none md:text-[28px]">
          <button type="button" class="press rounded px-3 py-2 text-[15px] text-muted" data-close-search>Sluiten</button>
        </div>
        <ul id="zoekresultaten" class="mt-4 max-h-[70vh] overflow-y-auto"></ul>
      </div>
    </div>`);
  const zoek = document.getElementById('zoek'), veld = document.getElementById('zoekveld'), lijst = document.getElementById('zoekresultaten');
  const toon = q => {
    q = q.trim().toLowerCase();
    if (!q) { lijst.innerHTML = '<li class="py-2 text-[15px] text-muted">Typ de naam van uw telefoon of tablet.</li>'; return; }
    const woorden = q.split(/\s+/);
    const hits = alle.filter(({ model, merk }) => woorden.every(w => (merk.naam + ' ' + model).toLowerCase().includes(w))).slice(0, 40);
    lijst.innerHTML = hits.length
      ? hits.map(({ model, merk }) => `<li><a class="navlink flex justify-between gap-4 border-b border-line py-3 text-[17px] font-light" href="merk.html?m=${merk.slug}#${slug(model)}"><span>${model}</span><span class="text-[13px] text-muted">${merk.naam}</span></a></li>`).join('')
      : `<li class="py-3 text-[15px] text-muted">Geen toestel gevonden voor "${q.replace(/[<&>]/g, '')}". Staat uw toestel er niet tussen? <a class="text-brand underline" href="${wa('Hallo, kunnen jullie mijn ' + q.replace(/[<&>]/g, '') + ' repareren?')}" target="_blank" rel="noopener">Stuur ons een WhatsApp</a>, dan kijken we of we het kunnen repareren.</li>`;
  };
  let terug = null;
  const open = () => { terug = document.activeElement; zoek.hidden = false; veld.value = ''; toon(''); veld.focus(); };
  const sluit = () => { zoek.hidden = true; terug && terug.focus(); };
  document.addEventListener('click', e => {
    if (e.target.closest('[data-open-search]')) open();
    else if (e.target.closest('[data-close-search]')) sluit();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !zoek.hidden) sluit(); });
  veld.addEventListener('input', () => toon(veld.value));
  lijst.addEventListener('click', e => { if (e.target.closest('a')) zoek.hidden = true; });
})();
