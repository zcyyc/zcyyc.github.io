const publications = [
  {
    year: 2026,
    venue: "ASE Industry'26",
    ccf: "A",
    type: { en: "Conference", zh: "会议" },
    fullVenue: "ACM/IEEE International Conference on Automated Software Engineering · Industry Showcase Track",
    title: "Debugging the Debuggers: Failure-Anchored Structured Recovery for Software Engineering Agents",
    authors: "Chenyu Zhao, Shenglin Zhang*, Yihang Lin, Wenwei Gu, Zhimin Chen, Yongqian Sun, Dan Pei, Chetan Bansal, Saravan Rajmohan, Minghua Ma.",
    image: "assets/publications/2026-ase-debuggers.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2026,
    venue: "TOSEM'26",
    ccf: "A",
    type: { en: "Journal", zh: "期刊" },
    fullVenue: "ACM Transactions on Software Engineering and Methodology",
    title: "Can Language Models Go Beyond Coding? Assessing the Capability of Language Models to Build Real-World Systems",
    authors: "Chenyu Zhao, Shenglin Zhang*, Zeshun Huang, Weilin Jin, Yongqian Sun, Dan Pei, Chaoyun Zhang, Qingwei Lin, Chetan Bansal, Saravan Rajmohan, Minghua Ma.",
    image: "assets/publications/2026-tosem-syscraft.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2026,
    venue: "ISSTA'26",
    ccf: "A",
    type: { en: "Conference", zh: "会议" },
    fullVenue: "ACM SIGSOFT International Symposium on Software Testing and Analysis",
    title: "EvidenT: An Evidence-Preserving Framework for Iterative System-Level Package Repair",
    authors: "Chenyu Zhao, Minghua Ma*, Shenglin Zhang, Zeshun Huang, Yongqian Sun, Chetan Bansal, Saravan Rajmohan, Dan Pei.",
    image: "assets/publications/2026-issta-evident.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2025,
    venue: "TSC'25",
    ccf: "A",
    type: { en: "Journal", zh: "期刊" },
    fullVenue: "IEEE Transactions on Services Computing",
    title: "Bridging Edge and Cloud: A Knowledge-Enhanced Framework for Efficient Time Series Anomaly Detection",
    authors: "Shenglin Zhang, Jiacheng Zhang, Guohua Liu, Shiqi Chen, Chenyu Zhao, Minghua Ma, Yutong Chen, Yongqian Sun*, Dan Pei.",
    image: "assets/publications/2025-tsc-edge-cloud.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2025,
    venue: "ISSRE'25",
    ccf: "B",
    type: { en: "Conference", zh: "会议" },
    fullVenue: "IEEE International Symposium on Software Reliability Engineering",
    title: "Integrating GraphSAGE and Mamba for Self-Supervised Spatio-Temporal Fault Detection in Microservice Systems",
    authors: "Shenglin Zhang, Yingke Li, Jianjin Tang, Chenyu Zhao, Wenwei Gu, Yongqian Sun*, Dan Pei.",
    image: "assets/publications/2025-issre-graphsage-mamba.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2025,
    venue: "EMSE'25",
    ccf: "B",
    type: { en: "Journal", zh: "期刊" },
    fullVenue: "Empirical Software Engineering",
    title: "LogEval: A Comprehensive Benchmark Suite for LLMs in Log Analysis",
    authors: "Tianyu Cui, Shiyu Ma, Ziang Chen, Tong Xiao, Chenyu Zhao, Shimin Tao, Yilun Liu, Shenglin Zhang*, Duoming Lin, Changchang Liu, Yuzhe Cai, Weibin Meng, Yongqian Sun, Dan Pei.",
    image: "assets/publications/2025-emse-logeval.jpg",
    paper: "https://nkcs.iops.ai/wp-content/uploads/2026/01/LogEval-A-comprehensive-benchmark-suite-for-LLMs-in-log-analysis.pdf",
    code: "https://github.com/LinDuoming/LogEval"
  },
  {
    year: 2025,
    venue: "KDD'25",
    ccf: "A",
    type: { en: "Conference", zh: "会议" },
    fullVenue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    title: "FlowXpert: Expertizing Troubleshooting Workflow Orchestration with Knowledge Base and Multi-Agent Coevolution",
    authors: "Binpeng Shi, Yu Luo, Jingya Wang, Yongxin Zhao, Shenglin Zhang*, Bowen Hao, Chenyu Zhao, Yongqian Sun, Zhi Zhang, Ronghua Sun, Haihua Li, Wei Song, Xiaolong Chen, Jingbo Miao, Dan Pei.",
    image: "assets/publications/2025-kdd-flowxpert.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2025,
    venue: "FSE'25",
    ccf: "A",
    type: { en: "Conference", zh: "会议" },
    fullVenue: "ACM International Conference on the Foundations of Software Engineering",
    title: "LLM-Augmented Ticket Aggregation for Low-cost Mobile OS Defect Resolution",
    authors: "Yongqian Sun, Bowen Hao, Xiaotian Wang, Chenyu Zhao, Yongxin Zhao, Binpeng Shi, Shenglin Zhang*, Qiao Ge, Wenhu Li, Hua Wei, Dan Pei.",
    image: "assets/publications/2025-fse-ticket-aggregation.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2024,
    venue: "TSC'24",
    ccf: "A",
    type: { en: "Journal", zh: "期刊" },
    fullVenue: "IEEE Transactions on Services Computing",
    title: "No More Data Silos: Unified Microservice Failure Diagnosis with Temporal Knowledge Graph",
    authors: "Shenglin Zhang, Yongxin Zhao, Sibo Xia, Shirui Wei, Yongqian Sun*, Chenyu Zhao, Shiyu Ma, Junhua Kuang, Bolin Zhu, Lemeng Pan, Yicheng Guo, Dan Pei.",
    image: "assets/publications/2024-tsc-data-silos.jpg",
    paper: "",
    code: ""
  },
  {
    year: 2023,
    venue: "KDD'23",
    ccf: "A",
    type: { en: "Conference", zh: "会议" },
    fullVenue: "ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
    title: "Robust Multimodal Failure Detection for Microservice Systems",
    authors: "Chenyu Zhao, Minghua Ma, Zhenyu Zhong, Shenglin Zhang*, Zhiyuan Tan, Xiao Xiong, Lulu Yu, Jiayi Feng, Yongqian Sun, Yuzhi Zhang, Dan Pei, Qingwei Lin, Dongmei Zhang.",
    image: "assets/publications/2023-kdd-multimodal-failure.jpg",
    paper: "",
    code: ""
  }
];

