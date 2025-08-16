/////////////// 影主 ///////////////

export const module_name = "影主";

// 影主 英雄
/** @type { Unit[] } */
export const CHAMPIONS = [
  {
    "name": "影祖",
    "english_name": "Penumbra",
    "type": "单位",
    "subtype": "勇者",
    "rarity": "勇者",
    "clan": "影主",
    "cost": "0",
    "effect": "",
    "size": 3,
    "attack": 20,
    "health": 20,
    "description": "",
  },
  {
    "name": "原基",
    "english_name": "Primordium",
    "type": "单位",
    "subtype": "勇者",
    "rarity": "勇者",
    "clan": "影主",
    "cost": "0",
    "effect": "[自助餐] 3. [被吞食]: 使被吞食者获得此单位的 [攻击力] 和 [生命值]",
    "size": 2,
    "attack": 3,
    "health": 3,
    "description": "",
  },
];
// 影主 单位
/** @type { Unit[] } */
export const UNITS = [
  {
    "name": "影者影裔",
    "english_name": "Antumbra Morsel",
    "type": "单位",
    "subtype": "影裔",
    "clan": "影主",
    "rarity": "高级",
    "cost": "0",
    "effect": "[被吞食]: 吞食者获得 [生命值] 9",
    "banner_unit": false,
    "size": 1,
    "attack": 0,
    "health": 9,
    "description": ""
  },
  {
    "name": "熔岩影裔",
    "english_name": "Magma Morsel",
    "type": "单位",
    "subtype": "影裔",
    "clan": "影主",
    "rarity": "高级",
    "cost": "0",
    "effect": "[被吞食]: 吞食者获得 [攻击力] 9",
    "banner_unit": false,
    "size": 1,
    "attack": 9,
    "health": 1,
    "description": ""
  },
  {
    "name": "影裔采掘者",
    "english_name": "Morsel Excavator",
    "type": "单位",
    "subtype": "影裔",
    "clan": "影主",
    "rarity": "高级",
    "cost": "0",
    "effect": "[被吞食]: 吞食者获得 [攻击力] 6 和 [吸血] 1",
    "banner_unit": false,
    "size": 1,
    "attack": 6,
    "health": 1,
    "description": ""
  },
  {
    "name": "影裔宝石匠",
    "english_name": "Morsel Jeweler",
    "type": "单位",
    "subtype": "影裔",
    "clan": "影主",
    "rarity": "高级",
    "cost": "0",
    "effect": "[被吞食]: 吞食者获得 [生命值] 6 和 [伤害护盾] 1",
    "banner_unit": false,
    "size": 1,
    "attack": 0,
    "health": 6,
    "description": ""
  },
  {
    "name": "影裔矿工",
    "english_name": "Morsel Miner",
    "type": "单位",
    "subtype": "影裔",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "0",
    "effect": "[被吞食]: 吞食者获得 [攻击力] 9 和 [生命值] 9",
    "banner_unit": false,
    "size": 1,
    "attack": 0,
    "health": 1,
    "description": ""
  },
  {
    "name": "影裔清道夫",
    "english_name": "Rubble Morsel",
    "type": "单位",
    "subtype": "影裔",
    "clan": "影主",
    "rarity": "普通",
    "cost": "0",
    "effect": "[被吞食]: 获得 [余烬] 1. 吞食者获得 [攻击力] 3 和 [生命值] 3",
    "banner_unit": false,
    "size": 1,
    "attack": 0,
    "health": 1,
    "description": ""
  },
  {
    "name": "合金构装体",
    "english_name": "Alloyed Construct",
    "type": "单位",
    "subtype": "构装",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "[怠惰]. [多重攻击] 1. [暴食]: 获得 [燃料] 1",
    "banner_unit": true,
    "size": 2,
    "attack": 25,
    "health": 25,
    "description": ""
  },
  {
    "name": "熔炉收藏家",
    "english_name": "Crucible Collector",
    "type": "单位",
    "subtype": "雾影",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "[暴食]: 获得 [吸血] 1",
    "banner_unit": true,
    "size": 2,
    "attack": 30,
    "health": 20,
    "description": ""
  },
  {
    "name": "熔炉看守者",
    "english_name": "Crucible Warden",
    "type": "单位",
    "subtype": "雾影",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "[暴食]: 获得 [伤害护盾] 1",
    "banner_unit": true,
    "size": 2,
    "attack": 20,
    "health": 30,
    "description": ""
  },
  {
    "name": "余烬锻炉",
    "english_name": "Ember Forge",
    "type": "单位",
    "subtype": "构装",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "每回合 +2 [余烬]",
    "banner_unit": false,
    "size": 2,
    "attack": 0,
    "health": 20,
    "description": ""
  },
  {
    "name": "影裔宿主",
    "english_name": "Morselmaster",
    "type": "单位",
    "subtype": "雾影",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "你在本层 [召唤] 一个影裔单位时, 可产生一个复制品",
    "banner_unit": true,
    "size": 1,
    "attack": 10,
    "health": 10,
    "description": ""
  },
  {
    "name": "影裔造物",
    "english_name": "Morsel-Made",
    "type": "单位",
    "subtype": "构装",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[饥饿]: 吞食带有 [被吞食] 的单位. [暴食]: 获得 [攻击力] 2 和 [生命值] 2",
    "banner_unit": true,
    "size": 2,
    "attack": 5,
    "health": 20,
    "description": ""
  },
  {
    "name": "影裔制造者",
    "english_name": "Morselmaker",
    "type": "单位",
    "subtype": "雾影",
    "clan": "影主",
    "rarity": "高级",
    "cost": "2",
    "effect": "[结算]: 召唤一个 [影者影裔] 和 [熔岩影裔]",
    "banner_unit": true,
    "size": 1,
    "attack": 5,
    "health": 15,
    "description": ""
  },
  {
    "name": "狂食者",
    "english_name": "Overgorger",
    "type": "单位",
    "subtype": "雾影",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[暴食]: 永久获得 [攻击力] 2",
    "banner_unit": true,
    "size": 3,
    "attack": 0,
    "health": 25,
    "description": ""
  },
  {
    "name": "噬影者",
    "english_name": "Shadoweater",
    "type": "单位",
    "subtype": "雾影",
    "clan": "影主",
    "rarity": "高级",
    "cost": "2",
    "effect": "[暴食]: 恢复 10 点生命值, 对所有敌方造成 20 点伤害",
    "banner_unit": false,
    "size": 3,
    "attack": 0,
    "health": 50,
    "description": ""
  },
  {
    "name": "暗影破城傀儡",
    "english_name": "Shadowsiege",
    "type": "单位",
    "subtype": "构装",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "6",
    "effect": "",
    "banner_unit": true,
    "size": 6,
    "attack": 200,
    "health": 150,
    "description": ""
  },
];
// 影主 法术
/** @type { Spell[] } */
export const SPELLS = [
  {
    "name": "永恒吞噬",
    "english_name": "Forever Consumed",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "X",
    "effect": "对前排敌方单位造成 40 [X] 点伤害",
    "description": ""
  },
  {
    "name": "火焰激发",
    "english_name": "Kindle",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. 获得 2 [X] [余烬]",
    "description": ""
  },
  {
    "name": "矿井塌方",
    "english_name": "Mine Collapse",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "X",
    "effect": "对一个敌方单位造成 3 [X] 点伤害. [杀戮]: 获得 [余烬] 2",
    "description": ""
  },
  {
    "name": "棱晶提取",
    "english_name": "Prism Retrieval",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "X",
    "effect": "[消耗]. 抽取 1 张单位牌并使其获得 5 [X] [攻击力] 和 [余烬] -[X]",
    "description": ""
  },
  {
    "name": "棱晶之尘",
    "english_name": "Prismal Dust",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "X",
    "effect": "[消耗]. 获得 1 [X] [伤害护盾]",
    "description": ""
  },
  {
    "name": "雾影道钉",
    "english_name": "Shroud Spike",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. 触发一个友方影裔单位的进食效果 2 [X] 次",
    "description": ""
  },
  {
    "name": "盛宴",
    "english_name": "Feast",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "0",
    "effect": "触发拥有 [被吞食] 单位的吞食效果",
    "description": ""
  },
  {
    "name": "不朽交易",
    "english_name": "Immortal Trade",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "0",
    "effect": "使一个单位获得 [吸血] 4, [余烬流失] 2",
    "description": ""
  },
  {
    "name": "瓶装影裔",
    "english_name": "Packed Morsels",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "0",
    "effect": "[消耗]. 将 3 个高级或稀有影裔单位加入你的手牌",
    "description": ""
  },
  {
    "name": "生产风险",
    "english_name": "Perils of Production",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "0",
    "effect": "使一个友方单位获得 [狂怒] 3, [余烬流失] 2. 获得 3 [余烬]",
    "description": ""
  },
  {
    "name": "反胃",
    "english_name": "Retch",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "0",
    "effect": "将被吞食的单位返回手牌",
    "description": ""
  },
  {
    "name": "空间棱晶",
    "english_name": "Space Prism",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "0",
    "effect": "[消耗]. 本层获得 +1 [容量]",
    "description": ""
  },
  {
    "name": "影者猛袭",
    "english_name": "Antumbra Assault",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "1",
    "effect": "造成 5 点伤害. [杀戮]: 将 2 个高级或稀有影裔单位加入手牌",
    "description": ""
  },
  {
    "name": "自相残杀",
    "english_name": "Cannibalize",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "[牺牲]. 将 3 个高级或稀有影裔单位加入手牌",
    "description": ""
  },
  {
    "name": "余烬贮藏",
    "english_name": "Ember Cache",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. 将 3 张 [采掘的余烬] 加入弃牌堆",
    "description": ""
  },
  {
    "name": "引擎升级",
    "english_name": "Engine Upgrade",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "[消耗]. 本层 -1 [容量], 每回合获得 +1 [余烬], 效果持续到本场战斗结束",
    "description": ""
  },
  {
    "name": "创造影裔",
    "english_name": "Making of a Morsel",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "1",
    "effect": "将一个 [影裔矿工] 加入手牌",
    "description": ""
  },
  {
    "name": "随意射击",
    "english_name": "Plink",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "1",
    "effect": "随机对敌方单位造成 2 点伤害, 重复 2 次. [杀戮]: 将 1 个普通或高级影裔单位加入手牌",
    "description": ""
  },
  {
    "name": "暗影分裂",
    "english_name": "Shadesplitter",
    "type": "法术",
    "clan": "影主",
    "rarity": "普通",
    "cost": "1",
    "effect": "将 1 个普通或高级影裔单位加入手牌",
    "description": ""
  },
  {
    "name": "雾影分裂",
    "english_name": "Shroud Mitosis",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "1",
    "effect": "创建 3 个友方影裔单位的复制体",
    "description": ""
  },
  {
    "name": "虚空禁锢",
    "english_name": "Void Binding",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "1",
    "effect": "获得 [伤害护盾] 2, [狂怒] 6 和 [余烬流失] 3",
    "description": ""
  },
  {
    "name": "洞窟崩塌",
    "english_name": "Cave In",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "2",
    "effect": "使所有单位 [下降]",
    "description": ""
  },
  {
    "name": "熔炉延展",
    "english_name": "Crucible Extension",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "2",
    "effect": "本层获得 +1 [容量]",
    "description": ""
  },
  {
    "name": "能量窃取",
    "english_name": "Furnace Tap",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]. 获得 [多重攻击] 1 和 [余烬流失] 4",
    "description": ""
  },
  {
    "name": "卑躬屈膝",
    "english_name": "Grovel",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "3",
    "effect": "获得 [伤害护盾] 1, 将 2 个高级或稀有影裔单位加入手牌",
    "description": ""
  },
  {
    "name": "影主之石",
    "english_name": "Umbra Stone",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[消耗]. 获得 [践踏]",
    "description": ""
  },
  {
    "name": "灼热钢钉",
    "english_name": "Blazing Bolts",
    "type": "法术",
    "clan": "影主",
    "rarity": "稀有",
    "cost": "3",
    "effect": "[移除]. 对前排敌方单位造成 40 点伤害, 并将强化后的这张牌加入你的弃牌堆",
    "description": ""
  },
  {
    "name": "爆裂喷发",
    "english_name": "Excavation Eruption",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "3",
    "effect": "随机对一个敌方单位造成 25 点伤害, 重复 3 次. [杀戮]: 获得 2 [余烬]",
    "description": ""
  },
  {
    "name": "宝石秘库",
    "english_name": "Gem Trove",
    "type": "法术",
    "clan": "影主",
    "rarity": "高级",
    "cost": "3",
    "effect": "使所有友方单位获得 [伤害护盾] 1. 将 3 个高级或稀有影裔单位加入手牌",
    "description": ""
  },
];
// 影主 装备
/** @type { Equipment[] } */
export const EQUIPMENTS = [
];
// 影主 房间
/** @type { Room[] } */
export const ROOMS = [
];
// 影主 神器
/** @type { Artifact[] } */
export const ARTIFACTS = [
  {
    "name": "被遗弃的影者",
    "english_name": "Abandoned Antumbra",
    "type": "神器",
    "clan": "影主",
    "effect": "回合开始时, 将 1 个普通或高级影裔单位加入手牌",
  },
  {
    "name": "宝石项链",
    "english_name": "Chain of Gems",
    "type": "神器",
    "clan": "影主",
    "effect": "每回合首个被召唤的友方单位获得 [伤害护盾] 2",
  },
  {
    "name": "纪念道钉",
    "english_name": "Commemorative Spike",
    "type": "神器",
    "clan": "影主",
    "effect": "战斗开始时, 每一层都会召唤 1 个 [影裔矿工]",
  },
  {
    "name": "化石尖牙",
    "english_name": "Fossilized Fangs",
    "type": "神器",
    "clan": "影主",
    "effect": "[暴食] 额外触发一次",
  },
  {
    "name": "影祖面具",
    "english_name": "Mask of Penumbra",
    "type": "神器",
    "clan": "影主",
    "effect": "每回合召唤影裔单位时, 抽 1 张牌",
  },
  {
    "name": "矿用千斤顶",
    "english_name": "Mine Jacks",
    "type": "神器",
    "clan": "影主",
    "effect": "中间层 +2 [容量]",
  },
  {
    "name": "虚空精酿",
    "english_name": "Refined Void",
    "type": "神器",
    "clan": "影主",
    "effect": "友方单位进入战斗时, 获得 [吸血] 2",
  },
  {
    "name": "暗影灯",
    "english_name": "Shadelamp",
    "type": "神器",
    "clan": "影主",
    "effect": "每回合第一个敌方单位死亡时, 将 2 个影裔单位加入手牌",
  },
  {
    "name": "投影箱",
    "english_name": "Shadowbox",
    "type": "神器",
    "clan": "影主",
    "effect": "当你在一场战斗召唤了第 20 个影裔单位时, 对所有层的所有单位造成 200 点伤害",
  },
  {
    "name": "金牙",
    "english_name": "Teeth of Gold",
    "type": "神器",
    "clan": "影主",
    "effect": "当一个单位 [被吞食] 时, 对后排敌方单位造成 5 点伤害",
  },
  {
    "name": "翼族技术",
    "english_name": "Winged Technology",
    "type": "神器",
    "clan": "影主",
    "effect": "影裔单位进入战斗时, 获得 [伤害护盾] 1",
  },
];
/** @type { ChampionPath[] } */
export const PATHS = [
  {
    "name": "建筑师",
    "champion": "影祖",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 25,
        "health": 20,
        "size": 3,
        "effect": "[召唤]: 本层 +2 [容量]",
      },
      {
        "rank": 2,
        "attack": 50,
        "health": 30,
        "size": 3,
        "effect": "[召唤]: 本层 +3 [容量]",
      },
      {
        "rank": 3,
        "attack": 100,
        "health": 40,
        "size": 3,
        "effect": "[召唤]: 本层 +4 [容量]",
      },
    ]
  },
  {
    "name": "畸怪",
    "champion": "影祖",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 50,
        "health": 30,
        "size": 4,
        "effect": "[践踏]",
      },
      {
        "rank": 2,
        "attack": 125,
        "health": 60,
        "size": 5,
        "effect": "[践踏]",
      },
      {
        "rank": 3,
        "attack": 250,
        "health": 120,
        "size": 6,
        "effect": "[践踏]",
      },
    ]
  },
  {
    "name": "贪食者",
    "champion": "影祖",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 20,
        "health": 20,
        "size": 3,
        "effect": "[吸血] 2. [暴食]: +4 [攻击力] +2 [生命值]",
      },
      {
        "rank": 2,
        "attack": 20,
        "health": 20,
        "size": 3,
        "effect": "[吸血] 2. [暴食]: +9 [攻击力] +4 [生命值]",
      },
      {
        "rank": 3,
        "attack": 20,
        "health": 20,
        "size": 3,
        "effect": "[吸血] 2. [暴食]: +15 [攻击力] +6 [生命值]",
      },
    ]
  },
  {
    "name": "超级食品",
    "champion": "原基",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 3,
        "health": 10,
        "size": 2,
        "effect": "[自助餐] 3. [被吞食]: 使被吞食者获得此单位的 [攻击力], [生命值] 和状态效果",
      },
      {
        "rank": 2,
        "attack": 3,
        "health": 10,
        "size": 2,
        "effect": "[自助餐] 3. [伤害护盾] 2. [被吞食]: 使被吞食者获得此单位的 [攻击力], [生命值] 和状态效果",
      },
      {
        "rank": 3,
        "attack": 3,
        "health": 10,
        "size": 2,
        "effect": "[自助餐] 3. [伤害护盾] 4. [被吞食]: 使被吞食者获得此单位的 [攻击力], [生命值] 和状态效果",
      },
    ]
  },
  {
    "name": "耐吃的零食",
    "champion": "原基",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 3,
        "health": 3,
        "size": 2,
        "effect": "[自助餐] 5. [被吞食]: 使被吞食者获得此单位的 [攻击力] 和 [生命值]",
      },
      {
        "rank": 2,
        "attack": 3,
        "health": 3,
        "size": 2,
        "effect": "[自助餐] 8. [被吞食]: 使被吞食者获得此单位的 [攻击力] 和 [生命值]",
      },
      {
        "rank": 3,
        "attack": 3,
        "health": 3,
        "size": 2,
        "effect": "[自助餐] 12. [被吞食]: 使被吞食者获得此单位的 [攻击力] 和 [生命值]",
      },
    ]
  },
  {
    "name": "强力食品",
    "champion": "原基",
    "type": "path",
    "path": [
      {
        "rank": 1,
        "attack": 15,
        "health": 3,
        "size": 2,
        "effect": "[自助餐] 3. [被吞食]: 使被吞食者获得此单位的 [攻击力] 和 [生命值]",
      },
      {
        "rank": 2,
        "attack": 30,
        "health": 3,
        "size": 2,
        "effect": "[自助餐] 3. [被吞食]: 使被吞食者获得此单位的 [攻击力] 和 [生命值]",
      },
      {
        "rank": 3,
        "attack": 60,
        "health": 3,
        "size": 2,
        "effect": "[自助餐] 3. [被吞食]: 使被吞食者获得此单位的 [攻击力] 和 [生命值]",
      },
    ]
  },
]
// 祸患
/** @type {Blight[]} */
export const BLIGHTS = [];
// 天灾
/** @type {Scourge[]} */
export const SCOURGES = [];
