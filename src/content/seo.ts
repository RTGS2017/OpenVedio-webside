/**
 * 发布地址是 GitHub Pages 项目站。
 * 视频没有单独的下载页，不要使用 VideoObject。
 * 市场价不是琉音科技售价，不要使用 Offer。
 */
export const SITE_ORIGIN = "https://rtgs2017.github.io/OpenVedio-webside";

const poster = `${SITE_ORIGIN}/media/hero-poster.svg`;
const posterAlt = "实验台静帧：黄色小球沿斜面下滑，轨迹上有一次断裂跳跃。不是产品录屏。";

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
  h1: string;
  imageAlt: string;
  jsonLd: Record<string, unknown>;
};

function pageUrl(path: string) {
  return `${SITE_ORIGIN}${path === "/" ? "/" : path}`;
}

function webPage(name: string, description: string, path: string, type = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: pageUrl(path),
    inLanguage: "zh-CN",
    isPartOf: {
      "@type": "WebSite",
      name: "琉音科技",
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export const homeSeo: SeoEntry = {
  title: "琉音科技 · 符合物理规则的具身训练素材",
  description: "琉音科技用生成式人工智能生产符合物理规则的具身训练数据集，用于替换人力密集型采集。",
  path: "/",
  h1: "符合物理规则的具身训练素材",
  imageAlt: posterAlt,
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "琉音科技",
        url: `${SITE_ORIGIN}/`,
        description: "生成符合物理规则的具身训练素材与数据集",
      },
      {
        "@type": "WebSite",
        name: "琉音科技",
        url: `${SITE_ORIGIN}/`,
        inLanguage: "zh-CN",
        description: "生成符合物理规则的具身训练素材与数据集",
      },
    ],
  },
};

export const dataSeo: SeoEntry = {
  title: "交互数据与物理理解素材 · 琉音科技",
  description: "提供与真实物体交互的数据，以及第三人称物理世界观察素材，并附内部真机验证与生成对照。",
  path: "/data",
  h1: "两类具身训练数据",
  imageAlt: posterAlt,
  jsonLd: webPage("两类具身训练数据", "提供与真实物体交互的数据，以及第三人称物理世界观察素材，并附内部真机验证与生成对照。", "/data"),
};

export const deliverablesSeo: SeoEntry = {
  title: "可交付参数 · 琉音科技",
  description: "列出关节、末端、相机、深度、点云和分割等可交付字段，并区分默认保存与底层可取。",
  path: "/deliverables",
  h1: "可交付参数",
  imageAlt: posterAlt,
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "可交付参数",
    description: "列出关节、末端、相机、深度、点云和分割等可交付字段，并区分默认保存与底层可取。",
    inLanguage: "zh-CN",
    url: pageUrl("/deliverables"),
    author: {
      "@type": "Organization",
      name: "琉音科技",
    },
  },
};

export const pricingSeo: SeoEntry = {
  title: "合作方式与成本说明 · 琉音科技",
  description: "说明买断定制、标品销售和定制后再销售，并附市场参考价与模型算力成本测算口径。",
  path: "/pricing",
  h1: "三种合作方式",
  imageAlt: posterAlt,
  jsonLd: webPage(
    "三种合作方式",
    "说明买断定制、标品销售和定制后再销售，并附市场参考价与模型算力成本测算口径。",
    "/pricing",
  ),
};

export const aboutSeo: SeoEntry = {
  title: "团队 · 琉音科技",
  description: "介绍具身训练素材团队的视频生成、多模态与机器人研究背景。",
  path: "/about",
  h1: "团队",
  imageAlt: posterAlt,
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "周大权",
        jobTitle: "指导老师",
        description:
          "指导老师。北京大学信息工程学院助理教授、博士生导师，研究方向包括机器人与智能体决策，以及硬件友好的图像与视频生成/理解。",
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "北京大学信息工程学院",
        },
      },
      {
        "@type": "Person",
        name: "杜忠璟",
        description: "北京大学博士研究生。方向为 AIGC、图像/视频生成与深度学习，并有工业界视频生成与具身研究经历。",
        affiliation: { "@type": "CollegeOrUniversity", name: "北京大学" },
      },
      {
        "@type": "Person",
        name: "陈宇轩",
        description: "北京大学硕士研究生。方向覆盖大模型、多模态、RAG、Reasoning 与 AI4S。",
        affiliation: { "@type": "CollegeOrUniversity", name: "北京大学" },
      },
      {
        "@type": "Person",
        name: "林冠帏",
        description: "北京大学硕士研究生。聚焦长视频理解与多模态模型优化。",
        affiliation: { "@type": "CollegeOrUniversity", name: "北京大学" },
      },
      {
        "@type": "Person",
        name: "谭可慧",
        description: "北京大学硕士研究生。方向为 RAG 与大语言模型。",
        affiliation: { "@type": "CollegeOrUniversity", name: "北京大学" },
      },
    ],
  },
};

export const contactSeo: SeoEntry = {
  title: "获取小批样本 · 琉音科技",
  description: "提交任务、场景和视角需求，先获取一小批具身训练样本。",
  path: "/contact",
  h1: "获取小批样本",
  imageAlt: posterAlt,
  jsonLd: webPage("获取小批样本", "提交任务、场景和视角需求，先获取一小批具身训练样本。", "/contact", "ContactPage"),
};

export const sharedImage = {
  url: poster,
  alt: posterAlt,
};
