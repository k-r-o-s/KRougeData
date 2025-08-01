/////////////// 觉者 ///////////////

export const module_name = "觉者";

// 觉者 英雄
export const CHAMPIONS = [
  {
    "name": "智者",
    "english-name": "The Sentient",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "觉者",
    "cost": "0",
    "effect": "",
    "size": 2,
    "attack": 0,
    "health": 10,
    "description": "",
  },
  {
    "name": "威尔丹顿",
    "english-name": "Wyldenten",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "觉者",
    "cost": "0",
    "effect": "",
    "size": 3,
    "attack": 5,
    "health": 30,
    "description": "",
  },
];
// 觉者 单位
export const UNITS = [
  {
    "name": "极速蔓灵",
    "english-name": "Animus of Speed",
    "type": "单位",
    "unit-type": "蔓灵",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[迅捷]",
    "banner-unit": true,
    "size": 2,
    "attack": 35,
    "health": 8,
    "description": ""
  },
  {
    "name": "刚毅蔓灵",
    "english-name": "Animus of Will",
    "type": "单位",
    "unit-type": "蔓灵",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[多重攻击] 2",
    "banner-unit": true,
    "size": 2,
    "attack": 3,
    "health": 8,
    "description": ""
  },
  {
    "name": "觉者空灵",
    "english-name": "Awoken Hollow",
    "type": "单位",
    "unit-type": "空灵",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[召唤]: 获得 60 最大生命值. [复原]: [滋养] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 25,
    "description": ""
  },
  {
    "name": "隐修会",
    "english-name": "Edge Prior",
    "type": "单位",
    "unit-type": "通灵者",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "在本层中, 治疗法术的 [余烬] -1",
    "banner-unit": false,
    "size": 1,
    "attack": 0,
    "health": 5,
    "description": ""
  },
  {
    "name": "坚壳隐者",
    "english-name": "Husk Hermit",
    "type": "单位",
    "unit-type": "蔓灵",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[横扫]",
    "banner-unit": true,
    "size": 2,
    "attack": 5,
    "health": 30,
    "description": ""
  },
  {
    "name": "碎片通灵者",
    "english-name": "Shard Channeler",
    "type": "单位",
    "unit-type": "通灵者",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "友方单位的每层 [尖刺] 造成的伤害 +1",
    "banner-unit": false,
    "size": 1,
    "attack": 0,
    "health": 2,
    "description": ""
  },
  {
    "name": "破碎坚壳",
    "english-name": "Shattered Shell",
    "type": "单位",
    "unit-type": "蔓灵",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[横扫]. [杀戮]: 获得 [攻击力] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 3,
    "health": 10,
    "description": ""
  },
  {
    "name": "荆棘空灵",
    "english-name": "Thorned Hollow",
    "type": "单位",
    "unit-type": "空灵",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[召唤]: 获得 60 最大生命值. [复原]: 获得 [尖刺] 3",
    "banner-unit": true,
    "size": 3,
    "attack": 15,
    "health": 15,
    "description": ""
  },
  {
    "name": "藤蔓之母",
    "english-name": "Vinemother",
    "type": "单位",
    "unit-type": "空灵",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[结算]: 将一张 [蛰刺] 法术加入手牌",
    "banner-unit": true,
    "size": 2,
    "attack": 0,
    "health": 35,
    "description": ""
  },
  {
    "name": "野林看守人",
    "english-name": "Wildwood Custodian",
    "type": "单位",
    "unit-type": "通灵者",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "每回合抽牌数 +1",
    "banner-unit": false,
    "size": 1,
    "attack": 0,
    "health": 2,
    "description": ""
  },
  {
    "name": "枯萎白木",
    "english-name": "Wilting Sapwood",
    "type": "单位",
    "unit-type": "空灵",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[复仇]: 获得 [余烬] 1",
    "banner-unit": true,
    "size": 3,
    "attack": 5,
    "health": 50,
    "description": ""
  },
  {
    "name": "钢铁歌者",
    "english-name": "Steelsinger",
    "type": "单位",
    "unit-type": "空灵",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[召唤]: 获得 80 点最大生命值. [复原]: 永久获得 [攻击力] 1",
    "banner-unit": true,
    "size": 4,
    "attack": 20,
    "health": 40,
    "description": ""
  },
];
// 觉者 法术
export const SPELLS = [
  {
    "name": "觉者道钉",
    "english-name": "Awoken's Rail Spike",
    "type": "法术",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. 抽 [X] 张牌并使它们 [余烬] -1",
    "description": ""
  },
  {
    "name": "诱捕",
    "english-name": "Ensnare",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "0",
    "effect": "对一个敌方单位施加 [缠绕] 1. 下回合抽牌数 +1",
    "description": ""
  },
  {
    "name": "薪火丰壤",
    "english-name": "Pyre-Gro",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 下回合抽牌数 -2, 每回合 [余烬] + 1, 持续整场战斗",
    "description": ""
  },
  {
    "name": "钢铁强化剂",
    "english-name": "Steel Enhancer",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "0",
    "effect": "获得 [攻击力] 4 和 [生命值] 4",
    "description": ""
  },
  {
    "name": "蛰刺",
    "english-name": "Sting",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "0",
    "effect": "对前排敌方单位造成 12 点伤害. 下回合抽牌数 +1",
    "description": ""
  },
  {
    "name": "藤蔓纠缠",
    "english-name": "Vine Grasp",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "0",
    "effect": "[前进]. 造成 3 点伤害",
    "description": ""
  },
  {
    "name": "通灵之歌",
    "english-name": "Channelsong",
    "type": "法术",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[消耗]. 抽取一张单位牌, 使其 [攻击力] +20, [生命值] +20, [余烬] 0",
    "description": ""
  },
  {
    "name": "藤蔓嫁接",
    "english-name": "Engraft",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "恢复 1 点生命值. 获得 [余烬] 1. 下回合抽牌数 +1",
    "description": ""
  },
  {
    "name": "微光",
    "english-name": "Glimmer",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "1",
    "effect": "为所有友方单位恢复 3 点生命值, 对所有敌方单位造成 3 点伤害",
    "description": ""
  },
  {
    "name": "振奋药剂",
    "english-name": "Invigorating Solution",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. 下回合抽牌数 +3",
    "description": ""
  },
  {
    "name": "贮藏荆棘",
    "english-name": "Preserved Thorns",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. 将 3 张 [蛰刺] 法术加入手牌",
    "description": ""
  },
  {
    "name": "薪火碎片",
    "english-name": "Pyre Shards",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. 获得 [尖刺] 10",
    "description": ""
  },
  {
    "name": "剃刀利刃",
    "english-name": "Razorsharp Edge",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "1",
    "effect": "获得 [攻击力] 10 和 [生命值] -2",
    "description": ""
  },
  {
    "name": "治疗爆破",
    "english-name": "Restoration Detonation",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "1",
    "effect": "为一个友方单位恢复 15 点生命值, 并对前排敌方单位造成相当于 5 倍治疗量的伤害",
    "description": ""
  },
  {
    "name": "恢复",
    "english-name": "Restore",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "1",
    "effect": "恢复 4 的生命值, 获得 [再生] 1",
    "description": ""
  },
  {
    "name": "撤退治疗",
    "english-name": "Restoring Retreat",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "1",
    "effect": "恢复 10 点生命值, [下降]",
    "description": ""
  },
  {
    "name": "根须之种",
    "english-name": "Rootseeds",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "1",
    "effect": "获得 [攻击力] 2, 下回合抽牌数 +1",
    "description": ""
  },
  {
    "name": "扩散孢子",
    "english-name": "Spreading Spores",
    "type": "法术",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "获得 [再生] 2 和 [尖刺] 2 并将一张此卡的复制品加入弃牌堆",
    "description": ""
  },
  {
    "name": "野林之力",
    "english-name": "Unleash the Wildwood",
    "type": "法术",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "完全恢复所有友方单位的所有生命值",
    "description": ""
  },
  {
    "name": "野林树液",
    "english-name": "Wildwood Sap",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "1",
    "effect": "[消耗]. 获得 [再生] 5",
    "description": ""
  },
  {
    "name": "野林之书",
    "english-name": "Wildwood Tome",
    "type": "法术",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[消耗]. 获得 [迅捷]",
    "description": ""
  },
  {
    "name": "突变进化",
    "english-name": "Adaptive Mutation",
    "type": "法术",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]. 完全恢复一个友方单位的生命值, 然后交互其 [攻击力] 和 [生命值]",
    "description": ""
  },
  {
    "name": "荆棘鞭笞",
    "english-name": "Bramble Lash",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "2",
    "effect": "对所有敌方单位造成伤害, 数值等于所有友方单位 [尖刺] 的 10 倍",
    "description": ""
  },
  {
    "name": "专注成长",
    "english-name": "Focused Growth",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "2",
    "effect": "恢复 25 点生命值, 下回合抽卡数 +2",
    "description": ""
  },
  {
    "name": "磨砺武器",
    "english-name": "Sharpen",
    "type": "法术",
    "clan": "觉者",
    "rarity": "普通",
    "cost": "2",
    "effect": "获得 [攻击力] 4 和 [尖刺] 5",
    "description": ""
  },
  {
    "name": "觉醒",
    "english-name": "Awake",
    "type": "法术",
    "clan": "觉者",
    "rarity": "高级",
    "cost": "3",
    "effect": "恢复 40 点生命值, 获得 [再生] 3",
    "description": ""
  },
  {
    "name": "生命轮回",
    "english-name": "Cycle of Life",
    "type": "法术",
    "clan": "觉者",
    "rarity": "稀有",
    "cost": "3",
    "effect": "获得 [生命值] 10 和 [尖刺] 8",
    "description": ""
  },
];
// 觉者 装备
export const EQUIPMENTS = [
];
// 觉者 房间
export const ROOMS = [
];
// 觉者 神器
export const ARTIFACTS = [
  {
    "name": "通灵之心",
    "english-name": "Channelheart",
    "type": "神器",
    "clan": "觉者",
    "effect": "[蛰刺] 获得 +20 [魔法强度]",
  },
  {
    "name": "诅咒藤蔓",
    "english-name": "Cursed Vines",
    "type": "神器",
    "clan": "觉者",
    "effect": "回合开始时, 添加一张带有 [短暂] 的 [藤蔓纠缠] 法术加入手牌",
  },
  {
    "name": "流亡者徽章",
    "english-name": "Emblem of the Exiles",
    "type": "神器",
    "clan": "觉者",
    "effect": "回合开始时, 每层的前排友方单位获得 [生命值] 15",
  },
  {
    "name": "扭曲根须",
    "english-name": "Gnarled Root",
    "type": "神器",
    "clan": "觉者",
    "effect": "友方单位每层 [尖刺] 获得 [攻击力] 1",
  },
  {
    "name": "石化熔炉",
    "english-name": "Petrified Crucible",
    "type": "神器",
    "clan": "觉者",
    "effect": "友方单位每层 [尖刺] 造成的伤害 +1",
  },
  {
    "name": "隐修披风",
    "english-name": "Priory's Cloak",
    "type": "神器",
    "clan": "觉者",
    "effect": "对友方单位恢复生命时, 对前排敌方单位造成同等的伤害",
  },
  {
    "name": "根须面具",
    "english-name": "Rootsplit Mask",
    "type": "神器",
    "clan": "觉者",
    "effect": "当敌方单位进入薪火室下方的楼层时, 对其施加 [缠绕]",
  },
  {
    "name": "树液吸取",
    "english-name": "Sap Tap",
    "type": "神器",
    "clan": "觉者",
    "effect": "每回合友方单位首次获得治疗时, 抽 1 张牌",
  },
  {
    "name": "肿胀真菌",
    "english-name": "The Bloating Fungus",
    "type": "神器",
    "clan": "觉者",
    "effect": "每层 [再生] 恢复的生命值 +1",
  },
  {
    "name": "荆棘套",
    "english-name": "Thorn Casing",
    "type": "神器",
    "clan": "觉者",
    "effect": "[蛰刺] 获得 +10 [魔法强度] 和 [穿刺]",
  },
  {
    "name": "荆棘果实",
    "english-name": "Thornfruit",
    "type": "神器",
    "clan": "觉者",
    "effect": "回合开始时, 将一张 [蛰刺] 加入手牌",
  },
];

