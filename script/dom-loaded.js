
import { __DEBUG, __log_data, debounce } from './util.js'
import { MT_DATA, queryEquals, queryHtml } from '../data/monster-train-2/index.js'
import { ItemCard } from './item-card.js';
import { SearchPanel } from './search-panel.js';
import { CardDetails } from './card-detail-dialog.js';
import { SearchTag } from './search-tag.js';
import { SettingDialogContent } from './setting-dialog.js';

// 卡牌的Tooltip
/** @type { HTMLDivElement } */
let __tooltip = null;
// 左面版, 卡牌列表
/** @type { HTMLDivElement} */
let __leftPanel = null;
// 右面板, 搜索条件面板
/** @type { SearchPanel} */
let __rightPanel = null;
// 卡牌详情对话框
/** @type { HTMLDialogElement } */
let __cardDialog = null;
/** @type { HTMLDialogElement } */
let __settingDialog = null;

// 卡牌动画效果
let __animatingEnabled = false;
let __animationFrameId = 0;

document.addEventListener('DOMContentLoaded', () => {
  __tooltip = document.querySelector('#z-tooltip');
  __leftPanel = document.querySelector('.left-panel');
  __rightPanel = document.querySelector('.right-panel');
  __cardDialog = document.querySelector('#card-detail-dlg');
  __settingDialog = document.querySelector('#setting-dlg');

  const searchPanelToggleButton = document.querySelector('#search-panel-toggle-button');
  const settingsButton = document.querySelector('#settings-button');

  __rightPanel.addResetTag();

  // 快捷标签点击事件处理
  __rightPanel.onTagClicked = (/** @type { Query | string } */query) => {
    __rightPanel.setQuery(query);
    doSearch();
  };
  __rightPanel.onTagGroupChanged = (currentTagGroup) => {
    localStorage.setItem('tagGroup', currentTagGroup);
  }
  const saveSavedQueries = () => {
    const str = JSON.stringify(__rightPanel.getSavedQueryTags().map(tag => tag.query));
    localStorage.setItem('savedQueries', str);
  };
  __rightPanel.onQueryTagAdded = ((/**@type{SearchTag}*/tag) => {
    tag.addEventListener('mouseenter', onQueryTagMouseEnter);
    tag.addEventListener('mouseleave', onQueryTagMouseLeave);
    saveSavedQueries();
  });
  __rightPanel.onQueryTagRemoved = ((/**@type{SearchTag}*/tag) => {
    tag.removeEventListener('mouseenter', onQueryTagMouseEnter);
    tag.removeEventListener('mouseleave', onQueryTagMouseLeave);
    saveSavedQueries();
  });
  searchPanelToggleButton.addEventListener('click', () => {
    __rightPanel.classList.toggle('panel-closed');
  });
  settingsButton.addEventListener('click', () => {
    __settingDialog.showModal();
  });

  // 加载上次页面最后一次搜索条件
  loadSavedQuery();

  const debounceFunc = debounce(doSearch, 200);
  // 搜索文本框
  __rightPanel.searchInput.addEventListener('input', (e) => {
    debounceFunc();
  });
  // 保存搜索按钮
  __rightPanel.saveButton.addEventListener('click', () => {
    const query = getQuery();
    if (queryEquals(query, SearchPanel.RESET_QUERY)) { return; }

    __rightPanel.addQueryTag(query, true);
  });
  // 清除搜索按钮
  __rightPanel.clearButton.addEventListener('click', () => {
    __rightPanel.setQuery('');
    doSearch();
  });
  // 各个氏族/种类/稀有度/费用 等按钮
  __rightPanel.toggleButtons.map((btn) => {
    btn.addEventListener('click', () => { doSearch(); })
  });

  __cardDialog.addEventListener('click', (e) => {
    // e.target 会是那些元素，而不是 __cardDialog
    if (e.target === e.currentTarget) {
      __cardDialog.close();
    }
  });
  __settingDialog.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      __settingDialog.close();
    }
  });
  doSearch();
});

