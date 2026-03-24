/* ══════════════════════════════════════════
   ScholarHub — Script
   ══════════════════════════════════════════ */

// ── DATA ───────────────────────────────────
const scholarships = [
  {
    id:1, name:"National Scholarship Portal (NSP)", type:"government", field:"general",
    eligibility:"Indian students Class 1–Ph.D., family income < ₹2.5 lakh/yr.",
    deadline:"2026-04-15", link:"https://scholarships.gov.in",
    minMarks:50, maxIncome:250000, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Register on NSP"},{icon:"📄",label:"Fill Application"},{icon:"📎",label:"Upload Documents"},{icon:"✅",label:"Institute Verifies"},{icon:"🏛️",label:"Dept. Approval"},{icon:"💰",label:"Disbursement"}],
    documents:["Aadhaar Card","Income Certificate","Previous Year Mark Sheet","Bank Passbook","Passport Photo","Caste Certificate (if applicable)"]
  },
  {
    id:2, name:"INSPIRE Scholarship (DST)", type:"government", field:"science",
    eligibility:"Top 1% in Class 12 boards, pursuing BSc/BS/Int.MSc in natural & basic sciences.",
    deadline:"2026-05-31", link:"https://online-inspire.gov.in",
    minMarks:90, maxIncome:Infinity, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"🏅",label:"Check Eligibility"},{icon:"📝",label:"Online Registration"},{icon:"📄",label:"Fill Details"},{icon:"📎",label:"Upload Documents"},{icon:"✅",label:"Submit & Verify"},{icon:"💰",label:"Receive ₹80,000/yr"}],
    documents:["Class 12 Mark Sheet","Board Merit Proof","College Admission Letter","Aadhaar Card","Bank Details","Passport Photo"]
  },
  {
    id:3, name:"Pragati Scholarship (AICTE)", type:"government", field:"science",
    eligibility:"Girl students in AICTE-approved colleges, family income ≤ ₹8 lakh/yr.",
    deadline:"2026-03-30", link:"https://www.aicte-india.org/schemes/students-development-schemes/pragati-scholarship",
    minMarks:50, maxIncome:800000, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Apply on AICTE Portal"},{icon:"📄",label:"Fill Form"},{icon:"📎",label:"Upload Docs"},{icon:"🏫",label:"Institute Approval"},{icon:"✅",label:"AICTE Verification"},{icon:"💰",label:"₹50,000/yr Grant"}],
    documents:["10th & 12th Mark Sheet","Income Certificate","Admission Letter","Aadhaar Card","Bank Details","Passport Photo"]
  },
  {
    id:4, name:"Tata Trusts Scholarship", type:"private", field:"general",
    eligibility:"Students from low-income families pursuing graduation or post-graduation.",
    deadline:"2026-06-15", link:"https://www.tatatrusts.org",
    minMarks:55, maxIncome:400000, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"🔍",label:"Check Eligibility"},{icon:"📝",label:"Register Online"},{icon:"📄",label:"Submit Application"},{icon:"📎",label:"Upload Documents"},{icon:"📞",label:"Interview"},{icon:"💰",label:"Scholarship Awarded"}],
    documents:["Income Certificate","Academic Transcripts","Admission Proof","ID Proof","Bank Account Details","Passport Photo"]
  },
  {
    id:5, name:"Reliance Foundation Scholarship", type:"private", field:"science",
    eligibility:"UG students in STEM, humanities, or commerce with strong academics.",
    deadline:"2026-04-10", link:"https://www.reliancefoundation.org",
    minMarks:60, maxIncome:Infinity, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Online Application"},{icon:"📄",label:"Academic Details"},{icon:"🎯",label:"Aptitude Test"},{icon:"📞",label:"Personal Interview"},{icon:"✅",label:"Selection"},{icon:"💰",label:"Up to ₹2 Lakh/yr"}],
    documents:["10th & 12th Mark Sheet","College ID","Income Proof","Aadhaar Card","Bank Details","Recommendation Letter"]
  },
  {
    id:6, name:"Post-Matric Scholarship (MoSJE)", type:"government", field:"general",
    eligibility:"SC/ST/OBC students post-matric, family income ≤ ₹2.5 lakh/yr.",
    deadline:"2026-04-01", link:"https://scholarships.gov.in",
    minMarks:40, maxIncome:250000, categories:["obc","sc","st"],
    steps:[{icon:"📝",label:"Register on NSP"},{icon:"📄",label:"Fill Application"},{icon:"📎",label:"Upload Documents"},{icon:"🏫",label:"Institute Verifies"},{icon:"🏛️",label:"State Review"},{icon:"💰",label:"Fee Reimbursement"}],
    documents:["Caste Certificate","Income Certificate","Last Year Mark Sheet","Fee Receipt","Bank Details","Passport Photo"]
  },
  {
    id:7, name:"Sitaram Jindal Foundation Scholarship", type:"private", field:"general",
    eligibility:"Meritorious students with financial need, Class 11 onwards.",
    deadline:"2026-07-31", link:"https://www.sitaramjindalfoundation.org",
    minMarks:65, maxIncome:500000, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Download Form"},{icon:"📄",label:"Fill & Attach Docs"},{icon:"📮",label:"Post Application"},{icon:"🔍",label:"Foundation Reviews"},{icon:"✅",label:"Selection"},{icon:"💰",label:"Monthly Stipend"}],
    documents:["Academic Records","Income Certificate","ID Proof","Bank Details","Passport Photo","Recommendation from Institute"]
  },
  {
    id:8, name:"KVPY Fellowship (IISc)", type:"government", field:"science",
    eligibility:"Class 11/12 or 1st yr UG in basic sciences with strong aptitude.",
    deadline:"2026-08-20", link:"https://kvpy.iisc.ac.in",
    minMarks:75, maxIncome:Infinity, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Online Registration"},{icon:"🎯",label:"Aptitude Test"},{icon:"📞",label:"Interview"},{icon:"✅",label:"Merit List"},{icon:"🎓",label:"Fellowship"},{icon:"💰",label:"₹5,000–7,000/mo"}],
    documents:["Class 10 & 12 Mark Sheets","School ID","Aadhaar Card","Passport Photo","Bank Details"]
  },
  {
    id:9, name:"Wipro Education Fellowship", type:"private", field:"general",
    eligibility:"Engineering graduates interested in education leadership; 2-yr program.",
    deadline:"2026-03-27", link:"https://www.wipro.com",
    minMarks:60, maxIncome:Infinity, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Apply Online"},{icon:"📄",label:"Submit Resume & SOP"},{icon:"🎯",label:"Assessment Round"},{icon:"📞",label:"Panel Interview"},{icon:"✅",label:"Offer"},{icon:"🎓",label:"Join Fellowship"}],
    documents:["Degree Certificate","Resume/CV","Statement of Purpose","ID Proof","References","Passport Photo"]
  },
  {
    id:10, name:"HDFC Vidyanidhi Scholarship", type:"private", field:"commerce",
    eligibility:"Students in Class 1–postgrad, family income < ₹2.5 lakh/yr, merit-based.",
    deadline:"2026-05-10", link:"https://www.hdfcbank.com",
    minMarks:55, maxIncome:250000, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Register"},{icon:"📄",label:"Fill Form"},{icon:"📎",label:"Upload Docs"},{icon:"🔍",label:"HDFC Reviews"},{icon:"✅",label:"Approval"},{icon:"💰",label:"₹15,000–75,000"}],
    documents:["Academic Mark Sheets","Income Certificate","ID Proof","Bank Details","Passport Photo","Fee Receipt"]
  },
  {
    id:11, name:"Maulana Azad National Fellowship", type:"government", field:"general",
    eligibility:"Minority community students for M.Phil/Ph.D., NET-JRF qualified.",
    deadline:"2026-06-30", link:"https://scholarships.gov.in",
    minMarks:55, maxIncome:Infinity, categories:["general","obc"],
    steps:[{icon:"📝",label:"Apply on NSP"},{icon:"📄",label:"Fill Details"},{icon:"📎",label:"Upload NET Certificate"},{icon:"🏫",label:"University Verifies"},{icon:"🏛️",label:"UGC Approval"},{icon:"💰",label:"₹31,000/mo Fellowship"}],
    documents:["NET-JRF Certificate","Minority Certificate","University Admission","Aadhaar Card","Bank Details","Passport Photo"]
  },
  {
    id:12, name:"L&T Build India Scholarship", type:"private", field:"science",
    eligibility:"Engineering students (B.Tech/BE) with 60%+ in first year; financial need.",
    deadline:"2026-04-25", link:"https://www.lntecc.com",
    minMarks:60, maxIncome:600000, categories:["general","obc","sc","st","ews"],
    steps:[{icon:"📝",label:"Online Application"},{icon:"📄",label:"Academic Proof"},{icon:"📎",label:"Income Docs"},{icon:"📞",label:"Interview"},{icon:"✅",label:"Selection"},{icon:"💰",label:"₹Tuition Paid"}],
    documents:["1st Year Mark Sheet","Income Certificate","Admission Letter","Aadhaar Card","Bank Details","Passport Photo"]
  }
];

