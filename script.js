/* ╔══════════════════════════════════════════╗
   ║  StudyHub — Script                       ║
   ╚══════════════════════════════════════════╝ */

// ── SCHOLARSHIP DATA ────────────────────────
const scholarships = [
  {
    id: 1,
    name: "National Scholarship Portal (NSP)",
    type: "government",
    eligibility: "Indian students from Class 1 to Ph.D. with family income below ₹2.5 lakh/year.",
    deadline: "2026-04-15",
    link: "https://scholarships.gov.in",
    steps: [
      { icon: "📝", label: "Register on NSP" },
      { icon: "📄", label: "Fill Application" },
      { icon: "📎", label: "Upload Documents" },
      { icon: "✅", label: "Institute Verifies" },
      { icon: "🏛️", label: "Dept. Approval" },
      { icon: "💰", label: "Disbursement" }
    ],
    documents: ["Aadhaar Card", "Income Certificate", "Previous Year Mark Sheet", "Bank Passbook", "Passport Photo", "Caste Certificate (if applicable)"]
  },
  {
    id: 2,
    name: "INSPIRE Scholarship (DST)",
    type: "government",
    eligibility: "Top 1% students in Class 12 board exams pursuing BSc/BS/Int. MSc courses.",
    deadline: "2026-05-31",
    link: "https://online-inspire.gov.in",
    steps: [
      { icon: "🏅", label: "Check Eligibility" },
      { icon: "📝", label: "Online Registration" },
      { icon: "📄", label: "Fill Details" },
      { icon: "📎", label: "Upload Documents" },
      { icon: "✅", label: "Submit & Verify" },
      { icon: "💰", label: "Receive ₹80,000/yr" }
    ],
    documents: ["Class 12 Mark Sheet", "Board Merit Proof", "College Admission Letter", "Aadhaar Card", "Bank Details", "Passport Photo"]
  },
  {
    id: 3,
    name: "Pragati Scholarship (AICTE)",
    type: "government",
    eligibility: "Girl students admitted to AICTE-approved colleges with family income ≤ ₹8 lakh/year.",
    deadline: "2026-03-30",
    link: "https://www.aicte-india.org/schemes/students-development-schemes/pragati-scholarship",
    steps: [
      { icon: "📝", label: "Apply on AICTE Portal" },
      { icon: "📄", label: "Fill Form" },
      { icon: "📎", label: "Upload Docs" },
      { icon: "🏫", label: "Institute Approval" },
      { icon: "✅", label: "AICTE Verification" },
      { icon: "💰", label: "₹50,000/yr Grant" }
    ],
    documents: ["10th & 12th Mark Sheet", "Income Certificate", "Admission Letter", "Aadhaar Card", "Bank Details", "Passport Photo"]
  },
  {
    id: 4,
    name: "Tata Trusts Scholarship",
    type: "private",
    eligibility: "Students from low-income families pursuing graduation or post-graduation.",
    deadline: "2026-06-15",
    link: "https://www.tatatrusts.org",
    steps: [
      { icon: "🔍", label: "Check Eligibility" },
      { icon: "📝", label: "Register Online" },
      { icon: "📄", label: "Submit Application" },
      { icon: "📎", label: "Upload Documents" },
      { icon: "📞", label: "Interview (if selected)" },
      { icon: "💰", label: "Scholarship Awarded" }
    ],
    documents: ["Income Certificate", "Academic Transcripts", "Admission Proof", "ID Proof", "Bank Account Details", "Passport Photo"]
  },
  {
    id: 5,
    name: "Reliance Foundation Scholarship",
    type: "private",
    eligibility: "Undergraduate students in STEM, humanities, or commerce with strong academics.",
    deadline: "2026-04-10",
    link: "https://www.reliancefoundation.org/scholarships",
    steps: [
      { icon: "📝", label: "Online Application" },
      { icon: "📄", label: "Academic Details" },
      { icon: "🎯", label: "Aptitude Test" },
      { icon: "📞", label: "Personal Interview" },
      { icon: "✅", label: "Selection" },
      { icon: "💰", label: "Up to ₹2 Lakh/yr" }
    ],
    documents: ["10th & 12th Mark Sheet", "College ID", "Income Proof", "Aadhaar Card", "Bank Details", "Recommendation Letter"]
  },
  {
    id: 6,
    name: "Post-Matric Scholarship (MoSJE)",
    type: "government",
    eligibility: "SC/ST/OBC students studying post-matric with family income ≤ ₹2.5 lakh/year.",
    deadline: "2026-04-01",
    link: "https://scholarships.gov.in",
    steps: [
      { icon: "📝", label: "Register on NSP" },
      { icon: "📄", label: "Fill Application" },
      { icon: "📎", label: "Upload Documents" },
      { icon: "🏫", label: "Institute Verifies" },
      { icon: "🏛️", label: "State Review" },
      { icon: "💰", label: "Fee Reimbursement" }
    ],
    documents: ["Caste Certificate", "Income Certificate", "Last Year Mark Sheet", "Fee Receipt", "Bank Details", "Passport Photo"]
  },
  {
    id: 7,
    name: "Sitaram Jindal Foundation Scholarship",
    type: "private",
    eligibility: "Meritorious students across India with financial need, Class 11 onwards.",
    deadline: "2026-07-31",
    link: "https://www.sitaramjindalfoundation.org",
    steps: [
      { icon: "📝", label: "Download Form" },
      { icon: "📄", label: "Fill & Attach Docs" },
      { icon: "📮", label: "Post Application" },
      { icon: "🔍", label: "Foundation Reviews" },
      { icon: "✅", label: "Selection" },
      { icon: "💰", label: "Monthly Stipend" }
    ],
    documents: ["Academic Records", "Income Certificate", "ID Proof", "Bank Details", "Passport Photo", "Recommendation from Institute"]
  },
  {
    id: 8,
    name: "Kishore Vaigyanik Protsahan Yojana (KVPY)",
    type: "government",
    eligibility: "Students in Class 11, 12, or 1st year UG in basic science with strong aptitude.",
    deadline: "2026-08-20",
    link: "https://kvpy.iisc.ac.in",
    steps: [
      { icon: "📝", label: "Online Registration" },
      { icon: "🎯", label: "Aptitude Test" },
      { icon: "📞", label: "Interview" },
      { icon: "✅", label: "Merit List" },
      { icon: "🎓", label: "Fellowship" },
      { icon: "💰", label: "₹5,000–7,000/mo" }
    ],
    documents: ["Class 10 & 12 Mark Sheets", "School ID", "Aadhaar Card", "Passport Photo", "Bank Details"]
  },
  {
    id: 9,
    name: "Wipro Education Fellowship",
    type: "private",
    eligibility: "Engineering graduates interested in education leadership; 2-year fellowship program.",
    deadline: "2026-03-27",
    link: "https://www.wipro.com/content/nextweb/en/social-initiatives.html",
    steps: [
      { icon: "📝", label: "Apply Online" },
      { icon: "📄", label: "Submit Resume & SOP" },
      { icon: "🎯", label: "Assessment Round" },
      { icon: "📞", label: "Panel Interview" },
      { icon: "✅", label: "Offer" },
      { icon: "🎓", label: "Join Fellowship" }
    ],
    documents: ["Degree Certificate", "Resume/CV", "Statement of Purpose", "ID Proof", "References", "Passport Photo"]
  }
];