// 恢复上一次搜索的条件设置
function loadSavedQuery() {
  // 读取主题/字体等设置
  /**@type{SettingDialogContent}*/
  const settings = __settingDialog.querySelector(SettingDialogContent.TAG_NAME);
  const theme = localStorage.getItem('setting-theme');
  if (theme) {
    settings.changeTheme(theme);
  }
  const fontSize = localStorage.getItem('setting-font-size');
  if (fontSize) {
    settings.changeFontSize(fontSize);
  }
  settings.onFontSizeChanged = (/**@type{string}*/size) => {
    localStorage.setItem('setting-font-size', size);
  }
  settings.onThemeChanged = (/**@type{string}*/theme) => {
    localStorage.setItem('setting-theme', theme);
  }

  // 读取词条组上一次打开的组
  const tagGroup = localStorage.getItem('tagGroup') || '特性';
  __rightPanel.setCurrentTagGroup(tagGroup);

  // 读取保存的查询条件
  const saveQueries = localStorage.getItem('savedQueries');
  if (saveQueries) {
    try {
      const queries = JSON.parse(saveQueries);
      __log_data("读取 保存的查询", queries);
      queries.forEach((/**@type{Query}*/query) => {
        __rightPanel.addQueryTag(query, true);
      });
    } catch (e) {
      console.error("保存查询字符串: [" + saveQueries + "] 无效");
    }
  }
  // 读取最后一次执行的查询
  const queryString = localStorage.getItem('queryState');
  if (!queryString) { return; }
  try {
    const query = JSON.parse(queryString);
    __log_data("读取 查询字符串", query);
    __rightPanel.setQuery(query);
  } catch (e) {
    console.error("查询字符串: [" + queryString + "] 无效");
  }
}
/**
 * 
 * @returns {Query}
 */