// ── HELPERS ────────────────────────────────
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const TODAY=new Date(); TODAY.setHours(0,0,0,0);
const daysUntil=d=>{const x=new Date(d);x.setHours(0,0,0,0);return Math.ceil((x-TODAY)/(864e5))};
const fmtDate=d=>new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
const esc=s=>{const d=document.createElement("div");d.textContent=s;return d.innerHTML};
const STORE=k=>{try{return JSON.parse(localStorage.getItem(k))||[]}catch{return[]}};
const SAVE=(k,v)=>localStorage.setItem(k,JSON.stringify(v));

// ── STATE ──────────────────────────────────
let activeFilter="all";
let fieldFilter="all";
let savedIds=STORE("sh_saved");
let trackerData=STORE("sh_tracker"); // [{id, status:'not_started'|'in_progress'|'submitted'|'approved'}]

// ── DOM ────────────────────────────────────
const grid=$("#cardsGrid"), searchIn=$("#searchInput"), noRes=$("#noResults");
const modalOv=$("#modalOverlay"), mTitle=$("#mTitle"), mType=$("#mType");
const mElig=$("#mElig"), mDeadline=$("#mDeadline"), mFlow=$("#mFlow");
const mDocs=$("#mDocs"), mApply=$("#mApply"), mBookmark=$("#mBookmark");
const mProgress=$("#mProgress");
const navbar=$("#navbar"), hamburger=$("#hamburger"), navLinks=$("#navLinks");

