import { __DEBUG, __log_data } from './util.js'
import { MT_DATA } from '../data/monster-train-2/index.js'

let ztooltip = null;
let leftPanel = null;
let searchPanel = null;

let animationFrameId = 0;

document.addEventListener('DOMContentLoaded', () => {
  ztooltip = document.querySelector('#z-tooltip');
  leftPanel = document.querySelector('.left-panel');
  searchPanel = document.querySelector('.right-panel');

  // 加载上次页面最后一次搜索条件
  loadSavedQuery();

  // 搜索文本框
  searchPanel.searchInput.addEventListener('keyup', (e) => {
    // 按回车
    if (e.key === 'Enter') {
      e.preventDefault();
      doSearch();
    }
  });
  // 搜索按钮
  searchPanel.searchButton.addEventListener('click', () => { doSearch(); });
  // 各个氏族/种类/稀有度/费用 等按钮
  searchPanel.toggleButtons.map((btn) => {
    btn.addEventListener('click', () => { doSearch(); })
    btn.addEventListener('dblclick', () => { doSearch(); })
  });

  const dlg = document.querySelector('#card-detail-dlg');
  dlg.addEventListener('click', (e) => {
    // 检查点击事件的目标是否是 dialog 元素本身
    // 这意味着点击发生在 dialog 元素的 padding/border 区域，
    // 而不是 dialog 内部的任何内容元素上。
    if (e.target === dlg) {
      dlg.close();
    }
  });
  doSearch();
});

function loadSavedQuery() {
  const queryString = localStorage.getItem('queryState');
  if (!queryString) { return; }
  try {
    const query = JSON.parse(queryString);
    __log_data("loaded query", query);
    searchPanel.setQuery(query);
  } catch (e) {
    console.error("query string: [" + queryString + "] is not valid");
  }
}

function doSearch() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  const query = {
    // 移除一些特殊字符 !@#$%^&*\/ 和 空白字符
    "text": searchPanel.searchInput.value.replace(/!@#\$%\^&\*\\\/\s/g, ''),
    "clan": [],
    "type": [],
    "rarity": [],
    "cost": [],
  };
  searchPanel.conditions.map((condition) => {
    const pair = condition.split(":");
    if (!pair || pair.length != 2) {
      console.error("invalid condition: [" + condition + "]"); return;
    }
    if (__DEBUG) {
      if (!["clan", "type", "rarity", "cost"].includes(pair[0])) {
        console.error("invalid condition: [" + condition + "]"); return;
      }
    }
    query[pair[0]].push(pair[1]);
  })
  localStorage.setItem('queryState', JSON.stringify(query));
  const result = [];
  MT_DATA.forEach((item) => {
    if (!query.clan.includes(item.clan)) { return; }
    if (!query.type.includes(item.type)) { return; }
    if (!["神器", "升级石"].includes(item.type)) {
      if (!query.rarity.includes(item.rarity)) { return; }
      if (!query.cost.includes(item.cost)) { return; }
    }
    let found = false;
    let queryText = query.text;
    // 如果搜索字符串为空, 即不需要通过内容过滤
    if (!queryText) {
      found = true;
    }
    // 还没找到的话, 在 name 字段查找
    if (!found && item.name && item.name.includes(queryText)) {
      found = true;
    }
    // 还没找到的话, 在 text 字段查找
    if (!found && item.text && item.text.includes(queryText)) {
      found = true;
    }
    // 还没找到的话, 在 english-name 字段查找
    if (!found && item["english-name"] && item["english-name"].includes(queryText)) {
      found = true;
    }
    // 还没找到的话, 在 terms 字段查找
    if (!found && item.terms && item.terms.has(queryText)) {
      found = true;
    }
    // 还没找到的话, 在 paths 字段查找
    if (!found && item.paths) {
      for (let pathData of item.paths) {
        for (let step of pathData.path) {
          if (step.effect && step.effect.includes(queryText)) {
            found = true;
            break;
          }
        }
        if (found) { break; }
      }
    }
    if (found) { result.push(item); }
  });

  createCardList(result);
  const text = query.text;
  if (result.length > 0 && text.length > 0) {
    searchPanel.addSearchTag(text, () => {
      searchPanel.searchInput.value = text;
      doSearch();
    });
  }
}

function onCardMouseEnter(e) {
  ztooltip.innerHTML = e.target.termsHtml;

  const panelRect = leftPanel.getBoundingClientRect();
  const cardRect = e.target.getBoundingClientRect();
  const tooltipRect = ztooltip.getBoundingClientRect();
  ztooltip.style.left = cardRect.right + "px";
  // 避免过于靠下
  // 不是很靠下
  if (cardRect.top + tooltipRect.height < panelRect.bottom) {
    ztooltip.style.top = cardRect.top + "px";
  }
  // 靠下
  else {
    ztooltip.style.top = panelRect.bottom - tooltipRect.height - 2 + "px";
  }
  // 避免过于靠上
  if (cardRect.top < panelRect.top) {
    ztooltip.style.top = panelRect.top + "px";
  }
  ztooltip.style.visibility = 'visible';
}

function onCardMouseLeave(e) {
  ztooltip.style.visibility = 'hidden';
}

function createCardList(result) {
  function createCard(item, animating) {
    // <item-card src="image/cards/不朽交易.webp" class=""></item-card>
    const card = document.createElement('item-card');
    card.item = item;
    switch (item.type) {
      case "神器":
        card.setAttribute("src", "image/artifacts/" + item.name + ".webp");
        break;
      case "升级石":
        card.setAttribute("src", "image/other/" + item.name + ".webp");
        break;
      default:
        card.setAttribute("src", "image/cards/" + item.name + ".webp");
        break;
    }

    card.addEventListener('mouseenter', onCardMouseEnter);
    card.addEventListener('mouseleave', onCardMouseLeave);
    card.onAdded(animating);
    card.onClickHandler = () => { openCardDetailDlg(card.item); }

    return card;
  }
  const cardList = leftPanel.querySelectorAll("item-card");
  for (let i = 0; i < cardList.length; i++) {
    const o = cardList[i];
    o.onBeingRemoved();
    o.removeEventListener('mouseenter', onCardMouseEnter);
    o.removeEventListener('mouseleave', onCardMouseLeave);
  }
  leftPanel.innerHTML = "";
  let count = result.length;
  if (count > 30) {
    result.map((item) => leftPanel.appendChild(createCard(item, false)));
  } else {
    if (count < 1) { return; }
    let i = 0;
    let lastAddTime = 0;
    function createCardWithAnimation(currentTime) {
      if (currentTime - lastAddTime >= 160) {
        leftPanel.appendChild(createCard(result[i], true));
        if (++i >= count) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
          return;
        }
        lastAddTime = currentTime; // 更新上次添加时间
      }

      // 继续请求下一帧动画
      animationFrameId = requestAnimationFrame(createCardWithAnimation);
    }
    animationFrameId = requestAnimationFrame(createCardWithAnimation);
  }
}

function openCardDetailDlg(item) {
  const dlg = document.querySelector('#card-detail-dlg');
  const detail = dlg.querySelector("card-details");
  detail.item = item;
  dlg.showModal();
}