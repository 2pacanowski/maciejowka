/* ═══════════════════════════════════════════
   Willa Maciejówka — Main Script
═══════════════════════════════════════════ */

// ─── Navbar scroll behaviour ────────────
const navbar = document.getElementById('navbar');
const stickyCta = document.getElementById('stickyCta');
const heroHeight = window.innerHeight * 0.6;

function handleScroll() {
  const y = window.scrollY;

  if (y > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (y > heroHeight) {
    stickyCta.classList.add('visible');
  } else {
    stickyCta.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// ─── Mobile nav hamburger ───────────────
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

hamburger.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
  });
});

// ─── Smooth scroll with nav offset ─────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ─── Scroll Reveal ──────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

// Stagger siblings inside grid containers
function assignStaggerDelays() {
  const staggerParents = [
    '.usp-grid',
    '.amenities-grid',
    '.reviews-grid',
    '.pricing-grid',
    '.faq-list',
  ];

  staggerParents.forEach(selector => {
    const parent = document.querySelector(selector);
    if (!parent) return;
    parent.querySelectorAll('.reveal').forEach((el, i) => {
      el.dataset.delay = i * 80;
    });
  });
}

assignStaggerDelays();
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── FAQ Accordion ──────────────────────
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.nextElementSibling;

    // Close all others
    document.querySelectorAll('.faq-q').forEach(other => {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.classList.remove('open');
      }
    });

    btn.setAttribute('aria-expanded', String(!isOpen));
    answer.classList.toggle('open', !isOpen);
  });
});

// ─── Set date input minimums ────────────
const today = new Date().toISOString().split('T')[0];
const checkinInput  = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');

if (checkinInput) {
  checkinInput.min = today;
  checkinInput.addEventListener('change', () => {
    if (checkoutInput) {
      checkoutInput.min = checkinInput.value;
      if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
        checkoutInput.value = '';
      }
    }
  });
}

if (checkoutInput) {
  checkoutInput.min = today;
}

// ─── Booking Form Submission ────────────
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const btnText = bookingForm.querySelector('.btn-text');
    const btnLoading = bookingForm.querySelector('.btn-loading');
    const submitBtn = bookingForm.querySelector('[type="submit"]');

    submitBtn.disabled = true;
    btnText.hidden = true;
    btnLoading.hidden = false;

    // Simulate async form submission — replace with real endpoint
    await new Promise(resolve => setTimeout(resolve, 1400));

    bookingForm.hidden = true;
    formSuccess.hidden = false;
  });
}

function validateForm() {
  let valid = true;
  const required = bookingForm.querySelectorAll('[required]');

  required.forEach(field => {
    field.classList.remove('error');
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    }
  });

  const email = document.getElementById('email');
  if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add('error');
    valid = false;
  }

  if (!valid) {
    const firstError = bookingForm.querySelector('.error');
    if (firstError) firstError.focus();
  }

  return valid;
}

// Remove error state on input
bookingForm?.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('input', () => field.classList.remove('error'));
});

// ─── Lazy-load gallery images ───────────
if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

// ─── Navbar active link highlight ──────
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinksAll.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
