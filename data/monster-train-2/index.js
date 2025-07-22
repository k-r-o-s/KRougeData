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

import { __log_data } from "../../script/util.js"

// 因为目前只有几百条数据, 这里没有太注重效率
// 如果数据量非常大, 可以加几层 Map
export const MT_DATA = [
  Awoken,
  Banished,
  Clanless,
  Hellhorned,
  LazarusLeague,
  LunaCoven,
  MeltingRemnants,
  PyreBorne,
  StygianGuard,
  Umbra,
  Underlegion,
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
    return accumulator;
  }, new Map());

MT_DATA.forEach((item) => {
  if (!item.effect) { return; }
  // text 属性是为了搜索用的时候避免方括号造成干扰, 在这里去掉 [ 和 ]
  item.text = item.effect.replace(/\[\]/g, '');
})