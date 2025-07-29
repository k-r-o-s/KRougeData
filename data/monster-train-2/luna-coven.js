/////////////// 月巫团 ///////////////

export const module_name = "月巫团";

// 月巫团 英雄
export const CHAMPIONS = [
  {
    "name": "阿杜恩",
    "english-name": "Arduhn",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "月巫团",
    "cost": "0",
    "effect": "[魔刃] 2",
    "size": 2,
    "attack": 10,
    "health": 10,
    "description": "",
  },
  {
    "name": "艾卡",
    "english-name": "Ekka",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "月巫团",
    "cost": "0",
    "effect": "[能力: 飞行]",
    "size": 2,
    "attack": 5,
    "health": 5,
    "description": ""
  },
];
// 月巫团 单位
export const UNITS = [
  {
    "name": "占星师",
    "english-name": "Astrologer",
    "type": "单位",
    "unit-type": "月神女",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[月相循环]: 获得 [攻击力] 5",
    "banner-unit": true,
    "size": 2,
    "attack": 5,
    "health": 10,
    "description": ""
  },
  {
    "name": "灵气编织者",
    "english-name": "Aurora Weaver",
    "type": "单位",
    "unit-type": "月神女",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[月相循环]: 获得 [导流] 1",
    "banner-unit": false,
    "size": 1,
    "attack": 5,
    "health": 5,
    "description": ""
  },
  {
    "name": "优雅小仙女",
    "english-name": "Ethereal Seelie",
    "type": "单位",
    "unit-type": "妖精",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[导流] 5. 每次获得 [导流] 时获得的层数 +1",
    "banner-unit": true,
    "size": 1,
    "attack": 5,
    "health": 5,
    "description": ""
  },
  {
    "name": "月亮祭司",
    "english-name": "Lunar Priestess",
    "type": "单位",
    "unit-type": "月神女",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[结算]: 添加一张带有 [短暂] 的 [月之仪式] 法术牌到手牌",
    "banner-unit": true,
    "size": 1,
    "attack": 8,
    "health": 8,
    "description": ""
  },
  {
    "name": "搞事精",
    "english-name": "Meddler",
    "type": "单位",
    "unit-type": "妖精",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "1",
    "effect": "[召唤]: [月相变化]. [能力: 月相操控]",
    "banner-unit": false,
    "size": 1,
    "attack": 6,
    "health": 3,
    "description": ""
  },
  {
    "name": "月之仙子",
    "english-name": "Moon Pixie",
    "type": "单位",
    "unit-type": "妖精",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "1",
    "effect": "[导流] 3. [附魔]: 获得 [导流] 3",
    "banner-unit": false,
    "size": 1,
    "attack": 3,
    "health": 3,
    "description": ""
  },
  {
    "name": "唤月者",
    "english-name": "Mooncaller",
    "type": "单位",
    "unit-type": "月神女",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[月相循环] 额外触发一次",
    "banner-unit": false,
    "size": 1,
    "attack": 3,
    "health": 3,
    "description": ""
  },
  {
    "name": "夜莺",
    "english-name": "Nightingale",
    "type": "单位",
    "unit-type": "寂静者",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[潜行] 2. [新月]: 多重攻击 1",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 5,
    "description": ""
  },
  {
    "name": "寂静者哨兵",
    "english-name": "Silent Sentinel",
    "type": "单位",
    "unit-type": "寂静者",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[能力: 法术猛击]",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 40,
    "description": ""
  },

  {
    "name": "月之守卫",
    "english-name": "Moonguard",
    "type": "单位",
    "unit-type": "寂静者",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[魔刃] 3. [新月]: [魔刃] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 30,
    "health": 30,
    "description": ""
  },
  {
    "name": "代笔人",
    "english-name": "Scrivener",
    "type": "单位",
    "unit-type": "月神女",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[能力: 织法]",
    "banner-unit": true,
    "size": 1,
    "attack": 15,
    "health": 8,
    "description": ""
  },
  {
    "name": "月神女侍从",
    "english-name": "Selene Acolyte",
    "type": "单位",
    "unit-type": "月神女",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[魔刃] 2. [满月]: [横扫]",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 5,
    "description": ""
  },
  {
    "name": "阴影守卫",
    "english-name": "Shadeguard",
    "type": "单位",
    "unit-type": "寂静者",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[结算]: 若月相为新月, 获得 [生命值] 15 和 [攻击力] 10",
    "banner-unit": true,
    "size": 3,
    "attack": 15,
    "health": 40,
    "description": ""
  },
];
// 月巫团 法术
export const SPELLS = [
  {
    "name": "月巫团道钉",
    "english-name": "Coven's Spike",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. 获得 3 [X] [导流]",
    "description": ""
  },
  {
    "name": "月相魔导",
    "english-name": "Lunacy",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "X",
    "effect": "[月相变化] [X] 次. 获得 1 [X] [导流]",
    "description": ""
  },
  {
    "name": "月光轰击",
    "english-name": "Moonbeam",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "X",
    "effect": "对前排敌方单位造成 20 点伤害, 重复 [X] 次",
    "description": ""
  },
  {
    "name": "月之仪式",
    "english-name": "Moon Ritual",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "0",
    "effect": "[月相变化]. 使一个友方单位获得 [导流] 1",
    "description": ""
  },
  {
    "name": "月出时分",
    "english-name": "Moonrise",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 获得 [余烬] 1. [月相变化] 至 [满月]",
    "description": ""
  },
  {
    "name": "魔纺术",
    "english-name": "Witchweave",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "0",
    "effect": "对于一个敌方单位造成 1 点伤害, 或者对一个友方单位恢复 1 点生命值",
    "description": ""
  },
  {
    "name": "夜幕掩护",
    "english-name": "Cover of Night",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. [月相变化] 至新月. 使所有友方单位获得 [攻击力] 5 和 [潜行] 1",
    "description": ""
  },
  {
    "name": "二元性",
    "english-name": "Duality",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[调和]. 对于一个敌方单位造成 10 点伤害, 或者对一个友方单位恢复 10 点生命值",
    "description": ""
  },
  {
    "name": "妖精祝福",
    "english-name": "Fae's Blessing",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "1",
    "effect": "恢复 5 点生命值, 过量治疗将转变为 [护甲]",
    "description": ""
  },
  {
    "name": "闪光饮剂",
    "english-name": "Glittering Draught",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. 恢复 20 点生命值, 施加 [导流] 4",
    "description": ""
  },
  {
    "name": "重力",
    "english-name": "Gravity",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "1",
    "effect": "造成 5 点伤害. [新月]: [下降]. [满月]: [上升]",
    "description": ""
  },
  {
    "name": "银光闪击",
    "english-name": "Silver Strike",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "1",
    "effect": "对前排单位造成 25 点伤害. [满月]: 改为造成两次伤害",
    "description": ""
  },
  {
    "name": "星尘祈愿",
    "english-name": "Stardust Invocation",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[消耗]. [月相变化]. 在你的手牌中创建一个法术牌的 [短暂] 复制体",
    "description": ""
  },
  {
    "name": "星尘冲击",
    "english-name": "Starstruck",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "1",
    "effect": "造成 5 点伤害. [满月]: 施加 [眩晕] 1",
    "description": ""
  },
  {
    "name": "血月",
    "english-name": "Bloody Moon",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "2",
    "effect": "造成 25 点伤害. [杀戮]: 获得 [余烬] 2",
    "description": ""
  },
  {
    "name": "宇宙闪电",
    "english-name": "Cosmic Bolt",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[调和]. 造成 35 点伤害",
    "description": ""
  },
  {
    "name": "妖术飞升",
    "english-name": "Hexscalation",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "2",
    "effect": "[上升]. 施加 [法术易伤] 2",
    "description": ""
  },
  {
    "name": "仪式之书",
    "english-name": "Ritual Tome",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]. 使一个友方单位获得 [泰坦皮肤] 2",
    "description": ""
  },
  {
    "name": "天体风暴",
    "english-name": "Celestial Storm",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "普通",
    "cost": "3",
    "effect": "对所有敌方单位造成 10 点伤害. [满月]: [调和]",
    "description": ""
  },
  {
    "name": "银墨粉",
    "english-name": "Silver Ink",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[消耗]. 使手牌中的所有法术牌获得 [调和] 和 [魔法强度] 3",
    "description": ""
  },
  {
    "name": "潮汐之舞",
    "english-name": "Tidal Turning",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[消耗]. 使所有友方单位恢复 10 点生命值, 过量治疗将转变为 [护甲]",
    "description": ""
  },
  {
    "name": "苍穹坠落",
    "english-name": "Heavenfall",
    "type": "法术",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "4",
    "effect": "对所有敌方单位造成 80 点伤害. [满月]: 改为对所有楼层造成伤害",
    "description": ""
  },
];
// 月巫团 装备
export const EQUIPMENTS = [
  {
    "name": "月相循环法杖",
    "english-name": "Luna Cyclestaff",
    "type": "装备",
    "clan": "月巫团",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[月相循环]: 这件装备永久获得 [攻击力] 1",
  },
  {
    "name": "月光弯刃剑",
    "english-name": "Moonlit Glaive",
    "type": "装备",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "2",
    "attack": 5,
    "effect": "[魔刃] 3",
  },
];
// 月巫团 房间
export const ROOMS = [
  {
    "name": "月食室",
    "english-name": "Eclipse Chamber",
    "type": "房间",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "[新月] 效果始终有效. 寂静者单位 [结算] 时获得 [攻击力] 15",
  },
  {
    "name": "天文馆",
    "english-name": "Planetarium",
    "type": "房间",
    "clan": "月巫团",
    "rarity": "高级",
    "cost": "1",
    "effect": "使所有友方单位获得 [导流] 5",
  },
];
// 月巫团 神器
export const ARTIFACTS = [
  {
    "name": "占星师的星象仪",
    "english-name": "Astrologer's Orrery",
    "type": "神器",
    "clan": "月巫团",
    "effect": "每回合月相首次变为 [满月] 时, 获得 [余烬] 1",
  },
  {
    "name": "星界之帆",
    "english-name": "Celestial Sails",
    "type": "神器",
    "clan": "月巫团",
    "effect": "[部署阶段] 期间, 从卡组中抽取一张非伤害性法术, 并使其 [余烬] -1",
  },
  {
    "name": "循环之轮",
    "english-name": "Circle of Cycles",
    "type": "神器",
    "clan": "月巫团",
    "effect": "[月相循环] 时, 生命值最低的友方单位恢复 10 点生命值",
  },
  {
    "name": "妖精隐匿处",
    "english-name": "Fae's Nook",
    "type": "神器",
    "clan": "月巫团",
    "effect": "[月相循环] 时, 妖精获得 [导流] 1 和 [攻击力] 5",
  },
  {
    "name": "王国之泪",
    "english-name": "Kingdom's Tears",
    "type": "神器",
    "clan": "月巫团",
    "effect": "法术治疗效果提高 10",
  },
  {
    "name": "月亮灯",
    "english-name": "Lunar Lantern",
    "type": "神器",
    "clan": "月巫团",
    "effect": "满月期间, 月神女单位获得 [攻击力] 20. 新月期间, 寂静者单位获得 [攻击力] 20",
  },
  {
    "name": "月之石",
    "english-name": "Moonstone",
    "type": "神器",
    "clan": "月巫团",
    "effect": "回合结束时, 若月相为 [满月], 手牌中的法术牌获得 [魔法强度] 10",
  },
  {
    "name": "锋锐月牙",
    "english-name": "Razorthin Crescent",
    "type": "神器",
    "clan": "月巫团",
    "effect": "每层 [魔刃] 额外获得 [攻击力] 1",
  },
  {
    "name": "先知之球",
    "english-name": "Seer Orb",
    "type": "神器",
    "clan": "月巫团",
    "effect": "当施加 [法术易伤] 时, 额外施加 1 层",
  },
  {
    "name": "寂静者符文",
    "english-name": "Silent Sigil",
    "type": "神器",
    "clan": "月巫团",
    "effect": "当月相变化为新月时, 寂静者单位获得 [护甲] 10",
  },
  {
    "name": "星尘点心",
    "english-name": "Stardust Treat",
    "type": "神器",
    "clan": "月巫团",
    "effect": "每回合召唤的第一个单位获得 [导流] 4",
  },
];

