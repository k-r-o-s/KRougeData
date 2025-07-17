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
import * as Entries from "./entries.js"

import { __log_data } from "../../script/util.js"

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
  Entries,
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
    if (group.BANES) {
      group.BANES.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 BANES", accumulator);
    }
    if (group.ARTIFACTS) {
      group.ARTIFACTS.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 ARTIFACTS", accumulator);
    }
    if (group.CATASTROPHES) {
      group.CATASTROPHES.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 CATASTROPHES", accumulator);
    }
    if (group.ENTRIES) {
      group.ENTRIES.map(item => accumulator.set(item.name, item));
      __log_data("获取数据 ENTRIES", accumulator);
    }
    return accumulator;
  }, new Map());