const isChinese = document.documentElement.lang.toLowerCase().startsWith("zh");
const publicationList = document.querySelector(".publication-list");

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const emphasizeOwner = (authors) => escapeHtml(authors).replace(
  /Chenyu Zhao|赵晨宇/gi,
  "<strong>$&</strong>"
);

const renderLink = (url, label, hint) => {
  if (!url) {
    return `<span class="pub-link is-placeholder" title="${escapeHtml(hint)}">${escapeHtml(label)}</span>`;
  }

  return `<a class="pub-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
};

const renderPublication = (publication) => {
  const imageLabel = isChinese ? "框架图待补充" : "Framework figure";
  const paperLabel = isChinese ? "论文" : "Paper";
  const codeLabel = isChinese ? "代码" : "Code";
  const linkHint = isChinese ? "可在 publications.js 中补充链接" : "Add the URL in publications.js";

  return `
    <article class="publication">
      <div class="publication-figure">
        <img src="${escapeHtml(publication.image)}" alt="${escapeHtml(publication.title)} framework" loading="lazy">
        <div class="figure-placeholder" aria-hidden="true">
          <span>${imageLabel}</span>
          <code>${escapeHtml(publication.image)}</code>
        </div>
      </div>
      <div class="publication-content">
        <div class="publication-meta">
          <span class="publication-venue">${escapeHtml(publication.venue)}</span>
          <span class="grade grade-${publication.ccf.toLowerCase()}">CCF ${escapeHtml(publication.ccf)}</span>
        </div>
        <h3>${escapeHtml(publication.title)}</h3>
        <p class="authors">${emphasizeOwner(publication.authors)}</p>
        <p class="venue-full"><span>${escapeHtml(publication.type[isChinese ? "zh" : "en"])}</span>${escapeHtml(publication.fullVenue)}</p>
        <div class="pub-actions">
          ${renderLink(publication.paper, paperLabel, linkHint)}
          ${renderLink(publication.code, codeLabel, linkHint)}
        </div>
      </div>
    </article>`;
};

if (publicationList) {
  const years = [...new Set(publications.map((publication) => publication.year))];

  publicationList.innerHTML = years.map((year) => `
    <section class="pub-year-group" aria-labelledby="publications-${year}">
      <h2 class="pub-year-heading" id="publications-${year}">${year}</h2>
      <div class="pub-card-list">
        ${publications.filter((publication) => publication.year === year).map(renderPublication).join("")}
      </div>
    </section>`).join("");

  publicationList.querySelectorAll(".publication-figure img").forEach((image) => {
    const figure = image.closest(".publication-figure");
    const showImage = () => figure.classList.add("has-image");
    const showPlaceholder = () => {
      image.hidden = true;
      figure.classList.remove("has-image");
    };

    image.addEventListener("load", showImage);
    image.addEventListener("error", showPlaceholder);

    if (image.complete) {
      image.naturalWidth > 0 ? showImage() : showPlaceholder();
    }
  });
}