export const PATHS = [
  {
    "name": "神秘之锤",
    "champion": "阿杜恩",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 10,
        "health": 30,
        "size": 2,
        "effect": "[魔刃] 2. [能力: 暗影施法]. [新月]: +50 [攻击力]",
      },
      {
        "rank": 2,
        "attack": 25,
        "health": 45,
        "size": 2,
        "effect": "[魔刃] 2. [能力: 暗影施法]. [新月]: +100 [攻击力]",
      },
      {
        "rank": 3,
        "attack": 50,
        "health": 90,
        "size": 2,
        "effect": "[魔刃] 2. [能力: 暗影施法]. [新月]: +150 [攻击力]",
      },
    ]
  },
  {
    "name": "战狂",
    "champion": "阿杜恩",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 20,
        "health": 12,
        "size": 2,
        "effect": "[魔刃] 2. [杀戮]: 永久 +1 [导流]",
      },
      {
        "rank": 2,
        "attack": 35,
        "health": 20,
        "size": 2,
        "effect": "[魔刃] 4. [杀戮]: 永久 +1 [导流]",
      },
      {
        "rank": 3,
        "attack": 50,
        "health": 30,
        "size": 2,
        "effect": "[魔刃] 6. [杀戮]: 永久 +1 [导流]",
      },
    ]
  },
  {
    "name": "圣职者",
    "champion": "阿杜恩",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 20,
        "health": 20,
        "size": 2,
        "effect": "[魔刃] 2. [咒语]: 使所有友方单位获得 [护甲] 3, 寂静者获得双倍",
      },
      {
        "rank": 2,
        "attack": 30,
        "health": 30,
        "size": 2,
        "effect": "[魔刃] 2. [咒语]: 使所有友方单位获得 [护甲] 3, 寂静者获得双倍",
      },
      {
        "rank": 3,
        "attack": 50,
        "health": 50,
        "size": 2,
        "effect": "[魔刃] 2. [咒语]: 使所有友方单位获得 [护甲] 4, 寂静者获得双倍",
      },
    ]
  },
  {
    "name": "天界织法者",
    "champion": "艾卡",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 8,
        "size": 2,
        "effect": "[导流] 6. [咒语]: 获得 [导流] 1",
      },
      {
        "rank": 2,
        "attack": 25,
        "health": 8,
        "size": 2,
        "effect": "[导流] 6. [咒语]: 获得 [导流] 2",
      },
      {
        "rank": 3,
        "attack": 35,
        "health": 8,
        "size": 2,
        "effect": "[导流] 6. [咒语]: 获得 [导流] 3",
      },
    ]
  },
  {
    "name": "银光女皇",
    "champion": "艾卡",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 10,
        "size": 2,
        "effect": "[能力: 月之回响]. 满月: +15 [导流]",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 15,
        "size": 2,
        "effect": "[能力: 月之回响]. 满月: +40 [导流]",
      },
      {
        "rank": 3,
        "attack": 30,
        "health": 20,
        "size": 2,
        "effect": "[能力: 月之回响]. 满月: +70 [导流]",
      },
    ]
  },
  {
    "name": "月相师",
    "champion": "艾卡",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 10,
        "health": 10,
        "size": 2,
        "effect": "[月相循环]: 使所有友方单位获得 +1 [攻击力] 和 +1 [生命值]",
      },
      {
        "rank": 2,
        "attack": 15,
        "health": 15,
        "size": 2,
        "effect": "[月相循环]: 使所有友方单位获得 +2 [攻击力] 和 +2 [生命值]",
      },
      {
        "rank": 3,
        "attack": 20,
        "health": 20,
        "size": 2,
        "effect": "[月相循环]: 使所有友方单位获得 +3 [攻击力] 和 +3 [生命值]",
      },
    ]
  },
]