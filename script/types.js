/**
 * @typedef {object} Query
 * @property {string} text - 搜索字符串
 * @property {string[]} clan - 氏族, 可多选
 * @property {string[]} type - 类型, 可多选
 * @property {string[]} rarity - 稀有度, 可多选
 * @property {string[]} cost - 费用, 可多选
 */

/** 
 * @typedef {Object} BasicData
 * @property {string} name - 名称
 * @property {string} english_name - 英文名
 * @property {string} type - 类型
 * @property {string} clan - 氏族
 * @property {string} effect - 效果
 * @property {string[]} [tips] - 效果
 * @property {string} [description] - 描述
 */

// cost - 费用
// rarity - 稀有度
/**
 * @typedef {BasicData & { 
 *  cost: string,
 *  rarity: string,
 * }} CardData
 */

/**
 * @typedef {object} UnitData
 * @property {"单位"} type - 类型
 * @property {string} subtype - 单位子类型
 * @property {boolean} [banner_unit] - 是否是战棋单位
 * @property {Number} size - (占据房间的)尺寸
 * @property {Number} attack - 攻击力
 * @property {Number} health - 生命值
 */

/**
 * @typedef {object} EquipmentData
 * @property {"装备"} type - 类型
 * @property {Number} [attack] - 攻击力
 * @property {Number} [health] - 生命值
 */

/**
 * @typedef {object} ChampionPathStep
 * @property {Number} rank - 等级
 * @property {Number} size - (占据房间的)尺寸
 * @property {Number} attack - 攻击力
 * @property {Number} health - 生命值
 * @property {string} effect - 效果
 */

/**
 * @typedef {object} ChampionPath
 * @property {string} name - 名称
 * @property {string} champion - 英雄名字
 * @property {string} type - 类型
 * @property {ChampionPathStep[]} path - 路径
 */
// 单位
/** @typedef { CardData & UnitData } Unit */
// 单位
/** @typedef { Unit & { paths: ChampionPath[]} } Champion */
// 法术
/** @typedef { CardData & { type: '法术'}  } Spell */
// 装备
/** @typedef { CardData & EquipmentData } Equipment */
// 房间
/** @typedef { CardData & { type: '房间'} } Room */
// 神器
/** 
 * @typedef { BasicData & {
 *   type: '神器',
 *   celestial_alcove?: boolean,
 *   dragons_hoard?: boolean,
 * }} Artifact
 */ 

// 祸患
/** @typedef { BasicData & { cost: string, type: "祸患" } } Blight */
// 天灾
/** @typedef { BasicData & { cost: string, type: "天灾" } } Scourge */

/**
 * @typedef {object} BasicTerm
 * @property {string} name - 名称
 * @property {"词条"} type - 类型
 * @property {string} term_type - 词条类型
 * @property {string} effect - 效果
 */

/**
 * @typedef { BasicTerm & {
 *   term_type: "能力",
 *   cd: Number,
 * }} AbilityTerm
 * */

/** 
 * @typedef { BasicTerm & { 
 *   term_type: "召唤单位", 
 *   subtype: string,
 *   size: string,
 *   attack: number,
 *   health: number,
 * }} SummonTerm
 * */

/** 
 * @typedef { BasicData & { 
 * type: "升级石",
 * subtype: "单位升级" | "法术升级",
 * rarity: string,
 * celestial_alcove?: boolean,
 * }} Upgrade
 * */

/** @typedef { BasicTerm | AbilityTerm | SummonTerm } Term */

// text, tips, terms 是动态添加的属性
/**
 *  @typedef { (Unit | Spell | Equipment | Room | Artifact 
 *    | Blight | Scourge | Term | Upgrade)
 *    & { text?: string, tips?: string[], terms?: Map<string, ItemData> }
 *  } ItemData 
 * */
