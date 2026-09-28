export const aboutIntro = {
  kicker: "团队",
  lead: "介绍具身训练素材团队的视频生成、多模态与机器人研究背景。",
  summary: "琉音科技做具身训练素材。团队由周大权指导，成员来自北京大学，方向覆盖视频生成、具身智能、多模态与机器人。",
};

export type Person = {
  name: string;
  surname: string;
  summary: string;
  facts: string[];
};

export const people: Person[] = [
  {
    name: "周大权",
    surname: "周",
    summary:
      "指导老师。北京大学信息工程学院助理教授、博士生导师，研究方向包括机器人与智能体决策，以及硬件友好的图像与视频生成/理解。",
    facts: [
      "国家高层次青年人才计划、新加坡优秀博士、国家科技重大专项课题与国自然青年基金",
      "代表工作：MobileNeXT、Fully Attentional Network、MagicVideo、StoryDiffusion",
      "单篇最高被引四千余次",
      "NeurIPS 最佳论文提名",
      "新加坡总统科技奖（团队）",
      "团队方向与其视频生成、视频理解、多模态与具身积累契合",
    ],
  },
  {
    name: "杜忠璟",
    surname: "杜",
    summary: "北京大学博士研究生。方向为 AIGC、图像/视频生成与深度学习，并有工业界视频生成与具身研究经历。",
    facts: [
      "一作 ControlPose（CVPR 2026）、LION（IJCAI 2023，被引 16）",
      "参与 VISD、Neural Collapse in Test-Time Adaptation（CVPR 2026）",
      "美国 NVIDIA、字节跳动 Seed 早期成员",
      "inkmind-ai 联合创始人",
    ],
  },
  {
    name: "陈宇轩",
    surname: "陈",
    summary: "北京大学硕士研究生。方向覆盖大模型、多模态、RAG、Reasoning 与 AI4S。",
    facts: [
      "KBAlign、DeepNote、PersLLM（均 EMNLP 2025，含共一）",
      "参与 ControlPose（CVPR 2026）",
      "腾讯 TEG、面壁智能 UltraRAG（1.8k+ stars）、奇绩创坛、THUNLP",
    ],
  },
  {
    name: "林冠帏",
    surname: "林",
    summary: "北京大学硕士研究生。聚焦长视频理解与多模态模型优化。",
    facts: ["本科国家级智能机器人竞赛奖项", "VideoRouter 共同一作", "SRVA 一作"],
  },
  {
    name: "谭可慧",
    surname: "谭",
    summary: "北京大学硕士研究生。方向为 RAG 与大语言模型。",
    facts: [
      "Towards Applying Powerful Large AI Models in Classroom Teaching（arXiv 2023，被引 65）",
      "ELF（ACM JDIQ 2025，被引 30）",
      "MiDream（IJCNN 2025）",
      "现于腾讯实习，聚焦 Agent Memory 与 RAG",
    ],
  },
];

export const aboutCta = {
  note: "想先看样本，或先了解三种合作方式，可以从这里继续。",
  primary: { to: "/contact", label: "获取小批样本" },
  secondary: { to: "/pricing", label: "了解三种合作方式" },
};
