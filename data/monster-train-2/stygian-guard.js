/////////////// 冥卫 ///////////////

export const module_name = "冥卫";

// 冥卫 英雄
export const CHAMPIONS = [
  {
    "name": "烈士索尔加德",
    "english-name": "Solgard the Martyr",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "冥卫",
    "cost": "0",
    "effect": "[咒语]: 获得 [碎片] 1",
    "size": 2,
    "attack": 0,
    "health": 5,
    "description": "",
  },
  {
    "name": "泰西斯·泰坦之灾",
    "english-name": "Tethys Titansbane",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "冥卫",
    "cost": "0",
    "effect": "",
    "size": 1,
    "attack": 5,
    "health": 3,
    "description": "",
  },
];
// 冥卫 单位
export const UNITS = [
  {
    "name": "邪术乌贼",
    "english-name": "Cuttlehex",
    "type": "单位",
    "unit-type": "法师",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "0",
    "effect": "[回合结束]: 随机 [冻结] 一张手牌",
    "banner-unit": false,
    "size": 1,
    "attack": 5,
    "health": 3,
    "description": ""
  },
  {
    "name": "寒流",
    "english-name": "Coldcaelia",
    "type": "单位",
    "unit-type": "海妖",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [霜冻] 6",
    "banner-unit": true,
    "size": 2,
    "attack": 3,
    "health": 15,
    "description": ""
  },
  {
    "name": "寒冰封印",
    "english-name": "Glacial Seal",
    "type": "单位",
    "unit-type": "图腾",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[咒语]: 对所有敌方单位施加 [霜冻] 2",
    "banner-unit": false,
    "size": 1,
    "attack": 0,
    "health": 1,
    "description": ""
  },
  {
    "name": "无名者护卫",
    "english-name": "Guard of the Unnamed",
    "type": "单位",
    "unit-type": "海妖",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[咒语]: 获得 [护甲] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 5,
    "health": 15,
    "description": ""
  },
  {
    "name": "冥卫之石",
    "english-name": "Guardian Stone",
    "type": "单位",
    "unit-type": "图腾",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[咒语]: 使所有友方单位获得 [护甲] 1",
    "banner-unit": false,
    "size": 1,
    "attack": 0,
    "health": 1,
    "description": ""
  },
  {
    "name": "寒冰之子",
    "english-name": "Icy Cilophyte",
    "type": "单位",
    "unit-type": "海妖",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [法术易伤] 1",
    "banner-unit": true,
    "size": 2,
    "attack": 3,
    "health": 20,
    "description": ""
  },
  {
    "name": "软体法师",
    "english-name": "Molluscmage",
    "type": "单位",
    "unit-type": "法师",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "1",
    "effect": "[导流] 10",
    "banner-unit": false,
    "size": 1,
    "attack": 5,
    "health": 3,
    "description": ""
  },
  {
    "name": "无名海妖",
    "english-name": "Nameless Siren",
    "type": "单位",
    "unit-type": "海妖",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[咒语]: 获得 [狂怒] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 12,
    "health": 10,
    "description": ""
  },
  {
    "name": "祭品石碑",
    "english-name": "Offering Monument",
    "type": "单位",
    "unit-type": "图腾",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[咒语]: -5 [生命值], 抽 1 张牌",
    "banner-unit": false,
    "size": 1,
    "attack": 0,
    "health": 40,
    "description": ""
  },
  {
    "name": "深海海妖",
    "english-name": "Siren of the Sea",
    "type": "单位",
    "unit-type": "海妖",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[咒语]: 获得 [攻击力] 3 和 [生命值] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 12,
    "health": 12,
    "description": ""
  },
  {
    "name": "泰坦哨兵",
    "english-name": "Titan Sentry",
    "type": "单位",
    "unit-type": "海妖",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "[复仇]: 对所有敌方单位施加 [霜冻] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 0,
    "health": 40,
    "description": ""
  },
  {
    "name": "鳗鱼戈耳工",
    "english-name": "Eel Gorgon",
    "type": "单位",
    "unit-type": "法师",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[咒语]: 获得 [多重攻击] 1. [结算]: 移除所有状态效果",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 5,
    "description": ""
  },
  {
    "name": "磁石图腾",
    "english-name": "Lodestone Totem",
    "type": "单位",
    "unit-type": "图腾",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[咒语]: 对所有敌方单位施加 [弱化] 1",
    "banner-unit": false,
    "size": 1,
    "attack": 0,
    "health": 1,
    "description": ""
  },
];
// 冥卫 法术
export const SPELLS = [
  {
    "name": "冥卫道钉",
    "english-name": "Spike of the Stygian",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. 施加 1 [X] [弱化] 和 5 [X] [霜冻]",
    "description": ""
  },
  {
    "name": "结晶之种",
    "english-name": "Crystalline Seeds",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 对所有敌方单位施加 [霜冻] 8",
    "description": ""
  },
  {
    "name": "能量虹吸",
    "english-name": "Energy Siphon",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "0",
    "effect": "对一个敌方单位施加 [法术易伤] 1",
    "description": ""
  },
  {
    "name": "遗弃之力",
    "english-name": "Forgone Power",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "0",
    "effect": "对前排敌方单位施加 [霜冻] 8, 随机舍弃一张牌",
    "description": ""
  },
  {
    "name": "献祭代币",
    "english-name": "Offering Token",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "0",
    "effect": "抽 1 张牌, 弃 1 张牌",
    "description": ""
  },
  {
    "name": "保存",
    "english-name": "Preserve",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[永冻]. [冻结] 一张手牌",
    "description": ""
  },
  {
    "name": "无名者之书",
    "english-name": "Unnamed Tome",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[永冻]. [消耗]. 对所有敌方单位施加 [沉默] 5",
    "description": ""
  },
  {
    "name": "海胆尖刺",
    "english-name": "Urchin Spines",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 对所有敌方单位施加 [法术易伤] 2",
    "description": ""
  },
  {
    "name": "力竭",
    "english-name": "Drain",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "施加 [弱化] 3, 随机舍弃 1 张牌",
    "description": ""
  },
  {
    "name": "急速冰冻",
    "english-name": "Flash Freeze",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "1",
    "effect": "造成 3 点伤害, 施加 [霜冻] 8",
    "description": ""
  },
  {
    "name": "凶残妖群",
    "english-name": "Frenzied Swarm",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "对敌方单位施加 [眩晕] 1, 舍弃全部手牌",
    "description": ""
  },
  {
    "name": "寒冰长枪",
    "english-name": "Frozen Lance",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "1",
    "effect": "对前排敌方单位造成 10 点伤害",
    "description": ""
  },
  {
    "name": "驾驭泰坦",
    "english-name": "Harness the Titan",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "1",
    "effect": "使手牌中的所有法术获得 +10 [魔法强度]",
    "description": ""
  },
  {
    "name": "寒冰和薪火",
    "english-name": "Ice and Pyre",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[薪火相传]. [调和]. 对前排敌方单位造成 90 点伤害",
    "description": ""
  },
  {
    "name": "寒冰风暴",
    "english-name": "Icestorm",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "随机对一个敌方单位造成 1 点伤害, 重复 5 次",
    "description": ""
  },
  {
    "name": "海妖之歌",
    "english-name": "Siren's Song",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[薪火相传]. 使所有敌方单位 [上升] 并施加 [眩晕] 3",
    "description": ""
  },
  {
    "name": "泰坦谢礼",
    "english-name": "Titan's Gratitude",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "1",
    "effect": "[调和]. 对前排敌方单位造成 35 点伤害, 随机舍弃 1 张牌",
    "description": ""
  },
  {
    "name": "深渊祭礼",
    "english-name": "Deep Offering",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]. 舍弃全部手牌, 抽 5 张牌",
    "description": ""
  },
  {
    "name": "螺旋结晶",
    "english-name": "Helical Crystalis",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "2",
    "effect": "对前排敌方单位造成 35 点伤害, 重复 2 次",
    "description": ""
  },
  {
    "name": "远古协调",
    "english-name": "Ancient Synergy",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "3",
    "effect": "对前排敌方单位造成伤害, 数值相当于卡组中法术牌的 2 倍, 重复 3 次",
    "description": ""
  },
  {
    "name": "地穴建造器",
    "english-name": "Crypt Builder",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "3",
    "effect": "[献祭]. [调和]. [后退] 前排敌方单位, 并造成 80 点伤害",
    "description": ""
  },
  {
    "name": "冥卫之礼",
    "english-name": "Gifts for a Guard",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "3",
    "effect": "抽 3 张法术牌并使其获得 [消耗], +30 [魔法强度] 和 [余烬] 0",
    "description": ""
  },
  {
    "name": "冥卫护符",
    "english-name": "Guardian's Amulet",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "3",
    "effect": "[献祭], 对所有敌方单位施加 [弱化] 2",
    "description": ""
  },
  {
    "name": "凝霜雕像",
    "english-name": "Hoarfrost Effigy",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "3",
    "effect": "将本层所有的 [霜冻] 都转移到目标身上, 之后将 [霜冻] 层数加倍",
    "description": ""
  },
  {
    "name": "寒冰龙卷",
    "english-name": "Ice Tornado",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "3",
    "effect": "[永冻]. 随机对一个敌方单位造成 30 点伤害, 重复 3 次",
    "description": ""
  },
  {
    "name": "泰坦之牙",
    "english-name": "Titanstooth",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "3",
    "effect": "[献祭]. 对所有敌方单位造成 5 点伤害, 并施加 [霜冻] 10",
    "description": ""
  },
];
// 冥卫 装备
export const EQUIPMENTS = [
];
// 冥卫 房间
export const ROOMS = [
];
// 冥卫 神器
export const ARTIFACTS = [
  {
    "name": "遗忘之名",
    "english-name": "A Forgotten Name",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当本回合打出第三张法术时, 所有卡牌获得 +1 [魔法强度], 持续整场战斗",
  },
  {
    "name": "乌贼触须",
    "english-name": "Cuttlebeard",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当一个单位获得 [霜冻] 时, 获得的层数 +3, 且不会衰减",
  },
  {
    "name": "成立印记",
    "english-name": "Founding Seal",
    "type": "神器",
    "clan": "冥卫",
    "effect": "[咒语] 额外触发一次",
  },
  {
    "name": "冰柱碎片",
    "english-name": "Icicle Fracture",
    "type": "神器",
    "clan": "冥卫",
    "effect": "回合结束时, 随机 [冻结] 一张手牌",
  },
  {
    "name": "亲族石图腾",
    "english-name": "Kinstone Totem",
    "type": "神器",
    "clan": "冥卫",
    "effect": "在回合结束前舍弃一张牌时, 获得 [余烬] 1",
  },
  {
    "name": "仪式律法",
    "english-name": "Rules of Containment",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入战斗时, 获得 [霜冻] 2",
  },
  {
    "name": "符文海藻",
    "english-name": "Sigiled Seaweed",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入火车时, 对其施加 [沉默] 1",
  },
  {
    "name": "泰西斯之鳞",
    "english-name": "Tethys' Scales",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入火车时, 50% 几率对其施加 [法术易伤] 1",
  },
  {
    "name": "泰坦之爪",
    "english-name": "Titan's Claws",
    "type": "神器",
    "clan": "冥卫",
    "effect": "回合结束时, [冻结] 的卡牌 [余烬] 降为 0, 直到打出或舍弃",
  },
  {
    "name": "毁约者代币",
    "english-name": "Token of a Traitor",
    "type": "神器",
    "clan": "冥卫",
    "effect": "使用法术会随机对该层的一个敌方单位造成 2 点伤害",
  },
  {
    "name": "图腾碎片",
    "english-name": "Totem Fragment",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入薪火室下方的楼层时, 对其施加 [法术易伤] 2",
  },
];

