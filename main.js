// ——— NAV SCROLL ———
const nav = document.querySelector('.nav');
let navScrollTicking = false;
function updateNav() {
  if (navScrollTicking) return;
  navScrollTicking = true;
  requestAnimationFrame(() => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    navScrollTicking = false;
  });
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
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20dom%20fasada%201.webp', alt: 'Willa Maciejówka — traditional Zakopane villa exterior', altPl: 'Willa Maciejówka — tradycyjna willa w Zakopanem', room: 'exterior' },
  { src: 'photos/willa%20na%20wynajem%20zakopane.webp', alt: 'Villa exterior', altPl: 'Willa z zewnątrz', room: 'exterior' },
  { src: 'photos/rent%20a%20villa%20zakopane%20view.webp', alt: 'Villa with mountain views', altPl: 'Willa z widokiem na góry', room: 'exterior' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20parking.webp', alt: 'Private parking', altPl: 'Prywatny parking', room: 'exterior' },
  { src: 'photos/vacation%20home%20zakopane%20hall.webp', alt: 'Entrance hall', altPl: 'Hol wejściowy', room: 'hallway' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20hol.webp', alt: 'Hallway', altPl: 'Korytarz', room: 'hallway' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20schody.webp', alt: 'Staircase', altPl: 'Schody', room: 'hallway' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20oranzeria.webp', alt: 'Conservatory dining area', altPl: 'Oranżeria — jadalnia', room: 'dining' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20oranzeria%202.webp', alt: 'Conservatory — sun-drenched dining', altPl: 'Oranżeria — słoneczna jadalnia', room: 'dining' },
  { src: 'photos/vacation%20home%20zakopane%20dining.webp', alt: 'Dining area', altPl: 'Jadalnia', room: 'dining' },
  { src: 'photos/vacation%20home%20zakopane%20villa%20dining%20area.webp', alt: 'Villa dining area', altPl: 'Jadalnia w willi', room: 'dining' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20kuchnia.webp', alt: 'Kitchen', altPl: 'Kuchnia', room: 'kitchen' },
  { src: 'photos/vacation%20home%20zakopane%20kitchen.webp', alt: 'Fully-equipped kitchen', altPl: 'W pełni wyposażona kuchnia', room: 'kitchen' },
  { src: 'photos/vacation%20home%20zakopane%20kuchnia.webp', alt: 'Kitchen', altPl: 'Kuchnia', room: 'kitchen' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20kuchnia.webp', alt: 'Kitchen — Willa Maciejówka', altPl: 'Kuchnia — Willa Maciejówka', room: 'kitchen' },
  { src: 'photos/zakopane%20villa%20for%20rent%20kitchen.webp', alt: 'Kitchen overview', altPl: 'Widok kuchni', room: 'kitchen' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20sypialnia.webp', alt: 'Double bedroom', altPl: 'Sypialnia z podwójnym łóżkiem', room: 'bedrooms' },
  { src: 'photos/dom%20na%20wynajem%20zakopane%20sypialnia%202.webp', alt: 'Bedroom — double bed', altPl: 'Sypialnia — podwójne łóżko', room: 'bedrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20bedroom.webp', alt: 'Bedroom', altPl: 'Sypialnia', room: 'bedrooms' },
  { src: 'photos/vacation%20home%20zakopane%20villa%20bedroom.webp', alt: 'Villa bedroom', altPl: 'Sypialnia w willi', room: 'bedrooms' },
  { src: 'photos/vacation%20home%20zakopane%20bed.webp', alt: 'Bedroom', altPl: 'Sypialnia', room: 'bedrooms' },
  { src: 'photos/villa%20zakopane%20bedroom.webp', alt: 'Bedroom', altPl: 'Sypialnia', room: 'bedrooms' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20sypialnia.webp', alt: 'Bedroom — Willa Maciejówka', altPl: 'Sypialnia — Willa Maciejówka', room: 'bedrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bedroom.webp', alt: 'Bedroom', altPl: 'Sypialnia', room: 'bedrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bedroom%202.webp', alt: 'Second bedroom', altPl: 'Druga sypialnia', room: 'bedrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bedrrom3.webp', alt: 'Third bedroom', altPl: 'Trzecia sypialnia', room: 'bedrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20bath.webp', alt: 'Bathroom — bathtub', altPl: 'Łazienka — wanna', room: 'bathrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20bathroom.webp', alt: 'Bathroom', altPl: 'Łazienka', room: 'bathrooms' },
  { src: 'photos/luxury%20villa%20zakopane%20shower.webp', alt: 'Bathroom — shower', altPl: 'Łazienka — kabina prysznicowa', room: 'bathrooms' },
  { src: 'photos/villa%20zakopane%20bathroom.webp', alt: 'Bathroom', altPl: 'Łazienka', room: 'bathrooms' },
  { src: 'photos/villa%20zakopane%20bathroom%202.webp', alt: 'Second bathroom', altPl: 'Druga łazienka', room: 'bathrooms' },
  { src: 'photos/zakopane%20villa%20for%20rent%20bathroom.webp', alt: 'Bathroom', altPl: 'Łazienka', room: 'bathrooms' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20lazienka.webp', alt: 'Bathroom — Willa Maciejówka', altPl: 'Łazienka — Willa Maciejówka', room: 'bathrooms' },
  { src: 'photos/willa%20maciej%C3%B3wka%20zakopane%20pralka.webp', alt: 'Laundry room', altPl: 'Pralnia', room: 'laundry' },
];

const ROOM_LABELS = {
  exterior:  { en: 'Exterior & Grounds',     pl: 'Otoczenie i ogród' },
  hallway:   { en: 'Entrance & Hallway',     pl: 'Wejście i hol' },
  dining:    { en: 'Conservatory & Dining',  pl: 'Oranżeria i jadalnia' },
  kitchen:   { en: 'Kitchen',                pl: 'Kuchnia' },
  bedrooms:  { en: 'Bedrooms',               pl: 'Sypialnie' },
  bathrooms: { en: 'Bathrooms',              pl: 'Łazienki' },
  laundry:   { en: 'Laundry',                pl: 'Pralnia' },
};

const pageLang = document.documentElement.lang === 'pl' ? 'pl' : 'en';
const photoAlt = p => pageLang === 'pl' ? p.altPl : p.alt;

function plPhotoCountWord(n) {
  const lastTwo = n % 100;
  const last = n % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return 'zdjęć';
  if (last === 1) return 'zdjęcie';
  if (last >= 2 && last <= 4) return 'zdjęcia';
  return 'zdjęć';
}

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

  lbOverlayCount.textContent = pageLang === 'pl'
    ? PHOTOS.length + ' ' + plPhotoCountWord(PHOTOS.length)
    : PHOTOS.length + ' Photographs';

  let currentRoom = null;
  let grid = null;
  PHOTOS.forEach((p, i) => {
    if (p.room !== currentRoom) {
      currentRoom = p.room;
      const heading = document.createElement('h3');
      heading.className = 'lb-room-title';
      heading.textContent = ROOM_LABELS[currentRoom][pageLang];
      lbOverlayBody.appendChild(heading);
      grid = document.createElement('div');
      grid.className = 'lb-overlay-grid';
      lbOverlayBody.appendChild(grid);
    }
    const img = document.createElement('img');
    img.src = thumbSrc(p.src);
    img.alt = photoAlt(p);
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
  lbViewerImg.alt = photoAlt(PHOTOS[idx]);
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
  lbViewerImg.alt = photoAlt(PHOTOS[lbCurrentIdx]);
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
