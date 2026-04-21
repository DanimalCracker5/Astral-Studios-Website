// nav.js — shared navigation for all Astral Studios pages
// Include in every page with: <script src="nav.js"></script>
// Set the active nav item by adding data-page="pagename" to your <body> tag

(function () {
  const NAV_HTML = `
<nav>
  <a class="nav-logo" href="index.html">
    <img src="logo.png" alt="Astral Studios" style="height:34px;width:auto;display:block;">
  </a>
  <div class="nav-center">
    <a href="index.html" data-nav="home">Home</a>
    <div class="nav-dd">
      <button>Games ↓</button>
      <div class="nav-dd-menu">
        <a href="astral.html" data-nav="astral">Astral</a>
      </div>
    </div>
    <div class="nav-dd">
      <button>Our Services ↓</button>
      <div class="nav-dd-menu">
        <a href="services.html" data-nav="services">Explore Our Services</a>
        <a href="services-game.html" data-nav="services-game">Game Development</a>
        <a href="services-web.html" data-nav="services-web">Web Development</a>
        <a href="services-video.html" data-nav="services-video">Video Editing</a>
      </div>
    </div>
    <div class="nav-dd">
      <button>More ↓</button>
      <div class="nav-dd-menu">
        <a href="report-bug.html" data-nav="report-bug">Report A Bug</a>
        <a href="privacy.html" data-nav="privacy">Privacy Policy</a>
        <a href="contact.html" data-nav="contact">Contact Us</a>
        <a href="delete-data.html" data-nav="delete-data">Delete My Data</a>
      </div>
    </div>
    <a href="news.html" data-nav="news">News</a>
  </div>
  <button class="ham" id="ham-btn" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mob-menu" id="mob">
  <a href="index.html" data-nav="home">Home</a>
  <div class="mob-lbl">Games</div>
  <a href="astral.html" data-nav="astral" style="padding-left:20px">Astral</a>
  <div class="mob-lbl">Our Services</div>
  <a href="services.html" data-nav="services" style="padding-left:20px">Explore Our Services</a>
  <a href="services-game.html" data-nav="services-game" style="padding-left:20px">Game Development</a>
  <a href="services-web.html" data-nav="services-web" style="padding-left:20px">Web Development</a>
  <a href="services-video.html" data-nav="services-video" style="padding-left:20px">Video Editing</a>
  <div class="mob-lbl">More</div>
  <a href="report-bug.html" data-nav="report-bug" style="padding-left:20px">Report A Bug</a>
  <a href="privacy.html" data-nav="privacy" style="padding-left:20px">Privacy Policy</a>
  <a href="contact.html" data-nav="contact" style="padding-left:20px">Contact Us</a>
  <a href="delete-data.html" data-nav="delete-data" style="padding-left:20px">Delete My Data</a>
  <a href="news.html" data-nav="news">News</a>
</div>`;

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('[data-nav="' + page + '"]').forEach(el => {
      el.classList.add('active');
    });
  }

  document.getElementById('ham-btn').addEventListener('click', function () {
    document.getElementById('mob').classList.toggle('open');
  });
})();
