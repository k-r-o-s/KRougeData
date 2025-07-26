/////////////// 地下菌团 ///////////////

export const module_name = "地下菌团";

// 地下菌团 英雄
export const CHAMPIONS = [
  {
    "name": "断头台纽甘君",
    "english-name": "Bolete the Guillotine",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "地下菌团",
    "cost": "0",
    "effect": "[能力: 飞行]",
    "size": 3,
    "attack": 10,
    "health": 15,
    "description": ""
  },
  {
    "name": "狮鬃夫人",
    "english-name": "Madame Lionsmane",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "地下菌团",
    "cost": "0",
    "effect": "[能力: 飞行]",
    "size": 2,
    "attack": 5,
    "health": 10,
    "description": ""
  },
];

// 地下菌团 单位
export const UNITS = [
  {
    "name": "绿色新兵",
    "english-name": "Green Recruit",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "0",
    "effect": "[亡语]: [生成] 4",
    "banner-unit": true,
    "size": 1,
    "attack": 5,
    "health": 5,
    "description": ""
  },
  {
    "name": "多情金菇",
    "english-name": "Amorous Enoki",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[集结]: 使所有友方单位获得 [再生] 1 和 [生命值] 1",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 10,
    "description": ""
  },
  {
    "name": "欢快毒鹅膏",
    "english-name": "Cheery Deathcap",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[召唤]: 对所有敌方单位施加 [腐朽] 7",
    "banner-unit": true,
    "size": 1,
    "attack": 5,
    "health": 3,
    "description": ""
  },
  {
    "name": "毒鹅膏先知",
    "english-name": "Deathcapped Prophet",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[集结]: 下回合抽牌数量 +1",
    "banner-unit": true,
    "size": 1,
    "attack": 3,
    "health": 8,
    "description": ""
  },
  {
    "name": "羊笃珺女士",
    "english-name": "Morel Mistress",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[蚀刻]: 对所有敌方单位施加 [腐朽] 8",
    "banner-unit": true,
    "size": 2,
    "attack": 15,
    "health": 15,
    "description": ""
  },
  {
    "name": "多刺尘菌",
    "english-name": "Prickly Puffball",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[复仇]: 对攻击者施加 [腐朽] 5",
    "banner-unit": true,
    "size": 2,
    "attack": 0,
    "health": 35,
    "description": ""
  },
  {
    "name": "蘑菇兵长",
    "english-name": "Squad Leader",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "使 [蘑菇人] 获得 [践踏], 每层 [部队] 额外获得 [攻击力] 2",
    "banner-unit": true,
    "size": 1,
    "attack": 10,
    "health": 10,
    "description": ""
  },
  {
    "name": "松露犬",
    "english-name": "Truffles",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[能力: 接住]",
    "banner-unit": true,
    "size": 1,
    "attack": 5,
    "health": 5,
    "description": ""
  },
  {
    "name": "滴蜡菌伞",
    "english-name": "Waxcap",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[召唤]: 对所有敌方单位施加 [弱化] 3",
    "banner-unit": true,
    "size": 1,
    "attack": 5,
    "health": 5,
    "description": ""
  },
  {
    "name": "菌簇上校",
    "english-name": "Cluster Colonel",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[护甲] 10. [结算]: [生成] 4",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 5,
    "description": ""
  },
  {
    "name": "孢子发射者",
    "english-name": "Spore Launcher",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[集结]: 对所有敌方单位施加 [腐朽] 2",
    "banner-unit": true,
    "size": 3,
    "attack": 30,
    "health": 30,
    "description": ""
  },
  {
    "name": "巴尔马贝洛",
    "english-name": "Balmabello",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[再生] 6. [尖刺] 6. [亡语]: 使所有友方单位获得该单位的 [增益] 层数",
    "banner-unit": true,
    "size": 2,
    "attack": 15,
    "health": 50,
    "description": ""
  },
  {
    "name": "迷人的贵妇人",
    "english-name": "Enchantrelle",
    "type": "单位",
    "unit-type": "蘑菇",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[集结]: 对所有敌方单位施加 [弱化] 1",
    "banner-unit": true,
    "size": 2,
    "attack": 8,
    "health": 8,
    "description": ""
  },
];
// 地下菌团 法术
export const SPELLS = [
  {
    "name": "菌团道钉",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. [散播] 2 [X]",
    "description": ""
  },
  {
    "name": "盖土",
    "english-name": "Mulch",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 下个回合抽牌数 +1. 卡组每有 15 张牌, 抽牌数再 +1",
    "description": ""
  },
  {
    "name": "热情新兵",
    "english-name": "Eager Conscript",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "1",
    "effect": "[生成] 1",
    "description": ""
  },
  {
    "name": "焕发光彩",
    "english-name": "Glow Up",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "1",
    "effect": "[前进]. [散播] 2",
    "description": ""
  },
  {
    "name": "黏菌烧瓶",
    "english-name": "Gooey Flask",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. 对所有敌方单位施加 [弱化] 2",
    "description": ""
  },
  {
    "name": "大口吸入",
    "english-name": "Inhale",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "造成 10 点伤害. [杀戮]: [生成] 2",
    "description": ""
  },
  {
    "name": "蘑菇云",
    "english-name": "Mushroom Cloud",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. [牺牲] 1 [蘑菇人]. 对所有敌方单位造成 10 点伤害并施加 [腐朽] 10",
    "description": ""
  },
  {
    "name": "增殖",
    "english-name": "Proliferate",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "1",
    "effect": "[消耗]. 使所有单位 [散播] 2",
    "description": ""
  },
  {
    "name": "孢子之触",
    "english-name": "Sporetouch",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "1",
    "effect": "施加 [腐朽] 2",
    "description": ""
  },
  {
    "name": "生息之书",
    "english-name": "Tome of Evergrowth",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[消耗]. 使一个友方单位获得 [能力: 生生不息]",
    "description": ""
  },
  {
    "name": "挖掘宝藏",
    "english-name": "Unearth Treasure",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[消耗]. 从消耗牌堆随机抽取一张非挖掘宝藏的法术牌. 如果消耗牌堆中至少有 5 张卡牌, 再抽一张",
    "description": ""
  },
  {
    "name": "极度痛苦",
    "english-name": "Wracking Pain",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "对目标单位造成相当于 3 倍 [减益] 层数的伤害",
    "description": ""
  },
  {
    "name": "传染",
    "english-name": "Contagious",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]. 对敌方单位 [散播] 4. 将这张卡的复制品加入弃牌堆",
    "description": ""
  },
  {
    "name": "致命变形",
    "english-name": "Deadly Variant",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]. 施加 [腐朽], 层数相当于 [弱化] 层数的 5 倍",
    "description": ""
  },
  {
    "name": "深度挖掘",
    "english-name": "Dig Deep",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[生成] 1. 卡组每有 10 张牌, 再 [生成] 1",
    "description": ""
  },
  {
    "name": "沃土",
    "english-name": "Fertile Ground",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[消耗]. [生成] 1. 消耗牌堆每有 1 张牌, 再 [生成] 1",
    "description": ""
  },
  {
    "name": "流行病",
    "english-name": "Pandemic",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[消耗]. 施加 [腐朽] 8 和 [弱化] 2. 将这张卡的复制品加入弃牌堆",
    "description": ""
  },
  {
    "name": "孢子瘟疫",
    "english-name": "Pox",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[消耗]. 对所有单位造成 20 点伤害并施加 [腐朽] 10",
    "description": ""
  },
  {
    "name": "出生荚囊",
    "english-name": "Spawning Pods",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "2",
    "effect": "[消耗]. [生成] 4",
    "description": ""
  },
  {
    "name": "蘑菇人活动盔甲",
    "english-name": "Funguy in a Suit",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[消耗]. [生成] 3. 使 [蘑菇人] 获得 [护甲], 数值相当于 [部队] 层数的 4 倍",
    "description": ""
  },
  {
    "name": "腐烂",
    "english-name": "Rot",
    "type": "法术",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "3",
    "effect": "造成 15 点伤害, 施加 [腐朽] 15",
    "description": ""
  },
];
// 地下菌团 装备
export const EQUIPMENTS = [
  {
    "name": "有丝分裂菌",
    "english-name": "Mitosis Cap",
    "type": "装备",
    "clan": "地下菌团",
    "rarity": "稀有",
    "cost": "0",
    "health": 15,
    "effect": "[庆祝]: 获得该单位的永久复制体. 勇者或无卡牌单位无法装备",
  },
  {
    "name": "沃土大衣",
    "english-name": "Loamcoat",
    "type": "装备",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "2",
    "health": 20,
    "effect": "[结算]: 获得 [再生] 1, [散播] 2",
  },
];
// 地下菌团 房间
export const ROOMS = [
  {
    "name": "生长室",
    "english-name": "Grow Room",
    "type": "房间",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "所有单位在回合结束时 [散播] 1",
  },
  {
    "name": "传染源",
    "english-name": "Infectory",
    "type": "房间",
    "clan": "地下菌团",
    "rarity": "普通",
    "cost": "1",
    "effect": "当没有 [部队] 的单位死亡时, [生成] 1",
  },
  {
    "name": "黏糊房间",
    "english-name": "Mushy Room",
    "type": "房间",
    "clan": "地下菌团",
    "rarity": "高级",
    "cost": "1",
    "effect": "在战斗结束时, 对敌方单位施加 [弱化] 3",
  },
];
// 地下菌团 神器
export const ARTIFACTS = [
  {
    "name": "远古之根",
    "english-name": "Ancient Roots",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "你的卡组每有 15 张牌, 每回合使用的第一张法术牌 [余烬] -1",
  },
  {
    "name": "皮层连接头盔",
    "english-name": "Cortical Connector",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "在 [收割] 时, 蘑菇单位获得 [再生] 1",
  },
  {
    "name": "不息之土",
    "english-name": "EverChurning Soil",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "你的卡组每有 25 张牌, 每回合的抽卡数 +1",
  },
  {
    "name": "进化本能",
    "english-name": "Evolutionary Instinct",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "当一个单位受到第三种独特状态影响时, [散播] 2",
  },
  {
    "name": "树液之泉",
    "english-name": "Sapsuckling Spring",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "蘑菇单位在 [召唤] 时对敌方单位施加 [腐朽] 1",
  },
  {
    "name": "蘑菇水培",
    "english-name": "Shroomponics",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "回合开始时, 友方单位 [散播] 1",
  },
  {
    "name": "斑点孢子",
    "english-name": "Spotted Spore",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "每层 [部队], [蘑菇人] 获得 [攻击力] 2",
  },
  {
    "name": "双重思维",
    "english-name": "Twin Minds",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "每场战斗打出的第一张 [消耗] 牌创建一张永久复制体",
  },
  {
    "name": "扭曲的菌丝",
    "english-name": "Twisting Mycelium",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "回合开始时, 你的卡组每有 20 张牌, [生成] 1",
  },
  {
    "name": "新生循环",
    "english-name": "Verdant Cycle",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "每回合首次使用带有 [消耗] 的卡牌时, 抽 1 张牌",
  },
  {
    "name": "终末菌株",
    "english-name": "World-ending Strain",
    "type": "神器",
    "clan": "地下菌团",
    "effect": "当一个单位死于 [腐朽] 时, 将其减益效果施加于另一个随机敌方单位",
  },
];

