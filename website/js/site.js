/**
 * Ghoulhunters site.js — config-driven nav, pages, and partials
 */
(function () {
  const cfg = () => window.GHOULHUNTERS_CONFIG;
  if (!cfg()) {
    console.error('GHOULHUNTERS_CONFIG not loaded. Include js/config.js before site.js');
  }

  function getProgram(id) {
    return cfg().programs.find((p) => p.id === id);
  }

  function activePrograms() {
    return cfg().programs.filter((p) => p.status === 'active');
  }

  function programsForNav() {
    return cfg().programs.filter((p) => p.showInNav && p.status === 'active');
  }

  function queryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function speciesUrl(id) {
    return `species.html?species=${encodeURIComponent(id)}`;
  }

  function watchUrl(id) {
    return `watch.html?program=${encodeURIComponent(id)}`;
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  async function loadPartial(elementId, url) {
    const el = document.getElementById(elementId);
    if (!el) return;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      el.innerHTML = await res.text();
    } catch (err) {
      console.warn('Could not load', url, err);
      el.innerHTML =
        '<p class="alert-warning">Menu could not load. Open this site via GitHub Pages or a local server.</p>';
    }
  }

  async function loadContent(url, container) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Content not found: ${url}`);
    container.innerHTML = await res.text();
  }

  function buildNavHtml() {
    const c = cfg();
    const staticItems = c.nav
      .filter((item) => {
        if (item.href === 'spotter-rewards.html' && !c.reporterRewards?.enabled) return false;
        return true;
      })
      .map((item) => `<li><a href="${item.href}">${escapeHtml(item.label)}</a></li>`)
      .join('');

    const programItems = programsForNav()
      .map(
        (p) =>
          `<li class="site-nav__sub"><a href="${speciesUrl(p.id)}">${escapeHtml(p.name)}</a></li>`
      )
      .join('');

    return `${staticItems}${programItems}`;
  }

  function buildHeaderBanner(program) {
    const bio = cfg().biosecurity;
    const text = program ? program.doNotMoveWarning : bio.defaultWarning;
    return `<div class="alert-warning anim-warning-once" role="alert"><strong>${escapeHtml(text)}</strong></div>`;
  }

  function renderHeader(program) {
    const headerEl = document.getElementById('site-header');
    if (!headerEl) return;

    const site = cfg().site;
    headerEl.innerHTML = `
<header class="site-header">
  <div class="container site-header__inner">
    <a href="index.html" class="site-logo">
      <span class="material-symbols-outlined" aria-hidden="true">eco</span>
      ${escapeHtml(site.name)}
    </a>
    <button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false">
      <span class="material-symbols-outlined">menu</span>
    </button>
    <nav aria-label="Main">
      <ul class="site-nav">${buildNavHtml()}</ul>
    </nav>
  </div>
</header>
${buildHeaderBanner(program)}`;
  }

  function renderFooter() {
    const footerEl = document.getElementById('site-footer');
    if (!footerEl) return;

    const site = cfg().site;
    const bio = cfg().biosecurity;
    const programLinks = activePrograms()
      .flatMap((p) =>
        (p.footerLinks || []).map(
          (l) =>
            `<li><a href="${l.url}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a></li>`
        )
      )
      .join('');

    const watchLinks = activePrograms()
      .map(
        (p) =>
          `<li><a href="${watchUrl(p.id)}">${escapeHtml(p.watchProjectName)}</a></li>`
      )
      .join('');

    footerEl.innerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div>
        <h3>${escapeHtml(site.name)}</h3>
        <p>${escapeHtml(site.subtitle)} for ${escapeHtml(site.region)} — <strong>biodiversity</strong> and invasive species education.</p>
      </div>
      <div>
        <h3>Official reporting</h3>
        <p>
          This site does <strong>not</strong> replace government reporting.<br>
          If you see a suspected invasive species, <strong>do not move it</strong>.<br>
          Report to ${escapeHtml(bio.authority)} within <strong>${bio.reportHours} hours</strong>:
        </p>
        <p class="report-phone" style="color: var(--color-leaf); font-size: 1.5rem;">${escapeHtml(bio.phone)}</p>
        <a href="${bio.reportUrl}" target="_blank" rel="noopener noreferrer">Report online (DPI Queensland)</a>
      </div>
      <div>
        <h3>Watch programs</h3>
        <ul style="list-style: none; padding: 0; margin: 0 0 1rem;">${watchLinks}</ul>
        <h3>Official resources</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">${programLinks}</ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <p>&copy; ${site.year} ${escapeHtml(site.name)} &middot; ${escapeHtml(site.schoolName)}${site.schoolSuburb ? `, ${escapeHtml(site.schoolSuburb)}` : ''}${site.schoolYearLevel ? ` &middot; ${escapeHtml(site.schoolYearLevel)}` : ''} &middot; Protecting our environment and biodiversity</p>
    </div>
  </div>
