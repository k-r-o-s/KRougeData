import * as Awoken from "./awoken.js"
import * as Banished from "./banished.js"
import * as Clanless from "./clanless.js"
import * as Hellhorned from "./hellhorned.js"
import * as LazarusLeague from "./lazarus-league.js"
import * as LunaCoven from "./luna-coven.js"
import * as MeltingRemnants from "./melting-remnant.js"
import * as PyreBorne from "./pyreborne.js"
import * as StygianGuard from "./stygian-guard.js"
import * as Umbra from "./umbra.js"
import * as Underlegion from "./underlegion.js"
import * as Terms from "./terms.js"
import * as Upgrades from "./upgrades.js"
import * as Notes from "./notes.js"

import { __log_data } from "../../script/util.js"

function getTerms(terms, effect) {
  if (!effect || !terms) { return; }

  const regex = /\[(.*?)\]/g;
  let term = "";
  let termData = undefined;
  let match = undefined;
  while (match = regex.exec(effect)) {
    term = match[1];
    if (!term || terms.has(term)) { continue; }
    termData = MT_DATA.get(term);
    if (!termData) { console.error("[" + term + "] 的数据未配置, 请在 terms.js 中配置"); continue; }
    if (termData.effect == "-") { continue; }
    terms.set(term, termData);
    getTerms(terms, termData.effect);
  }
}

const OBJ_TYPES_WITH_TIP = ["单位", "法术", "神器", "装备", "房间", "祸患", "天灾"];

// 因为目前只有几百条数据, 这里没有太注重效率
// 如果数据量非常大, 可以加几层 Map
export const MT_DATA = [
  Banished,
  PyreBorne,
  LunaCoven,
  Underlegion,
  LazarusLeague,
  Hellhorned,
  Awoken,
  StygianGuard,
  Umbra,
  MeltingRemnants,
  Clanless,
  Terms,
  Upgrades,
].reduce(
  (accumulator, group) => {
    __log_data("------------------ 读取数据 " + group.module_name + "------------------", group);
    if (group.CHAMPIONS) {
      group.CHAMPIONS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 CHAMPIONS", accumulator);
    }
    if (group.UNITS) {
      group.UNITS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 UNITS", accumulator);
    }
    if (group.SPELLS) {
      group.SPELLS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 SPELLS", accumulator);
    }
    if (group.EQUIPMENTS) {
      group.EQUIPMENTS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 EQUIPMENTS", accumulator);
    }
    if (group.ROOMS) {
      group.ROOMS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 ROOMS", accumulator);
    }
    if (group.BLIGHTS) {
      group.BLIGHTS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 BLIGHTS", accumulator);
    }
    if (group.ARTIFACTS) {
      group.ARTIFACTS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 ARTIFACTS", accumulator);
    }
    if (group.SCOURGES) {
      group.SCOURGES.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 SCOURGES", accumulator);
    }
    if (group.TERMS) {
      group.TERMS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 TERMS", accumulator);
    }
    if (group.UPGRADES) {
      group.UPGRADES.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 UPGRADES", accumulator);
    }
    if (group.PATHS) {
      group.PATHS.map(item => {
        if (!item.champion) {
          console.error("path data don't have champion:");
          console.log(item);
          return;
        }

        const championData = accumulator.get(item.champion);
        if (!championData) {
          console.error("can't find data of champion [" + item.champion + "]");
          return;
        }
        if (!championData.paths) { championData.paths = []; }
        championData.paths.push(item);
      });
      __log_data("获取数据 PATHS", accumulator);
    }
    return accumulator;
  }, new Map());

MT_DATA.forEach((item) => {
  const terms = new Map();
  item.terms = terms;

  if (item.effect) {
    // text 属性是为了搜索用的时候避免方括号造成干扰, 在这里去掉 [ 和 ]
    item.text = item.effect.replace(/[\[\]]/g, '')
    // 存在一个重名的词条 [复生], 其中一个意思是 复活时触发动作, 另一个是表示单位死亡后返回牌堆顶端
    // 所以为了方便初始, 词条库里把后者存储为 [永生] 加以区别
    item.text = item.text.replaceAll('永生', '复生');
    getTerms(terms, item.effect);
  }
  if (!Array.isArray(item.paths)) { return; }
  item.paths.forEach(pathData => {
    if (!pathData.path || !Array.isArray(pathData.path)) { return; }
    pathData.path.forEach((step) => {
      getTerms(terms, step.effect);
    });
  })
});

Notes.NOTES.map(tip => {
  const regex = /\[(.*?)\]/g;
  let term = "";
  let termData;
  let match;
  while (match = regex.exec(tip)) {
    term = match[1];
    if (!term) { continue; }
    termData = MT_DATA.get(term);
    if (!termData || !OBJ_TYPES_WITH_TIP.includes(termData.type)) { continue; }
    if (!termData.tips) { termData.tips = []; }
    termData.tips.push(tip);
  }
});
__log_data("数据加载完成", MT_DATA);