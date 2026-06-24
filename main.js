// ——— NAV SCROLL ———
const nav = document.querySelector('.nav');
function updateNav() {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ——— HAMBURGER ———
const hamburger = document.getElementById('navHamburger');
const navMobile = document.getElementById('navMobile');
function closeMobileMenu() {
  navMobile.classList.remove('open');
  nav.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
  navMobile.setAttribute('aria-hidden', 'true');
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();
  const open = navMobile.classList.toggle('open');
  nav.classList.toggle('menu-open', open);
  hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  navMobile.setAttribute('aria-hidden', open ? 'false' : 'true');
});
document.addEventListener('click', e => {
  if (!navMobile.contains(e.target) && !hamburger.contains(e.target)) {
    closeMobileMenu();
  }
});
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMobileMenu);
});

// ——— LANGUAGE DROPDOWN ———
const langWrap = document.querySelector('.nav-lang');
const langTrigger = langWrap.querySelector('.nav-lang-trigger');
const langCode = langWrap.querySelector('.lang-code');
const langItems = langWrap.querySelectorAll('.nav-lang-menu li');

langTrigger.addEventListener('click', e => {
  e.stopPropagation();
  const open = langWrap.classList.toggle('open');
  langTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.addEventListener('click', () => {
  langWrap.classList.remove('open');
  langTrigger.setAttribute('aria-expanded', 'false');
});
langItems.forEach(li => {
  li.addEventListener('click', e => {
    e.stopPropagation();
    const selected = li.dataset.lang;
    const currentLang = document.documentElement.lang;
    const plHref = document.documentElement.dataset.plHref || './index-pl.html';
    const enHref = document.documentElement.dataset.enHref || './index.html';
    if (selected === 'PL' && currentLang === 'en') {
      window.location.href = plHref;
    } else if (selected === 'EN' && currentLang === 'pl') {
      window.location.href = enHref;
    }
    langItems.forEach(x => x.setAttribute('aria-selected', 'false'));
    li.setAttribute('aria-selected', 'true');
    langCode.textContent = selected;
    langWrap.classList.remove('open');
    langTrigger.setAttribute('aria-expanded', 'false');
  });
});

// ——— ACTIVITIES TOGGLE ———
const seasons = {
  winter: {
    img: "Tatra ridge in deep snow, warm afternoon light",
    items: [
      { title: "Kasprowy Wierch Gondola", desc: "Eight minutes to a 1,987 m summit. Off-piste skiing, panoramic restaurant, the kind of silence only altitude makes.", meta: "15 min drive · €18 / adult" },
      { title: "Polana Szymoszkowa", desc: "Family-friendly slopes on the Zakopane edge. Equipment rental at the gate, easy reds, ski school in English.", meta: "10 min drive" },
      { title: "Krupówki Sleigh Rides", desc: "Traditional horse-drawn kuligi through Dolina Kościeliska, with bonfire and oscypek at the turnaround.", meta: "Pre-bookable from villa" },
      { title: "Thermal Baths · Chochołów", desc: "Outdoor pools at -10°C, steam rising into the night. Drive there for sunset, return for supper.", meta: "25 min drive" },
      { title: "Snowshoe to Dolina Strążyska", desc: "Quiet valley walk, two hours round-trip from a trailhead five minutes away. Snowshoes loaned by the villa.", meta: "From the front door" }
    ]
  },
  summer: {
    img: "Tatra meadow in late summer, wildflowers and stone peaks",
    items: [
      { title: "Morskie Oko Lake Walk", desc: "Poland's most photographed alpine lake, reached on a forest road closed to cars. Two hours up, slower coming back.", meta: "25 min drive · 18 km hike" },
      { title: "Gubałówka Funicular", desc: "Ten minutes to the ridgeline above town, with bakeries, sheep cheese stalls, and a 360° view of the Tatras.", meta: "10 min walk to base" },
      { title: "Dolina Kościeliska Bike Ride", desc: "Twelve flat kilometres through a karst valley, with caves and a mountain hut serving żurek for lunch.", meta: "Bikes available · 20 min drive" },
      { title: "Rafting on the Dunajec", desc: "Traditional flat-bottom raft trip through the Pieniny gorge, steered by Górale in folk dress.", meta: "60 min drive · half-day" },
      { title: "Garden Suppers", desc: "We can arrange a private grill, oscypek tasting, or three-course supper in the villa garden — by a Góral chef.", meta: "Pre-bookable · for 4–9 guests" }
    ]
  }
};

const list = document.getElementById('activities-list');
const imgLabel = document.getElementById('season-img-label');
const tabs = document.querySelectorAll('.activities-toggle button');

function renderSeason(name) {
  const data = seasons[name];
  imgLabel.textContent = data.img;
  list.innerHTML = data.items.map((it, i) => `
    <li>
      <span class="idx">— ${String(i+1).padStart(2,'0')} —</span>
      <div>
        <div class="title">${it.title}</div>
        <p class="desc">${it.desc}</p>
        <span class="meta">${it.meta}</span>
      </div>
    </li>
  `).join('');
  tabs.forEach(t => t.classList.toggle('active', t.dataset.season === name));
}

if (list) {
  tabs.forEach(t => t.addEventListener('click', () => renderSeason(t.dataset.season)));
  renderSeason('winter');
}

// ——— CONTACT FORM ———
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formErrorMsg = document.getElementById('formErrorMsg');
const consentWrap = document.getElementById('consentWrap');
const consentCheckbox = document.getElementById('gdprConsent');
const consentError = document.getElementById('consentError');
const submitBtn = document.getElementById('submitBtn');
const btnLabel = submitBtn.querySelector('.btn-label');
const btnLoading = submitBtn.querySelector('.btn-loading');

function setLoading(on) {
  submitBtn.disabled = on;
  btnLabel.hidden = on;
  btnLoading.hidden = !on;
}

consentCheckbox.addEventListener('change', () => {
  if (consentCheckbox.checked) {
    consentWrap.classList.remove('error');
    consentError.style.display = 'none';
  }
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  let valid = true;

  // validate required text fields
  form.querySelectorAll('[required]:not([type="checkbox"])').forEach(field => {
    if (!field.value.trim()) {
      field.style.borderBottomColor = 'var(--red)';
      valid = false;
      field.addEventListener('input', () => field.style.borderBottomColor = '', { once: true });
    }
  });

  // validate email format
  const emailField = form.querySelector('[type="email"]');
  if (emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    emailField.style.borderBottomColor = 'var(--red)';
    valid = false;
  }

  // validate GDPR consent
  if (!consentCheckbox.checked) {
    consentWrap.classList.add('error');
    consentError.style.display = 'block';
    valid = false;
  }

  if (!valid) return;

  setLoading(true);

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    });
    form.hidden = true;
    formSuccess.classList.add('visible');
  } catch (_) {
    setLoading(false);
    formErrorMsg.classList.add('visible');
  }
});

