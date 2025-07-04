export const ENTRIES = [];

export const ENTRIES1 = [
  {
    "name": "上升",
    "type": "行为",
    "description": "向上移动一层，到达该层的后面",
  },
  {
    "name": "下降",
    "type": "行为",
    "description": "向下移动一层，到达该层的后面",
  },
  {
    "name": "前进",
    "type": "行为",
    "description": "移动到该层前方",
  },
  {
    "name": "能力: 猛击",
    "type": "能力",
    "冷却": 2,
    "description": "[前进], 对前排敌方单位造成等于相当于该单位 [生命值] + [护甲] 的伤害",
  },
  {
    "name": "能力: 天堂猛击",
    "type": "能力",
    "冷却": 3,
    "description": "移动到任意层的任意位置, 对前排敌方单位造成等于相当于该单位 [生命值] + [护甲] 的伤害",
  },
  {
    "name": "召唤",
    "type": "触发",
    "description": "使用时触发",
  },
  {
    "name": "巧匠",
    "type": "触发",
    "description": "友方单位穿戴装备时触发",
  },
  {
    "name": "消耗",
    "type": "行为",
    "description": "每场战斗只能使用一次",
  },
  {
    "name": "能力: 飞行",
    "type": "能力",
    "description": "移动到任意层的任意位置",
  },
  {
    "name": "附魔",
    "type": "特性",
    "description": "同层友方单位获得加成(不包括自己)",
  },
  {
    "name": "迅捷",
    "type": "特性",
    "description": "在战斗中可以比敌方单位先出手",
  },
  {
    "name": "践踏",
    "type": "特性",
    "description": "攻击的溢出伤害会施加到后面的敌方单位上",
  },
  {
    "name": "转移",
    "type": "触发",
    "description": "单位移动时触发",
  },
  {
    "name": "结算",
    "type": "触发",
    "description": "战斗结束后触发",
  },
  {
    "name": "复仇",
    "type": "触发",
    "description": "被命中时触发",
  },
  {
    "name": "杀戮",
    "type": "触发",
    "description": "打出致命一击时触发",
  },
  {
    "name": "近战易伤",
    "type": "减益",
    "description": "该单位下次收到攻击时，每层效果都会使之多受一次此次攻击伤害",
  },
  {
    "name": "后退",
    "type": "行为",
    "description": "移动到该层后方",
  },
  {
    "name": "攻击",
    "type": "触发",
    "description": "该单位攻击时触发",
  },
  {
    "name": "多重攻击",
    "type": "特性",
    "description": "每回合多攻击一次",
  },
  {
    "name": "护甲",
    "type": "属性",
    "description": "拥有护甲的单位会先损失护甲，然后才会损失生命值。每点护甲会吸收 1 点伤害，之后被移除",
  },
  {
    "name": "生命值",
    "type": "属性",
    "description": "-",
  },
  {
    "name": "攻击力",
    "type": "属性",
    "description": "-",
  },
  {
    "name": "英勇",
    "type": "增益",
    "description": "每层 +1 [攻击力]。战斗之后，如果该单位处于最前排，则将护甲提高至与层数相等",
  },
  {
    "name": "伤害护盾",
    "type": "增益",
    "description": "免疫接下来的一次伤害，并减少一层",
  },
  {
    "name": "狂怒",
    "type": "增益",
    "description": "每层 +2 [攻击力]。每回合不断减少",
  },
  {
    "name": "龙族宝藏",
    "type": "属性",
    "description": "获得龙族宝藏, 在非战斗状态下可将其搜刮并获得宝贵的奖励",
  },
  {
    "name": "薪火熔胶",
    "type": "减益",
    "description": "每层薪火熔胶使收到的伤害增加 1 点",
  },
  {
    "name": "贪婪",
    "type": "增益",
    "description": "当带有 贪婪 的单位造成未被格挡的伤害时, 获得等于 贪婪 层数的 [金币]",
  },
  {
    "name": "金币",
    "type": "属性",
    "description": "-",
  },
  {
    "name": "能力: 菲尼克斯之火",
    "type": "能力",
    "冷却": 3,
    "description": "造成相当于该单位攻击力的伤害. 对所有敌方单位施加 [薪火熔胶] 4",
  },
  {
    "name": "能力: 消化不良",
    "type": "能力",
    "冷却": 1,
    "description": "[牺牲]. 对所有敌方单位造成 1 点伤害",
  },
  {
    "name": "能力: 熔胶喷嚏",
    "type": "能力",
    "冷却": 2,
    "description": "每有一个 [龙族宝藏] 就获得 5 [金币]",
  },
  {
    "name": "牺牲",
    "type": "行为",
    "description": "消灭一个友方单位",
  },
  {
    "name": "能力: 火焰吐息",
    "type": "能力",
    "冷却": 2,
    "description": "对敌方单位造成等于该单位 [攻击力] 的伤害, 重复两次",
  },
  {
    "name": "能力: 赋能",
    "type": "能力",
    "冷却": 3,
    "description": "获得 [攻击力], 数值等于所有敌方单位的 [薪火熔胶] 层数之和",
  },
  {
    "name": "爆炸",
    "type": "行为",
    "description": "所有过量伤害会作用于所有敌方单位",
  },
  {
    "name": "调和",
    "type": "行为",
    "description": "将魔法强度的效果乘以 5",
  },
  {
    "name": "灵魂",
    "type": "增益",
    "description": "可用于某些特定能力",
  },
  {
    "name": "虹吸",
    "type": "触发",
    "description": "当本层敌方单位死亡时触发",
  },
  {
    "name": "庆祝",
    "type": "触发",
    "description": "打败首领时触发",
  },
  {
    "name": "余烬",
    "type": "属性",
    "description": "-",
  },
  {
    "name": "导流",
    "type": "增益",
    "description": "每层使本楼层的魔法强度 +1",
  },
];