export const PATHS = [
  {
    "name": "寒风",
    "champion": "泰西斯·泰坦之灾",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 6,
        "size": 1,
        "effect": "[攻击]: 对被攻击的单位施加 [霜冻] 15",
      },
      {
        "rank": 2,
        "attack": 30,
        "health": 9,
        "size": 1,
        "effect": "[攻击]: 对被攻击的单位施加 [霜冻] 25",
      },
      {
        "rank": 3,
        "attack": 60,
        "health": 12,
        "size": 1,
        "effect": "[攻击]: 对被攻击的单位施加 [霜冻] 50",
      },
    ]
  },
  {
    "name": "导流",
    "champion": "泰西斯·泰坦之灾",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 10,
        "health": 5,
        "size": 1,
        "effect": "[导流] 2. 在本层中, 伤害法术的费用 -1 [余烬]",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 7,
        "size": 1,
        "effect": "[导流] 4. 在本层中, 伤害法术的费用 -2 [余烬]",
      },
      {
        "rank": 3,
        "attack": 40,
        "health": 9,
        "size": 1,
        "effect": "[导流] 12. 在本层中, 伤害法术的费用 -3 [余烬]",
      },
    ]
  },
  {
    "name": "掌中图腾",
    "champion": "泰西斯·泰坦之灾",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 10,
        "health": 10,
        "size": 1,
        "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [法术易伤] 1",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 12,
        "size": 1,
        "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [法术易伤] 2",
      },
      {
        "rank": 3,
        "attack": 30,
        "health": 15,
        "size": 1,
        "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [法术易伤] 3",
      },
    ]
  },
  {
    "name": "引导恐惧",
    "champion": "烈士索尔加德",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 0,
        "health": 10,
        "size": 2,
        "effect": "[咒语]: 获得 [碎片] 1. [行动]: 每层 [碎片] 对前排敌方单位造成 4 点伤害",
      },
      {
        "rank": 2,
        "attack": 0,
        "health": 20,
        "size": 2,
        "effect": "[咒语]: 获得 [碎片] 1. [行动]: 每层 [碎片] 对前排敌方单位造成 8 点伤害",
      },
      {
        "rank": 3,
        "attack": 0,
        "health": 40,
        "size": 2,
        "effect": "[咒语]: 获得 [碎片] 1. [行动]: 每层 [碎片] 对前排敌方单位造成 16 点伤害",
      },
    ]
  },
  {
    "name": "引导寒冰",
    "champion": "烈士索尔加德",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 0,
        "health": 25,
        "size": 2,
        "effect": "[咒语]: 获得 [碎片] 1. [复仇]: 每层 [碎片] 对敌方单位施加 [霜冻] 1",
      },
      {
        "rank": 2,
        "attack": 0,
        "health": 50,
        "size": 2,
        "effect": "[咒语]: 获得 [碎片] 1. [复仇]: 每层 [碎片] 对敌方单位施加 [霜冻] 1",
      },
      {
        "rank": 3,
        "attack": 0,
        "health": 70,
        "size": 2,
        "effect": "[咒语]: 获得 [碎片] 1. [复仇]: 每层 [碎片] 对敌方单位施加 [霜冻] 2",
      },
    ]
  },
  {
    "name": "引导泰坦",
    "champion": "烈士索尔加德",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 60,
        "health": 60,
        "size": 2,
        "effect": "[静滞]. [咒语]: 获得 [碎片] 1. 当 [碎片] 达到 4 层时, 移除 [静滞]",
      },
      {
        "rank": 2,
        "attack": 120,
        "health": 120,
        "size": 2,
        "effect": "[静滞]. [咒语]: 获得 [碎片] 1. 当 [碎片] 达到 10 层时, 移除 [静滞]",
      },
      {
        "rank": 3,
        "attack": 250,
        "health": 250,
        "size": 2,
        "effect": "[静滞]. [咒语]: 获得 [碎片] 1. 当 [碎片] 达到 15 层时, 移除 [静滞]",
      },
    ]
  },
]