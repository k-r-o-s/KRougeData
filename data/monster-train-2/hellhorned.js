/////////////// 狱魔 ///////////////

export const module_name = "狱魔";

// 狱魔 英雄
export const CHAMPIONS = [
  {
    "name": "断角王子",
    "english-name": "Hornbreaker Prince",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "狱魔",
    "cost": "0",
    "effect": "",
    "size": 2,
    "attack": 6,
    "health": 6,
    "description": "",
  },
  {
    "name": "碎尾女王",
    "english-name": "Shardtail Queen",
    "unit-type": "勇者",
    "type": "单位",
    "rarity": "勇者",
    "clan": "狱魔",
    "cost": "0",
    "effect": "",
    "size": 2,
    "attack": 10,
    "health": 10,
    "description": "",
  },
];
// 狱魔 单位
export const UNITS = [
  {
    "name": "巅峰小鬼",
    "english-name": "Apex Imp",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[带甲]: 获得等同于 [护甲] 获取量的 [狂怒]. [召唤]: 获得 [护甲] 5",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 10,
    "description": ""
  },
  {
    "name": "烙印武士",
    "english-name": "Branded Warrior",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[狂怒] 5. [杀戮]: 使友方单位获得 [狂怒] 5",
    "banner-unit": true,
    "size": 2,
    "attack": 20,
    "health": 8,
    "description": ""
  },
  {
    "name": "狂乱蛮兽",
    "english-name": "Deranged Brute",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "1",
    "effect": "友方单位的每层 [狂怒] 额外 +3 [攻击力]",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 25,
    "description": ""
  },
  {
    "name": "懵懂小鬼",
    "english-name": "Fledgling Imp",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "1",
    "effect": "[召唤]: 使友方单位获得 [狂怒] 5",
    "banner-unit": false,
    "size": 1,
    "attack": 1,
    "health": 1,
    "description": ""
  },
  {
    "name": "长角武士",
    "english-name": "Horned Warrior",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[多重攻击] 1",
    "banner-unit": true,
    "size": 2,
    "attack": 15,
    "health": 8,
    "description": ""
  },
  {
    "name": "小鬼学者",
    "english-name": "Impish Scholar",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[召唤]: 随机将一张消耗的法术牌返回手牌",
    "banner-unit": false,
    "size": 1,
    "attack": 1,
    "health": 1,
    "description": ""
  },
  {
    "name": "蜕皮小鬼",
    "english-name": "Molting Imp",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "1",
    "effect": "[召唤]: 对所有敌方单位造成 8 点伤害",
    "banner-unit": false,
    "size": 1,
    "attack": 1,
    "health": 1,
    "description": ""
  },
  {
    "name": "薪火暴食者",
    "english-name": "Pyre Chomper",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[召唤]: 获得 [余烬] 4",
    "banner-unit": false,
    "size": 1,
    "attack": 1,
    "health": 1,
    "description": ""
  },
  {
    "name": "女王的小鬼",
    "english-name": "Queen's Impling",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "1",
    "effect": "[召唤]: 对前排敌方单位造成 16 点伤害",
    "banner-unit": false,
    "size": 1,
    "attack": 1,
    "health": 1,
    "description": ""
  },
  {
    "name": "锻铁者",
    "english-name": "Railbeater",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[护甲] 30. [攻击]: 对所有被攻击的单位施加 [近战易伤] 1",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 10,
    "description": ""
  },
  {
    "name": "锻铁工人",
    "english-name": "Steelworker",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[结算]: 所有友方单位获得 [护甲] 6",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 15,
    "description": ""
  },
  {
    "name": "焊工助手",
    "english-name": "Welder Helper",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "1",
    "effect": "[召唤]: 使前排友方单位获得 [护甲] 20",
    "banner-unit": false,
    "size": 1,
    "attack": 1,
    "health": 1,
    "description": ""
  },
  {
    "name": "恐魔领主",
    "english-name": "Alpha Fiend",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "2",
    "effect": "[攻击]: 获得 [攻击力] 15",
    "banner-unit": true,
    "size": 3,
    "attack": 10,
    "health": 25,
    "description": ""
  },
  {
    "name": "超凡小鬼",
    "english-name": "Transcendimp",
    "type": "单位",
    "unit-type": "恶魔小鬼",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "2",
    "effect": "打出后, 重复本场战斗目前为止所有已触发的 [召唤] 效果",
    "banner-unit": false,
    "size": 1,
    "attack": 1,
    "health": 1,
    "description": ""
  },
  {
    "name": "地狱恶魔",
    "english-name": "Demon Fiend",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "4",
    "effect": "[践踏]",
    "banner-unit": true,
    "size": 3,
    "attack": 60,
    "health": 60,
    "description": ""
  },
  {
    "name": "皇冠吞噬者",
    "english-name": "Consumer of Crowns",
    "type": "单位",
    "unit-type": "恶魔",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "8",
    "effect": "卡组中每有一个小鬼单位, [余烬] -1",
    "banner-unit": true,
    "size": 3,
    "attack": 100,
    "health": 40,
    "description": ""
  },
];
// 狱魔 法术
export const SPELLS = [
  {
    "name": "狱魔道钉",
    "english-name": "Spike of the Hellhorned",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. 获得 3 [X] [狂怒] 和 3 [X] [护甲]",
    "description": ""
  },
  {
    "name": "排气",
    "english-name": "Vent",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "X",
    "effect": "对所有敌方单位造成 3 [X] 点伤害",
    "description": ""
  },
  {
    "name": "黑暗交易",
    "english-name": "Dark Deal",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "0",
    "effect": "造成 5 点伤害, 获得 [狂怒] 7",
    "description": ""
  },
  {
    "name": "硬化",
    "english-name": "Fortify",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "0",
    "effect": "获得 [护甲] 8",
    "description": ""
  },
  {
    "name": "小鬼礼盒",
    "english-name": "Imp-in-a-Box",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 将两个随机小鬼单位加入手牌",
    "description": ""
  },
  {
    "name": "鬼功神力",
    "english-name": "Imp-portant Work",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "0",
    "effect": "[牺牲] 小鬼. 获得 [余烬] 1 并抽 1 张牌",
    "description": ""
  },
  {
    "name": "狂怒精华",
    "english-name": "Rage Serum",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 获得 [狂怒] 5",
    "description": ""
  },
  {
    "name": "远古合金",
    "english-name": "Alloy of the Ancients",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[消耗]. 获得 [护甲] 25",
    "description": ""
  },
  {
    "name": "隐秘通道",
    "english-name": "Hidden Passage",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "1",
    "effect": "[上升]",
    "description": ""
  },
  {
    "name": "断角",
    "english-name": "Horn Break",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "1",
    "effect": "[穿刺]. 造成 5 点伤害, 重复两次",
    "description": ""
  },
  {
    "name": "鬼头鬼脑",
    "english-name": "Imp-olate",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "1",
    "effect": "对前排敌方单位造成伤害, 数值为卡组内小鬼牌数量的 20 倍",
    "description": ""
  },
  {
    "name": "鬼斧神工",
    "english-name": "Imp-pressive",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[调和]. [牺牲] 小鬼. 对前排敌方单位造成 50 点伤害",
    "description": ""
  },
  {
    "name": "盾墙冲锋",
    "english-name": "March of Shields",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "1",
    "effect": "[前进]. 获得 [护甲] 12",
    "description": ""
  },
  {
    "name": "火把",
    "english-name": "Torch",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "1",
    "effect": "造成 3 点伤害",
    "description": ""
  },
  {
    "name": "烙印仪式",
    "english-name": "Branding Rite",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "2",
    "effect": "[穿刺]. 造成 5 点伤害, 获得 [护甲] 20",
    "description": ""
  },
  {
    "name": "烈火焚身",
    "english-name": "Enflame",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "2",
    "effect": "获得 [狂怒] 6 和 [护甲] 10",
    "description": ""
  },
  {
    "name": "累人的攀爬",
    "english-name": "Tiresome Climb",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "2",
    "effect": "[上升]. 施加 [眩晕] 2",
    "description": ""
  },
  {
    "name": "攻城战槌",
    "english-name": "Battering Ram",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "3",
    "effect": "对前排敌方单位造成伤害, 数值等同于所有友方单位 [护甲] 之和的 4 倍",
    "description": ""
  },
  {
    "name": "地狱火",
    "english-name": "Inferno",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "高级",
    "cost": "3",
    "effect": "[穿刺]. 对所有单位造成 100 点伤害",
    "description": ""
  },
  {
    "name": "背水一战",
    "english-name": "Last Stand",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[消耗]. 使所有友方单位的 [狂怒] 加倍",
    "description": ""
  },
  {
    "name": "护甲增强",
    "english-name": "Reinforce",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[消耗]. 使目标单位的 [护甲] 加倍",
    "description": ""
  },
  {
    "name": "战斗仪式",
    "english-name": "Ritual of Battle",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "普通",
    "cost": "3",
    "effect": "获得 [狂怒] 12",
    "description": ""
  },
  {
    "name": "断角之书",
    "english-name": "Onehorn's Tome",
    "type": "法术",
    "clan": "狱魔",
    "rarity": "稀有",
    "cost": "4",
    "effect": "[消耗]. 对一个友方单位施加 [不堪一击] 和 [多重攻击] 1",
    "description": ""
  },
];
// 狱魔 装备
export const EQUIPMENTS = [
];
// 狱魔 房间
export const ROOMS = [
];
// 狱魔 神器
export const ARTIFACTS = [
  {
    "name": "死者骨灰",
    "english-name": "Ashes of the Fallen",
    "type": "神器",
    "clan": "狱魔",
    "effect": "[召唤] 额外触发一次",
  },
  {
    "name": "尾巴收藏品",
    "english-name": "Collection of Tails",
    "type": "神器",
    "clan": "狱魔",
    "effect": "友方单位的 [狂怒] 不会减少",
  },
  {
    "name": "圣者桂冠",
    "english-name": "Consumed Crown",
    "type": "神器",
    "clan": "狱魔",
    "effect": "友方单位 [杀戮] 时获得 [攻击力] 3",
  },
  {
    "name": "格鲁格的刺棍",
    "english-name": "Grrrg's Goad",
    "type": "神器",
    "clan": "狱魔",
    "effect": "恶魔单位获得 [多重攻击] 1",
  },
  {
    "name": "小鬼回收",
    "english-name": "Imp-cicle",
    "type": "神器",
    "clan": "狱魔",
    "effect": "回合开始时, 随机将一个小鬼牌加入手牌",
  },
  {
    "name": "女王之尾",
    "english-name": "Queen's Tail",
    "type": "神器",
    "clan": "狱魔",
    "effect": "每回合第一次 [召唤] 小鬼单位时, 获得 [余烬] 1 并抽 1 张牌",
  },
  {
    "name": "铁道锻锤",
    "english-name": "Railhammer",
    "type": "神器",
    "clan": "狱魔",
    "effect": "友方单位获得 [护甲] 时, 获得的层数 + 4",
  },
  {
    "name": "回响碎片",
    "english-name": "Resonant Shard",
    "type": "神器",
    "clan": "狱魔",
    "effect": "每层 [狂怒] 获得的 [攻击力] 额外 +1",
  },
  {
    "name": "灼热锻钢",
    "english-name": "Scorched Steel",
    "type": "神器",
    "clan": "狱魔",
    "effect": "友方单位进入战斗时, 获得 [护甲] 5",
  },
  {
    "name": "灼热枷锁",
    "english-name": "Scorching Restraints",
    "type": "神器",
    "clan": "狱魔",
    "effect": "友方单位进入战斗时, 获得 [狂怒] 3",
  },
  {
    "name": "不折之角",
    "english-name": "The Unbroken Horn",
    "type": "神器",
    "clan": "狱魔",
    "effect": "未使用的 [余烬] 保留至下一回合",
  },
];
export const PATHS = [
  {
    "name": "殴斗者",
    "champion": "断角王子",
    "type": "path",
    "path": [
     {
        "rank": 1,
        "attack": 6,
        "health": 6,
        "size": 2,
        "effect": "[护甲] 10. [多重攻击] 1",
      },
      {
        "rank": 2,
        "attack": 6,
        "health": 6,
        "size": 2,
        "effect": "[护甲] 15. [多重攻击] 2",
      },
      {
        "rank": 3,
        "attack": 6,
        "health": 6,
        "size": 2,
        "effect": "[护甲] 20. [多重攻击] 4",
      },
    ]
  },
  {
    "name": "收割者",
    "champion": "断角王子",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 30,
        "health": 6,
        "size": 2,
        "effect": "[杀戮]: +15 [攻击力]",
      },
      {
        "rank": 2,
        "attack": 60,
        "health": 12,
        "size": 2,
        "effect": "[杀戮]: +25 [攻击力]",
      },
      {
        "rank": 3,
        "attack": 120,
        "health": 24,
        "size": 2,
        "effect": "[杀戮]: +50 [攻击力]",
      },
    ]
  },
  {
    "name": "暴怒",
    "champion": "断角王子",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 15,
        "size": 2,
        "effect": "[杀戮]: 获得 [护甲] 10. [复仇]: 获得 [狂怒] 3",
      },
      {
        "rank": 2,
        "attack": 25,
        "health": 25,
        "size": 2,
        "effect": "[杀戮]: 获得 [护甲] 15. [复仇]: 获得 [狂怒] 4",
      },
      {
        "rank": 3,
        "attack": 40,
        "health": 40,
        "size": 2,
        "effect": "[杀戮]: 获得 [护甲] 25. [复仇]: 获得 [狂怒] 6",
      },
    ]
  },
  {
    "name": "百鬼游行",
    "champion": "碎尾女王",
    "type": "path",
    "path": [
       {
        "rank": 1,
        "attack": 30,
        "health": 15,
        "size": 2,
        "effect": "[结算]: 将一张 [女王的小鬼] 加入手牌. 在本层中, 小鬼的费用 -1 [余烬]",
      },
      {
        "rank": 2,
        "attack": 60,
        "health": 20,
        "size": 2,
        "effect": "[结算]: 将一张 [懵懂小鬼] 加入手牌. 在本层中, 小鬼的费用 -1 [余烬]",
      },
      {
        "rank": 3,
        "attack": 120,
        "health": 25,
        "size": 2,
        "effect": "[结算]: 将一张 [懵懂小鬼] 和 [焊工助手] 加入手牌. 在本层中, 小鬼的费用 -1 [余烬]",
      },
    ]
  },
  {
    "name": "王权",
    "champion": "碎尾女王",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 10,
        "health": 10,
        "size": 2,
        "effect": "[集结]: +10 [攻击力]",
      },
      {
        "rank": 2,
        "attack": 10,
        "health": 20,
        "size": 2,
        "effect": "[集结]: +15 [攻击力]",
      },
      {
        "rank": 3,
        "attack": 10,
        "health": 40,
        "size": 2,
        "effect": "[集结]: +25 [攻击力]",
      },
    ]
  },
  {
    "name": "帝国主义者",
    "champion": "碎尾女王",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 10,
        "health": 20,
        "size": 2,
        "effect": "[行动]: 击杀所有小鬼单位, 每个小鬼对敌方单位造成 20 点伤害",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 40,
        "size": 2,
        "effect": "[行动]: 击杀所有小鬼单位, 每个小鬼对敌方单位造成 40 点伤害",
      },
      {
        "rank": 3,
        "attack": 50,
        "health": 80,
        "size": 2,
        "effect": "[行动]: 击杀所有小鬼单位, 每个小鬼对敌方单位造成 60 点伤害",
      },
    ]
  },
]