// ═══════════ RENDER CARDS ═══════════
function render(){
  const q=searchIn.value.toLowerCase().trim();
  const ff=fieldFilter;
  const list=scholarships.filter(s=>{
    const matchQ=s.name.toLowerCase().includes(q)||s.eligibility.toLowerCase().includes(q);
    if(!matchQ) return false;
    if(activeFilter==="government") return s.type==="government";
    if(activeFilter==="private") return s.type==="private";
    if(activeFilter==="upcoming") return daysUntil(s.deadline)>=0;
    if(activeFilter==="expired") return daysUntil(s.deadline)<0;
    if(activeFilter==="saved") return savedIds.includes(s.id);
    return true;
  }).filter(s=>ff==="all"||s.field===ff);

  grid.innerHTML="";
  noRes.style.display=list.length?"none":"block";
  list.forEach((s,i)=>{
    const days=daysUntil(s.deadline);
    const urg=days>=0&&days<=7;
    const exp=days<0;
    const saved=savedIds.includes(s.id);
    const c=document.createElement("div");
    c.className=`s-card ${s.type} ${urg?"urgent":""}`;
    c.style.animationDelay=`${i*.06}s`;
    c.innerHTML=`
      <span class="c-type ${s.type}">${s.type}</span>
      <span class="c-field">${fieldLabel(s.field)}</span>
      <h3 class="c-title">${s.name}</h3>
      <p class="c-elig">${s.eligibility}</p>
      <div class="c-foot">
        <span class="c-dead ${urg||exp?"urgent-text":""}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${exp?"Expired":urg?days+"d left!":fmtDate(s.deadline)}
        </span>
        <div class="c-actions">
          <button class="btn-save ${saved?"saved":""}" onclick="toggleSave(${s.id})" title="${saved?"Remove bookmark":"Save"}">${saved?"★":"☆"}</button>
          <button class="btn-det" onclick="openModal(${s.id})">Details</button>
          <a href="${s.link}" target="_blank" rel="noopener" class="btn-apl">Apply</a>
        </div>
      </div>`;
    grid.appendChild(c);
  });
  observe();
}

function fieldLabel(f){
  const m={science:"Science & Tech",arts:"Arts & Humanities",commerce:"Commerce",medical:"Medical",general:"All Streams"};
  return m[f]||f;
}

// ═══════════ BOOKMARK / SAVE ═══════════
function toggleSave(id){
  if(savedIds.includes(id)){
    savedIds=savedIds.filter(i=>i!==id);
    toast("Bookmark removed");
  }else{
    savedIds.push(id);
    toast("Scholarship saved ⭐");
    // Add to tracker if not present
    if(!trackerData.find(t=>t.id===id)){
      trackerData.push({id,status:"not_started"});
      SAVE("sh_tracker",trackerData);
    }
  }
  SAVE("sh_saved",savedIds);
  render();
  updateAnalytics();
  renderTracker();
}

// ═══════════ MODAL ═══════════
function openModal(id){
  const s=scholarships.find(x=>x.id===id);
  if(!s) return;
  mTitle.textContent=s.name;
  mType.textContent=s.type;
  mType.className=`mbadge ${s.type}`;
  mElig.textContent=s.eligibility;
  const days=daysUntil(s.deadline);
  const urg=days>=0&&days<=7;
  mDeadline.textContent=days<0?`Expired (${fmtDate(s.deadline)})`:`Deadline: ${fmtDate(s.deadline)} (${days}d left)`;
  mDeadline.className=`mdeadline ${urg?"urgent":""}`;
  // Flow
  mFlow.innerHTML=s.steps.map((st,i)=>`<div class="flow-step"><div class="flow-box"><span>${st.icon}</span>${st.label}</div>${i<s.steps.length-1?'<span class="flow-arrow">→</span>':""}</div>`).join("");
  // Docs
  mDocs.innerHTML=s.documents.map(d=>`<li><span class="chk">✓</span>${d}</li>`).join("");
  // Progress
  const statuses=["not_started","in_progress","submitted","approved"];
  const labels=["Not Started","In Progress","Submitted","Approved"];
  const tracker=trackerData.find(t=>t.id===id);
  const curIdx=tracker?statuses.indexOf(tracker.status):0;
  mProgress.innerHTML=statuses.map((st,i)=>{
    const done=i<curIdx;
    const active=i===curIdx;
    return `<div class="pstep ${done?"done-line":""}">
      <div class="pdot ${done?"done":active?"active":""}" onclick="setTrackerStatus(${id},'${st}')">${done?"✓":i+1}</div>
      <span class="plbl">${labels[i]}</span>
    </div>`;
  }).join("");
  // Bookmark btn
  const saved=savedIds.includes(id);
  mBookmark.textContent=saved?"★ Saved":"☆ Save";
  mBookmark.onclick=()=>{toggleSave(id);openModal(id)};
  mApply.href=s.link;
  modalOv.classList.add("active");
  document.body.style.overflow="hidden";
}

