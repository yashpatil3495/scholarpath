/* ============================================================
   ScholarPath — script.js
   Scholarship data, search, filters, deadline highlighting
   ============================================================ */

// ── Scholarship Data ───────────────────────────────────────
const scholarships = [
  {
    name: "National Scholarship Portal (NSP) — Pre-Matric",
    type: "Government",
    field: "General",
    eligibility: "Students from Class 1 to 10 belonging to minority communities with family income below ₹1 lakh per annum.",
    deadline: "2026-04-10",
    link: "#"
  },
  {
    name: "Central Sector Scheme of Scholarships",
    type: "Government",
    field: "General",
    eligibility: "Students who scored above 80th percentile in Class 12 board exams. Family income ≤ ₹8 lakh/year.",
    deadline: "2026-04-02",
    link: "#"
  },
  {
    name: "AICTE Pragati Scholarship for Girls",
    type: "Government",
    field: "Engineering",
    eligibility: "Girl students admitted to 1st year of AICTE-approved degree/diploma programs. Family income ≤ ₹8 lakh.",
    deadline: "2026-05-15",
    link: "#"
  },
  {
    name: "INSPIRE Scholarship (SHE)",
    type: "Government",
    field: "Science",
    eligibility: "Top 1% in Class 12 board exams pursuing B.Sc. / Integrated M.Sc. in natural & basic sciences.",
    deadline: "2026-03-28",
    link: "#"
  },
  {
    name: "Post-Matric Scholarship for SC Students",
    type: "Government",
    field: "General",
    eligibility: "Scheduled Caste students studying in Class 11 and above. Family income ≤ ₹2.5 lakh/year.",
    deadline: "2026-04-20",
    link: "#"
  },
  {
    name: "Reliance Foundation Undergraduate Scholarship",
    type: "Private",
    field: "Engineering",
    eligibility: "First-year students in top engineering colleges across India. Based on JEE/entrance rank and merit.",
    deadline: "2026-03-30",
    link: "#"
  },
  {
    name: "Tata Trusts Scholarship",
    type: "Private",
    field: "General",
    eligibility: "Undergraduate students from low-income families (≤ ₹4 lakh). Merit-based selection.",
    deadline: "2026-06-01",
    link: "#"
  },
  {
    name: "HDFC Educational Crisis Scholarship",
    type: "Private",
    field: "General",
    eligibility: "Students facing personal/family crisis affecting education continuation. Any course, any year.",
    deadline: "2026-03-25",
    link: "#"
  },
  {
    name: "Narotam Sekhsaria Scholarship",
    type: "Private",
    field: "Engineering",
    eligibility: "Students pursuing postgraduate studies at premier Indian institutions (IITs, IIMs, IISc, etc.).",
    deadline: "2026-04-30",
    link: "#"
  },
  {
    name: "L'Oréal India — For Young Women in Science",
    type: "Private",
    field: "Science",
    eligibility: "Women researchers (age ≤ 35) holding PhD in life & physical sciences with exceptional publication record.",
    deadline: "2026-05-20",
    link: "#"
  },
  {
    name: "KVPY Fellowship (Kishore Vaigyanik)",
    type: "Government",
    field: "Science",
    eligibility: "Students studying in XI (SA), XII (SX), or 1st-year B.Sc. (SB) with strong aptitude in basic sciences.",
    deadline: "2026-07-15",
    link: "#"
  },
  {
    name: "Kotak Kanya Scholarship",
    type: "Private",
    field: "General",
    eligibility: "Meritorious girl students from underprivileged backgrounds enrolling in professional courses. Family income ≤ ₹3 lakh.",
    deadline: "2026-04-14",
    link: "#"
  },
  {
    name: "Maulana Azad National Fellowship",
    type: "Government",
    field: "General",
    eligibility: "Minority community students pursuing M.Phil / Ph.D. programmes in recognized universities.",
    deadline: "2026-03-26",
    link: "#"
  },
  {
    name: "Buddy4Study India STEM Scholarship",
    type: "Private",
    field: "Engineering",
    eligibility: "Students pursuing UG/PG in STEM fields from recognized colleges. Family income ≤ ₹6 lakh/year.",
    deadline: "2026-04-08",
    link: "#"
  },
  {
    name: "Indira Gandhi Scholarship for Single Girl Child",
    type: "Government",
    field: "General",
    eligibility: "Single girl child of the family, pursuing PG programs in accredited colleges (non-professional courses).",
    deadline: "2026-05-01",
    link: "#"
  },
  {
    name: "Azim Premji Foundation Fellowship",
    type: "Private",
    field: "Arts",
    eligibility: "Graduates with minimum 2 years of work/volunteer experience in social development sector.",
    deadline: "2026-06-15",
    link: "#"
  },
  {
    name: "Prime Minister's Scholarship (PMSS) — WARB",
    type: "Government",
    field: "Medical",
    eligibility: "Wards/widows of ex-servicemen & ex-Coast Guard personnel for professional degree courses (MBBS, BDS, BE, etc.).",
    deadline: "2026-04-25",
    link: "#"
  },
  {
    name: "Bharti Foundation Scholarship (Commerce)",
    type: "Private",
    field: "Commerce",
    eligibility: "Class 12 Commerce stream students transitioning to B.Com / BBA / CA from Bharti Foundation schools. Merit-based.",
    deadline: "2026-05-10",
    link: "#"
  },
  {
    name: "National Law University Scholarship",
    type: "Government",
    field: "Law",
    eligibility: "Students admitted to 5-year integrated law programmes at NLUs through CLAT. SC/ST/EWS category preferred.",
    deadline: "2026-04-18",
    link: "#"
  },
  {
    name: "Legrand Empowering Scholarship – Medical",
    type: "Private",
    field: "Medical",
    eligibility: "Female students pursuing MBBS/BDS from govt. medical colleges. Family income ≤ ₹5 lakh. Strong academic record.",
    deadline: "2026-03-29",
    link: "#"
  }
];

