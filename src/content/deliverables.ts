export const deliverablesIntro = {
  kicker: "交付参数",
  lead: "列出关节、末端、相机、深度、点云和分割等可交付字段，并区分默认保存与底层可取。",
  caution:
    "只有关节状态默认支持保存。代码接口可取、底层可取、不是默认导出、默认不直接保存的行，都不是默认交付。",
};

export const deliverableColumns = ["类别", "可以拿到的参数", "具体"];

export const deliverableRows: string[][] = [
  ["关节状态", "qpos / 每个 arm 的 joint position", "默认支持保存"],
  ["夹爪状态", "left/right gripper opening ratio", "0~1"],
  ["末端位姿", "EE position + quaternion", "[x,y,z,qw,qx,qy,qz]"],
  ["TCP 位姿", "gripper center / TCP pose", "代码接口可取"],
  ["机器人基座位姿", "base position + orientation", "config 中有"],
  ["关节速度", "qvel", "SAPIEN 底层可取，但不是标准数据采集字段"],
  ["关节加速度", "qacc", "可由状态/仿真计算，不是默认导出"],
  ["关节 torque / effort", "motor/joint effort", "默认仿真 dataset 不直接保存"],
  ["关节限制", "angle lower/upper、velocity/effort limit", "URDF 中可读"],
  ["Link 参数", "link 长度、joint axis、parent/child", "URDF"],
  ["动力学参数", "mass / inertia / COM", "如果 URDF 中定义"],
  ["控制参数", "stiffness / damping", "embodiment config"],
  ["Motion limits", "max acceleration / max jerk", "CuRobo config"],
  ["碰撞模型", "collision mesh / collision spheres", "可交付"],
  ["初始状态", "homestate / retract config", "可交付"],
  ["相机参数", "head/wrist camera、位置、朝向、FOV、分辨率", "可交付"],
  ["RGB / Depth", "多视角", "可交付"],
  ["Point cloud", "scene merged point cloud", "可交付"],
  ["segmentation", "actor / mesh segmentation", "可交付"],
];

export const deliverablesCta = {
  note: "可以按这些字段先要一小批样本，或先看三种合作方式。",
  primary: { to: "/contact", label: "按这些参数获取样本" },
  secondary: { to: "/pricing", label: "了解三种合作方式" },
  dataLink: { to: "/data", label: "返回两类数据" },
};
