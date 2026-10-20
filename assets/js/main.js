(function () {
  "use strict";

  const S = window.SITE;
  const root = document.documentElement;
  const page = document.body.dataset.page;

  // ---------- Storage (safe in private mode / file://) ----------
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  let lang = store.get("kn-lang") === "ar" ? "ar" : "en";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Remembered UI state, so it survives a language switch
  const state = { expFilter: "all", expOpen: new Set(["pm"]), projFilter: "all", skillTab: 0 };

  // ---------- Helpers ----------
  const monthsBetween = (start, end) => {
    const [sy, sm] = start.split("-").map(Number);
    const now = new Date();
    const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
    return (ey - sy) * 12 + (em - sm);
  };
  const years = Math.floor(monthsBetween(S.profile.careerStart) / 12);
  const pmYears = Math.floor(monthsBetween(S.profile.pmStart) / 12);

  const fill = (s) => String(s)
    .replace(/\{years\}/g, years)
    .replace(/\{pmYears\}/g, pmYears)
    .replace(/\{year\}/g, new Date().getFullYear());

  const t = (v) => {
    if (v == null) return "";
    if (typeof v === "object" && "en" in v) return fill(v[lang] != null ? v[lang] : v.en);
    return fill(v);
  };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const fmtMonth = (ym) => {
    if (!ym) return t(S.ui.present);
    const [y, m] = ym.split("-").map(Number);
    const locale = lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB";
    return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(new Date(y, m - 1, 1));
  };

  const fmtDuration = (start, end) => {
    // Count both the start and end month, the same way LinkedIn does
    const total = Math.max(1, monthsBetween(start, end) + 1);
    const y = Math.floor(total / 12), m = total % 12;
    const parts = [];
    if (lang === "ar") {
      const ay = (n) => n === 1 ? "سنة" : n === 2 ? "سنتان" : n <= 10 ? `${n} سنوات` : `${n} سنة`;
      const am = (n) => n === 1 ? "شهر" : n === 2 ? "شهران" : n <= 10 ? `${n} أشهر` : `${n} شهرًا`;
      if (y) parts.push(ay(y));
      if (m) parts.push(am(m));
      return parts.join(" و");
    }
    if (y) parts.push(`${y} ${y === 1 ? "yr" : "yrs"}`);
    if (m) parts.push(`${m} ${m === 1 ? "mo" : "mos"}`);
    return parts.join(" ");
  };

  const tagLabel = (k) => t(S.ui.tags[k] || { en: k, ar: k });

  // ---------- Icons (Feather-style, inline) ----------
  const ICONS = {
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    "bar-chart": '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    chevron: '<polyline points="6 9 12 15 18 9"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'
  };
  const icon = (name, cls = "") =>
    `<svg class="icon icon-${name} ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  // ---------- Theme & language ----------
  function currentTheme() {
    return root.dataset.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function applyLang() {
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    const pageTitle = page === "home" ? t(S.profile.headline).split("|")[0].trim() : t(S.ui.nav[page]);
    document.title = `${pageTitle} | ${t(S.profile.name)}`;
  }

  // ---------- Header & footer ----------
  function renderHeader() {
    const items = ["home", "about", "experience", "projects", "contact"];
    const links = items.map((k) =>
      `<li><a href="${k === "home" ? "index" : k}.html" class="nav-link${k === page ? " active" : ""}"${k === page ? ' aria-current="page"' : ""}>${t(S.ui.nav[k])}</a></li>`
    ).join("");
    const theme = currentTheme();
    document.getElementById("app-header").innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <a href="index.html" class="brand" aria-label="${esc(t(S.profile.name))}">
            <span class="brand-mark">KN</span>
            <span class="brand-name">${t(S.profile.name)}</span>
          </a>
          <nav class="main-nav" id="main-nav" aria-label="Main">
            <ul>${links}</ul>
          </nav>
          <div class="header-actions">
            <button class="btn-icon lang-toggle" id="lang-toggle" type="button" aria-label="${esc(t(S.ui.langLabel))}">${t(S.ui.langButton)}</button>
            <button class="btn-icon" id="theme-toggle" type="button" aria-label="${esc(t(S.ui.themeLabel))}">${icon(theme === "dark" ? "sun" : "moon")}</button>
            <button class="btn-icon menu-toggle" id="menu-toggle" type="button" aria-label="${esc(t(S.ui.menuLabel))}" aria-expanded="false" aria-controls="main-nav">${icon("menu")}</button>
          </div>
        </div>
      </header>`;

    document.getElementById("lang-toggle").addEventListener("click", () => {
      lang = lang === "en" ? "ar" : "en";
      store.set("kn-lang", lang);
      renderAll();
    });
    document.getElementById("theme-toggle").addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      store.set("kn-theme", next);
      document.getElementById("theme-toggle").innerHTML = icon(next === "dark" ? "sun" : "moon");
    });
    const menuBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.innerHTML = icon(open ? "x" : "menu");
    });
  }

  function renderFooter() {
    document.getElementById("app-footer").innerHTML = `
      <footer class="site-footer">
        <div class="container footer-inner">
          <p>${t(S.ui.footer)}</p>
          <div class="footer-links">
            <a href="${S.profile.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin")}</a>
            <a href="mailto:${S.profile.email}" aria-label="Email">${icon("mail")}</a>
          </div>
        </div>
      </footer>`;
  }

  const pageHero = (title, subtitle) => `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow reveal">${t(S.profile.name)}</p>
        <h1 class="reveal">${t(title)}</h1>
        <p class="lead reveal">${t(subtitle)}</p>
      </div>
    </section>`;

  // ---------- Home ----------
  function renderHome(main) {
    const h = S.home;
    const stats = h.stats.map((s) => `
      <div class="stat reveal">
        <span class="stat-value"><span class="counter" data-target="${t(s.value)}">0</span>${s.suffix}</span>
        <span class="stat-label">${t(s.label)}</span>
      </div>`).join("");
    const what = h.what.map((w) => `
      <article class="card feature reveal">
        <span class="feature-icon">${icon(w.icon)}</span>
        <h3>${t(w.title)}</h3>
        <p>${t(w.text)}</p>
      </article>`).join("");

    main.innerHTML = `
      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-text">
            <p class="eyebrow reveal">${t(h.eyebrow)}</p>
            <h1 class="hero-name reveal">${t(S.profile.name)}</h1>
            <p class="hero-role reveal">${t(S.profile.role)}</p>
            <p class="hero-intro reveal">${t(h.intro)}</p>
            <div class="btn-row reveal">
              <a class="btn btn-primary" href="experience.html">${t(h.viewExperience)} ${icon("arrow", "flip-rtl")}</a>
              ${S.profile.cv ? `<a class="btn btn-outline" href="${S.profile.cv}" download>${icon("download")} ${t(S.ui.downloadCv)}</a>` : ""}
              <a class="btn btn-ghost" href="${S.profile.linkedin}" target="_blank" rel="noopener">${icon("linkedin")} ${t(S.ui.linkedin)}</a>
            </div>
            <p class="hero-location reveal">${icon("pin")} ${t(S.profile.location)}</p>
          </div>
          <div class="hero-photo reveal">
            <div class="photo-frame">
              <img src="${S.profile.photo}" alt="${esc(t(S.profile.name))}" width="420" height="420">
            </div>
            <div class="photo-badge">${icon("award")} MBA · BE</div>
          </div>
        </div>
      </section>

      <section class="section stats-section">
        <div class="container stats">${stats}</div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title reveal">${t(h.whatTitle)}</h2>
          <div class="grid-3">${what}</div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="cta reveal">
            <div>
              <h2>${t(h.ctaTitle)}</h2>
              <p>${t(h.ctaText)}</p>
            </div>
            <a class="btn btn-primary" href="contact.html">${icon("mail")} ${t(h.ctaButton)}</a>
          </div>
        </div>
      </section>`;
    startCounters();
  }

  function startCounters() {
    const counters = document.querySelectorAll(".counter");
    const run = (el) => {
      const target = parseInt(el.dataset.target, 10) || 0;
      if (reduceMotion) { el.textContent = target; return; }
      const dur = 1200, t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (!("IntersectionObserver" in window)) { counters.forEach(run); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach((c) => io.observe(c));
  }

  // ---------- About ----------
  function renderAbout(main) {
    const a = S.about;
    const story = a.story.map((p) => `<p>${t(p)}</p>`).join("");
    const facts = a.facts.map((f) => `
      <li><span class="fact-icon">${icon(f.icon)}</span><span><small>${t(f.label)}</small>${t(f.value)}</span></li>`).join("");
    const tabs = a.skills.map((g, i) =>
      `<button type="button" role="tab" class="tab${i === state.skillTab ? " active" : ""}" aria-selected="${i === state.skillTab}" data-tab="${i}">${t(g.name)}</button>`).join("");
    const edu = a.education.map((e) => `
      <article class="card edu reveal">
        <span class="feature-icon">${icon("award")}</span>
        <div>
          <h3>${t(e.degree)}</h3>
          <p class="muted">${t(e.field)}</p>
          <p>${t(e.school)}</p>
          <span class="pill">${e.years}</span>
        </div>
      </article>`).join("");
    const langs = a.languages.map((l) => `
      <li class="lang-item">
        <span class="lang-name">${t(l.name)}</span>
        <span class="dots" aria-label="${l.dots}/5">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= l.dots ? "on" : ""}"></i>`).join("")}</span>
        <span class="muted">${t(l.level)}</span>
      </li>`).join("");

    main.innerHTML = `
      ${pageHero(a.title, a.subtitle)}
      <section class="section">
        <div class="container about-grid">
          <div class="reveal">
            <h2 class="section-title">${t(a.storyTitle)}</h2>
            <div class="prose">${story}</div>
          </div>
          <aside class="card facts reveal">
            <img class="facts-photo" src="${S.profile.photo}" alt="${esc(t(S.profile.name))}" width="120" height="120">
            <ul>${facts}</ul>
            ${S.profile.cv ? `<a class="btn btn-outline btn-block" href="${S.profile.cv}" download>${icon("download")} ${t(S.ui.downloadCv)}</a>` : ""}
          </aside>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <h2 class="section-title reveal">${t(a.skillsTitle)}</h2>
          <div class="tabs reveal" role="tablist">${tabs}</div>
          <div class="chips skill-chips" id="skill-chips" role="tabpanel"></div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title reveal">${t(a.educationTitle)}</h2>
          <div class="grid-2">${edu}</div>
        </div>
      </section>

      <section class="section alt">
        <div class="container">
          <h2 class="section-title reveal">${t(a.languagesTitle)}</h2>
          <ul class="card lang-list reveal">${langs}</ul>
        </div>
      </section>`;

    const showSkills = () => {
      const chips = document.getElementById("skill-chips");
      chips.innerHTML = a.skills[state.skillTab].items
        .map((s, i) => `<span class="chip pop" style="animation-delay:${i * 60}ms">${t(s)}</span>`).join("");
    };
    main.querySelectorAll(".tab").forEach((btn) => btn.addEventListener("click", () => {
      state.skillTab = Number(btn.dataset.tab);
      main.querySelectorAll(".tab").forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", String(on));
      });
      showSkills();
    }));
    showSkills();
  }

  // ---------- Experience ----------
  function renderExperience(main) {
    const p = S.experiencePage;
    const items = S.experience;
    const allTags = [...new Set(items.flatMap((e) => e.tags))];
    const total = items.reduce((sum, e) => sum + Math.max(1, monthsBetween(e.start, e.end)), 0);

    const glance = items.slice().reverse().map((e) => {
      const w = (Math.max(1, monthsBetween(e.start, e.end)) / total) * 100;
      return `<button type="button" class="seg seg-${e.id}" style="flex-basis:${w}%" data-goto="${e.id}" title="${esc(t(e.role))}">
        <span class="seg-label">${t(e.role)}</span></button>`;
    }).join("");
    const legend = items.slice().reverse().map((e) =>
      `<li><i class="seg-${e.id}"></i>${t(e.role)} <span class="muted">· ${e.start.slice(0, 4)}</span></li>`).join("");

    const filters = ["all", ...allTags].map((k) =>
      `<button type="button" class="chip chip-btn${state.expFilter === k ? " active" : ""}" data-filter="${k}" aria-pressed="${state.expFilter === k}">${k === "all" ? t(S.ui.all) : tagLabel(k)}</button>`).join("");

    const timeline = items.map((e) => {
      const open = state.expOpen.has(e.id);
      const pts = e.points.length
        ? `<h4>${t(p.keyPoints)}</h4><ul class="ticks">${e.points.map((x) => `<li>${t(x)}</li>`).join("")}</ul>` : "";
      return `
        <li class="tl-item reveal" id="role-${e.id}" data-tags="${e.tags.join(" ")}">
          <span class="tl-dot"></span>
          <article class="card tl-card${open ? " open" : ""}">
            <button type="button" class="tl-head" aria-expanded="${open}" aria-controls="body-${e.id}">
              <span class="tl-title">
                <span class="tl-role">${t(e.role)}</span>
                <span class="tl-company">${t(e.company)} · ${t(e.location)}</span>
              </span>
              <span class="tl-meta">
                <span class="pill">${fmtMonth(e.start)} – ${fmtMonth(e.end)}</span>
                <span class="muted tl-dur">${fmtDuration(e.start, e.end)}</span>
              </span>
              ${icon("chevron", "tl-chevron")}
            </button>
            <div class="tl-body" id="body-${e.id}">
              <div class="tl-body-inner">
                <p>${t(e.summary)}</p>
                ${pts}
                <div class="chips">${e.tags.map((k) => `<span class="chip small" data-tag="${k}">${tagLabel(k)}</span>`).join("")}</div>
              </div>
            </div>
          </article>
        </li>`;
    }).join("");

    main.innerHTML = `
      ${pageHero(p.title, p.subtitle)}
      <section class="section">
        <div class="container">
          <h2 class="section-title small reveal">${t(p.glance)}</h2>
          <div class="glance reveal" aria-hidden="false">${glance}</div>
          <ul class="glance-legend reveal">${legend}</ul>
        </div>
      </section>
      <section class="section pt-0">
        <div class="container">
          <div class="toolbar reveal">
            <span class="toolbar-label">${t(p.filter)}</span>
            <div class="chips" id="exp-filters">${filters}</div>
            <button type="button" class="btn btn-ghost btn-sm" id="toggle-all"></button>
          </div>
          <ol class="timeline" id="timeline">${timeline}</ol>
          <p class="empty muted" id="exp-empty" hidden>${t(p.empty)}</p>
        </div>
      </section>`;

    const toggleAllBtn = document.getElementById("toggle-all");
    const updateToggleAll = () => {
      const allOpen = items.every((e) => state.expOpen.has(e.id));
      toggleAllBtn.textContent = allOpen ? t(p.collapseAll) : t(p.expandAll);
    };
    const setOpen = (id, open) => {
      const card = document.querySelector(`#role-${id} .tl-card`);
      card.classList.toggle("open", open);
      card.querySelector(".tl-head").setAttribute("aria-expanded", String(open));
      open ? state.expOpen.add(id) : state.expOpen.delete(id);
    };

    main.querySelectorAll(".tl-head").forEach((head) => head.addEventListener("click", () => {
      const id = head.closest(".tl-item").id.replace("role-", "");
      setOpen(id, !state.expOpen.has(id));
      updateToggleAll();
    }));
    toggleAllBtn.addEventListener("click", () => {
      const open = !items.every((e) => state.expOpen.has(e.id));
      items.forEach((e) => setOpen(e.id, open));
      updateToggleAll();
    });

    const applyFilter = () => {
      let shown = 0;
      main.querySelectorAll(".tl-item").forEach((li) => {
        const match = state.expFilter === "all" || li.dataset.tags.split(" ").includes(state.expFilter);
        li.hidden = !match;
        if (match) shown++;
        li.querySelectorAll(".chip[data-tag]").forEach((c) => c.classList.toggle("hit", c.dataset.tag === state.expFilter));
      });
      document.getElementById("exp-empty").hidden = shown > 0;
      main.querySelectorAll("#exp-filters .chip-btn").forEach((b) => {
        const on = b.dataset.filter === state.expFilter;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", String(on));
      });
    };
    main.querySelectorAll("#exp-filters .chip-btn").forEach((b) => b.addEventListener("click", () => {
      state.expFilter = b.dataset.filter;
      applyFilter();
    }));

    main.querySelectorAll(".seg").forEach((seg) => seg.addEventListener("click", () => {
      const id = seg.dataset.goto;
      state.expFilter = "all";
      applyFilter();
      setOpen(id, true);
      updateToggleAll();
      const el = document.getElementById(`role-${id}`);
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      el.classList.add("flash");
      setTimeout(() => el.classList.remove("flash"), 1400);
    }));

    applyFilter();
    updateToggleAll();
  }

  // ---------- Projects ----------
  function renderProjects(main) {
    const p = S.projectsPage;
    const cats = ["all", ...new Set(S.projects.map((x) => x.category))];
    const filters = cats.map((k) =>
      `<button type="button" class="chip chip-btn${state.projFilter === k ? " active" : ""}" data-filter="${k}" aria-pressed="${state.projFilter === k}">${k === "all" ? t(S.ui.all) : t(p.categories[k])}</button>`).join("");

    const cards = S.projects.map((x) => `
      <article class="card project reveal" data-cat="${x.category}">
        <div class="project-top">
          <span class="feature-icon">${icon(x.icon)}</span>
          <span class="pill cat-${x.category}">${t(p.categories[x.category])}</span>
        </div>
        <h3>${t(x.title)}</h3>
        <p>${t(x.summary)}</p>
        <div class="chips">${x.tags.map((k) => `<span class="chip small">${tagLabel(k)}</span>`).join("")}</div>
        <button type="button" class="link-btn" data-open="${x.id}">${t(p.readMore)} ${icon("arrow", "flip-rtl")}</button>
      </article>`).join("");

    main.innerHTML = `
      ${pageHero(p.title, p.subtitle)}
      <section class="section">
        <div class="container">
          <div class="toolbar reveal">
            <div class="chips" id="proj-filters">${filters}</div>
          </div>
          <div class="grid-3 projects-grid" id="projects-grid">${cards}</div>
          <p class="muted small-note reveal">${t(p.note)}</p>
        </div>
      </section>
      <div class="modal" id="modal" hidden>
        <div class="modal-backdrop" data-close></div>
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"></div>
      </div>`;

    const applyFilter = () => {
      main.querySelectorAll(".project").forEach((c) => {
        const show = state.projFilter === "all" || c.dataset.cat === state.projFilter;
        c.hidden = !show;
        if (show && !reduceMotion) { c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop"); }
      });
      main.querySelectorAll("#proj-filters .chip-btn").forEach((b) => {
        const on = b.dataset.filter === state.projFilter;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", String(on));
      });
    };
    main.querySelectorAll("#proj-filters .chip-btn").forEach((b) => b.addEventListener("click", () => {
      state.projFilter = b.dataset.filter;
      applyFilter();
    }));
    applyFilter();

    const modal = document.getElementById("modal");
    const dialog = modal.querySelector(".modal-dialog");
    let lastFocus = null;
    const close = () => {
      modal.hidden = true;
      document.body.classList.remove("no-scroll");
      if (lastFocus) lastFocus.focus();
    };
    const open = (id, trigger) => {
      const x = S.projects.find((pr) => pr.id === id);
      lastFocus = trigger;
      dialog.innerHTML = `
        <button type="button" class="btn-icon modal-close" data-close aria-label="${esc(t(p.close))}">${icon("x")}</button>
        <div class="modal-head">
          <span class="feature-icon">${icon(x.icon)}</span>
          <div>
            <span class="pill cat-${x.category}">${t(p.categories[x.category])}</span>
            <h2 id="modal-title">${t(x.title)}</h2>
          </div>
        </div>
        <h4>${t(p.challenge)}</h4><p>${t(x.challenge)}</p>
        <h4>${t(p.did)}</h4><ul class="ticks">${x.did.map((d) => `<li>${t(d)}</li>`).join("")}</ul>
        <h4>${t(p.outcome)}</h4><p class="outcome">${t(x.outcome)}</p>
        <h4>${t(p.skillsUsed)}</h4>
        <div class="chips">${x.tags.map((k) => `<span class="chip small">${tagLabel(k)}</span>`).join("")}</div>`;
      modal.hidden = false;
      document.body.classList.add("no-scroll");
      dialog.focus();
    };
    main.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => open(b.dataset.open, b)));
    modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) close(); });
    document.onkeydown = (e) => { if (e.key === "Escape" && !modal.hidden) close(); };
  }

  // ---------- Contact ----------
  function renderContact(main) {
    const c = S.contactPage;
    main.innerHTML = `
      ${pageHero(c.title, c.subtitle)}
      <section class="section">
        <div class="container contact-grid">
          <div class="contact-cards">
            <div class="card contact-card reveal">
              <span class="feature-icon">${icon("mail")}</span>
              <div class="contact-body">
                <small>${t(c.email)}</small>
                <a href="mailto:${S.profile.email}" class="contact-value" dir="ltr">${S.profile.email}</a>
              </div>
              <button type="button" class="btn-icon" id="copy-email" aria-label="${esc(t(c.copy))}" title="${esc(t(c.copy))}">${icon("copy")}</button>
            </div>
            <a class="card contact-card linkish reveal" href="${S.profile.linkedin}" target="_blank" rel="noopener">
              <span class="feature-icon">${icon("linkedin")}</span>
              <div class="contact-body">
                <small>${t(S.ui.linkedin)}</small>
                <span class="contact-value">${t(c.linkedinText)}</span>
              </div>
              ${icon("arrow", "flip-rtl")}
            </a>
            <div class="card contact-card reveal">
              <span class="feature-icon">${icon("pin")}</span>
              <div class="contact-body">
                <small>${t(c.location)}</small>
                <span class="contact-value">${t(S.profile.location)}</span>
              </div>
            </div>
          </div>
          <form class="card contact-form reveal" id="contact-form" novalidate>
            <h2>${t(c.formTitle)}</h2>
            <label>${t(c.name)}<input name="name" type="text" autocomplete="name" required></label>
            <label>${t(c.subject)}<input name="subject" type="text" required></label>
            <label>${t(c.message)}<textarea name="message" rows="6" required></textarea></label>
            <p class="form-error" id="form-error" role="alert" hidden>${t(c.error)}</p>
            <button class="btn btn-primary" type="submit">${icon("send")} ${t(c.send)}</button>
            <p class="muted small-note">${t(c.note)}</p>
          </form>
        </div>
      </section>
      <div class="toast" id="toast" role="status" aria-live="polite"></div>`;

    document.getElementById("copy-email").addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(S.profile.email); toast(t(c.copied)); }
      catch (e) { window.location.href = `mailto:${S.profile.email}`; }
    });

    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = e.target;
      const name = f.name.value.trim(), subject = f.subject.value.trim(), message = f.message.value.trim();
      const err = document.getElementById("form-error");
      if (!name || !subject || !message) { err.hidden = false; return; }
      err.hidden = true;
      const body = `${message}\n\n${t(c.fromLabel)}: ${name}`;
      window.location.href = `mailto:${S.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  function toast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2000);
  }

  // ---------- Scroll reveal ----------
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  // ---------- Boot ----------
  const pages = { home: renderHome, about: renderAbout, experience: renderExperience, projects: renderProjects, contact: renderContact };

  function renderAll() {
    applyLang();
    renderHeader();
    renderFooter();
    const main = document.getElementById("main");
    (pages[page] || renderHome)(main);
    setupReveal();
  }

  renderAll();
})();
