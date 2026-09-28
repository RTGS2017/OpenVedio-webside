import { clips } from "./media";

export const dataIntro = {
  kicker: "数据",
  lead: "提供与真实物体交互的数据，以及第三人称物理世界观察素材，并附内部真机验证与生成对照。",
};

export const dataTypes = [
  {
    title: "与物理世界交互",
    text: "与实际物体交互的数据。其下先是我们使用 AI 生成的数据，再是内部真机实验。",
  },
  {
    title: "以第三人称观察物理世界",
    text: "以第三人称观察物理世界的素材。重点是减少普通生成的物理错误。",
  },
];

export const aiClips = {
  title: "我们使用 AI 生成的数据",
  lead: "与实际物体交互的数据。",
  items: [
    {
      filename: "微信视频2026-09-22_004335_023.mp4",
      duration: "00:20",
      src: clips.genA,
      alt: "AI 生成的交互数据",
    },
    {
      filename: "4ff087c71e178d26af72842af36f23bf_raw.mp4",
      duration: "00:41",
      src: clips.genB,
      alt: "AI 生成的交互数据",
    },
  ],
};

export const robotClips = {
  title: "内部真机实验",
  lead: "用 AI 生成数据做真机训练，完成叠杯子、敲鼓等场景。这是可行性初步验证。",
  extra: "",
  tags: ["内部实验", "初步验证"],
  items: [
    {
      filename: "4393a6964ea3e82df9fe43c63e23e6e8.mp4",
      duration: "01:01",
      src: clips.robotA,
      alt: "内部真机实验，叠杯子、敲鼓等场景",
    },
    {
      filename: "VID_20260918_154047.mp4",
      duration: "00:16",
      src: clips.robotB,
      alt: "内部真机实验，叠杯子、敲鼓等场景",
    },
  ],
};

export const comparisons = {
  title: "普通生成与优化后",
  lead: "左列是普通视频生成模型，右列是我们优化后。黄色小球滑下去之后，有一次莫名跳跃；优化后解决了该跳跃。",
  pairs: clips.pairs,
};

export const dataCta = {
  note: "先看一小批，再决定要不要按交付参数扩大生产。",
  primary: { to: "/contact", label: "获取小批样本" },
  secondary: { to: "/deliverables", label: "查看可交付参数" },
};
