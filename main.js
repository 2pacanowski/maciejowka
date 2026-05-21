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
    if (selected === 'PL' && currentLang === 'en') {
      window.location.href = './index-pl.html';
    } else if (selected === 'EN' && currentLang === 'pl') {
      window.location.href = './index.html';
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

tabs.forEach(t => t.addEventListener('click', () => renderSeason(t.dataset.season)));
renderSeason('winter');

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
