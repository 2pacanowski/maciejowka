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
    langItems.forEach(x => x.setAttribute('aria-selected', 'false'));
    li.setAttribute('aria-selected', 'true');
    langCode.textContent = li.dataset.lang;
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

// ——— REVIEW EXPAND ———
document.querySelectorAll('.review-toggle').forEach(btn => {
  const quote = btn.previousElementSibling;
  btn.addEventListener('click', () => {
    const expanded = quote.classList.toggle('expanded');
    btn.textContent = expanded ? 'Read less' : 'Read more';
    btn.setAttribute('aria-expanded', String(expanded));
  });
});

// ——— FAQ ACCORDION ———
const faqs = [
  { q: "What is the nightly rate?", a: "Our rates vary depending on the season and length of stay. You can check our best available rates via our Booking System. By booking directly with us you save 10%–20% compared with Airbnb and Booking.com." },
  { q: "How many guests can the villa sleep?", a: "Up to nine guests across four bedrooms — two doubles on the ground floor, a master with en-suite upstairs, and a family room with a double plus a single bed. Our villa is ideal for families and groups." },
  { q: "Are dogs welcome?", a: "Dogs are warmly welcomed at no extra cost. We simply ask that they stay off the upholstered furniture and that you clean up after them, both indoors and out." },
  { q: "What is included in the rate?", a: "All linen and towels, coffee & tea, water bottles, cosmetics (shampoo, soap), vanity kits, Wi-Fi, up to three on-site parking spaces and more." },
  { q: "Is there a minimum stay?", a: "Standard length of stay is 3 nights, however it may vary depending on the season and existing reservations. Sometimes we accommodate shorter stays — please reach out to us directly at maciejowka.willa@gmail.com." },
  { q: "How do I get from Kraków airport?", a: "There are multiple transfer options ranging from direct bus connections, train, rental cars and private transfers. If you need help arranging transportation, please let us know when making a reservation." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 30 days before arrival. Within 30 days, the deposit (30% of the total) is non-refundable but transferable to a future stay within 12 months." },
  { q: "Can you arrange ski rental, lessons, or transfers?", a: "Yes — we work with trusted local partners for ski rental delivered to the villa, English-speaking ski instructors, private chefs, and mountain guides. Just let us know what you'd like." }
];

const faqList = document.getElementById('faq-list');
faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item${i === 0 ? ' open' : ''}">
    <button class="faq-q" type="button">
      <span>${f.q}</span>
      <span class="toggle">+</span>
    </button>
    <div class="faq-a">${f.a}</div>
  </div>
`).join('');

faqList.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => q.closest('.faq-item').classList.toggle('open'));
});

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
