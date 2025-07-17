/////////////// 冥卫 ///////////////

export const module_name = "冥卫";

// 冥卫 英雄
export const CHAMPIONS = [
  {
    "name": "烈士索尔加德",
    "english-name": "Fel",
    "type": "勇者",
    "clan": "冥卫",
    "cost": "0",
    "effect": "[咒语]: 获得 [碎片] 1",
    "size": 2,
    "attack": 0,
    "health": 5,
    "description": "菲尔是流放者中才华横溢且足智多谋的指挥官，她发誓要将天堂从她哥哥的暴政中解放出来。然而，她曾受的心伤能否痊愈，还是未知之数",
  },
  {
    "name": "泰西斯·泰坦之灾",
    "english-name": "Fel",
    "type": "勇者",
    "clan": "冥卫",
    "cost": "0",
    "effect": "",
    "size": 1,
    "attack": 5,
    "health": 3,
    "description": "菲尔是流放者中才华横溢且足智多谋的指挥官，她发誓要将天堂从她哥哥的暴政中解放出来。然而，她曾受的心伤能否痊愈，还是未知之数",
  },
];
// 冥卫 单位
export const UNITS = [
  {
    "name": "邪术乌贼",
    "english-name": "BattleDancer",
    "type": "法师",
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
    "english-name": "BattleDancer",
    "type": "海妖",
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
    "english-name": "BattleDancer",
    "type": "图腾",
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
    "english-name": "BattleDancer",
    "type": "海妖",
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
    "english-name": "BattleDancer",
    "type": "图腾",
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
    "english-name": "BattleDancer",
    "type": "海妖",
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
    "english-name": "BattleDancer",
    "type": "法师",
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
    "english-name": "BattleDancer",
    "type": "海妖",
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
    "english-name": "BattleDancer",
    "type": "图腾",
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
    "english-name": "BattleDancer",
    "type": "海妖",
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
    "english-name": "BattleDancer",
    "type": "海妖",
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
    "english-name": "BattleDancer",
    "type": "法师",
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
    "english-name": "BattleDancer",
    "type": "图腾",
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
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "X",
    "effect": "[消耗]. 施加 1 [X] [弱化] 和 5 [X] [霜冻]",
    "description": ""
  },
  {
    "name": "结晶之种",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 对所有敌方单位施加 [霜冻] 8",
    "description": ""
  },
  {
    "name": "能量虹吸",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "0",
    "effect": "对一个敌方单位施加 [法术易伤] 1",
    "description": ""
  },
  {
    "name": "遗弃之力",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "0",
    "effect": "对前排敌方单位施加 [霜冻] 8, 随机舍弃一张牌",
    "description": ""
  },
  {
    "name": "献祭代币",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "0",
    "effect": "抽 1 张牌, 弃 1 张牌",
    "description": ""
  },
  {
    "name": "保存",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[永冻]. [冻结] 一张手牌",
    "description": ""
  },
  {
    "name": "无名者之书",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[永冻]. [消耗]. 对所有敌方单位施加 [沉默] 5",
    "description": ""
  },
  {
    "name": "海胆尖刺",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "0",
    "effect": "[消耗]. 对所有敌方单位施加 [法术易伤] 2",
    "description": ""
  },
  {
    "name": "力竭",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "施加 [弱化] 3, 随机舍弃 1 张牌",
    "description": ""
  },
  {
    "name": "急速冰冻",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "1",
    "effect": "造成 3 点伤害, 施加 [霜冻] 8",
    "description": ""
  },
  {
    "name": "凶残妖群",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "对敌方单位施加 [眩晕] 1, 舍弃全部手牌",
    "description": ""
  },
  {
    "name": "寒冰长枪",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "1",
    "effect": "对前排敌方单位造成 10 点伤害",
    "description": ""
  },
  {
    "name": "驾驭泰坦",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "1",
    "effect": "使手牌中的所有法术获得 +10 [魔法强度]",
    "description": ""
  },
  {
    "name": "寒冰和薪火",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[薪火相传]. [调和]. 对前排敌方单位造成 90 点伤害",
    "description": ""
  },
  {
    "name": "寒冰风暴",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "1",
    "effect": "随机对一个敌方单位造成 1 点伤害, 重复 5 次",
    "description": ""
  },
  {
    "name": "海妖之歌",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "1",
    "effect": "[薪火相传]. 使所有敌方单位 [上升] 并施加 [眩晕] 3",
    "description": ""
  },
  {
    "name": "泰坦谢礼",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "1",
    "effect": "[调和]. 对前排敌方单位造成 35 点伤害, 随机舍弃 1 张牌",
    "description": ""
  },
  {
    "name": "深渊祭礼",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "2",
    "effect": "[消耗]. 舍弃全部手牌, 抽 5 张牌",
    "description": ""
  },
  {
    "name": "螺旋结晶",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "2",
    "effect": "对前排敌方单位造成 35 点伤害, 重复 2 次",
    "description": ""
  },
  {
    "name": "远古协调",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "3",
    "effect": "对前排敌方单位造成伤害, 数值相当于卡组中法术牌的 2 倍, 重复 3 次",
    "description": ""
  },
  {
    "name": "地穴建造器",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "普通",
    "cost": "3",
    "effect": "[献祭]. [调和]. [后退] 前排敌方单位, 并造成 80 点伤害",
    "description": ""
  },
  {
    "name": "冥卫之礼",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "3",
    "effect": "抽 3 张法术牌并使其获得 [消耗], +30 [魔法强度] 和 [余烬] 0",
    "description": ""
  },
  {
    "name": "冥卫护符",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "3",
    "effect": "[献祭], 对所有敌方单位施加 [弱化] 2",
    "description": ""
  },
  {
    "name": "凝霜雕像",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "稀有",
    "cost": "3",
    "effect": "将本层所有的 [霜冻] 都转移到目标身上, 之后将 [霜冻] 层数加倍",
    "description": ""
  },
  {
    "name": "寒冰龙卷",
    "english-name": "DragonEgg",
    "type": "法术",
    "clan": "冥卫",
    "rarity": "高级",
    "cost": "3",
    "effect": "[永冻]. 随机对一个敌方单位造成 30 点伤害, 重复 3 次",
    "description": ""
  },
  {
    "name": "泰坦之牙",
    "english-name": "DragonEgg",
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
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当本回合打出第三张法术时, 所有卡牌获得 +1 [魔法强度], 持续整场战斗",
  },
  {
    "name": "乌贼触须",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当一个单位获得 [霜冻] 时, 获得的层数 +3, 且不会衰减",
  },
  {
    "name": "成立印记",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "[咒语] 额外触发一次",
  },
  {
    "name": "冰柱碎片",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "回合结束时, 随机 [冻结] 一张手牌",
  },
  {
    "name": "亲族石图腾",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "在回合结束前舍弃一张牌时, 获得 [余烬] 1",
  },
  {
    "name": "仪式律法",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入战斗时, 获得 [霜冻] 2",
  },
  {
    "name": "符文海藻",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入火车时, 对其施加 [沉默] 1",
  },
  {
    "name": "泰西斯之鳞",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入火车时, 50% 几率对其施加 [法术易伤] 1",
  },
  {
    "name": "泰坦之爪",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "回合结束时, [冻结] 的卡牌 [余烬] 降为 0, 直到打出或舍弃",
  },
  {
    "name": "毁约者代币",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "使用法术会随机对该层的一个敌方单位造成 2 点伤害",
  },
  {
    "name": "图腾碎片",
    "english-name": "ImprisonedZephyr",
    "type": "神器",
    "clan": "冥卫",
    "effect": "当敌方单位进入薪火室下方的楼层时, 对其施加 [法术易伤] 2",
  },
];