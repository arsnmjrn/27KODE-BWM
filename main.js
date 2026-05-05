/* ===========================
   KODE.BWM — main.js
   =========================== */

/* ===== CUSTOM CURSOR ===== */
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

if (cursor && cursorDot) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.addEventListener('mousedown', () => {
    cursor.style.width = '60px';
    cursor.style.height = '60px';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
  });
}

/* ===== MOBILE MENU ===== */
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ===== COUNTER ANIMATION ===== */
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.getAttribute('data-target');
      let count = 0;
      const speed = target > 50 ? 15 : 40;
      const update = () => {
        if (count < target) {
          count++;
          el.innerText = count;
          setTimeout(update, speed);
        } else {
          el.innerText = target;
        }
      };
      update();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ===== TESTIMONIALS ===== */
const testimonials = [
  { name: "John M.", location: "Kampala", text: "KODE.BWM built my business website perfectly. Delivered fast, at very affordable prices. Highly recommend!" },
  { name: "Majorine K.", location: "Entebbe", text: "Very fast and professional service. My posters looked absolutely amazing. Will use again!" },
  { name: "Sauti ya Uamsho", location: "California, USA", text: "Reliable ICT support. They fixed our server setup remotely and professionally. Outstanding team." },
  { name: "Jane Doe", location: "Kampala", text: "KODE.BWM delivered my project on time and within budget. Communication was excellent throughout." },
  { name: "Eli R.", location: "Kampala", text: "The best design team I've worked with! Modern, clean, and exactly what I envisioned." },
  { name: "Pr. Jean", location: "California, USA", text: "Perfect service! They understood our church's vision and delivered a beautiful website." },
  { name: "Dr. Amara", location: "Nairobi, Kenya", text: "Exceptional graphic design work. Our brand identity is now consistent and professional." },
  { name: "Pastor David", location: "Mbarara", text: "They created our church website and it's beautiful. Members love it. Very affordable!" },
  { name: "Sarah N.", location: "Jinja", text: "Quick ICT support, fixed our office network same day. Very knowledgeable and friendly." },
];

const clients = [
  { name: "John M.", location: "Kampala" },
  { name: "Majorine K.", location: "Entebbe" },
  { name: "Sauti ya Uamsho", location: "California" },
  { name: "Jane Doe", location: "Kampala" },
  { name: "Eli R.", location: "Kampala" },
  { name: "Pr. Jean", location: "California" },
  { name: "Dr. Amara", location: "Nairobi" },
  { name: "Pastor David", location: "Mbarara" },
  { name: "Sarah N.", location: "Jinja" },
  { name: "Michael T.", location: "Gulu" },
  { name: "Grace A.", location: "Kampala" },
  { name: "Emmanuel B.", location: "Wakiso" },
];

const streamEl = document.getElementById('testimonialStream');
const clientListEl = document.getElementById('clientList');

if (streamEl) {
  let tIndex = 0;
  const maxVisible = 3;

  function addTestimonial() {
    const t = testimonials[tIndex % testimonials.length];
    const initials = t.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    const stars = '★★★★★';

    const card = document.createElement('div');
    card.className = 't-card';
    card.innerHTML = `
      <div class="t-stars">${stars}</div>
      <p>"${t.text}"</p>
      <div class="t-card-footer">
        <div class="t-avatar">${initials}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-loc">${t.location}</div>
        </div>
      </div>
    `;

    streamEl.insertBefore(card, streamEl.firstChild);

    // Remove old ones
    while (streamEl.children.length > maxVisible) {
      streamEl.removeChild(streamEl.lastChild);
    }

    tIndex++;
  }

  addTestimonial();
  setInterval(addTestimonial, 4000);
}

if (clientListEl) {
  // Double the list for seamless scroll
  const allClients = [...clients, ...clients];
  allClients.forEach(c => {
    const item = document.createElement('div');
    item.className = 'client-item';
    item.innerHTML = `
      <div class="client-dot"></div>
      <div>
        <div class="client-item-name">${c.name}</div>
        <div class="client-item-loc">${c.location}</div>
      </div>
    `;
    clientListEl.appendChild(item);
  });

  // Add title above
  const container = clientListEl.parentElement;
  const title = document.createElement('h4');
  title.textContent = 'OUR CLIENTS';
  container.insertBefore(title, clientListEl);
}