export const PATHS = [
  {
    "name": "爆炸",
    "champion": "智者",
    "type": "path",
    "path": [
     {
        "rank": 1,
        "attack": 0,
        "health": 30,
        "size": 2,
        "effect": "[复原]: 对前排敌方单位造成 30 点伤害",
      },
      {
        "rank": 2,
        "attack": 0,
        "health": 60,
        "size": 2,
        "effect": "[复原]: 对前排敌方单位造成 60 点伤害",
      },
      {
        "rank": 3,
        "attack": 0,
        "health": 120,
        "size": 2,
        "effect": "[复原]: 对前排敌方单位造成 120 点伤害",
      },
    ]
  },
  {
    "name": "培育",
    "champion": "智者",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 0,
        "health": 40,
        "size": 2,
        "effect": "[复仇]: [滋养] 2. 每回合抽牌数 +1",
      },
      {
        "rank": 2,
        "attack": 0,
        "health": 80,
        "size": 2,
        "effect": "[复仇]: [滋养] 3. 每回合抽牌数 +1",
      },
      {
        "rank": 3,
        "attack": 0,
        "health": 160,
        "size": 2,
        "effect": "[复仇]: [滋养] 4. 每回合抽牌数 +1",
      },
    ]
  },
  {
    "name": "怒火中烧",
    "champion": "智者",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 0,
        "health": 40,
        "size": 2,
        "effect": "[尖刺]: 15",
      },
      {
        "rank": 2,
        "attack": 0,
        "health": 80,
        "size": 2,
        "effect": "[尖刺]: 25",
      },
      {
        "rank": 3,
        "attack": 0,
        "health": 150,
        "size": 2,
        "effect": "[尖刺]: 50",
      },
    ]
  },
  {
    "name": "荆棘领主",
    "champion": "威尔丹顿",
    "type": "path",
    "path": [
       {
        "rank": 1,
        "attack": 5,
        "health": 40,
        "size": 3,
        "effect": "[召唤]: 将 3 张带有 [冻结] 的 [蛰刺] 法术加入手牌. [咒语]: +2 [攻击力]",
      },
      {
        "rank": 2,
        "attack": 10,
        "health": 70,
        "size": 3,
        "effect": "[召唤]: 将 3 张带有 [冻结] 的 [蛰刺] 法术加入手牌. [咒语]: +3 [攻击力]",
      },
      {
        "rank": 3,
        "attack": 20,
        "health": 100,
        "size": 3,
        "effect": "[召唤]: 将 3 张带有 [冻结] 的 [蛰刺] 法术加入手牌. [咒语]: +4 [攻击力]",
      },
    ]
  },
  {
    "name": "扼杀者",
    "champion": "威尔丹顿",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 10,
        "health": 40,
        "size": 3,
        "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [缠绕]",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 65,
        "size": 3,
        "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [缠绕]",
      },
      {
        "rank": 3,
        "attack": 40,
        "health": 90,
        "size": 3,
        "effect": "[横扫]. [攻击]: 对被攻击的单位施加 [缠绕]",
      },
    ]
  },
  {
    "name": "掠夺者",
    "champion": "威尔丹顿",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 20,
        "health": 30,
        "size": 3,
        "effect": "[迅捷]. [附魔]: 获得 [迅捷]",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 30,
        "size": 3,
        "effect": "[迅捷]. [多重攻击] 1. [附魔]: 获得 [迅捷]",
      },
      {
        "rank": 3,
        "attack": 25,
        "health": 30,
        "size": 3,
        "effect": "[迅捷]. [多重攻击] 2. [附魔]: 获得 [迅捷]",
      },
    ]
  },
]