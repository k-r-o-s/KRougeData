import { createCssLink } from './util.js';
import { ItemCard } from './item-card.js';
import { MT_DATA } from '../data/monster-train-2/index.js';

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

let tooltip;
export class CardDetails extends HTMLElement {

  static TAG_NAME = 'card-details';

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    let linkElem;

    linkElem = createCssLink('../css/default.css');
    this.shadowRoot.appendChild(linkElem);

    linkElem = createCssLink('../proto/item-card/style.css');
    this.shadowRoot.appendChild(linkElem);

    linkElem = createCssLink('../proto/img-in-text/style.css');
    this.shadowRoot.appendChild(linkElem);

    linkElem = createCssLink('../proto/card-detail-dialog/style.css');
    this.shadowRoot.appendChild(linkElem);

    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    ['tab1', 'tab2', 'tab3'].forEach(id => {
      const radio = shadowRoot.querySelector('#' + id);
      radio.addEventListener('change', () => {
        this.#onTabSelected(id);
      });
    });

    const title = shadowRoot.querySelector('.title-text');
    const titleTooltip = shadowRoot.querySelector('.title-tooltip');
    title.addEventListener('click', () => {
      titleTooltip.classList.remove('fading');
      titleTooltip.style.opacity = 1;
      navigator.clipboard.writeText(title.textContent);
      setTimeout(() => {
        titleTooltip.classList.add('fading');
        titleTooltip.style.opacity = 0;
      }, 10);
    });

    tooltip = shadowRoot.querySelector('.dlg-tooltip');
  }

  // 生命周期回调函数
  connectedCallback() {
  }

  disconnectedCallback() {
    // console.log('CardDetails 已从文档断开。');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      default:
        console.error("unsupported attribute type: [" + name + "]");
    }
  }
  static get observedAttributes() {
    return [];
  }

  set item(value) {
    this._item = value;
    const title = this.shadowRoot.querySelector('.card-title');
    title.querySelector(".title-text").textContent = value['english-name'];
    const titleIcon = title.querySelector('img');
    titleIcon.setAttribute("src", "image/other/" + value.type + ".webp");

    const card = this.shadowRoot.querySelector('#card');
    card.item = value;
    switch (value.type) {
      case "神器":
        card.setAttribute("src", "/image/artifacts/" + value.name + ".webp");
        break;
      case "升级石":
        card.setAttribute("src", "/image/other/" + value.name + ".webp");
        break;
      default:
        card.setAttribute("src", "/image/cards/" + value.name + ".webp");
        break;
    }

    const cardTermDiv = this.shadowRoot.querySelector('.card-terms');
    cardTermDiv.innerHTML = card.termsHtml;

    const championPathDiv = this.shadowRoot.querySelector('.champion-paths');
    const championPathHr = this.shadowRoot.querySelector('#champion-paths-hr');
    if (value.paths) {
      championPathDiv.style.display = 'flex';
      championPathHr.style.display = 'block';

      for (let i = 0; i < value.paths.length; i++) {
        this.shadowRoot.querySelector("#tab" + (i + 1) + "-label").textContent = value.paths[i].name;
        this.shadowRoot.querySelector('#tab1').checked = true;
        this.#onTabSelected('tab1');
      }
    } else {
      championPathDiv.style.display = 'none';
      championPathHr.style.display = 'none';
    }
    const noteList = this.shadowRoot.querySelector('.card-note-list');
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
    let links = noteList.querySelectorAll('.link-span');
    links.forEach(link => {
      link.removeEventListener('mouseenter', this.#onNoteMouseEnter);
      link.removeEventListener('mouseleave', this.#onNoteMouseLeave);
    });
    noteList.innerHTML = html;
    links = noteList.querySelectorAll('.link-span');
    links.forEach(link => {
      link.addEventListener('mouseenter', this.#onNoteMouseEnter);
      link.addEventListener('mouseleave', this.#onNoteMouseLeave);
    });
  }
  #onTabSelected(id) {
    if (!this._item || !this._item.paths) { return; }
    const championPathDiv = this.shadowRoot.querySelector('.champion-paths');
    const championPathHr = this.shadowRoot.querySelector('#champion-paths-hr');
    championPathDiv.style.display = 'flex';
    championPathHr.style.display = 'block';

    const seq = parseInt(id[3]) - 1;
    if (isNaN(seq) || typeof seq == 'undefined' || seq < 0) { return; }
    let imgSrc = this._item.name + "-" + this._item.paths[seq].name;
    const images = this.shadowRoot.querySelector('.tab-content').querySelectorAll('item-card');
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute('src', `/image/paths/${imgSrc + (i + 1)}.webp`);
    }
  }
  #onNoteMouseEnter(e) {
    if (!tooltip) { return; }
    CardDetails.generateTooltip(e.target.textContent);

    const linkRect = e.target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let left = linkRect.left - (tooltipRect.width - linkRect.width) / 2;
    if (left < 0) { left = 0; }
    tooltip.style.left = left + "px";
    tooltip.style.top = linkRect.top - tooltipRect.height + "px";
    tooltip.style.visibility = 'visible';
  }

  #onNoteMouseLeave(e) {
    if (!tooltip) { return; }
    tooltip.style.visibility = 'hidden';
  }
  // 根据名字生成 html 字符串
  // 如果是单位, 法术, 装备等, 生成对应的卡牌 html string
  // 如果是词条, 生成词条的 html string
  static generateTooltip(objName) {
    const item = MT_DATA.get(objName);
    if (!item) { return objName; }

    let html = '';
    let isCard = false;

    // 如果是对象类型, 可以生成卡片
    if (ItemCard.TYPES_WITH_CARD.includes(item.type)) {
      switch (item.type) {
        case "神器":
          html = `<item-card src="/image/artifacts/${item.name}.webp"></item-card>`;
          break;
        case "升级石":
          html = `<item-card src="/image/other/${item.name}.webp"></item-card>`;
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
      const card = tooltip.querySelector('item-card');
      if (card) {
        card.item = item;
      }
    }
  }
}

customElements.define(CardDetails.TAG_NAME, CardDetails);