/////////////// 流放者 ///////////////

export const module_name = "流放者";

// 流放者 英雄
export const CHAMPIONS = [
  {
    "name": "菲尔",
    "english-name": "Fel",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "流放者",
    "cost": "0",
    "effect": "[多重攻击] 1",
    "size": 2,
    "attack": 1,
    "health": 10,
    "description": "菲尔是流放者中才华横溢且足智多谋的指挥官，她发誓要将天堂从她哥哥的暴政中解放出来。然而，她曾受的心伤能否痊愈，还是未知之数",
  },
  {
    "name": "塔洛丝",
    "english-name": "Talos",
    "type": "单位",
    "unit-type": "勇者",
    "rarity": "勇者",
    "clan": "流放者",
    "cost": "0",
    "effect": "[能力: 飞行]",
    "size": 2,
    "attack": 4,
    "health": 6,
    "description": "",
  },
];
// 流放者 单位
export const UNITS = [
  {
    "name": "战斗舞者",
    "english-name": "Battle Dancer",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[转移]: 获得 [英勇] 3",
    "banner-unit": true,
    "size": 2,
    "attack": 7,
    "health": 14,
    "description": ""
  },
  {
    "name": "死亡舞者",
    "english-name": "Death's Dancer",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[转移]: 使所有友方单位获得 [攻击力] 4",
    "banner-unit": true,
    "size": 2,
    "attack": 7,
    "health": 14,
    "description": ""
  },
  {
    "name": "恶魔新兵",
    "english-name": "Demonic Fledgling",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[攻击]: 获得 [英勇] 1; [转移]: 获得 [狂怒] 2",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 10,
    "description": "\"到休息时间了吗?\""
  },
  {
    "name": "神圣舞者",
    "english-name": "Divine Dancer",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[转移]: 使所有友方单位获得 [护甲] 5",
    "banner-unit": true,
    "size": 2,
    "attack": 7,
    "health": 14,
    "description": "舞蹈是一首诗, 每一次杀戮都是一段舞步"
  },
  {
    "name": "领唱鸣鸟",
    "english-name": "Lead Songbird",
    "type": "单位",
    "unit-type": "圣乐团成员",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[前进]。获得 [英勇] 2",
    "banner-unit": false,
    "size": 1,
    "attack": 2,
    "health": 2,
    "description": ""
  },
  {
    "name": "朋克吉他手",
    "english-name": "Punk Shredder",
    "type": "单位",
    "unit-type": "圣乐团成员",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[附魔]: 获得 [践踏]",
    "banner-unit": false,
    "size": 1,
    "attack": 2,
    "health": 2,
    "description": ""
  },
  {
    "name": "坚毅十字军",
    "english-name": "Steadfast Crusader",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[能力: 猛击]",
    "banner-unit": true,
    "size": 2,
    "attack": 5,
    "health": 30,
    "description": ""
  },
  {
    "name": "持剑侍女",
    "english-name": "Swordmaiden",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[召唤]: 从你的卡组抽一张装备卡。[巧匠]: 获得 [英勇] 8",
    "banner-unit": true,
    "size": 2,
    "attack": 10,
    "health": 20,
    "description": ""
  },
  {
    "name": "林莺号手",
    "english-name": "Upbeat Warbler",
    "type": "单位",
    "unit-type": "圣乐团成员",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "1",
    "effect": "[附魔]: 获得 [迅捷]",
    "banner-unit": false,
    "size": 1,
    "attack": 2,
    "health": 2,
    "description": ""
  },
  {
    "name": "复仇者",
    "english-name": "Avenger",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "2",
    "effect": "[复仇]: 对攻击者施加 [近战易伤] 1",
    "banner-unit": true,
    "size": 2,
    "attack": 20,
    "health": 40,
    "description": ""
  },
  {
    "name": "放火者",
    "english-name": "Firebrand",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "2",
    "effect": "[复仇]: 获得 [英勇] 2",
    "banner-unit": true,
    "size": 2,
    "attack": 15,
    "health": 30,
    "description": ""
  },
  {
    "name": "军团守卫",
    "english-name": "Hostguard",
    "type": "单位",
    "unit-type": "天使",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[能力: 天堂猛击]",
    "banner-unit": true,
    "size": 3,
    "attack": 25,
    "health": 60,
    "description": ""
  },
  {
    "name": "死亡金属竖琴手",
    "english-name": "Deathmetal Hymnist",
    "type": "单位",
    "unit-type": "圣乐团成员",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "4",
    "effect": "[附魔]: 获得 [多重攻击] 1",
    "banner-unit": false,
    "size": 1,
    "attack": 2,
    "health": 2,
    "description": ""
  },
];
// 流放者 法术
export const SPELLS = [
  {
    "name": "流放者道钉",
    "english-name": "Spike of the Banished",
    "type": "法术",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]。获得 3 [X] [英勇]",
  },
  {
    "name": "维格之光",
    "english-name": "Wyngh's Radiance",
    "type": "法术",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[前进]。施加 [X] [近战易伤]",
  },
  {
    "name": "挑战",
    "english-name": "Challenge",
    "type": "法术",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "1",
    "effect": "[前进]。施加 [近战易伤] 1",
  },
  {
    "name": "英勇俯冲",
    "english-name": "Heroic Dive",
    "type": "法术",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]。下降 然后 [前进] 一个友方单位. 对前排敌方单位造成该单位 ([生命值] + [护甲]) x 2 的伤害",
  },
  {
    "name": "激励",
    "english-name": "Inspire",
    "type": "法术",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "1",
    "effect": "使所有友方单位获得 [英勇] 1",
  },
  {
    "name": "正义之战",
    "english-name": "Just Cause",
    "type": "法术",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "1",
    "effect": "[前进]。获得 [英勇] 2",
  },
  {
    "name": "勇气药水",
    "english-name": "Liquid Courage",
    "type": "法术",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]。施加 [伤害护盾] 1 和 [英勇] 4",
  },
  {
    "name": "狂怒飞升",
    "english-name": "Rising Rage",
    "type": "法术",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "1",
    "effect": "[上升]。然后 [前进]",
  },
  {
    "name": "失落路途之书",
    "english-name": "Tome of the Lost Path",
    "type": "法术",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[消耗]。使一个友方单位获得 [能力: 飞行]",
  },
  {
    "name": "斥退",
    "english-name": "Begone",
    "type": "法术",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "2",
    "effect": "[后退] 前排敌方单位。对所有敌方单位施加 [近战易伤] 1",
  },
  {
    "name": "顺劈",
    "english-name": "Cleave",
    "type": "法术",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "2",
    "effect": "对敌方单位造成等于前排友方单位 [攻击] 的伤害",
  },
  {
    "name": "致命猛袭",
    "english-name": "Deadly Plunge",
    "type": "法术",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "2",
    "effect": "[消耗]。对前排敌方单位造成等于相当于该单位 ([生命值] + [护甲]) x 3 的伤害",
  },
  {
    "name": "鹰之心",
    "english-name": "Eagle Heart",
    "type": "法术",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]。[前进]。使一个友方单位获得 [英勇] 5, 然后使其立即攻击",
  },
  {
    "name": "无私牺牲",
    "english-name": "Selfless Sacrefice",
    "type": "法术",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "2",
    "effect": "[消耗]。[前进]。获得 [伤害护盾] 2",
  },
  {
    "name": "赐福",
    "english-name": "Benidiction",
    "type": "法术",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "3",
    "effect": "使所有友方单位获得 [英勇] 2, [伤害护盾] 1",
  },
  {
    "name": "妖魔化",
    "english-name": "Demonize",
    "type": "法术",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "3",
    "effect": "[下降]。施加 [近战易伤] 2",
  },
  {
    "name": "神祇",
    "english-name": "Divinity",
    "type": "法术",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "3",
    "effect": "获得 [英勇] 10",
  },
  {
    "name": "避难所",
    "english-name": "Sanctuary",
    "type": "法术",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[消耗]。使所有友方单位获得 [伤害护盾] 2",
  },
];
// 流放者 装备
export const EQUIPMENTS = [
  {
    "name": "永恒之光",
    "english-name": "Everlasting Light",
    "type": "装备",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "attack": 3,
    "effect": "[攻击]: 使所有友方单位获得 [英勇] 2",
  },
  {
    "name": "虔信者的血之衣",
    "english-name": "Penitent's Bloodsuit",
    "type": "装备",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "1",
    "effect": "[转移]: 受到 30 点伤害。可以装备在敌方单位上",
  },
  {
    "name": "虔信者的死亡之衣",
    "english-name": "Pentitent's Deathsuit",
    "type": "装备",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "1",
    "effect": "[转移]: 施加 [近战易伤] 1。可以装备在敌方单位上",
  },
  {
    "name": "风之刃",
    "english-name": "Windblade",
    "type": "装备",
    "clan": "流放者",
    "rarity": "普通",
    "cost": "1",
    "effect": "[转移]: 施加 [英勇] 1; [结算]: 触发 [转移]",
  },
  {
    "name": "被诅咒的双头刃",
    "english-name": "Cursed Twinblade",
    "type": "装备",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "2",
    "attack": 6,
    "effect": "[多重攻击] 1; [攻击]: -1 [攻击力]",
  },
  {
    "name": "维格之盾",
    "english-name": "Shield of Wyngh",
    "type": "装备",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "2",
    "health": 10,
    "effect": "[复仇]: 对攻击者造成该单位 [生命值] 的伤害",
  },
];
// 流放者 房间
export const ROOMS = [
  {
    "name": "被禁锢的西风",
    "english-name": "Imprisoned Zephyr",
    "type": "房间",
    "clan": "流放者",
    "rarity": "高级",
    "cost": "0",
    "effect": "所有友方单位在 [攻击] 时 [前进]",
  },
  {
    "name": "浴血竞技场",
    "english-name": "Bloodsoaked Arena",
    "type": "房间",
    "clan": "流放者",
    "rarity": "稀有",
    "cost": "1",
    "effect": "所有友方单位在 [杀戮] 时获得 [英勇] 6",
  },
];
// 流放者 神器
export const ARTIFACTS = [
  {
    "name": "远古化石羽翼",
    "english-name": "Ancient Pinion",
    "type": "神器",
    "clan": "流放者",
    "effect": "当天使移动时, 获得 [英勇] 2",
  },
  {
    "name": "巅峰之血",
    "english-name": "Blood of the Apex",
    "type": "神器",
    "clan": "流放者",
    "effect": "在 [杀戮] 时, 使单位的装备永久获得 +2 [攻击力]",
  },
  {
    "name": "燃烧之羽",
    "english-name": "Burning Feather",
    "type": "神器",
    "clan": "流放者",
    "effect": "友方单位死亡时, 同层的天使获得 [狂怒] 7",
  },
  {
    "name": "队长的光环",
    "english-name": "Captain's Halo",
    "type": "神器",
    "clan": "流放者",
    "effect": "回合开始时, 所有层的前排友方单位获得 [英勇] 2",
  },
  {
    "name": "天界宝石",
    "english-name": "Celestial Cascade",
    "type": "神器",
    "clan": "流放者",
    "effect": "友方单位获得 [英勇] 时, 获得的层数 +1",
  },
  {
    "name": "女武神之链",
    "english-name": "Chain of the Valkyrie",
    "type": "神器",
    "clan": "流放者",
    "effect": "当给天使穿戴装备时, 使其获得 [英勇] 3, [狂怒] 3, [再生] 3",
  },
  {
    "name": "命运香炉",
    "english-name": "Karmic Censer",
    "type": "神器",
    "clan": "流放者",
    "effect": "[转移] 额外触发一次",
  },
  {
    "name": "殉教者印记",
    "english-name": "Martyr's Signet",
    "type": "神器",
    "clan": "流放者",
    "effect": "战斗结束时, 所有层的前排友方单位永久获得 +6 [生命值]",
  },
  {
    "name": "闪亮臂甲",
    "english-name": "Radiant Arms",
    "type": "神器",
    "clan": "流放者",
    "effect": "为单位穿戴装备时, 使其获得 [伤害护盾] 1",
  },
  {
    "name": "天音小号",
    "english-name": "Skysong Trumpet",
    "type": "神器",
    "clan": "流放者",
    "effect": "召唤圣乐团成员时, 使同层友方单位获得 [英勇] 5",
  },
  {
    "name": "泰坦法令",
    "english-name": "Titan's Edict",
    "type": "神器",
    "clan": "流放者",
    "effect": "每层 [英勇] 额外提供 +1 [护甲]",
  },
];