/* ===== COUNTRY CODES + FLAGS ===== */
const countries = [
  { code: 'UG', name: 'Uganda', dial: '+256' },
  { code: 'KE', name: 'Kenya', dial: '+254' },
  { code: 'TZ', name: 'Tanzania', dial: '+255' },
  { code: 'NG', name: 'Nigeria', dial: '+234' },
  { code: 'GH', name: 'Ghana', dial: '+233' },
  { code: 'ZA', name: 'South Africa', dial: '+27' },
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'CA', name: 'Canada', dial: '+1' },
  { code: 'AU', name: 'Australia', dial: '+61' },
  { code: 'IN', name: 'India', dial: '+91' },
  { code: 'CN', name: 'China', dial: '+86' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'RW', name: 'Rwanda', dial: '+250' },
  { code: 'ET', name: 'Ethiopia', dial: '+251' },
  { code: 'EG', name: 'Egypt', dial: '+20' },
  { code: 'ZM', name: 'Zambia', dial: '+260' },
  { code: 'ZW', name: 'Zimbabwe', dial: '+263' },
  { code: 'CD', name: 'DR Congo', dial: '+243' },
  { code: 'SS', name: 'South Sudan', dial: '+211' },
  { code: 'SO', name: 'Somalia', dial: '+252' },
  { code: 'AE', name: 'UAE', dial: '+971' },
  { code: 'SA', name: 'Saudi Arabia', dial: '+966' },
  { code: 'JP', name: 'Japan', dial: '+81' },
  { code: 'BR', name: 'Brazil', dial: '+55' },
  { code: 'MX', name: 'Mexico', dial: '+52' },
  { code: 'IT', name: 'Italy', dial: '+39' },
  { code: 'ES', name: 'Spain', dial: '+34' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
];

function buildFlagDropdown(selectorId, dropdownId, searchId, listId, flagImgId, codeId) {
  const selector = document.getElementById(selectorId);
  const dropdown = document.getElementById(dropdownId);
  const searchInput = document.getElementById(searchId);
  const listEl = document.getElementById(listId);
  const flagImg = document.getElementById(flagImgId);
  const codeSpan = document.getElementById(codeId);

  if (!selector || !dropdown || !listEl) return;

  function renderList(filter = '') {
    listEl.innerHTML = '';
    countries
      .filter(c => c.name.toLowerCase().includes(filter.toLowerCase()) || c.dial.includes(filter))
      .forEach(c => {
        const opt = document.createElement('div');
        opt.className = 'flag-option';
        opt.innerHTML = `<img src="https://flagcdn.com/w40/${c.code.toLowerCase()}.png" alt="${c.code}"><span>${c.name} (${c.dial})</span>`;
        opt.addEventListener('click', () => {
          flagImg.src = `https://flagcdn.com/w40/${c.code.toLowerCase()}.png`;
          flagImg.alt = c.code;
          codeSpan.textContent = c.dial;
          dropdown.classList.remove('open');
        });
        listEl.appendChild(opt);
      });
  }

  selector.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
    if (dropdown.classList.contains('open')) searchInput.focus();
  });

  searchInput.addEventListener('input', () => renderList(searchInput.value));
  searchInput.addEventListener('click', e => e.stopPropagation());
  dropdown.addEventListener('click', e => e.stopPropagation());

  document.addEventListener('click', () => dropdown.classList.remove('open'));

  renderList();
}

// Build all flag dropdowns
buildFlagDropdown('flagSelector', 'flagDropdown', 'flagSearch', 'flagList', 'selectedFlag', 'selectedCode');
buildFlagDropdown('obFlagSelector', 'obFlagDropdown', 'obFlagSearch', 'obFlagList', 'obSelectedFlag', 'obSelectedCode');
buildFlagDropdown('quoteFlagSelector', 'quoteFlagDropdown', 'quoteFlagSearch', 'quoteFlagList', 'quoteSelectedFlag', 'quoteSelectedCode');