export const PATHS = [
  {
    "name": "领头人",
    "champion": "断头台纽甘君",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 30,
        "health": 20,
        "size": 3,
        "effect": "[践踏]. [杀戮]: 所有友方单位 [散播] 1",
      },
      {
        "rank": 2,
        "attack": 60,
        "health": 25,
        "size": 3,
        "effect": "[践踏]. [杀戮]: 所有友方单位 [散播] 2",
      },
      {
        "rank": 3,
        "attack": 100,
        "health": 30,
        "size": 3,
        "effect": "[践踏]. [杀戮]: 所有友方单位 [散播] 4",
      },
    ]
  },
  {
    "name": "刽子手",
    "champion": "断头台纽甘君",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 30,
        "size": 3,
        "effect": "[收割]: 获得 [再生] 1 和 [狂怒] 2",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 60,
        "size": 3,
        "effect": "[收割]: 获得 [再生] 2 和 [狂怒] 3",
      },
      {
        "rank": 3,
        "attack": 30,
        "health": 100,
        "size": 3,
        "effect": "[收割]: 获得 [再生] 3 和 [狂怒] 4",
      },
    ]
  },
  {
    "name": "巣群意识",
    "champion": "断头台纽甘君",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 25,
        "size": 3,
        "effect": "[集结]: 永久 +1 [攻击力]",
      },
      {
        "rank": 2,
        "attack": 25,
        "health": 35,
        "size": 3,
        "effect": "[集结]: 永久 +1 [攻击力] 和 +1 [生命值]",
      },
      {
        "rank": 3,
        "attack": 35,
        "health": 45,
        "size": 3,
        "effect": "[集结]: 永久 +2 [攻击力] 和 +2 [生命值]",
      },
    ]
  },
  {
    "name": "永恒之花",
    "champion": "狮鬃夫人",
    "type": "path",
    "path": [
       {
        "rank": 1,
        "attack": 25,
        "health": 10,
        "size": 2,
        "effect": "[咒语]: [生成] 1",
      },
      {
        "rank": 2,
        "attack": 45,
        "health": 15,
        "size": 2,
        "effect": "[咒语]: [生成] 1. [蚀刻]: [生成] 2",
      },
      {
        "rank": 3,
        "attack": 65,
        "health": 20,
        "size": 2,
        "effect": "[咒语]: [生成] 1. [蚀刻]: [生成] 4",
      },
    ]
  },
  {
    "name": "噬人者",
    "champion": "狮鬃夫人",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 5,
        "health": 10,
        "size": 2,
        "effect": "[能力: 噬人]",
      },
      {
        "rank": 2,
        "attack": 10,
        "health": 15,
        "size": 2,
        "effect": "[能力: 噬人 II]",
      },
      {
        "rank": 3,
        "attack": 20,
        "health": 20,
        "size": 2,
        "effect": "[能力: 噬人 III]",
      },
    ]
  },
  {
    "name": "孢子歌手",
    "champion": "狮鬃夫人",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 8,
        "health": 16,
        "size": 2,
        "effect": "[行动]: 对所有敌方单位施加 [腐朽] 1. 当一个单位获得 [腐朽] 时, 获得的层数 +2",
      },
      {
        "rank": 2,
        "attack": 12,
        "health": 24,
        "size": 2,
        "effect": "[行动]: 对所有敌方单位施加 [腐朽] 1. 当一个单位获得 [腐朽] 时, 获得的层数 +3",
      },
      {
        "rank": 3,
        "attack": 20,
        "health": 40,
        "size": 2,
        "effect": "[行动]: 对所有敌方单位施加 [腐朽] 1. 当一个单位获得 [腐朽] 时, 获得的层数 +4",
      },
    ]
  },
]