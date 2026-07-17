// Shared navigation for all Astral Studios pages.
// Include in every page with: <script src="assets/nav.js"></script>
// Set the active nav item by adding data-page="pagename" to your <body> tag.

(function () {
  const NAV_HTML = `
<nav>
  <a class="nav-logo" href="index.html">
    <img src="assets/logo.png" alt="Astral Studios" style="height:34px;width:auto;display:block;">
  </a>
  <div class="nav-actions">
    <a class="nav-cta" href="https://tidycal.com/astralstudios/schedule" target="_blank" rel="noopener">
      Schedule Meeting
    </a>
    <button class="ham nav-menu-btn" id="ham-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mob">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="nav-panel" id="mob" aria-hidden="true">
  <div class="nav-panel-head">
    <span>Navigation</span>
    <a href="https://tidycal.com/astralstudios/schedule" target="_blank" rel="noopener">Schedule</a>
  </div>
  <div class="nav-panel-grid">
    <div class="nav-panel-section">
      <div class="nav-panel-kicker">Studio</div>
      <a class="nav-panel-link" href="index.html" data-nav="home">
        <span>Home</span><small>Main site</small>
      </a>
      <a class="nav-panel-link" href="news.html" data-nav="news">
        <span>News</span><small>Updates</small>
      </a>
    </div>
    <div class="nav-panel-section">
      <div class="nav-panel-kicker">Games</div>
      <a class="nav-panel-link" href="astral.html" data-nav="astral">
        <span>Astral</span><small>Sandbox game</small>
      </a>
      <a class="nav-panel-link" href="drunken-decks.html" data-nav="drunken-decks">
        <span>Drunken Decks</span><small>Card game</small>
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
    document.querySelectorAll('[data-nav="' + page + '"]').forEach(el => {
      el.classList.add('active');
    });
  }

  const menuButton = document.getElementById('ham-btn');
  const menu = document.getElementById('mob');

  function setMenu(open) {
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuButton.classList.toggle('active', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  menuButton.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      setMenu(false);
    }
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('nav') && !event.target.closest('#mob')) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setMenu(false);
    }
  });
})();

// Shared ElevenLabs AI assistant widget.
(function () {
  if (document.querySelector('elevenlabs-convai')) {
    return;
  }

  const widget = document.createElement('elevenlabs-convai');
  widget.setAttribute('agent-id', 'agent_6101kw5y8gahfh9v6405s0swkm1e');
  widget.setAttribute('action-text', 'Ask Astral AI');
  widget.setAttribute('avatar-orb-color-1', '#22d3ee');
  widget.setAttribute('avatar-orb-color-2', '#818cf8');
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
