
import { __DEBUG, __log_data, debounce } from './util.js'
import { MT_DATA } from '../data/monster-train-2/index.js'
import { ItemCard } from './item-card.js';
import { SearchPanel } from './search-panel.js';
import { CardDetails } from './card-detail-dialog.js';

// 卡牌的Tooltip
/** @type { HTMLDivElement } */
let __cardTermsTooltip = null;
// 左面版, 卡牌列表
/** @type { HTMLDivElement} */
let __leftPanel = null;
// 右面板, 搜索条件面板
/** @type { SearchPanel} */
let __rightPanel = null;
// 卡牌详情对话框
/** @type { HTMLDialogElement } */
let __cardDialog = null;

// 卡牌动画效果
let __animatingEnabled = false;
let __animationFrameId = 0;

document.addEventListener('DOMContentLoaded', () => {
  __cardTermsTooltip = document.querySelector('#z-tooltip');
  __leftPanel = document.querySelector('.left-panel');
  __rightPanel = document.querySelector('.right-panel');
  __cardDialog = document.querySelector('#card-detail-dlg');

  __rightPanel.addResetTag();

  // 快捷标签点击事件处理
  __rightPanel.onTagClicked = (/** @type { Query | string } */query) => {
    __rightPanel.setQuery(query);
    doSearch();
  };
  __rightPanel.onTagGroupChanged = (currentTagGroup) => {
    localStorage.setItem('tagGroup', currentTagGroup);
  }

  // 加载上次页面最后一次搜索条件
  loadSavedQuery();

  const debounceFunc = debounce(doSearch, 200);

  // 搜索文本框
  __rightPanel.searchInput.addEventListener('input', (e) => {
    debounceFunc();
  });
  // 搜索按钮
  __rightPanel.clearButton.addEventListener('click', () => {
    __rightPanel.setQuery('');
    doSearch();
  });
  // 各个氏族/种类/稀有度/费用 等按钮
  __rightPanel.toggleButtons.map((btn) => {
    btn.addEventListener('click', () => { doSearch(); })
    btn.addEventListener('auxclick', (e) => {
      if (e.button != 1) { return; }
      doSearch();
    })
  });

  __cardDialog.addEventListener('click', (e) => {
    // 检查点击事件的目标是否是 dialog 元素本身
    // 这意味着点击发生在 dialog 元素的 padding/border/周围的阴影 区域，
    // 而不是 dialog 内部的任何内容元素上。
    if (e.target === __cardDialog) {
      __cardDialog.close();
    }
  });
  doSearch();
});

// 恢复上一次搜索的条件设置
function loadSavedQuery() {
  const tagGroup = localStorage.getItem('tagGroup') || '特性';
  __rightPanel.setCurrentTagGroup(tagGroup);

  const queryString = localStorage.getItem('queryState');
  if (!queryString) { return; }
  try {
    const query = JSON.parse(queryString);
    __log_data("loaded query", query);
    __rightPanel.setQuery(query);
  } catch (e) {
    console.error("查询字符串: [" + queryString + "] 无效");
  }
}

// 执行搜索
function doSearch() {
  // 停止卡片添加的动画效果
  if (__animationFrameId) {
    cancelAnimationFrame(__animationFrameId);
    __animationFrameId = null;
  }

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
// 卡片上显示词条的 Tooltip
/**
 * @param {MouseEvent} e 
 */
function onCardMouseEnter(e) {
  const card = /** @type{ItemCard } */(e.target);
  __cardTermsTooltip.innerHTML = card.termsHtml;

  const panelRect = __leftPanel.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const tooltipRect = __cardTermsTooltip.getBoundingClientRect();

  __cardTermsTooltip.style.left = cardRect.right + "px";
  // 避免过于靠下显示超出面板范围
  if (cardRect.top + tooltipRect.height > panelRect.bottom) {
    __cardTermsTooltip.style.top = panelRect.bottom - tooltipRect.height - 2 + "px";
  }
  else {
    __cardTermsTooltip.style.top = cardRect.top + "px";
  }
  // 避免过于靠上超出面板范围
  if (cardRect.top < panelRect.top) {
    __cardTermsTooltip.style.top = panelRect.top + "px";
  }
  __cardTermsTooltip.style.visibility = 'visible';
}
// 离开卡片时隐藏 Tooltip
/**
 * @param {MouseEvent} e 
 */
function onCardMouseLeave(e) {
  __cardTermsTooltip.style.visibility = 'hidden';
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