// ── DOM References ─────────────────────────────────────────
const cardsGrid       = document.getElementById('cardsGrid');
const searchInput     = document.getElementById('searchInput');
const typeFilter      = document.getElementById('typeFilter');
const fieldFilter     = document.getElementById('fieldFilter');
const deadlineFilter  = document.getElementById('deadlineFilter');
const resultsCount    = document.getElementById('resultsCount');
const noResults       = document.getElementById('noResults');
const navbar          = document.getElementById('navbar');
const navToggle       = document.getElementById('navToggle');
const navLinks        = document.getElementById('navLinks');
const tooltipPopup    = document.getElementById('tooltipPopup');

// ── Today's date ───────────────────────────────────────────
const today = new Date();
today.setHours(0, 0, 0, 0);

// ── Helpers ────────────────────────────────────────────────
function daysUntil(dateStr) {
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

// ── Active type filter ─────────────────────────────────────
let activeType = 'all';

// ── Render Cards ───────────────────────────────────────────
function renderCards(data) {
  cardsGrid.innerHTML = '';

  if (data.length === 0) {
    noResults.style.display = 'block';
    resultsCount.textContent = '';
    return;
  }

  noResults.style.display = 'none';
  resultsCount.textContent = `Showing ${data.length} scholarship${data.length !== 1 ? 's' : ''}`;

  data.forEach((s, i) => {
    const days = daysUntil(s.deadline);
    const isUrgent = days >= 0 && days <= 7;
    const isExpired = days < 0;

    const card = document.createElement('div');
    card.className = 'scholarship-card' + (isUrgent ? ' urgent' : '');
    card.style.animationDelay = `${i * .05}s`;

    card.innerHTML = `
      ${isUrgent ? '<span class="urgent-badge">⏰ Urgent</span>' : ''}
      <div class="card-header">
        <h3 class="card-title">${s.name}</h3>
        <span class="card-type ${s.type.toLowerCase()}">${s.type}</span>
      </div>
      <span class="card-field">${s.field}</span>
      <p class="card-eligibility">${s.eligibility}</p>
      <div class="card-footer">
        <span class="card-deadline ${isUrgent ? 'urgent-deadline' : ''} ${isExpired ? 'expired-deadline' : ''}">
          ${isExpired ? 'Expired' : (isUrgent ? days + 'd left' : formatDate(s.deadline))}
        </span>
        <button class="card-apply-btn ${isExpired ? 'expired-btn' : ''}" onclick="${isExpired ? '' : `window.open('${s.link}','_blank')`}">
          ${isExpired ? 'Closed' : 'Apply Now →'}
        </button>
      </div>
    `;
    cardsGrid.appendChild(card);
  });
}

// ── Filter Logic ───────────────────────────────────────────
function applyFilters() {
  const query    = searchInput.value.trim().toLowerCase();
  const field    = fieldFilter.value;
  const deadline = deadlineFilter.value;

  let filtered = scholarships.filter(s => {
    // Type filter
    if (activeType !== 'all' && s.type !== activeType) return false;

    // Field filter
    if (field !== 'all' && s.field !== field) return false;

    // Deadline filter
    const days = daysUntil(s.deadline);
    if (deadline === 'upcoming' && days < 0) return false;
    if (deadline === 'urgent'   && (days < 0 || days > 7)) return false;
    if (deadline === 'expired'  && days >= 0) return false;

    // Search
    if (query) {
      const haystack = (s.name + ' ' + s.eligibility + ' ' + s.type + ' ' + s.field).toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    return true;
  });

  // Sort: urgent first, then by deadline ascending
  filtered.sort((a, b) => {
    const dA = daysUntil(a.deadline);
    const dB = daysUntil(b.deadline);
    // Expired items go to the end
    if (dA < 0 && dB >= 0) return 1;
    if (dB < 0 && dA >= 0) return -1;
    return dA - dB;
  });

  renderCards(filtered);
}

// ── Type filter buttons ────────────────────────────────────
typeFilter.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  typeFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeType = btn.dataset.filter;
  applyFilters();
});