function closeModal(){
  modalOv.classList.remove("active");
  document.body.style.overflow="";
}
$("#modalClose").addEventListener("click",closeModal);
modalOv.addEventListener("click",e=>{if(e.target===modalOv)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

// ═══════════ TRACKER ═══════════
function setTrackerStatus(id,status){
  trackerData=trackerData.map(t=>t.id===id?{...t,status}:t);
  if(!trackerData.find(t=>t.id===id)) trackerData.push({id,status});
  SAVE("sh_tracker",trackerData);
  openModal(id); // refresh modal
  renderTracker();
  toast("Status updated");
}

function renderTracker(){
  const el=$("#trackerList");
  const empty=$("#trackerEmpty");
  const items=trackerData.filter(t=>savedIds.includes(t.id));
  if(!items.length){el.innerHTML="";empty.style.display="block";return}
  empty.style.display="none";
  const statuses=["not_started","in_progress","submitted","approved"];
  const labels=["Not Started","In Progress","Submitted","Approved"];
  el.innerHTML=items.map(t=>{
    const s=scholarships.find(x=>x.id===t.id);
    if(!s) return "";
    const idx=statuses.indexOf(t.status);
    return `<div class="tracker-item">
      <span class="tracker-name">${s.name}</span>
      <div class="tracker-status">${statuses.map((st,i)=>{
        const cls=i<=idx?(i===3?"approved":i===2?"submitted":"filled"):"";
        return `<span class="ts ${cls}" onclick="setTrackerStatus(${t.id},'${st}')" title="${labels[i]}"></span>`;
      }).join("")}</div>
      <span class="tracker-lbl">${labels[idx]}</span>
    </div>`;
  }).join("");
}

// ═══════════ SEARCH & FILTERS ═══════════
searchIn.addEventListener("input",render);
$$(".fbtn").forEach(b=>b.addEventListener("click",()=>{
  $$(".fbtn").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  activeFilter=b.dataset.filter;
  render();
}));
$("#fieldFilter").addEventListener("change",e=>{
  fieldFilter=e.target.value;
  render();
});

// ═══════════ ELIGIBILITY CHECKER ═══════════
$("#eligForm").addEventListener("submit",e=>{
  e.preventDefault();
  const marks=+$("#eligMarks").value;
  const income=+$("#eligIncome").value;
  const cat=$("#eligCategory").value;
  const field=$("#eligField").value;
  const results=scholarships.filter(s=>{
    if(marks<s.minMarks) return false;
    if(income>s.maxIncome) return false;
    if(!s.categories.includes(cat)) return false;
    if(field!=="general"&&s.field!=="general"&&s.field!==field) return false;
    if(daysUntil(s.deadline)<0) return false;
    return true;
  });
  const box=$("#eligResults");
  const ul=$("#eligList");
  box.style.display="block";
  if(!results.length){
    ul.innerHTML="<li>No matching scholarships found. Try adjusting your filters.</li>";
    return;
  }
  ul.innerHTML=results.map(s=>`<li onclick="openModal(${s.id})"><span class="e-icon">${s.type==="government"?"🏛️":"🏢"}</span><span><strong>${s.name}</strong> — ${fmtDate(s.deadline)}</span></li>`).join("");
});

// ═══════════ PERSONALIZED DASHBOARD ═══════════
$("#dashRecommend").addEventListener("click",()=>{
  const income=+$("#dashIncome").value||Infinity;
  const cat=$("#dashCategory").value;
  const results=scholarships.filter(s=>{
    if(income>s.maxIncome&&s.maxIncome!==Infinity) return false;
    if(!s.categories.includes(cat)) return false;
    if(daysUntil(s.deadline)<0) return false;
    return true;
  });
  const box=$("#dashResults");
  box.style.display="block";
  if(!results.length){
    box.innerHTML="<h4>No recommendations found.</h4><p>Try different criteria.</p>";
    return;
  }
  box.innerHTML=`<h4>Recommended for you (${results.length})</h4><ul>${results.map(s=>`<li onclick="openModal(${s.id})" style="cursor:pointer">${s.type==="government"?"🏛️":"🏢"} <strong>${s.name}</strong> — Deadline: ${fmtDate(s.deadline)}</li>`).join("")}</ul>`;
});

// ═══════════ ANALYTICS ═══════════
function updateAnalytics(){
  const total=scholarships.length;
  const upcoming=scholarships.filter(s=>daysUntil(s.deadline)>=0).length;
  const urgent=scholarships.filter(s=>{const d=daysUntil(s.deadline);return d>=0&&d<=7}).length;
  const saved=savedIds.length;
  animNum($("#anTotal"),total);
  animNum($("#anUpcoming"),upcoming);
  animNum($("#anSaved"),saved);
  animNum($("#anUrgent"),urgent);
  // Hero stats
  animNum($("#statTotal"),total,800);
  animNum($("#statGov"),scholarships.filter(s=>s.type==="government").length,800);
  animNum($("#statPvt"),scholarships.filter(s=>s.type==="private").length,800);
  animNum($("#statSaved"),saved,800);
}

function animNum(el,target,dur=600){
  let s=0;
  const step=ts=>{
    if(!s) s=ts;
    const p=Math.min((ts-s)/dur,1);
    el.textContent=Math.floor(p*target);
    if(p<1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ═══════════ AI CHAT ASSISTANT ═══════════
const chatMessages=$("#chatMessages");
const chatForm=$("#chatForm");
const chatInput=$("#chatInput");

chatForm.addEventListener("submit",e=>{
  e.preventDefault();
  const q=chatInput.value.trim();
  if(!q) return;
  addMsg(q,"user");
  chatInput.value="";
  setTimeout(()=>addMsg(botReply(q),"bot"),500);
});

function addMsg(text,type){
  const d=document.createElement("div");
  d.className=`chat-msg ${type}`;
  d.innerHTML=`<div class="msg-bubble">${text}</div>`;
  chatMessages.appendChild(d);
  chatMessages.scrollTop=chatMessages.scrollHeight;
}

function botReply(q){
  const ql=q.toLowerCase();
  // Government scholarships
  if(ql.includes("government")){
    const g=scholarships.filter(s=>s.type==="government"&&daysUntil(s.deadline)>=0);
    return `Found ${g.length} government scholarships:<br>${g.map(s=>`• <strong>${s.name}</strong> — ${fmtDate(s.deadline)}`).join("<br>")}`;
  }
  // Private scholarships
  if(ql.includes("private")){
    const p=scholarships.filter(s=>s.type==="private"&&daysUntil(s.deadline)>=0);
    return `Found ${p.length} private scholarships:<br>${p.map(s=>`• <strong>${s.name}</strong> — ${fmtDate(s.deadline)}`).join("<br>")}`;
  }
  // Documents
  if(ql.includes("document")||ql.includes("docs")){
    return `Common documents needed:<br>• Aadhaar Card / ID Proof<br>• Income Certificate<br>• Academic Mark Sheets<br>• Bank Passbook<br>• Passport Photo<br>• Caste Certificate (if applicable)<br><br>Check individual scholarships for specific requirements!`;
  }
  // Deadline
  if(ql.includes("deadline")||ql.includes("urgent")){
    const u=scholarships.filter(s=>{const d=daysUntil(s.deadline);return d>=0&&d<=30});
    if(!u.length) return "No deadlines in the next 30 days. You're all caught up! 🎉";
    return `Upcoming deadlines (next 30 days):<br>${u.map(s=>`• <strong>${s.name}</strong> — ${fmtDate(s.deadline)} (${daysUntil(s.deadline)}d left)`).join("<br>")}`;
  }
  // Eligibility
  if(ql.includes("eligib")||ql.includes("apply for")||ql.includes("which")){
    return `To find scholarships you're eligible for:<br>1. Go to the <strong>Eligibility Checker</strong> section<br>2. Enter your marks, income, category & field<br>3. Get instant matches!<br><br>Or tell me your details: "I have 85% marks and ₹2 lakh income"`;
  }
  // Income + marks pattern
  const marksMatch=ql.match(/(\d+)\s*(%|marks|percent)/);
  const incomeMatch=ql.match(/(\d+)\s*(lakh|lac|k|income)/);
  if(marksMatch||incomeMatch){
    const marks=marksMatch?+marksMatch[1]:50;
    const income=incomeMatch?+incomeMatch[1]*(ql.includes("lakh")||ql.includes("lac")?100000:ql.includes("k")?1000:1):Infinity;
    const matches=scholarships.filter(s=>marks>=s.minMarks&&income<=s.maxIncome&&daysUntil(s.deadline)>=0);
    if(!matches.length) return "I couldn't find exact matches. Try the Eligibility Checker for more options!";
    return `Based on your details, you may qualify for:<br>${matches.map(s=>`• <strong>${s.name}</strong>`).join("<br>")}`;
  }
  // How to apply
  if(ql.includes("how")||ql.includes("process")||ql.includes("steps")){
    return `General application process:<br>1️⃣ Register on the scholarship portal<br>2️⃣ Fill the application form<br>3️⃣ Upload required documents<br>4️⃣ Submit before deadline<br>5️⃣ Wait for verification & approval<br><br>Click "Details" on any scholarship for its specific process!`;
  }
  // Saved
  if(ql.includes("saved")||ql.includes("bookmark")){
    if(!savedIds.length) return "You haven't saved any scholarships yet. Click ☆ on a card to save!";
    const s=scholarships.filter(x=>savedIds.includes(x.id));
    return `Your saved scholarships:<br>${s.map(x=>`• <strong>${x.name}</strong>`).join("<br>")}`;
  }
  // Hello / Hi
  if(ql.includes("hello")||ql.includes("hi ")||ql==="hi"||ql.includes("hey")){
    return "Hello! 👋 I'm your scholarship assistant. Ask me about scholarships, documents, eligibility, or deadlines!";
  }
  // Help
  if(ql.includes("help")){
    return `I can help with:<br>• "Show government scholarships"<br>• "What documents are needed?"<br>• "Upcoming deadlines"<br>• "Which scholarships can I apply for?"<br>• "I have 80% and 3 lakh income"<br>• "How to apply?"<br>• "Show my saved scholarships"`;
  }
  // Thank you
  if(ql.includes("thank")){
    return "You're welcome! 😊 Good luck with your applications! Feel free to ask anything else.";
  }
  // Default
  return `I'm not sure about that 🤔 Try asking about:<br>• Government / Private scholarships<br>• Required documents<br>• Upcoming deadlines<br>• Eligibility<br>• Application process<br><br>Or type <strong>"help"</strong> for more options!`;
}

// ═══════════ CALENDAR ═══════════
let calDate=new Date();
const calGrid=$("#calGrid"), calMonth=$("#calMonth");

function renderCalendar(){
  const y=calDate.getFullYear(), m=calDate.getMonth();
  calMonth.textContent=new Date(y,m).toLocaleString("en-IN",{month:"long",year:"numeric"});
  calGrid.innerHTML="";
  const dayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  dayNames.forEach(d=>{const h=document.createElement("div");h.className="cal-day-head";h.textContent=d;calGrid.appendChild(h)});
  const first=new Date(y,m,1).getDay();
  const daysInMonth=new Date(y,m+1,0).getDate();
  const prevDays=new Date(y,m,0).getDate();
  // prev month
  for(let i=first-1;i>=0;i--){
    const c=document.createElement("div");c.className="cal-cell other-month";c.textContent=prevDays-i;calGrid.appendChild(c);
  }
  // current month
  for(let d=1;d<=daysInMonth;d++){
    const c=document.createElement("div");c.className="cal-cell";c.textContent=d;
    const dateStr=`${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const todayStr=TODAY.toISOString().slice(0,10);
    if(dateStr===todayStr) c.classList.add("today");
    // Check events
    const evts=scholarships.filter(s=>s.deadline===dateStr);
    if(evts.length){
      c.classList.add("has-event");
      const days=daysUntil(dateStr);
      const dotColor=days>=0&&days<=7?"red":evts[0].type==="government"?"blue":"yellow";
      c.innerHTML=`${d}<span class="cal-dot ${dotColor}"></span>`;
      c.title=evts.map(s=>s.name).join(", ");
      c.onclick=()=>openModal(evts[0].id);
    }
    calGrid.appendChild(c);
  }
  // next month fill
  const totalCells=first+daysInMonth;
  const rem=totalCells%7===0?0:7-totalCells%7;
  for(let i=1;i<=rem;i++){
    const c=document.createElement("div");c.className="cal-cell other-month";c.textContent=i;calGrid.appendChild(c);
  }
}
$("#calPrev").addEventListener("click",()=>{calDate.setMonth(calDate.getMonth()-1);renderCalendar()});
$("#calNext").addEventListener("click",()=>{calDate.setMonth(calDate.getMonth()+1);renderCalendar()});

// ═══════════ DOCUMENT GENERATOR ═══════════
const docGenSel=$("#docGenSelect");
const genDocs=$("#genDocs");
scholarships.forEach(s=>{const o=document.createElement("option");o.value=s.id;o.textContent=s.name;docGenSel.appendChild(o)});
docGenSel.addEventListener("change",()=>{
  const id=+docGenSel.value;
  if(!id){genDocs.innerHTML="";return}
  const s=scholarships.find(x=>x.id===id);
  genDocs.innerHTML=s.documents.map(d=>`<li><span class="chk">✓</span>${d}</li>`).join("");
});

// ═══════════ DOWNLOAD TEMPLATES ═══════════
function downloadTemplate(name,content){
  const blob=new Blob([content],{type:"text/plain"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=name;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("Template downloaded ✅");
}
$("#dlResume").addEventListener("click",()=>downloadTemplate("Resume_Template.txt",
`═══════════════════════════════════════
       STUDENT RESUME TEMPLATE
═══════════════════════════════════════

FULL NAME
Email: your.email@example.com | Phone: +91 XXXXX XXXXX
LinkedIn: linkedin.com/in/yourname | GitHub: github.com/yourname

───────────────────────────────────────
OBJECTIVE
───────────────────────────────────────
[Write a 2-3 line objective statement about your career goals]

───────────────────────────────────────
EDUCATION
───────────────────────────────────────
Degree Name — University Name (Year - Year)
• CGPA / Percentage: X.XX / XX%
• Relevant Coursework: Subject 1, Subject 2, Subject 3

───────────────────────────────────────
SKILLS
───────────────────────────────────────
• Technical: Skill 1, Skill 2, Skill 3
• Soft Skills: Communication, Leadership, Teamwork
• Languages: English, Hindi

───────────────────────────────────────
PROJECTS
───────────────────────────────────────
Project Name (Month Year)
• Description of what you built
• Technologies used
• Key achievement/outcome

───────────────────────────────────────
EXPERIENCE
───────────────────────────────────────
Internship Title — Company Name (Month Year - Month Year)
• Responsibility 1
• Achievement with measurable impact

───────────────────────────────────────
ACHIEVEMENTS
───────────────────────────────────────
• Achievement 1
• Achievement 2

───────────────────────────────────────
REFERENCES
───────────────────────────────────────
Available upon request
`));

$("#dlSOP").addEventListener("click",()=>downloadTemplate("SOP_Template.txt",
`═══════════════════════════════════════
   STATEMENT OF PURPOSE (SOP) TEMPLATE
═══════════════════════════════════════

PARAGRAPH 1 — INTRODUCTION
Start with a compelling hook. Mention your name, current academic status,
and the scholarship/program you're applying for.

PARAGRAPH 2 — ACADEMIC BACKGROUND
Discuss your academic journey, key subjects, grades, and
what sparked your interest in this field.

PARAGRAPH 3 — EXTRACURRICULARS & ACHIEVEMENTS
Highlight leadership roles, community service, competitions,
or any relevant achievements.

PARAGRAPH 4 — WHY THIS SCHOLARSHIP
Explain why you need this scholarship, how it aligns with your
goals, and what you'll do with the opportunity.

PARAGRAPH 5 — FUTURE GOALS
Describe your short-term and long-term career goals.
Show how this scholarship is a stepping stone.

PARAGRAPH 6 — CONCLUSION
Summarize your key points and express gratitude.
End with a strong closing statement.

TIPS:
• Keep it 500-1000 words
• Be genuine and specific
• Proofread multiple times
• Get feedback from mentors
`));

$("#dlForm").addEventListener("click",()=>downloadTemplate("Sample_Application_Form.txt",
`═══════════════════════════════════════
     SAMPLE SCHOLARSHIP APPLICATION
═══════════════════════════════════════

PERSONAL INFORMATION
─────────────────────
Full Name: ____________________
Date of Birth: ____/____/________
Gender: [ ] Male  [ ] Female  [ ] Other
Contact Number: +91 ___________
Email: ________________________
Address: ______________________

ACADEMIC DETAILS
─────────────────────
Current Institution: _______________
Course: ________________________
Year of Study: __________________
Roll Number: ___________________
CGPA / Percentage: _____________

FAMILY DETAILS
─────────────────────
Father's Name: __________________
Father's Occupation: ______________
Mother's Name: __________________
Mother's Occupation: ______________
Annual Family Income: ₹ __________
Category: [ ] General  [ ] OBC  [ ] SC  [ ] ST  [ ] EWS

DOCUMENTS ATTACHED
─────────────────────
[ ] ID Proof (Aadhaar)
[ ] Income Certificate
[ ] Mark Sheets
[ ] Bank Passbook
[ ] Passport Photo
[ ] Caste Certificate

DECLARATION
─────────────────────
I hereby declare that all information provided is true
and correct to the best of my knowledge.

Signature: ________________  Date: ____/____/________
`));

// ═══════════ LANGUAGE TOGGLE ═══════════
const i18n={
  en:{heroBadge:"Your Complete Student Companion",heroTitle1:"Discover.",heroTitle2:"Apply.",heroTitle3:"Succeed.",heroSub:"Find scholarships, track applications, check eligibility, and get AI-powered guidance — all in one platform.",heroBtn1:"Explore Scholarships",heroBtn2:"Check Eligibility",statTotal:"Total",statGov:"Government",statPvt:"Private",statSaved:"Saved",schTitle:"Scholarship Hub",schDesc:"Browse, search, filter and bookmark scholarships.",fieldLabel:"Field of Study:",noResults:"No scholarships found.",eligTitle:"Eligibility Checker",eligDesc:"Enter your details to find matching scholarships instantly.",dashTitle:"Your Dashboard",dashDesc:"Personalized recommendations & progress overview.",assistTitle:"AI Scholarship Assistant",assistDesc:"Ask questions about scholarships, documents, and eligibility.",calTitle:"Deadline Calendar",calDesc:"Visualize scholarship deadlines at a glance.",docTitle:"Document Center",docDesc:"Essential documents, preparation tips, and downloadable templates."},
  hi:{heroBadge:"आपका संपूर्ण विद्यार्थी साथी",heroTitle1:"खोजें।",heroTitle2:"आवेदन करें।",heroTitle3:"सफल हों।",heroSub:"छात्रवृत्तियाँ खोजें, आवेदन ट्रैक करें, पात्रता जाँचें — सब एक प्लेटफ़ॉर्म पर।",heroBtn1:"छात्रवृत्तियाँ देखें",heroBtn2:"पात्रता जाँचें",statTotal:"कुल",statGov:"सरकारी",statPvt:"निजी",statSaved:"सहेजा",schTitle:"छात्रवृत्ति हब",schDesc:"छात्रवृत्तियाँ ब्राउज़ करें, खोजें और बुकमार्क करें।",fieldLabel:"अध्ययन क्षेत्र:",noResults:"कोई छात्रवृत्ति नहीं मिली।",eligTitle:"पात्रता जाँच",eligDesc:"मिलान योग्य छात्रवृत्ति खोजने के लिए अपना विवरण दर्ज करें।",dashTitle:"आपका डैशबोर्ड",dashDesc:"व्यक्तिगत अनुशंसाएँ और प्रगति।",assistTitle:"AI छात्रवृत्ति सहायक",assistDesc:"छात्रवृत्ति, दस्तावेज़ और पात्रता के बारे में प्रश्न पूछें।",calTitle:"समय-सीमा कैलेंडर",calDesc:"छात्रवृत्ति की तारीखें एक नज़र में देखें।",docTitle:"डॉक्यूमेंट सेंटर",docDesc:"आवश्यक दस्तावेज़, टिप्स और डाउनलोड करने योग्य टेम्पलेट।"}
};
let currentLang="en";
$("#langToggle").addEventListener("click",()=>{
  currentLang=currentLang==="en"?"hi":"en";
  $("#langToggle").textContent=currentLang==="en"?"🌐 EN":"🌐 हिं";
  $$("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    if(i18n[currentLang][key]) el.textContent=i18n[currentLang][key];
  });
  toast(currentLang==="en"?"Language: English":"भाषा: हिंदी");
});

// ═══════════ NOTIFICATIONS / TOAST ═══════════
function toast(msg,type=""){
  const t=document.createElement("div");
  t.className=`toast ${type}`;
  t.innerHTML=`<span>${msg}</span>`;
  $("#toastContainer").appendChild(t);
  setTimeout(()=>{t.classList.add("out");setTimeout(()=>t.remove(),300)},3500);
}

function checkDeadlineAlerts(){
  scholarships.forEach(s=>{
    const d=daysUntil(s.deadline);
    if(d===2) toast(`⚠️ "${s.name}" deadline in 2 days!`,"warn");
    else if(d===1) toast(`🚨 "${s.name}" deadline TOMORROW!`,"error");
    else if(d===0) toast(`🔴 "${s.name}" deadline is TODAY!`,"error");
  });
  // Welcome toast (delayed)
  setTimeout(()=>toast("Welcome to ScholarHub! 🎓 Explore scholarships and start applying."),1000);
}

// ═══════════ NAVBAR ═══════════
window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",scrollY>30);
  // Active link
  let cur="";
  $$("section[id], header[id]").forEach(s=>{
    if(scrollY>=s.offsetTop-100) cur=s.id;
  });
  $$(".nav-link").forEach(a=>a.classList.toggle("active",a.getAttribute("data-section")===cur));
});
hamburger.addEventListener("click",()=>{hamburger.classList.toggle("open");navLinks.classList.toggle("open")});
$$(".nav-link").forEach(a=>a.addEventListener("click",()=>{hamburger.classList.remove("open");navLinks.classList.remove("open")}));

// ═══════════ SCROLL REVEAL ═══════════
function observe(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("vis");obs.unobserve(e.target)}});
  },{threshold:.1});
  $$(".s-card,.dcard,.an-card,.tip,.dl-card,.gstep").forEach(el=>obs.observe(el));
}

// ═══════════ INIT ═══════════
document.addEventListener("DOMContentLoaded",()=>{
  render();
  renderCalendar();
  updateAnalytics();
  renderTracker();
  observe();
  checkDeadlineAlerts();
});