function getQuery() {
  // 移除一些特殊字符 !@#$%^&*\/
  let queryText = __rightPanel.searchInput.value.replace(/!@#\$%\^&\*\\\//g, '');
  // 空白字符 =>  空格
  queryText = queryText.replace(/\s/g, ' ');
  /** @type { Query } */
  const query = {
    "text": queryText,
    "clan": [],
    "type": [],
    "rarity": [],
    "cost": [],
  };
  // 搜索面板的内容填充到 query
  __rightPanel.conditions.map((condition) => {
    const pair = condition.split(":");
    if (!pair || pair.length != 2) {
      console.error("无效的查询条件: [" + condition + "]"); return;
    }
    if (__DEBUG) {
      if (!["clan", "type", "rarity", "cost"].includes(pair[0])) {
        console.error("无效的查询条件: [" + condition + "]"); return;
      }
    }
    const field = /** @type { "clan" | "type" | "rarity" | "cost"} */ (pair[0]);
    query[field].push(pair[1]);
  })

  return query;
}

// 执行搜索
function doSearch() {
  // 停止卡片添加的动画效果
  if (__animationFrameId) {
    cancelAnimationFrame(__animationFrameId);
    __animationFrameId = null;
  }

  const query = getQuery();

  // 保存搜索条件, 以便下次打开/刷新页面时恢复
  localStorage.setItem('queryState', JSON.stringify(query));
  // 数据集过滤
  /** @type { ItemData[] } */
  const result = [];
  MT_DATA.forEach((item) => {
    if (item.type == '词条') { return; }
    if (query.clan.length && !query.clan.includes(item.clan)) { return; }
    if (query.type.length && !query.type.includes(item.type)) { return; }
    // 神器/升级石 忽略稀有度和费用的过滤
    if ("神器" != item.type && "升级石" != item.type) {
      if (query.cost.length && !query.cost.includes(item.cost)) { return; }
      // 祸患/天灾 忽略稀有度和费用的过滤
      if ("祸患" != item.type && "天灾" != item.type) {
        if (query.rarity.length && !query.rarity.includes(item.rarity)) { return; }
      }
    }
    let found = false;
    // 如果搜索字符串为空, 即不需要通过内容过滤
    let qTexts = query.text.split(' ');
    // 去除空串
    if (qTexts) { qTexts = qTexts.filter(s => s); }
    if (!qTexts || !qTexts.length) {
      found = true;
    }
    if (!found) {
      qTexts.map((qText) => {
        // 还没找到的话, 在 name 字段查找
        if (!found && item.name && item.name.includes(qText)) {
          found = true;
        }
        // 还没找到的话, 在 text 字段查找
        if (!found && item.text && item.text.includes(qText)) {
          found = true;
        }
        // 还没找到的话, 在 english_name 字段查找
        if (!found && item.english_name && item.english_name.includes(qText)) {
          found = true;
        }
        // 还没找到的话, 在 terms 字段查找
        if (!found && item.terms && item.terms.has(qText)) {
          found = true;
        }
        // 还没找到的话, 在 paths 字段查找
        if (!found && 'paths' in item && item.paths) {
          const paths = /** @type{ChampionPath[]} */(item.paths);
          for (let pathData of paths) {
            for (let step of pathData.path) {
              if (step.effect && step.effect.includes(qText)) {
                found = true;
                break;
              }
            }
            if (found) { break; }
          }
        }
      });
    };
    if (found) { result.push(item); }
  });

  // 根据搜索结果重建卡片列表
  createCardList(result);
  // // 生成快捷标签
  // if (result.length > 0) {
  //   __rightPanel.addSearchTag(query);
  // }
}
// 标签上显示查询细节的 Tooltip
/**
 * @param {MouseEvent} e 
 */
function onQueryTagMouseEnter(e) {
  const tag = /** @type{SearchTag } */(e.target);
  __tooltip.innerHTML = queryHtml(tag.query);

  const panelRect = __rightPanel.getBoundingClientRect();
  const tagRect = tag.getBoundingClientRect();
  const tooltipRect = __tooltip.getBoundingClientRect();

  let x = (tagRect.left -
    (tooltipRect.width - tagRect.width) / 2);
  if (x < panelRect.left) {
    x = panelRect.left;
  }
  if (x + tooltipRect.width > panelRect.right) {
    x = panelRect.right - tooltipRect.width;
  }

  let y = tagRect.top - tooltipRect.height;
  if (y < panelRect.top) { y = panelRect.top; }
  __tooltip.style.left = x + 'px';
  __tooltip.style.top = y + 'px';
  __tooltip.style.visibility = 'visible';
}
// 离开标签时隐藏 Tooltip
/**
 * @param {MouseEvent} e 
 */
function onQueryTagMouseLeave(e) {
  __tooltip.style.visibility = 'hidden';
}
// 卡片上显示词条的 Tooltip
/**
 * @param {MouseEvent} e 
 */
function onCardMouseEnter(e) {
  const card = /** @type{ItemCard } */(e.target);
  __tooltip.innerHTML = card.termsHtml;

  const panelRect = __leftPanel.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const tooltipRect = __tooltip.getBoundingClientRect();

  __tooltip.style.left = cardRect.right + "px";
  // 避免过于靠下显示超出面板范围
  if (cardRect.top + tooltipRect.height > panelRect.bottom) {
    __tooltip.style.top = panelRect.bottom - tooltipRect.height - 2 + "px";
  }
  else {
    __tooltip.style.top = cardRect.top + "px";
  }
  // 避免过于靠上超出面板范围
  if (cardRect.top < panelRect.top) {
    __tooltip.style.top = panelRect.top + "px";
  }
  __tooltip.style.visibility = 'visible';
}
// 离开卡片时隐藏 Tooltip
/**
 * @param {MouseEvent} e 
 */
function onCardMouseLeave(e) {
  __tooltip.style.visibility = 'hidden';
}

/**
 * 
 * @param {ItemData[]} result 
 * @returns 
 */
function createCardList(result) {
  /**
   * 
   * @param {ItemData} item 
   * @param {boolean} animating 
   * @returns 
   */
  function createCard(item, animating) {
    const card = ItemCard.createCard(item);

    card.addEventListener('mouseenter', onCardMouseEnter);
    card.addEventListener('mouseleave', onCardMouseLeave);
    card.onAdded(animating);
    card.onClickHandler = () => { openCardDetailDlg(card.item); }

    return card;
  }
  const cardList = /** @type{NodeListOf<ItemCard>}*/(__leftPanel.querySelectorAll("item-card"));
  for (let i = 0; i < cardList.length; i++) {
    const o = cardList[i];
    o.onBeingRemoved();
    o.removeEventListener('mouseenter', onCardMouseEnter);
    o.removeEventListener('mouseleave', onCardMouseLeave);
  }
  __leftPanel.innerHTML = "";
  let count = result.length;

  /**@type{DocumentFragment?}*/
  let fragment;
  if (!__animatingEnabled || count > 30) {
    fragment = document.createDocumentFragment();
    result.map((item) => fragment.appendChild(createCard(item, false)));
  } else {
    if (count < 1) { return; }
    let i = 0;
    let lastAddTime = 0;
    /**
     * 
     * @param {number} currentTime 
     * @returns 
     */
    function createCardWithAnimation(currentTime) {
      if (currentTime - lastAddTime >= 160) {
        __leftPanel.appendChild(createCard(result[i], true));
        if (++i >= count) {
          cancelAnimationFrame(__animationFrameId);
          __animationFrameId = null;
          return;
        }
        lastAddTime = currentTime; // 更新上次添加时间
      }
      // 继续请求下一帧动画
      __animationFrameId = requestAnimationFrame(createCardWithAnimation);
    }
    __animationFrameId = requestAnimationFrame(createCardWithAnimation);
  }
  if (fragment) { __leftPanel.appendChild(fragment); }
}
/**
 * 
 * @param {ItemData} item 
 */
function openCardDetailDlg(item) {
  const detail = /** @type { CardDetails } */(__cardDialog.querySelector("card-details"));
  detail.item = item;
  __cardDialog.showModal();
}