// ── DOM REFERENCES ──────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const cardsGrid = $("#cardsGrid");
const searchInput = $("#searchInput");
const filterBtns = $$(".filter-btn");
const noResults = $("#noResults");

const modalOverlay = $("#modalOverlay");
const modalClose = $("#modalClose");
const modalTitle = $("#modalTitle");
const modalType = $("#modalType");
const modalEligibility = $("#modalEligibility");
const modalDeadline = $("#modalDeadline");
const modalFlowchart = $("#modalFlowchart");
const modalDocs = $("#modalDocs");
const modalApplyLink = $("#modalApplyLink");

const taskForm = $("#taskForm");
const taskInput = $("#taskInput");
const taskPriority = $("#taskPriority");
const taskListEl = $("#taskList");
const emptyTasks = $("#emptyTasks");
const clearCompletedBtn = $("#clearCompleted");
const progressRing = $("#progressRing");
const progressPercent = $("#progressPercent");
const completedCount = $("#completedCount");
const totalCount = $("#totalCount");

const navbar = $("#navbar");
const hamburger = $("#hamburger");
const navLinks = $("#navLinks");

// ── UTILITY ─────────────────────────────────
const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

function daysUntil(dateStr) {
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  return Math.ceil((d - TODAY) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// ── RENDER CARDS ────────────────────────────
let activeFilter = "all";

function renderCards() {
  const query = searchInput.value.toLowerCase().trim();
  let filtered = scholarships.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(query) || s.eligibility.toLowerCase().includes(query);
    if (!matchesSearch) return false;

    if (activeFilter === "all") return true;
    if (activeFilter === "government") return s.type === "government";
    if (activeFilter === "private") return s.type === "private";
    if (activeFilter === "upcoming") return daysUntil(s.deadline) >= 0;
    if (activeFilter === "expired") return daysUntil(s.deadline) < 0;
    return true;
  });

  cardsGrid.innerHTML = "";
  noResults.style.display = filtered.length === 0 ? "block" : "none";

  filtered.forEach((s, i) => {
    const days = daysUntil(s.deadline);
    const isUrgent = days >= 0 && days <= 7;
    const isExpired = days < 0;

    const card = document.createElement("div");
    card.className = `scholarship-card ${s.type} ${isUrgent ? "urgent" : ""}`;
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <span class="card-type ${s.type}">${s.type}</span>
      <h3 class="card-title">${s.name}</h3>
      <p class="card-eligibility">${s.eligibility}</p>
      <div class="card-footer">
        <span class="card-deadline ${isUrgent ? "urgent-text" : ""} ${isExpired ? "urgent-text" : ""}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${isExpired ? "Expired" : isUrgent ? days + "d left!" : formatDate(s.deadline)}
        </span>
        <div class="card-actions">
          <button class="btn-details" onclick="openModal(${s.id})">View Details</button>
          <a href="${s.link}" target="_blank" rel="noopener noreferrer" class="btn-apply-sm">Apply</a>
        </div>
      </div>`;
    cardsGrid.appendChild(card);
  });

  // Trigger scroll-based reveal
  observeCards();
}

// ── MODAL ────────────────────────────────────
function openModal(id) {
  const s = scholarships.find((sc) => sc.id === id);
  if (!s) return;

  modalTitle.textContent = s.name;
  modalType.textContent = s.type;
  modalType.className = `modal-type-badge ${s.type}`;
  modalEligibility.textContent = s.eligibility;

  const days = daysUntil(s.deadline);
  const isUrgent = days >= 0 && days <= 7;
  modalDeadline.textContent = days < 0 ? `Deadline passed (${formatDate(s.deadline)})` : `Deadline: ${formatDate(s.deadline)} (${days} days left)`;
  modalDeadline.className = `modal-deadline-badge ${isUrgent ? "urgent" : ""}`;

  // Flowchart
  modalFlowchart.innerHTML = s.steps
    .map(
      (step, i) =>
        `<div class="flow-step">
          <div class="flow-box"><span class="step-icon">${step.icon}</span>${step.label}</div>
          ${i < s.steps.length - 1 ? '<span class="flow-arrow">→</span>' : ""}
        </div>`
    )
    .join("");

  // Documents
  modalDocs.innerHTML = s.documents
    .map((doc) => `<li><span class="check-icon">✓</span>${doc}</li>`)
    .join("");

  modalApplyLink.href = s.link;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ── SEARCH & FILTERS ────────────────────────
searchInput.addEventListener("input", renderCards);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderCards();
  });
});

// ── TASK PLANNER (localStorage) ─────────────
const STORAGE_KEY = "studyhub_tasks";

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  const tasks = loadTasks();
  taskListEl.innerHTML = "";
  emptyTasks.style.display = tasks.length === 0 ? "block" : "none";

  tasks.forEach((t) => {
    const li = document.createElement("li");
    li.className = t.done ? "completed" : "";
    li.innerHTML = `
      <div class="task-checkbox ${t.done ? "checked" : ""}" data-id="${t.id}"></div>
      <span class="task-text">${escapeHtml(t.text)}</span>
      <span class="task-priority ${t.priority}">${t.priority}</span>
      <button class="task-delete" data-id="${t.id}" title="Delete task">🗑</button>`;
    taskListEl.appendChild(li);
  });

  updateProgress(tasks);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function updateProgress(tasks) {
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  completedCount.textContent = done;
  totalCount.textContent = total;
  progressPercent.textContent = pct + "%";

  const circumference = 2 * Math.PI * 52; // r=52
  const offset = circumference - (pct / 100) * circumference;
  progressRing.style.strokeDashoffset = offset;
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;

  const tasks = loadTasks();
  tasks.unshift({ id: Date.now(), text, priority: taskPriority.value, done: false });
  saveTasks(tasks);
  renderTasks();
  taskInput.value = "";
});

taskListEl.addEventListener("click", (e) => {
  const checkbox = e.target.closest(".task-checkbox");
  if (checkbox) {
    const id = Number(checkbox.dataset.id);
    const tasks = loadTasks().map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    saveTasks(tasks);
    renderTasks();
    return;
  }

  const del = e.target.closest(".task-delete");
  if (del) {
    const id = Number(del.dataset.id);
    const tasks = loadTasks().filter((t) => t.id !== id);
    saveTasks(tasks);
    renderTasks();
  }
});

clearCompletedBtn.addEventListener("click", () => {
  const tasks = loadTasks().filter((t) => !t.done);
  saveTasks(tasks);
  renderTasks();
});

// ── NAVBAR ───────────────────────────────────
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close mobile menu on link click
$$(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// Active link highlight on scroll
const sections = $$("section[id]");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  $$(".nav-link").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

// ── SCROLL REVEAL (IntersectionObserver) ────
function observeCards() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  $$(".scholarship-card, .doc-card, .planner-card, .tip").forEach((el) => {
    observer.observe(el);
  });
}

// ── HERO STAT COUNTER ───────────────────────
function animateCounters() {
  const gov = scholarships.filter((s) => s.type === "government").length;
  const priv = scholarships.filter((s) => s.type === "private").length;
  const total = scholarships.length;

  animateNumber($("#statScholarships"), total, 1200);
  animateNumber($("#statGov"), gov, 1000);
  animateNumber($("#statPrivate"), priv, 1000);
}

function animateNumber(el, target, duration) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ── INIT ─────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  renderTasks();
  animateCounters();
  observeCards();
});
