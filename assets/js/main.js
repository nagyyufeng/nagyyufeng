// ======================
// Data (你之後可改圖與內容)
// ======================
const projectsLead = [
  
  {
    title: "技能提升｜百堂創業課程",
    desc: "",
    img: "assets/images/course_1.jpg",
    details: {
      role: "系列課程專案執行（年度規劃、講師邀約、課程品質與現場場控）",
      highlights: [
        "調查創業需求，課程涵蓋：財務、AI工具應用、行銷策略等。",
        "建立高效率規劃與執行流程，確保課程品質一致。",
        "年度執行百場以上課程，累積超 5,000 人次參與與良好反饋。"
      ]
    }
  },
   {
    title: "實作導向｜創業工作坊",
    desc: "",
    img: "assets/images/workshop.jpg",
    details: {
      role: "工作坊專案執行（學習路徑、實作流程設計、成果發表）",
      highlights: [
        "從創業實務痛點出發，曾規劃：設計思考、廣告投放、短影音剪輯等主題。",
        "活動搭配觀念理解、實際操練、講師即時調整，引導學員產出具體成果。",
        "設計分組機制、輔助教材，提升活動參與度與成果品質。"
      ]
    }
  },
  {
    title: "關係經營｜創業交流會",
    desc: "",
    img: "assets/images/community.jpg",
    details: {
      role: "交流活動策劃執行（產業調查、規劃邀請對象、現場互動機制）",
      highlights: [
        "依產業屬性策劃交流主題，串聯多元角色（如主辦方、品牌端、創作者）同場互動。",
        "設計破冰與媒合流程，推進參與者合作可能。",
        "開放現場展示作品／商品，使交流收斂為具體回饋。"

      ]
    }
  },
   {
    title: "客服與資源媒合｜LINE官方帳號",
    desc: "",
    img: "assets/images/LINE.jpg",
    details: {
      role: "營運與管理LINE官方帳號",
      highlights: [
        "建立創業第一線諮詢窗口，累積近好友數達8,000人。",
        "建置自動化回覆機制、常見問題集，提升回覆效率與客服品質。",
        "整合創業資訊/補助計畫/合作窗口，協助對接適切資源。"
      ]
    }
  },
  {
    title: "影響力擴散｜創業名人講座",
    desc: "",
    img: "assets/images/master.jpg",
    details: {
      role: "名人講座內容策劃（主題定位、亮點敘事、現場主持）",
      highlights: [
        "掌握目標受眾與目的，邀請具影響力的創業者分享實務經驗",
        "撰寫講者亮點敘事與宣傳文案， 清楚傳達內容價值並提升報名成效。",
        "每場近百人參與，持續累積名人講座口碑。 "
      ]
    }
  },
  {
    title: "品牌拓展｜萬人級展會參展",
    desc: "主責參展規劃與聯繫，提升中心整體曝光度。",
    img: "assets/images/meet_1.jpg",
    details: {
      role: "參展專案窗口（展位規劃、廠商協調、現場場控）",
      highlights: [
        "依展會受眾調整展示內容與互動方式，提升品牌辨識度。",
        "負責展位視覺、配置與現場人力調度，確保執行效率。",
        "彙整潛在合作名單並進行後續追蹤，延續展會效益。"
      ]
    }
  }
];

const projectsCoop = [
  { title: "苔蘚視角文化工作室「匯流成冊」壢市集－書市集現場執行", desc: "協力活動內容與現場執行。", img: "assets/images/mossery.jpg", details: { role: "協作", highlights: ["現場執行支援", "內容與流程協作"]}},
  { title: "清大夜貓子電影院「我.們.家影展」－影展協力策劃", desc: "協力策展與執行細節。", img: "assets/images/home.jpg", details: { role: "協作", highlights: ["活動企劃協作", "現場支援"]}},
  { title: "清大夜貓子電影院「自由放映室」－Podcast 企劃與內容錄製", desc: "協力錄製與內容整理。", img: "assets/images/podcast.png", details: { role: "協作", highlights: ["錄製支援", "內容整理"]}},
  { title: "REAL 新竹區域接地支持實驗室《域報》－刊物編寫、人物採訪", desc: "協力資料整理與撰寫。", img: "assets/images/real.jpg", details: { role: "協作", highlights: ["資料整理", "文字撰寫"]}},
  { title: "國立台灣文學館「展示教育組」－策展實習", desc: "展覽規劃任務。", img: "assets/images/1949_1.png", details: { role: "協作", highlights: ["策劃協作", "執行支援"]}},
];

const projectsPublic = [
  { title: "2025 全球串流客家計畫—計畫執行者", desc: "參與公部門補助計畫，推動內容落地。", img: "assets/images/hakka_1.png", details: { role: "執行", highlights: ["計畫執行", "資源整合"]}},
  { title: "2025 全球串流客家計畫—成果攝影集", desc: "參與公部門補助計畫，推動內容落地。", img: "assets/images/PHOTO.png", details: { role: "執行", highlights: ["計畫執行", "資源整合"]}},
  { title: "2024 第五屆桃園市民學藝員—計畫入選者", desc: "參與培力機制，累積藝文實務。", img: "assets/images/cuarator_1.png", details: { role: "入選", highlights: ["培力參與", "成果呈現"]}},
  { title: "2022 青年壯遊臺灣—尋找感動地圖實踐計畫—計畫執行者", desc: "運用資源理解地方脈絡與議題。", img: "assets/images/map.jpg", details: { role: "執行", highlights: ["地方議題實作", "企劃與執行"]}},
];

const skills = [
  
  { name: "專案時程規劃與進度控管", score: 95 },
  { name: "團隊／跨單位溝通能力", score: 93 },
  { name: "活動企劃與異業合作", score: 94 },
  { name: "目標受眾洞察與 ADDIE 課程設計", score: 87 },
  { name: "公部門補助案／標案計畫書撰寫", score: 88 },
  { name: "產業調查與需求分析", score: 86 },
  { name: "提案與簡報技巧", score: 83 },
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

function renderCarouselWithoutModal(trackId, items) {
  const track = document.getElementById(trackId);
  track.innerHTML = "";
  items.forEach((item) => {
    const card = el("article", { class: "case", tabindex: "0", role: "button", "aria-label": `${item.title} 查看詳情` }, [
      el("img", { class: "case__img", src: item.img, alt: item.title }),
      el("div", { class: "case__body" }, [
        el("h3", { class: "case__title" }, [item.title ]),
      ])
    ]);

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
  // content.appendChild(el("img", { class: "modal__heroimg", src: item.img, alt: item.title }));
  content.appendChild(el("h3", { class: "modal__h" }, [item.title]));
  content.appendChild(el("p", { class: "modal__p" }, [item.desc]));

  if (item.details?.role) {
    content.appendChild(el("h4", { class: "modal__h" }, ["專案職責"]));
    content.appendChild(el("p", { class: "modal__p" }, [item.details.role]));
  }

  if (item.details?.highlights?.length) {
    content.appendChild(el("h4", { class: "modal__h" }, ["實際做法／成效"]));
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
renderCarouselWithoutModal("coopTrack", projectsCoop);
renderCarouselWithoutModal("pubTrack", projectsPublic);

bindArrows("projPrev", "projNext", "projTrack");
bindArrows("coopPrev", "coopNext", "coopTrack");
bindArrows("pubPrev", "pubNext", "pubTrack");

renderSkills();
wireModal();
wireNav();
