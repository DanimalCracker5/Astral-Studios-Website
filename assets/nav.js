// Shared top bar and AI assistant widget for all Astral Studios pages.
// Include with <script src="assets/nav.js"></script> at the top of <body>.
// Set data-page="pagename" on <body> to mark the current nav link.

(function () {
  document.body.insertAdjacentHTML('afterbegin', `
<nav class="site-nav" aria-label="Primary">
  <a class="nav-logo" href="index.html">
    <img src="assets/logo.png" alt="" width="44" height="44">
    <span>Astral Studios</span>
  </a>
  <div class="nav-tools">
    <a class="nav-phone" href="tel:+18884124692" aria-label="Call Astral Studios at (888) 412-4692">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z"/></svg>
    </a>
    <button class="ham" id="ham-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-links" id="nav-links">
    <a href="astral.html" data-nav="astral">Astral Projection Game</a>
    <a href="index.html#services">Services</a>
    <a href="portfolio.html" data-nav="portfolio">Portfolio</a>
    <a href="news.html" data-nav="news">News</a>
    <a href="contact.html" data-nav="contact">Contact</a>
    <a class="nav-call" href="tel:+18884124692">(888) 412-4692</a>
  </div>
</nav>`);

  const page = document.body.dataset.page;
  const current = page && document.querySelector('[data-nav="' + page + '"]');
  if (current) current.classList.add('active');

  const button = document.getElementById('ham-btn');
  const links = document.getElementById('nav-links');

  function setMenu(open) {
    links.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  }

  button.addEventListener('click', function () {
    setMenu(!links.classList.contains('open'));
  });
  links.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false);
  });
})();

// AI assistant widget (bottom right, every page).
(function () {
  if (document.querySelector('elevenlabs-convai')) return;

  const widget = document.createElement('elevenlabs-convai');
  widget.setAttribute('agent-id', 'agent_6101kw5y8gahfh9v6405s0swkm1e');
  widget.setAttribute('action-text', 'Ask Astral AI');
  widget.setAttribute('avatar-orb-color-1', '#2cc7c0');
  widget.setAttribute('avatar-orb-color-2', '#ffffff');
  widget.setAttribute('variant', 'expandable');
  document.body.appendChild(widget);

  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
  script.async = true;
  document.body.appendChild(script);
})();
