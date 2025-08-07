import { createCssLink } from './util.js';
import { ItemCard } from './item-card.js';
import { MT_DATA } from '../data/monster-train-2/index.js';

/**
 * @typedef {HTMLSpanElement & {item: ItemData}} NoteLink
 */
const template = document.createElement('template');
template.innerHTML = `
    <p class="card-title">
      <span class="inline-image-wrapper">
        <img src="">
      </span><span class="title-text"></span>
      <span class="title-tooltip fading">英文名已复制到剪切板</span>
    </p>
    <div class="card-basic-info">
      <item-card id="card" src="../../image/cards/不朽交易.webp" class=""></item-card>
      <div class="card-terms"></div>
    </div>
    <hr id="champion-paths-hr">
    <div class="champion-paths">
      <div class="tabs-container">
        <input type="radio" id="tab1" name="tab-group">
        <label id="tab1-label" for="tab1">强力食品</label>

        <input type="radio" id="tab2" name="tab-group">
        <label id="tab2-label" for="tab2">耐吃的零食</label>

        <input type="radio" id="tab3" name="tab-group" checked>
        <label id="tab3-label" for="tab3">超级食品</label>
        <div class="tab-content">
          <item-card src=""></item-card>
          <item-card src=""></item-card>
          <item-card src=""></item-card>
        </div>
      </div>
    </div>
    <hr>
    <div class="card-notes">
      <ul class="card-note-list"></ul>
    </div>
    <div class="dlg-tooltip"></div>`;

/** @type {HTMLDivElement} */
let tooltip;
/** @type {CardDetails} */
let dialogInstance;

export class CardDetails extends HTMLElement {

  static TAG_NAME = 'card-details';

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    [
      '../css/default.css',
      '../proto/item-card/style.css',
      '../proto/img-in-text/style.css',
      '../proto/card-detail-dialog/style.css',
    ].forEach(css => {
      const link = createCssLink(css);
      shadowRoot.appendChild(link);
    });

    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    ['tab1', 'tab2', 'tab3'].forEach(id => {
      const radio = shadowRoot.querySelector('#' + id);
      radio.addEventListener('change', () => {
        this.#onTabSelected(id);
      });
    });

    const title = shadowRoot.querySelector('.title-text');
    const titleTooltip = /** @type {HTMLSpanElement} */(shadowRoot.querySelector('.title-tooltip'));
    title.addEventListener('click', () => {
      titleTooltip.classList.remove('fading');
      titleTooltip.style.opacity = '1';
      navigator.clipboard.writeText(title.textContent);
      setTimeout(() => {
        titleTooltip.classList.add('fading');
        titleTooltip.style.opacity = '0';
      }, 10);
    });