/* ===== CONTACT WHATSAPP ===== */
function sendContactWhatsApp() {
  const name = document.getElementById('cf-name')?.value?.trim();
  const phone = document.getElementById('cf-phone')?.value?.trim();
  const code = document.getElementById('selectedCode')?.textContent || '+256';
  const msg = document.getElementById('cf-message')?.value?.trim();

  if (!name || !phone) { alert('Please fill in your name and phone number.'); return; }

  const text = `Hello KODE.BWM!

Name: ${name}
Phone: ${code} ${phone}
Message: ${msg || 'N/A'}`;

  window.open(`https://wa.me/256704125517?text=${encodeURIComponent(text)}`, '_blank');
}

/* ===== ONBOARDING MODAL ===== */
let currentStep = 1;

function openOnboarding() {
  document.getElementById('onboardingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  goToStep(1);
}

function closeOnboarding() {
  document.getElementById('onboardingModal').classList.remove('open');
  document.body.style.overflow = '';
}

function goToStep(n) {
  document.querySelectorAll('.modal-steps .step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 === n);
  });
  document.querySelectorAll('.step-dot').forEach((d, i) => {
    d.classList.toggle('active', i + 1 === n);
  });
  currentStep = n;
}

function nextStep() {
  if (currentStep < 3) goToStep(currentStep + 1);
}
function prevStep() {
  if (currentStep > 1) goToStep(currentStep - 1);
}

function submitOnboarding() {
  const name = document.getElementById('ob-name')?.value?.trim();
  const company = document.getElementById('ob-company')?.value?.trim();
  const email = document.getElementById('ob-email')?.value?.trim();
  const phone = document.getElementById('ob-phone')?.value?.trim();
  const phoneCode = document.getElementById('obSelectedCode')?.textContent || '+256';
  const service = document.getElementById('ob-service')?.value;
  const budget = document.getElementById('ob-budget')?.value;
  const deadline = document.getElementById('ob-deadline')?.value?.trim();
  const desc = document.getElementById('ob-desc')?.value?.trim();
  const heard = document.getElementById('ob-heard')?.value;
  const contactPref = document.getElementById('ob-contact-pref')?.value;
  const extra = document.getElementById('ob-extra')?.value?.trim();

  if (!name || !phone || !service) {
    alert('Please fill in all required fields (Name, Phone, Service).');
    return;
  }

  const text = `🚀 *New Project Inquiry — KODE.BWM*

👤 *Personal Info*
Name: ${name}
Company: ${company || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phoneCode} ${phone}

💼 *Project Details*
Service: ${service}
Budget: ${budget || 'N/A'}
Deadline: ${deadline || 'N/A'}
Description: ${desc || 'N/A'}

📣 *How They Found Us*
Source: ${heard || 'N/A'}
Preferred Contact: ${contactPref || 'N/A'}
Extra Notes: ${extra || 'N/A'}`;

  window.open(`https://wa.me/256704125517?text=${encodeURIComponent(text)}`, '_blank');
  closeOnboarding();
}

/* ===== QUOTE MODAL ===== */
let selectedPackage = '';

function openQuote(pkg) {
  selectedPackage = pkg;
  document.getElementById('quotePackageLabel').textContent = `Package: ${pkg}`;
  document.getElementById('quoteModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuote() {
  document.getElementById('quoteModal').classList.remove('open');
  document.body.style.overflow = '';
}

function sendQuoteWhatsApp() {
  const name = document.getElementById('q-name')?.value?.trim();
  const phone = document.getElementById('q-phone')?.value?.trim();
  const code = document.getElementById('quoteSelectedCode')?.textContent || '+256';
  const msg = document.getElementById('q-message')?.value?.trim();

  if (!name || !phone) { alert('Please fill in your name and phone number.'); return; }

  const text = `💬 *Quote Request — KODE.BWM*

Name: ${name}
Phone: ${code} ${phone}
Package: ${selectedPackage}
Details: ${msg || 'N/A'}`;

  window.open(`https://wa.me/256704125517?text=${encodeURIComponent(text)}`, '_blank');
  closeQuote();
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

/* ===== SCROLL REVEAL ===== */
const reveals = document.querySelectorAll('.service-card, .why-card, .acard, .contact-item');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${i * 0.1}s`;
      entry.target.style.animation = 'fadeUp 0.6s ease forwards';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => {
  el.style.opacity = '0';
  revealObserver.observe(el);
});

// Add fadeUp keyframe via JS
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);