</footer>`;
  }

  function highlightCurrentPage() {
    let page = window.location.pathname.split('/').pop() || '';
    if (!page || page.endsWith('/')) page = 'index.html';
    const species = queryParam('species');
    const program = queryParam('program');

    document.querySelectorAll('.site-nav a').forEach((link) => {
      const href = (link.getAttribute('href') || '').replace(/^\.\//, '');
      let isActive = href === page;
      if (page === 'species.html' && species && href.includes(`species=${species}`)) isActive = true;
      if (page === 'watch.html' && program && href.includes(`program=${program}`)) isActive = true;
      if (page === 'programs.html' && href === 'programs.html') isActive = true;
      link.classList.toggle('active', isActive);
    });
  }

  function setupMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  let scrollObserver = null;

  function revealElement(el) {
    if (!el || el.classList.contains('is-visible')) return;
    el.classList.add('is-visible');
    if (scrollObserver) scrollObserver.unobserve(el);
  }

  function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh * 0.92 && rect.bottom > vh * 0.05;
  }

  function setupScrollReveal() {
    const targets = document.querySelectorAll('.anim-reveal, .anim-diagram, .timeline');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(revealElement);
      return;
    }

    if (!scrollObserver) {
      scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) revealElement(entry.target);
          });
        },
        { rootMargin: '0px 0px -5% 0px', threshold: 0.08 }
      );
    }

    targets.forEach((el) => {
      if (el.classList.contains('is-visible')) return;
      if (isElementInView(el)) {
        revealElement(el);
      } else {
        scrollObserver.observe(el);
      }
    });
  }

  function programThumbnailSrc(program) {
    if (!program.imagesDir) return null;
    if (program.thumbnail) return `${program.imagesDir}/${program.thumbnail}`;
    return null;
  }

  function programThumbHtml(program) {
    const thumb = programThumbnailSrc(program);
    if (!thumb) {
      return `<div class="species-card__thumb species-card__thumb--placeholder" aria-hidden="true"><span class="material-symbols-outlined">${escapeHtml(program.cardIcon || 'pest_control')}</span></div>`;
    }
    const alt = `${program.name} — identification image`;
    return `<div class="species-card__thumb program-card__thumb"><img src="${thumb}" alt="${escapeHtml(alt)}" width="400" height="250" loading="lazy"></div>`;
  }

  function renderInvasiveSpeciesCards(container) {
    const cards = [];

    activePrograms().forEach((p) => {
      const thumb = programThumbnailSrc(p);
      const thumbAlt = `${p.name} — identification photo`;
      const thumbHtml = thumb
        ? `<div class="species-card__thumb"><img src="${thumb}" alt="${escapeHtml(thumbAlt)}" width="400" height="250" loading="lazy"></div>`
        : `<div class="species-card__thumb species-card__thumb--placeholder" aria-hidden="true"><span class="material-symbols-outlined">${escapeHtml(p.cardIcon)}</span></div>`;

      cards.push(`
        <a href="${speciesUrl(p.id)}" class="card card-interactive species-card">
          ${thumbHtml}
          <div class="species-card__body">
            <h3>${escapeHtml(p.name)}</h3>
            <p class="species-card__sci"><em>${escapeHtml(p.scientificName)}</em></p>
            <p>${escapeHtml(p.cardDescription)}</p>
            <span class="species-card__link">Species guide <span aria-hidden="true">→</span></span>
          </div>
        </a>`);
    });

    cfg()
      .programs.filter((p) => p.status === 'coming-soon')
      .forEach((p) => {
        const thumb = programThumbnailSrc(p);
        const thumbHtml = thumb
          ? `<div class="species-card__thumb"><img src="${thumb}" alt="" width="400" height="250" loading="lazy"></div>`
          : `<div class="species-card__thumb species-card__thumb--placeholder" aria-hidden="true"><span class="material-symbols-outlined">${escapeHtml(p.cardIcon)}</span></div>`;
        cards.push(`
        <div class="card card--muted species-card">
          ${thumbHtml}
          <div class="species-card__body">
            <h3>${escapeHtml(p.name)}</h3>
            <p class="placeholder-note">Coming soon</p>
          </div>
        </div>`);
      });

    container.innerHTML = cards.join('');
    container.classList.add('invasive-species-grid', 'anim-stagger');
    triggerStaggerIfParentVisible(container);
  }

  function triggerStaggerIfParentVisible(staggerEl) {
    const section = staggerEl.closest('.anim-reveal');
    if (section && section.classList.contains('is-visible')) {
      staggerEl.classList.remove('is-visible');
      requestAnimationFrame(() => staggerEl.classList.add('is-visible'));
    }
  }

  function rewardsPageHref() {
    const rewards = cfg().reporterRewards;
    if (!rewards?.enabled) return null;
    return rewards.pageHref || 'spotter-rewards.html';
  }

  function renderSpotterRewards() {
    const section = document.getElementById('spotter-rewards');
    const rewards = cfg().reporterRewards;
    if (!section || !rewards?.enabled) return;

    const pageTitle = document.getElementById('spotter-rewards-page-title');
    const pageSub = document.getElementById('spotter-rewards-page-subtitle');
    const badge = section.querySelector('.spotter-rewards__badge');
    const body = section.querySelector('.spotter-rewards__body');
    const prizes = section.querySelector('.spotter-rewards__prizes');
    const eligHeading = section.querySelector('.spotter-rewards__eligibility h2');
    const eligBody = section.querySelector('.spotter-rewards__eligibility p');
    const note = section.querySelector('.spotter-rewards__note');

    if (pageTitle) pageTitle.textContent = rewards.heading;
    if (pageSub) pageSub.textContent = rewards.lead;
    if (badge) badge.textContent = rewards.badge;
    if (body) body.textContent = rewards.body;
    if (eligHeading) eligHeading.textContent = rewards.eligibilityHeading;
    if (eligBody) eligBody.textContent = rewards.eligibility;
    if (note) note.textContent = rewards.note;

    if (prizes && rewards.rewards?.length) {
      prizes.innerHTML = rewards.rewards
        .map(
          (r) => `
        <li>
          <span class="material-symbols-outlined" aria-hidden="true">${escapeHtml(r.icon)}</span>
          ${escapeHtml(r.label)}
        </li>`
        )
        .join('');
      triggerStaggerIfParentVisible(prizes);
    }
  }

  function renderProgramCards(container, options = {}) {
    const { includeWatch = true, includeStatic = true, includeSpecies = false } = options;
    const cards = [];

    if (includeSpecies) {
      activePrograms().forEach((p) => {
        cards.push(`
        <a href="${speciesUrl(p.id)}" class="card card-interactive">
          <span class="material-symbols-outlined card-icon">${escapeHtml(p.cardIcon)}</span>
          <h3>${escapeHtml(p.name)}</h3>
          <p>${escapeHtml(p.cardDescription)}</p>
        </a>`);
      });
    }

    if (includeWatch) {
      activePrograms().forEach((p) => {
        cards.push(`
        <a href="${watchUrl(p.id)}" class="card card-interactive">
          <span class="material-symbols-outlined card-icon">shield</span>
          <h3>${escapeHtml(p.watchProjectName)}</h3>
          <p>Watch program for ${escapeHtml(p.region)}.</p>
        </a>`);
      });
    }

    if (includeStatic) {
      const rewardsHref = rewardsPageHref();
      if (rewardsHref) {
        cards.push(`
        <a href="${rewardsHref}" class="card card-interactive">
          <span class="material-symbols-outlined card-icon">emoji_events</span>
          <h3>Spotter rewards</h3>
          <p>Earn thank-you gifts for genuine, accurate sightings.</p>
        </a>`);
      }
      cards.push(`
        <a href="program.html" class="card card-interactive">
          <span class="material-symbols-outlined card-icon">route</span>
          <h3>How it works</h3>
          <p>How Ghoulhunters runs community watch programs.</p>
        </a>
        <a href="who-we-are.html" class="card card-interactive">
          <span class="material-symbols-outlined card-icon">groups</span>
          <h3>Who We Are</h3>
          <p>Meet the Ghoulhunters team.</p>
        </a>
        <a href="blueprint.html" class="card card-interactive">
          <span class="material-symbols-outlined card-icon">account_tree</span>
          <h3>Blueprint &amp; Process</h3>
          <p>Diagrams of how programs work from poster to official report.</p>
        </a>`);
    }

    container.innerHTML = cards.join('');
    container.classList.add('grid-3', 'anim-stagger');
    triggerStaggerIfParentVisible(container);
  }

  function initWhoWeArePage() {
    const site = cfg().site;
    const level = site.schoolYearLevel || '';
    const school = site.schoolName || '';
    const suburb = site.schoolSuburb || '';

    const heroSub = document.getElementById('who-hero-subtitle');
    const about = document.getElementById('who-about-intro');
    const contact = document.getElementById('who-contact');

    if (heroSub && level) {
      heroSub.textContent = `${level} students protecting biodiversity`;
    }
    if (about && school && suburb) {
      about.innerHTML = `<strong>Ghoulhunters</strong> is a <strong>${escapeHtml(level)}</strong> community project from <strong>${escapeHtml(school)}</strong> in <strong>${escapeHtml(suburb)}</strong>. We run invasive species watch programs across our region and help neighbours protect <strong>nature</strong> and <strong>biodiversity</strong> by sharing what to look for and how to report safely.`;
    }
    if (contact && school && suburb) {
      contact.innerHTML = `Contact us through <strong>${escapeHtml(school)}</strong>, ${escapeHtml(suburb)}.`;
    }
  }

  function initSpotterRewardsPage() {
    const rewards = cfg().reporterRewards;
    const section = document.getElementById('spotter-rewards');

    if (!rewards?.enabled) {
      if (section) {
        section.innerHTML =
          '<div class="container prose-wide"><p class="alert-warning">Spotter rewards are not available right now. <a href="index.html">Return home</a>.</p></div>';
      }
      return;
    }

    document.title = `${cfg().site.name} — ${rewards.heading}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && rewards.pageMetaDescription) meta.content = rewards.pageMetaDescription;

    renderSpotterRewards();
    setupScrollReveal();
  }

  async function initHome() {
    const heroSub = document.getElementById('hero-subtitle');
    const heroCta = document.getElementById('hero-cta-primary');
    const invasiveCards = document.getElementById('invasive-species-cards');
    const cards = document.getElementById('program-cards');
    const reportNote = document.getElementById('report-note');
    const rewardsHref = rewardsPageHref();

    if (heroSub) heroSub.textContent = cfg().site.subtitle;
    if (heroCta) {
      heroCta.href = '#invasive-species';
      heroCta.textContent = 'Invasive species';
    }
    const rewardsLink = document.getElementById('hero-rewards-link');
    const introLink = document.getElementById('intro-rewards-link');
    if (rewardsLink) {
      rewardsLink.hidden = !rewardsHref;
      if (rewardsHref) rewardsLink.href = rewardsHref;
    }
    if (introLink && rewardsHref) introLink.href = rewardsHref;
    if (invasiveCards) renderInvasiveSpeciesCards(invasiveCards);
    if (cards) renderProgramCards(cards, { includeWatch: false, includeStatic: true, includeSpecies: false });
    setupScrollReveal();
    if (reportNote) {
      const labels = activePrograms().map((p) => p.reportLabel).join(' or ');
      reportNote.textContent = labels
        ? `Within ${cfg().biosecurity.reportHours} hours of seeing ${labels}:`
        : `Within ${cfg().biosecurity.reportHours} hours of a suspected sighting:`;
    }
  }

  async function initBlueprintPage() {
    await loadPartial('blueprint-flow-mount', 'partials/blueprint-flow.html');
    setupScrollReveal();
  }

  async function initProgramsPage() {
    const activeList = document.getElementById('programs-active');
    const soonList = document.getElementById('programs-coming-soon');
    if (!activeList) return;

    activeList.innerHTML = activePrograms()
      .map(
        (p) => `
      <article class="card program-card program-card--with-thumb">
        ${programThumbHtml(p)}
        <div class="program-card__body">
          <h3>${escapeHtml(p.name)}</h3>
          <p class="subtitle"><em>${escapeHtml(p.scientificName)}</em></p>
          <p>${escapeHtml(p.cardDescription)}</p>
          <p><strong>Region:</strong> ${escapeHtml(p.region)}</p>
          <div class="btn-group">
            <a href="${speciesUrl(p.id)}" class="btn btn-primary">Species guide</a>
            <a href="${watchUrl(p.id)}" class="btn btn-outline">${escapeHtml(p.watchProjectName)}</a>
          </div>
        </div>
      </article>`
      )
      .join('');

    const coming = cfg().programs.filter((p) => p.status === 'coming-soon');
    const soonSection = document.getElementById('programs-coming-soon-section');
    if (soonSection) soonSection.style.display = coming.length ? '' : 'none';
    if (soonList) {
      if (coming.length) {
        soonList.innerHTML = coming
          .map(
            (p) => `
          <article class="card card--muted">
            <h3>${escapeHtml(p.name)}</h3>
            <p class="placeholder-note">Watch program coming soon</p>
          </article>`
          )
          .join('');
      }
    }
    setupScrollReveal();
  }

  async function initSpeciesPage() {
    const id = queryParam('species');
    const program = id ? getProgram(id) : null;
    const main = document.getElementById('species-content');
    if (!program || program.status !== 'active') {
      if (main) {
        main.innerHTML =
          '<p class="alert-warning">Species not found. <a href="programs.html">View all programs</a>.</p>';
      }
      return;
    }

    document.title = `${cfg().site.name} — ${program.name}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = program.metaDescription;

    const heroTitle = document.getElementById('species-hero-title');
    const heroSub = document.getElementById('species-hero-subtitle');
    const alertEl = document.getElementById('species-alert');
    const actions = document.getElementById('species-actions');

    const storyMount = document.getElementById('species-hero-story-mount');
    const pageHero = document.querySelector('.page-hero--with-story');
    if (storyMount && program.heroStory) {
      await loadPartial('species-hero-story-mount', program.heroStory);
      storyMount.hidden = false;
      if (pageHero) pageHero.classList.add('page-hero--has-story');
    } else if (storyMount) {
      storyMount.hidden = true;
      storyMount.innerHTML = '';
      if (pageHero) pageHero.classList.remove('page-hero--has-story');
    }

    if (heroTitle) heroTitle.textContent = program.name;
    if (heroSub) {
      heroSub.innerHTML = `<em>${escapeHtml(program.scientificName)}</em> — ${escapeHtml(program.aliases)}`;
    }
    if (alertEl) {
      const bio = cfg().biosecurity;
      alertEl.innerHTML = `<strong>Do not touch or move</strong> ${escapeHtml(program.doNotMoveDetail)} Report any sightings to ${escapeHtml(bio.authority)} within <strong>${bio.reportHours} hours</strong>: <strong>${escapeHtml(bio.phone)}</strong>.`;
    }
    if (actions) {
      actions.innerHTML =
        (program.externalLinks || [])
          .map((l, i) => {
            const cls = l.primary ? 'btn btn-river' : 'btn btn-outline';
            return `<a href="${l.url}" class="${cls}" target="_blank" rel="noopener">${escapeHtml(l.label)}</a>`;
          })
          .join('') +
        `<a href="${watchUrl(program.id)}" class="btn btn-outline">${escapeHtml(program.watchProjectName)}</a>` +
        `<a href="programs.html" class="btn btn-outline">All programs</a>`;
    }

    if (main) {
      await loadContent(program.speciesContent, main);
      setupScrollReveal();
    }
  }

  async function initWatchPage() {
    const id = queryParam('program');
    const program = id ? getProgram(id) : null;
    const main = document.getElementById('watch-content');
    if (!program || program.status !== 'active') {
      if (main) {
        main.innerHTML =
          '<p class="alert-warning">Program not found. <a href="programs.html">View all programs</a>.</p>';
      }
      return;
    }

    document.title = `${cfg().site.name} — ${program.watchProjectName}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = program.watchMetaDescription;

    const heroTitle = document.getElementById('watch-hero-title');
    const heroSub = document.getElementById('watch-hero-subtitle');
    const alertEl = document.getElementById('watch-alert');
    const actions = document.getElementById('watch-actions');

    if (heroTitle) heroTitle.textContent = program.watchProjectName;
    if (heroSub) heroSub.textContent = program.watchSubtitle;
    if (alertEl) {
      alertEl.innerHTML = `<strong>Do not touch or move</strong> ${escapeHtml(program.name.toLowerCase())}. Moving it spreads the pest.`;
    }
    if (actions) {
      actions.innerHTML = `
        <a href="program.html" class="btn btn-primary">How it works</a>
        <a href="blueprint.html" class="btn btn-river">Blueprint</a>
        <a href="${speciesUrl(program.id)}" class="btn btn-outline">Species guide</a>`;
    }

    if (main) {
      await loadContent(program.watchContent, main);
      setupScrollReveal();
    }
  }

  function handleLegacyRedirect() {
    const page = window.location.pathname.split('/').pop() || '';
    const map = {
      'asian-gold-clam.html': { type: 'species', id: 'freshwater-gold-clam' },
      'eradication-project.html': { type: 'watch', id: 'freshwater-gold-clam' },
    };
    const target = map[page];
    if (!target) return false;
    const url =
      target.type === 'species'
        ? speciesUrl(target.id)
        : watchUrl(target.id);
    window.location.replace(url);
    return true;
  }

  async function init() {
    if (handleLegacyRedirect()) return;

    document.documentElement.classList.remove('no-js');

    const speciesId = queryParam('species');
    const programId = queryParam('program');
    const contextProgram = getProgram(speciesId || programId);

    renderHeader(contextProgram || null);
    renderFooter();

    const page = document.body.dataset.page;
    if (page === 'home') await initHome();
    if (page === 'programs') await initProgramsPage();
    if (page === 'species') await initSpeciesPage();
    if (page === 'watch') await initWatchPage();
    if (page === 'who-we-are') initWhoWeArePage();
    if (page === 'spotter-rewards') initSpotterRewardsPage();
    if (page === 'blueprint') await initBlueprintPage();

    highlightCurrentPage();
    setupMobileNav();
    setupScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