    tooltip = shadowRoot.querySelector('.dlg-tooltip');
    dialogInstance = this;
  }

  /**
   * @param {ItemData} value 
   */
  set item(value) {
    const shadowRoot = this.shadowRoot;
    this._item = value;
    const title = this.shadowRoot.querySelector('.card-title');
    if ('english_name' in value) {
      title.querySelector(".title-text").textContent = value.english_name;
    }
    const titleIcon = title.querySelector('img');
    titleIcon.setAttribute("src", "image/other/" + value.type + ".webp");

    const card = /** @type {ItemCard} */(shadowRoot.querySelector('#card'));
    card.item = value;
    switch (value.type) {
      case "神器":
        card.setAttribute("src", "/image/artifacts/" + value.name + ".webp");
        break;
      case "升级石":
        card.setAttribute("src", "/image/upgrades/" + value.name + ".webp");
        break;
      default:
        card.setAttribute("src", "/image/cards/" + value.name + ".webp");
        break;
    }

    const cardTermDiv = shadowRoot.querySelector('.card-terms');
    cardTermDiv.innerHTML = card.termsHtml;

    const championPathDiv = /** @type {HTMLDivElement} */(shadowRoot.querySelector('.champion-paths'));
    const championPathHr = /** @type {HTMLHRElement} */(shadowRoot.querySelector('#champion-paths-hr'));
    if ('paths' in value) {
      championPathDiv.style.display = 'flex';
      championPathHr.style.display = 'block';

      const paths = /** @type { ChampionPath[] } */(value.paths);
      for (let i = 0; i < paths.length; i++) {
        shadowRoot.querySelector("#tab" + (i + 1) + "-label").textContent = paths[i].name;
        /** @type {HTMLInputElement} */(shadowRoot.querySelector('#tab1')).checked = true;
        this.#onTabSelected('tab1');
      }
    } else {
      championPathDiv.style.display = 'none';
      championPathHr.style.display = 'none';
    }
    const noteList = shadowRoot.querySelector('.card-note-list');
    let html = '';
    if (value.tips) {
      value.tips.forEach(tip => {
        html += `<li>`;
        html += tip.replace(/\[(.*?)\]/g, (match, content) => {
          // 替换成图标
          if (['生命值', '攻击力', '余烬', '部署阶段余烬', '金币', '容量', '龙族宝藏'].includes(content)) {
            return ItemCard.iconHtml(content);
          }
          // 替换成粗体字
          return `<span class="link-span">${content}</span>`;
        });

        html += `</li>`;
      });
    }
    let links = /** @type {NodeListOf<NoteLink>} */(noteList.querySelectorAll('.link-span'));
    links.forEach(link => {
      link.removeEventListener('mouseenter', this.#onNoteLinkMouseEnter);
      link.removeEventListener('mouseleave', this.#onNoteLinkMouseLeave);
      link.removeEventListener('click', this.#onNoteLinkClicked);
      link.item = null;
    });
    noteList.innerHTML = html;
    links = noteList.querySelectorAll('.link-span');
    links.forEach(link => {
      link.addEventListener('mouseenter', this.#onNoteLinkMouseEnter);
      link.addEventListener('mouseleave', this.#onNoteLinkMouseLeave);
      link.addEventListener('click', this.#onNoteLinkClicked);
    });
  }
  /**
   * 
   * @param {string} id 
   * @returns 
   */
  #onTabSelected(id) {
    if (!this._item || !('paths' in this._item)) { return; }
    const shadowRoot = this.shadowRoot;
    const championPathDiv = /** @type {HTMLDivElement} */(shadowRoot.querySelector('.champion-paths'));
    const championPathHr = /** @type {HTMLHRElement} */(shadowRoot.querySelector('#champion-paths-hr'));
    championPathDiv.style.display = 'flex';
    championPathHr.style.display = 'block';

    const seq = parseInt(id[3]) - 1;
    if (isNaN(seq) || typeof seq == 'undefined' || seq < 0) { return; }

    const paths = /** @type { ChampionPath[] } */(this._item.paths);
    let imgSrc = this._item.name + "-" + paths[seq].name;
    const images = this.shadowRoot.querySelector('.tab-content').querySelectorAll('item-card');
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute('src', `/image/paths/${imgSrc + (i + 1)}.webp`);
    }
  }
  /**
   * 
   * @param {MouseEvent} e 
   */
  #onNoteLinkMouseEnter(e) {
    if (!tooltip) { return; }

    const link = /** @type{NoteLink} */(e.target);
    const item = MT_DATA.get(link.textContent);
    if (!item) { return; }

    CardDetails.generateTooltip(item);
    link.item = item;

    const linkRect = link.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let left = linkRect.left - (tooltipRect.width - linkRect.width) / 2;
    if (left < 0) { left = 0; }
    tooltip.style.left = left + "px";
    tooltip.style.top = linkRect.top - tooltipRect.height + "px";
    tooltip.style.visibility = 'visible';
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  #onNoteLinkMouseLeave(e) {
    if (!tooltip) { return; }
    tooltip.style.visibility = 'hidden';
  }
  /**
   * 
   * @param {MouseEvent} e 
   */
  #onNoteLinkClicked(e) {
    const link = /** @type{NoteLink} */(e.target);
    if (!link || !link.item) { return; }

    const item = link.item;
    if (ItemCard.TYPES_WITH_CARD.includes(item.type))
      dialogInstance.item = item;
    tooltip.style.visibility = 'hidden';
  }
  // 根据名字生成 html 字符串
  // 如果是单位, 法术, 装备等, 生成对应的卡牌 html string
  // 如果是词条, 生成词条的 html string
  /**
   * 
   * @param {ItemData} item 
   * @returns 
   */
  static generateTooltip(item) {
    if (!item) { return ''; }

    let html = '';
    let isCard = false;

    // 如果是对象类型, 可以生成卡片
    if (ItemCard.TYPES_WITH_CARD.includes(item.type)) {
      switch (item.type) {
        case "神器":
          html = `<item-card src="/image/artifacts/${item.name}.webp"></item-card>`;
          break;
        case "升级石":
          html = `<item-card src="/image/upgrades/${item.name}.webp"></item-card>`;
          break;
        default:
          html = `<item-card src="/image/cards/${item.name}.webp"></item-card>`;
          break;
      }
      isCard = true;
    }
    // 如果是词条
    else {
      html = ItemCard.getTermHtml(item);
    }

    tooltip.innerHTML = html;
    if (isCard) {
      const card = /** @type{ItemCard} */(tooltip.querySelector('item-card'));
      if (card) {
        card.item = item;
      }
    }
  }
}

customElements.define(CardDetails.TAG_NAME, CardDetails);