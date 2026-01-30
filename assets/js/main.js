// ======================
// Data (你之後可改圖與內容)
// ======================
const projectsLead = [
  {
    title: "百堂創業課程",
    desc: "主責規劃並執行創業實用技能課程，年度逾 5,000 人次參與。",
    img: "assets/images/course_1.jpg",
    details: {
      role: "主責規劃與執行（課程主題設計、講師協調、時程與現場）",
      highlights: [
        "主題涵蓋：稅務規劃、AI 工具應用、商品攝影等",
        "建立課程節奏與品質控管流程，讓系列課可複製擴張",
        "以報名/到場/回饋等指標追蹤成效"
      ]
    }
  },
  {
    title: "創業交流會",
    desc: "獨立策劃產業導向交流活動，促進創業者人脈連結與合作。",
    img: "assets/images/project-02.jpg",
    details: {
      role: "主責策劃（議程設計、邀請名單、現場動線與場控）",
      highlights: [
        "聚焦：美業、文創市集、設計接案等領域",
        "以破冰與媒合機制提升互動密度",
        "與跨單位窗口協作，確保資源到位"
      ]
    }
  },
  {
    title: "100+ 名人講座",
    desc: "講座策劃與現場執行，邀請知名創業家分享實務經驗。",
    img: "assets/images/project-03.jpg",
    details: {
      role: "講座統籌（來賓溝通、流程控時、現場執行）",
      highlights: [
        "完整 SOP：前期對焦 → 宣傳期 → 現場控台 → 後續成效回收",
        "以觀眾問題設計提升內容可用性",
        "與攝影/設計/場務快速協作"
      ]
    }
  },
  {
    title: "10,000+ 人次大型展會參展",
    desc: "主責參展規劃與聯繫，提升中心整體曝光度。",
    img: "assets/images/project-04.jpg",
    details: {
      role: "主責參展窗口（展位規劃、物料、協力廠商、現場排班）",
      highlights: [
        "參與：MEET TAIPEI、AI 商務展、教育科技展等",
        "根據展會受眾調整展示內容與互動動線",
        "統整現場回收名單與後續追蹤"
      ]
    }
  }
];

const projectsCoop = [
  { title: "「匯流成冊」壢市集－書市集企劃與執行", desc: "協力活動內容與現場執行。", img: "assets/images/coop-01.jpg", details: { role: "協作", highlights: ["現場執行支援", "內容與流程協作"]}},
  { title: "清大夜貓子電影院「我.們.家影展」－影展策劃", desc: "協力策展與執行細節。", img: "assets/images/coop-02.jpg", details: { role: "協作", highlights: ["活動企劃協作", "現場支援"]}},
  { title: "清大夜貓子電影院「自由放映室」－Podcast 錄製", desc: "協力錄製與內容整理。", img: "assets/images/coop-03.jpg", details: { role: "協作", highlights: ["錄製支援", "內容整理"]}},
  { title: "REAL 新竹區域接地支持實驗室《域報》－刊物編寫", desc: "協力資料整理與撰寫。", img: "assets/images/coop-04.jpg", details: { role: "協作", highlights: ["資料整理", "文字撰寫"]}},
  { title: "國立台灣文學館「展示教育組」－展覽策劃", desc: "協力展覽規劃任務。", img: "assets/images/coop-05.jpg", details: { role: "協作", highlights: ["策劃協作", "執行支援"]}},
];

const projectsPublic = [
  { title: "2025 全球串流客家計畫—執行者", desc: "參與公部門補助計畫，推動內容落地。", img: "assets/images/pub-01.jpg", details: { role: "執行", highlights: ["計畫執行", "資源整合"]}},
  { title: "2024 第五屆桃園市民學藝員—入選者", desc: "參與培力機制，累積藝文實務。", img: "assets/images/pub-02.jpg", details: { role: "入選", highlights: ["培力參與", "成果呈現"]}},
  { title: "2022 青年壯遊臺灣—尋找感動地圖實踐計畫—執行者", desc: "運用資源理解地方脈絡與議題。", img: "assets/images/pub-03.jpg", details: { role: "執行", highlights: ["地方議題實作", "企劃與執行"]}},
];