// ── Other filters ──────────────────────────────────────────
searchInput.addEventListener('input', applyFilters);
fieldFilter.addEventListener('change', applyFilters);
deadlineFilter.addEventListener('change', applyFilters);

// ── Navbar scroll effect ───────────────────────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// ── Mobile nav toggle ──────────────────────────────────────
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

// ── Active nav link highlight ──────────────────────────────
const sections = document.querySelectorAll('.section, .hero');
const navLinkEls = document.querySelectorAll('.nav-link');

const observerOptions = { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' };
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkEls.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + id);
      });
    }
  });
}, observerOptions);

sections.forEach(s => sectionObserver.observe(s));

// ── Tooltip logic ──────────────────────────────────────────
document.addEventListener('mouseover', (e) => {
  const tip = e.target.closest('.doc-tooltip');
  if (!tip) return;
  const text = tip.getAttribute('data-tip');
  tooltipPopup.textContent = text;
  tooltipPopup.classList.add('visible');

  const rect = tip.getBoundingClientRect();
  tooltipPopup.style.left = rect.left + 'px';
  tooltipPopup.style.top  = (rect.top - tooltipPopup.offsetHeight - 8) + 'px';
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.doc-tooltip')) {
    tooltipPopup.classList.remove('visible');
  }
});

// ── Animated stat counters ─────────────────────────────────
function animateCount(el, target) {
  let current = 0;
  const step = Math.ceil(target / 30);
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 40);
}

// ── Initialize ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render all scholarships
  applyFilters();

  // Animate hero stats
  const govCount = scholarships.filter(s => s.type === 'Government').length;
  const pvtCount = scholarships.filter(s => s.type === 'Private').length;

  animateCount(document.getElementById('statTotal'),   scholarships.length);
  animateCount(document.getElementById('statGov'),     govCount);
  animateCount(document.getElementById('statPrivate'), pvtCount);
});
