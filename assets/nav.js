// Shared chrome + motion for all Astral Studios pages.
// Include in every page with: <script src="assets/nav.js"></script>
// Set the active nav item by adding data-page="pagename" to your <body> tag.

document.documentElement.classList.add('js');

/* -------------------------------------------------------------------------
   Navigation
   ------------------------------------------------------------------------- */
(function () {
  const NAV_HTML = `
<div class="sky" aria-hidden="true"><i></i><i></i><i></i></div>

<nav>
  <a class="nav-logo" href="index.html">
    <img src="assets/logo.png" alt="" width="44" height="46">
    <span class="nav-brand-copy">
      <strong>Astral Studios</strong>
      <small>Independent creator studio</small>
    </span>
  </a>
  <div class="nav-primary" role="navigation" aria-label="Primary navigation">
    <a href="index.html" data-nav="home">Studio</a>
    <a href="index.html#games">Games &amp; Apps</a>
    <a href="index.html#services">Services</a>
    <a href="portfolio.html" data-nav="portfolio">Work</a>
    <a href="contact.html" data-nav="contact">Contact</a>
  </div>
  <div class="nav-actions">
    <a class="nav-call" href="tel:+18884124692" aria-label="Call Astral Studios at (888) 412-4692">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"/></svg>
      <span>(888) 412-4692</span>
    </a>
    <span class="nav-menu-caption">Menu</span>
    <button class="ham nav-menu-btn" id="ham-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mob">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="nav-scrim" id="nav-scrim"></div>
<div class="nav-panel" id="mob" aria-hidden="true">
  <div class="nav-panel-head">
    <span>Navigation</span>
    <a href="tel:+18884124692">(888) 412-4692</a>
  </div>
  <div class="nav-panel-grid">
    <div class="nav-panel-section">
      <div class="nav-panel-kicker">Studio</div>
      <a class="nav-panel-link" href="index.html" data-nav="home">
        <span>Home</span><small>Main site</small>
      </a>
      <a class="nav-panel-link" href="portfolio.html" data-nav="portfolio">
        <span>Portfolio</span><small>Selected work</small>
      </a>
      <a class="nav-panel-link" href="news.html" data-nav="news">
        <span>News</span><small>Updates</small>
      </a>
    </div>
    <div class="nav-panel-section">
      <div class="nav-panel-kicker">Games &amp; Apps</div>
      <a class="nav-panel-link" href="astral.html" data-nav="astral">
        <span>Astral Projection Game</span><small>Open-world sandbox</small>
      </a>
      <a class="nav-panel-link" href="second-brain-notes.html" data-nav="second-brain-notes">
        <span>Second Brain Notes</span><small>Notes app</small>
      </a>
      <a class="nav-panel-link" href="drunken-decks.html" data-nav="drunken-decks">
        <span>Drunken Decks</span><small>Card game</small>
      </a>
    </div>
    <div class="nav-panel-section">
      <div class="nav-panel-kicker">Services</div>
      <a class="nav-panel-link" href="portfolio.html?section=games">
        <span>Remote Game Development</span><small>Unity, mobile &amp; VR</small>
      </a>
      <a class="nav-panel-link" href="portfolio.html?section=websites">
        <span>Web Development</span><small>Sites &amp; web apps</small>
      </a>
      <a class="nav-panel-link" href="portfolio.html?section=video">
        <span>Video Editing</span><small>Portfolio coming soon</small>
      </a>
    </div>
    <div class="nav-panel-section">
      <div class="nav-panel-kicker">Support</div>
      <a class="nav-panel-link" href="contact.html" data-nav="contact">
        <span>Contact</span><small>Start a conversation</small>
      </a>
      <a class="nav-panel-link" href="report-bug.html" data-nav="report-bug">
        <span>Report A Bug</span><small>Help us fix it</small>
      </a>
      <a class="nav-panel-link" href="privacy.html" data-nav="privacy">
        <span>Privacy Policy</span><small>Data details</small>
      </a>
      <a class="nav-panel-link" href="delete-data.html" data-nav="delete-data">
        <span>Delete My Data</span><small>Account requests</small>
      </a>
    </div>
  </div>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('[data-nav="' + page + '"]').forEach(function (el) {
      el.classList.add('active');
    });
  }

  const menuButton = document.getElementById('ham-btn');
  const menu = document.getElementById('mob');
  const menuScrim = document.getElementById('nav-scrim');

  function setMenu(open) {
    menu.classList.toggle('open', open);
    menuScrim.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuButton.classList.toggle('active', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  menuButton.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  menuScrim.addEventListener('click', function () {
    setMenu(false);
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('nav') && !event.target.closest('#mob')) setMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });

  // Condense the bar once the page has scrolled past the hero edge.
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      document.body.classList.toggle('scrolled', window.scrollY > 24);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* -------------------------------------------------------------------------
   Motion — scroll reveal and pointer spotlight
   ------------------------------------------------------------------------- */
(function () {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    const targets = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

    if (reduced) {
      targets.forEach(function (el) { el.classList.add('in'); });
    } else {
      // Stagger siblings so grids cascade instead of popping in together.
      targets.forEach(function (el, index) {
        if (el.style.getPropertyValue('--d')) return;
        const siblings = el.parentElement
          ? Array.prototype.filter.call(el.parentElement.children, function (child) {
              return child.hasAttribute('data-reveal');
            })
          : [];
        const position = siblings.indexOf(el);
        const step = position > -1 ? position : index;
        el.style.setProperty('--d', Math.min(step, 6) * 70 + 'ms');
      });

      // Plain geometry check rather than IntersectionObserver: it runs the same
      // whether or not the tab is being composited, so nothing can stay stuck
      // at opacity 0.
      let pending = targets.slice();
      let queued = false;

      function reveal() {
        queued = false;
        const limit = window.innerHeight * 0.92;
        pending = pending.filter(function (el) {
          if (el.getBoundingClientRect().top > limit) return true;
          el.classList.add('in');
          return false;
        });
        if (!pending.length) teardown();
      }

      function schedule() {
        if (queued || !pending.length) return;
        queued = true;
        requestAnimationFrame(reveal);
      }

      function teardown() {
        window.removeEventListener('scroll', schedule);
        window.removeEventListener('resize', schedule);
      }

      window.addEventListener('scroll', schedule, { passive: true });
      window.addEventListener('resize', schedule);
      window.addEventListener('load', schedule);
      reveal();
    }

    // Cursor-following highlight on cards. Pointer only — skipped on touch.
    if (reduced || !window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.spotlight').forEach(function (card) {
      card.addEventListener('pointermove', function (event) {
        const box = card.getBoundingClientRect();
        card.style.setProperty('--mx', (event.clientX - box.left) + 'px');
        card.style.setProperty('--my', (event.clientY - box.top) + 'px');
      });
    });
  });
})();

/* -------------------------------------------------------------------------
   Shared AI assistant widget (bottom right, every page)
   ------------------------------------------------------------------------- */
(function () {
  if (document.querySelector('elevenlabs-convai')) return;

  const widget = document.createElement('elevenlabs-convai');
  widget.setAttribute('agent-id', 'agent_6101kw5y8gahfh9v6405s0swkm1e');
  widget.setAttribute('action-text', 'Ask Astral AI');
  widget.setAttribute('avatar-orb-color-1', '#8b6cff');
  widget.setAttribute('avatar-orb-color-2', '#3ddcff');
  widget.setAttribute('variant', 'expandable');
  document.body.appendChild(widget);

  const widgetScriptSrc = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
  if (!document.querySelector('script[src="' + widgetScriptSrc + '"]')) {
    const widgetScript = document.createElement('script');
    widgetScript.src = widgetScriptSrc;
    widgetScript.async = true;
    widgetScript.type = 'text/javascript';
    document.body.appendChild(widgetScript);
  }
})();