const skills = [
  { name: "專案獨立作業／團隊溝通能力", score: 95 },
  { name: "專案時程／進度控管", score: 89 },
  { name: "活動企劃與 ADDIE 課程設計", score: 94 },
  { name: "提案與簡報技巧", score: 83 },
  { name: "資料分析與報告撰寫", score: 86 },
  { name: "文書軟體與 AI 工具應用", score: 91 }
];

// ======================
// Helpers
// ======================
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  });
  children.forEach(c => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return node;
}

function renderCarousel(trackId, items) {
  const track = document.getElementById(trackId);
  track.innerHTML = "";
  items.forEach((item) => {
    const card = el("article", { class: "case", tabindex: "0", role: "button", "aria-label": `${item.title} 查看詳情` }, [
      el("img", { class: "case__img", src: item.img, alt: item.title }),
      el("div", { class: "case__body" }, [
        el("h3", { class: "case__title" }, [item.title ]),
      ])
    ]);

    card.addEventListener("click", () => openModal(item));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") openModal(item); });
    track.appendChild(card);
  });
}

function bindArrows(prevId, nextId, trackId) {
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  const track = document.getElementById(trackId);

  const step = () => Math.min(340, track.clientWidth * 0.8);

  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
}

function renderSkills() {
  const wrap = document.getElementById("skillsChart");
  wrap.innerHTML = "";
  skills.forEach((s) => {
    const row = el("div", { class: "skill" }, [
      el("div", { class: "skill__top" }, [
        el("div", { class: "skill__name" }, [`${s.name}`]),
      ]),
      el("div", { class: "bar" }, [
        el("div", { class: "bar__fill", "data-score": String(s.score) })
      ])
    ]);
    wrap.appendChild(row);
  });

  // 進入視窗時再動畫填滿
  const fills = Array.from(document.querySelectorAll(".bar__fill"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        const score = ent.target.getAttribute("data-score") || "0";
        ent.target.style.width = `${score}%`;
      }
    });
  }, { threshold: 0.25 });

  fills.forEach(f => io.observe(f));
}

// ======================
// Modal
// ======================
function openModal(item) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = "";
  content.appendChild(el("img", { class: "modal__heroimg", src: item.img, alt: item.title }));
  content.appendChild(el("h3", { class: "modal__h" }, [item.title]));
  content.appendChild(el("p", { class: "modal__p" }, [item.desc]));

  if (item.details?.role) {
    content.appendChild(el("h4", { class: "modal__h" }, ["專案職責"]));
    content.appendChild(el("p", { class: "modal__p" }, [item.details.role]));
  }

  if (item.details?.highlights?.length) {
    content.appendChild(el("h4", { class: "modal__h" }, ["重點成果 / 做法"]));
    content.appendChild(el("ul", { class: "modal__list" }, item.details.highlights.map(t => el("li", {}, [t]))));
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function wireModal() {
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target && e.target.matches("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// ======================
// Nav: mobile toggle + active section
// ======================
function wireNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // 點選後收起（手機）
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // 觀察段落，自動高亮
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));

  const io = new IntersectionObserver((entries) => {
    // 找出目前可視比例最大的 section
    const visible = entries.filter(e => e.isIntersecting)
      .sort((a,b) => (b.intersectionRatio - a.intersectionRatio))[0];

    if (!visible) return;

    const id = visible.target.id;
    navLinks.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`));
  }, {
    rootMargin: "-20% 0px -65% 0px",
    threshold: [0.05, 0.10, 0.20, 0.35, 0.50, 0.70]
  });

  sections.forEach(s => io.observe(s));
}

// ======================
// Boot
// ======================
document.getElementById("year").textContent = String(new Date().getFullYear());

renderCarousel("projTrack", projectsLead);
renderCarousel("coopTrack", projectsCoop);
renderCarousel("pubTrack", projectsPublic);

bindArrows("projPrev", "projNext", "projTrack");
bindArrows("coopPrev", "coopNext", "coopTrack");
bindArrows("pubPrev", "pubNext", "pubTrack");

renderSkills();
wireModal();
wireNav();