// ——— GALLERY LIGHTBOX ———
const PHOTOS = [
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20dom%20fasada%201.webp', alt: 'Willa Maciejówka — traditional Zakopane villa exterior', room: 'Exterior & Grounds' },
  { src: 'photos/willa%20na%20wynajem%20zakopane.webp', alt: 'Villa exterior', room: 'Exterior & Grounds' },
  { src: 'photos/rent%20a%20villa%20zakopane%20view.webp', alt: 'Villa with mountain views', room: 'Exterior & Grounds' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20parking.webp', alt: 'Private parking', room: 'Exterior & Grounds' },
  { src: 'photos/vacation%20home%20zakopane%20hall.webp', alt: 'Entrance hall', room: 'Entrance & Hallway' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20hol.webp', alt: 'Hallway', room: 'Entrance & Hallway' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20schody.webp', alt: 'Staircase', room: 'Entrance & Hallway' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20oranzeria.webp', alt: 'Conservatory dining area', room: 'Conservatory & Dining' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20oranzeria%202.webp', alt: 'Conservatory — sun-drenched dining', room: 'Conservatory & Dining' },
  { src: 'photos/vacation%20home%20zakopane%20dining.webp', alt: 'Dining area', room: 'Conservatory & Dining' },
  { src: 'photos/vacation%20home%20zakopane%20villa%20dining%20area.webp', alt: 'Villa dining area', room: 'Conservatory & Dining' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20kuchnia.webp', alt: 'Kitchen', room: 'Kitchen' },
  { src: 'photos/vacation%20home%20zakopane%20kitchen.webp', alt: 'Fully-equipped kitchen', room: 'Kitchen' },
  { src: 'photos/vacation%20home%20zakopane%20kuchnia.webp', alt: 'Kitchen', room: 'Kitchen' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20kuchnia.webp', alt: 'Kitchen — Willa Maciejówka', room: 'Kitchen' },
  { src: 'photos/zakopane%20villa%20for%20rent%20kitchen.webp', alt: 'Kitchen overview', room: 'Kitchen' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20sypialnia.webp', alt: 'Double bedroom', room: 'Bedrooms' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20sypialnia%202.webp', alt: 'Bedroom — double bed', room: 'Bedrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20bedroom.webp', alt: 'Bedroom', room: 'Bedrooms' },
  { src: 'photos/vacation%20home%20zakopane%20villa%20bedroom.webp', alt: 'Villa bedroom', room: 'Bedrooms' },
  { src: 'photos/vacation%20home%20zakopane%20bed.webp', alt: 'Bedroom', room: 'Bedrooms' },
  { src: 'photos/villa%20zakopane%20bedroom.webp', alt: 'Bedroom', room: 'Bedrooms' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20sypialnia.webp', alt: 'Bedroom — Willa Maciejówka', room: 'Bedrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bedroom.webp', alt: 'Bedroom', room: 'Bedrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bedroom%202.webp', alt: 'Second bedroom', room: 'Bedrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bedrrom3.webp', alt: 'Third bedroom', room: 'Bedrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20bath.webp', alt: 'Bathroom — bathtub', room: 'Bathrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20bathroom.webp', alt: 'Bathroom', room: 'Bathrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20shower.webp', alt: 'Bathroom — shower', room: 'Bathrooms' },
  { src: 'photos/villa%20zakopane%20bathroom.webp', alt: 'Bathroom', room: 'Bathrooms' },
  { src: 'photos/villa%20zakopane%20bathroom%202.webp', alt: 'Second bathroom', room: 'Bathrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bathroom.webp', alt: 'Bathroom', room: 'Bathrooms' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20lazienka.webp', alt: 'Bathroom — Willa Maciejówka', room: 'Bathrooms' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20pralka.webp', alt: 'Laundry room', room: 'Laundry' },
];

// optimized variants: small grid thumbnails vs. larger single-photo viewer images
const thumbSrc = src => src.replace('photos/', 'photos/thumb/');
const fullSrc  = src => src.replace('photos/', 'photos/full/');

// indices in PHOTOS array for each featured grid slot (g-1 … g-6)
const FEATURED_INDICES = [7, 22, 27, 16, 12, 0];

const lbOverlay     = document.getElementById('lbOverlay');
const lbOverlayClose = document.getElementById('lbOverlayClose');
const lbOverlayBody  = document.getElementById('lbOverlayBody');
const lbOverlayCount = document.getElementById('lbOverlayCount');
const lbViewer      = document.getElementById('lbViewer');
const lbViewerClose = document.getElementById('lbViewerClose');
const lbViewerPrev  = document.getElementById('lbViewerPrev');
const lbViewerNext  = document.getElementById('lbViewerNext');
const lbViewerImg   = document.getElementById('lbViewerImg');
const lbViewerCounter = document.getElementById('lbViewerCounter');
const viewAllBtn    = document.getElementById('galleryViewAll');

let lbCurrentIdx = 0;
let overlayWasOpen = false;
let overlayBuilt = false;

// Build the room-by-room thumbnail grid only when the overlay is first opened,
// so the 34-photo set never loads until the visitor actually asks for it.
function buildOverlay() {
  if (overlayBuilt) return;
  overlayBuilt = true;

  lbOverlayCount.textContent = PHOTOS.length + ' Photographs';

  let currentRoom = null;
  let grid = null;
  PHOTOS.forEach((p, i) => {
    if (p.room !== currentRoom) {
      currentRoom = p.room;
      const heading = document.createElement('h3');
      heading.className = 'lb-room-title';
      heading.textContent = currentRoom;
      lbOverlayBody.appendChild(heading);
      grid = document.createElement('div');
      grid.className = 'lb-overlay-grid';
      lbOverlayBody.appendChild(grid);
    }
    const img = document.createElement('img');
    img.src = thumbSrc(p.src);
    img.alt = p.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('click', () => openViewer(i, true));
    grid.appendChild(img);
  });
}

function openOverlay() {
  buildOverlay();
  lbOverlay.classList.add('open');
  document.body.classList.add('lb-open');
}

function closeOverlay() {
  lbOverlay.classList.remove('open');
  document.body.classList.remove('lb-open');
}

// warm the browser cache for the next/previous photo so arrow nav feels instant
function preloadNeighbors(idx) {
  [1, -1].forEach(dir => {
    const n = (idx + dir + PHOTOS.length) % PHOTOS.length;
    new Image().src = fullSrc(PHOTOS[n].src);
  });
}

function openViewer(idx, fromOverlay) {
  overlayWasOpen = fromOverlay;
  if (overlayWasOpen) lbOverlay.classList.remove('open');
  lbCurrentIdx = idx;
  lbViewerImg.src = fullSrc(PHOTOS[idx].src);
  lbViewerImg.alt = PHOTOS[idx].alt;
  lbViewerCounter.textContent = (idx + 1) + ' / ' + PHOTOS.length;
  lbViewer.classList.add('open');
  document.body.classList.add('lb-open');
  preloadNeighbors(idx);
}

function closeViewer() {
  lbViewer.classList.remove('open');
  lbViewerImg.src = '';
  if (overlayWasOpen) {
    lbOverlay.classList.add('open');
  } else {
    document.body.classList.remove('lb-open');
  }
}

function lbNavigate(dir) {
  lbCurrentIdx = (lbCurrentIdx + dir + PHOTOS.length) % PHOTOS.length;
  lbViewerImg.src = fullSrc(PHOTOS[lbCurrentIdx].src);
  lbViewerImg.alt = PHOTOS[lbCurrentIdx].alt;
  lbViewerCounter.textContent = (lbCurrentIdx + 1) + ' / ' + PHOTOS.length;
  preloadNeighbors(lbCurrentIdx);
}

if (viewAllBtn) viewAllBtn.addEventListener('click', openOverlay);
lbOverlayClose.addEventListener('click', closeOverlay);
lbViewerClose.addEventListener('click', closeViewer);
lbViewerPrev.addEventListener('click', () => lbNavigate(-1));
lbViewerNext.addEventListener('click', () => lbNavigate(1));

document.addEventListener('keydown', e => {
  if (lbViewer.classList.contains('open')) {
    if (e.key === 'Escape') closeViewer();
    if (e.key === 'ArrowLeft') lbNavigate(-1);
    if (e.key === 'ArrowRight') lbNavigate(1);
  } else if (lbOverlay.classList.contains('open')) {
    if (e.key === 'Escape') closeOverlay();
  }
});

// Featured grid clicks open viewer directly
document.querySelectorAll('.gallery-grid .g').forEach((cell, i) => {
  cell.addEventListener('click', () => openViewer(FEATURED_INDICES[i], false));
});