export const PATHS = [
  {
    "name": "先锋卫士",
    "champion": "菲尔",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 2,
        "health": 20,
        "size": 2,
        "effect": "[多重攻击] 1. [复仇]: 使所有友方单位获得 [英勇] 1",
      },
      {
        "rank": 2,
        "attack": 3,
        "health": 30,
        "size": 2,
        "effect": "[多重攻击] 1. [复仇]: 使所有友方单位获得 [英勇] 2",
      },
      {
        "rank": 3,
        "attack": 4,
        "health": 40,
        "size": 2,
        "effect": "[多重攻击] 1. [复仇]: 使所有友方单位获得 [英勇] 4",
      },
    ]
  },
  {
    "name": "无缚者",
    "champion": "菲尔",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 1,
        "health": 10,
        "size": 2,
        "effect": "[多重攻击] 1. [转移] 永久获得 [英勇] 1",
      },
      {
        "rank": 2,
        "attack": 9,
        "health": 24,
        "size": 2,
        "effect": "[多重攻击] 1. [转移] 永久获得 [英勇] 1",
      },
      {
        "rank": 3,
        "attack": 9,
        "health": 32,
        "size": 2,
        "effect": "[多重攻击] 1. [转移] 永久获得 [英勇] 1. [英勇] 达到 75 时, 获得 [多重攻击] 1",
      },
    ]
  },
  {
    "name": "救世主",
    "champion": "菲尔",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 5,
        "health": 20,
        "size": 2,
        "effect": "[多重攻击] 1. [能力: 救世主]",
      },
      {
        "rank": 2,
        "attack": 10,
        "health": 30,
        "size": 2,
        "effect": "[多重攻击] 1. [能力: 救世主 II]",
      },
      {
        "rank": 3,
        "attack": 15,
        "health": 45,
        "size": 2,
        "effect": "[多重攻击] 1. [能力: 救世主 III]",
      },
    ]
  },
  {
    "name": "战斗牧师",
    "champion": "塔洛丝",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 20,
        "size": 2,
        "effect": "[能力: 飞行]. [结算]: 使所有友方单位获得 [英勇] 2",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 30,
        "size": 2,
        "effect": "[能力: 飞行]. [结算]: 使所有友方单位获得 [英勇] 4",
      },
      {
        "rank": 3,
        "attack": 25,
        "health": 50,
        "size": 2,
        "effect": "[能力: 飞行]. [结算]: 使所有友方单位获得 [英勇] 6",
      },
    ]
  },
  {
    "name": "天界辉光",
    "champion": "塔洛丝",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 20,
        "size": 2,
        "effect": "[能力: 飞行]. [转移] 对所有友方单位施加 [近战易伤] 1",
      },
      {
        "rank": 2,
        "attack": 25,
        "health": 35,
        "size": 2,
        "effect": "[能力: 飞行]. [转移] 对所有友方单位施加 [近战易伤] 2",
      },
      {
        "rank": 3,
        "attack": 40,
        "health": 60,
        "size": 2,
        "effect": "[能力: 飞行]. [转移] 对所有友方单位施加 [近战易伤] 3",
      },
    ]
  },
  {
    "name": "女巫",
    "champion": "塔洛丝",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 6,
        "health": 12,
        "size": 2,
        "effect": "[能力: 飞行]. [庆祝]: 使所有层的所有友方单位永久获得 +2 [攻击力] 和 +6 [生命值]",
      },
      {
        "rank": 2,
        "attack": 8,
        "health": 16,
        "size": 2,
        "effect": "[能力: 飞行]. [庆祝]: 使所有层的所有友方单位永久获得 +4 [攻击力] 和 +10 [生命值]",
      },
      {
        "rank": 3,
        "attack": 14,
        "health": 26,
        "size": 2,
        "effect": "[能力: 飞行]. [庆祝]: 使所有层的所有友方单位永久获得 +10 [攻击力] 和 +20 [生命值]",
      },
    ]
  }
]