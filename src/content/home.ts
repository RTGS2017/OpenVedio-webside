import { clips } from "./media";

export const homeHero = {
  kicker: "琉音科技",
  h1: "符合物理规则的具身训练素材",
  lead: "用生成式人工智能生产可训练的数据集，替换人力密集型采集。",
  primary: { to: "/contact", label: "获取小批样本" },
  secondary: { to: "/deliverables", label: "查看可交付参数" },
  badge: "AI 生成",
  poster: "/media/hero-poster.svg",
  src: clips.genA,
  alt: "AI 生成的具身训练画面",
  caption: "我们使用 AI 生成的数据",
};

export const homeValue = {
  index: "01",
  title: "为什么值得看",
  lead: "先看三件事：物理是否可信，能不能替换采集，成本落在哪。",
  items: [
    {
      title: "符合物理规则",
      text: "训练素材按现实世界的物理规则来生产，而不是只看起来像一段视频。",
    },
    {
      title: "替换人力采集",
      text: "用生成式人工智能生产可训练的数据集，替换人力密集型采集。",
    },
    {
      title: "成本转到计算上",
      text: "合格数据的生产成本转到可优化的计算上。",
    },
  ],
};

export const homeProblem = {
  index: "02",
  title: "现在哪里痛",
  lead: "产量一上来，人和现场就跟着涨；普通生成又会把物理做错。",
  items: [
    {
      title: "人力采集要不断加人加现场",
      text: "加一批数据，就要追加采集工时、设备占用和现场组织。扩大产量通常要加人、加时、加现场管理。",
    },
    {
      title: "普通生成会出物理错误",
      text: "黄色小球滑下去之后，有一次莫名跳跃。",
    },
  ],
  poster: "/media/jump-diagram.svg",
  src: clips.pairs[0].before,
  badge: "普通视频生成模型",
  alt: "普通视频生成模型",
  caption: "黄色小球滑下去之后，有一次莫名跳跃。",
};

export const homeSolution = {
  index: "03",
  title: "你们怎么做",
  lead: "按需求生成，主要成本在推理和良品率，再用内部真机做初步验证。",
  steps: [
    {
      title: "按需求生成",
      text: "按客户需求，用 AI 生成符合物理规则的具身训练素材。",
    },
    {
      title: "推理与良品率",
      text: "视频模型推理是主要成本。路径是本地部署、推理优化和提高良品率。",
    },
    {
      title: "内部真机初步验证",
      text: "已用这类数据做真机训练，完成叠杯子、敲鼓。这是可行性初步验证，不是客户验收。",
    },
  ],
};

export const homeFeatures = {
  index: "04",
  title: "数据有哪几类",
  lead: "只有两类。关节、相机、点云等字段在交付参数页，不在这里展开。",
  link: { to: "/data", label: "到数据页看两类素材" },
  items: [
    {
      id: "feature-interact",
      title: "与物理世界交互",
      text: "与实际物体交互的数据。先是我们使用 AI 生成的数据，再是内部真机实验。",
      poster: "/media/interact-diagram.svg",
      src: clips.genA,
      badge: "AI 生成",
      alt: "与物理世界交互的生成数据",
      caption: "与实际物体交互的数据。",
    },
    {
      id: "feature-observe",
      title: "以第三人称观察物理世界",
      text: "以第三人称观察物理世界的素材。重点是减少普通生成的物理错误。",
      poster: "/media/observe-diagram.svg",
      src: clips.pairs[0].after,
      badge: "我们优化后",
      alt: "以第三人称观察物理世界",
      caption: "以第三人称观察物理世界。",
    },
  ],
};

export const homeShowcase = {
  index: "05",
  title: "我们使用 AI 生成的数据",
  lead: "与实际物体交互的数据。",
  link: { to: "/data", label: "到数据页看素材说明" },
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

export const homeVideo = {
  index: "06",
  title: "优化前后差在哪",
  lead: "左列是普通视频生成模型，右列是我们优化后。",
  link: { to: "/data", label: "看生成数据与真机实验" },
  points: ["普通生成会出物理错误", "黄色小球滑下去之后，有一次莫名跳跃", "优化后解决了该跳跃"],
  pairs: clips.pairs,
};

export const homeWorkflow = {
  index: "07",
  title: "怎么开始合作",
  lead: "先把需求写成配置，用小批样本对齐，确认后再扩大生产。",
  steps: [
    { no: "01", title: "需求写成生成配置", text: "把客户需求写成生成配置。" },
    { no: "02", title: "小批样本", text: "先交付小批样本。" },
    { no: "03", title: "按反馈改参数", text: "按反馈调整动作、场景、视角和交付参数。" },
    { no: "04", title: "确认后扩大生产", text: "按确认后的标准扩大生产。" },
  ],
};

export const homeUseCases = {
  index: "08",
  title: "验证过哪些任务",
  lead: "内部真机实验：用 AI 生成数据训练，完成叠杯子、敲鼓。这是可行性初步验证。",
  tags: ["内部实验", "初步验证"],
  note: "完成叠杯子、敲鼓等场景。这是可行性初步验证。",
  link: { to: "/data", label: "到数据页看真机素材" },
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

export const homeAdvantages = {
  index: "09",
  title: "和人力采集比，差在哪",
  lead: "首页只列三条。完整对照和测算口径在合作与价格页。",
  link: { to: "/pricing", label: "看完整对照" },
  items: [
    {
      title: "成本可随算力和良品率下降",
      text: "算力性价比、推理效率、良品率和自动化可以一起把新增一秒合格数据的成本往下推。幅度需要持续实测。",
    },
    {
      title: "产能靠并行算力而不是同比加人",
      text: "重复生产由软件执行，产能靠并行算力，减少人员同比扩张。",
    },
    {
      title: "可先租 GPU 打样",
      text: "早期可以租用算力打样和交付，不必先买大量设备。",
    },
  ],
};

export const homeFinal = {
  kicker: "实验记录",
  title: "先拿一小批样本",
  lead: "写清任务、场景和视角。确认之前不扩大生产。",
  primary: { to: "/contact", label: "获取小批样本" },
  secondary: { to: "/pricing", label: "了解三种合作方式" },
  modes: [
    {
      id: "buyout",
      title: "买断定制",
      text: "指定任务、场景、视角和参数，约定范围内独占、不再复售。",
    },
    {
      id: "catalog",
      title: "标品销售",
      text: "购买已经生产好的数据集，按规格重复授权。",
    },
    {
      id: "resale",
      title: "定制后再销售",
      text: "先按需求生产，合同允许时再整理成标品继续卖。",
    },
  ],
};
