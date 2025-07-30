
import { createCssLink } from './util.js';

function CardClickedHandler() {
  if (typeof this._onClickHandler == 'function') {
    this._onClickHandler();
  }
}

const template = document.createElement('template');
template.innerHTML = `
  <div class="card-container">
    <img class="card-image">
    <div class="card-name"></div>
    <div class="card-effect-area">
      <p class="card-effect"></p>
    </div>
    <img class="celestial-alcove-icon" src="/image/other/天界壁龛.webp">
  </div>`;

export class ItemCard extends HTMLElement {

  static TAG_NAME = 'item-card'
  static TYPES_WITH_CARD = ["召唤单位", "单位", "法术", "神器", "祸患", "天灾", "房间", "装备", "升级石"];

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    let linkElem;
    linkElem = createCssLink('../proto/item-card/style.css');
    shadowRoot.appendChild(linkElem);
    linkElem = createCssLink('../proto/img-in-text/style.css');
    shadowRoot.appendChild(linkElem);

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    this.cardContainer = shadowRoot.querySelector('.card-container');
    this.image = shadowRoot.querySelector('.card-image');
    this.nameDiv = shadowRoot.querySelector('.card-name');
    this.nameDiv.style.display = "none";

    this.effectArea = shadowRoot.querySelector('.card-effect-area');
    this.effectElement = shadowRoot.querySelector('.card-effect');
    this.effectArea.style.display = "none";
    this._cickHandler = CardClickedHandler.bind(this);
    this.image.addEventListener('click', this._cickHandler);
    this.image.classList.add("card-img-normal");
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    // console.log('MyCustomElement 已连接到文档。');
  }

  disconnectedCallback() {
    // console.log('MyCustomElement 已从文档断开。');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "src":
        this.image.src = newValue;
        break;
      default: break;
    }
  }

  static get observedAttributes() {
    return [
      "src",
    ];
  }
  onAdded(animating) {
    if (!animating) { return; }
    this.cardContainer.classList.add('entering');
    setTimeout(() => {
      this.cardContainer.classList.remove('entering');
      this.cardContainer.classList.add('entered');
    }, 10); // 小延迟确保样式应用
  }
  onBeingRemoved() {
    this.image.removeEventListener('click', this._cickHandler);
  }

  set item(value) {
    this._item = value;
    if (value && value.type == "神器" || value.type == "升级石") {
      this.nameDiv.style.display = "block";
      this.effectArea.style.display = "block";
      this.nameDiv.textContent = value.name;
      this.effectElement.innerHTML = ItemCard.#effectToHtml(value.effect);
      this.image.classList.remove("card-img-normal");
      this.image.classList.add("card-img-small");
    } else {
      this.nameDiv.style.display = "none";
      this.effectArea.style.display = "none";
      this.image.classList.remove("card-img-small");
      this.image.classList.add("card-img-normal");
    }
    
    const celestialIcon = this.shadowRoot.querySelector(".celestial-alcove-icon");
    if (value["celestial-alcove"]) {
      celestialIcon.style.visibility = 'visible';
    } else {
      celestialIcon.style.visibility = 'hidden';
    }
  }

  static #effectToHtml(effect) {
    // 存在一个重名的词条 [复生], 其中一个意思是 复活时触发动作, 另一个是表示单位死亡后返回牌堆顶端
    // 所以为了方便初始, 词条库里把后者存储为 [永生] 加以区别
    let html = effect;

    if (!html) { return ""; }
    html = html.replaceAll('[永生]', '[复生]');

    // 找到被中括号括起来的内容, 把它们根据情况替换成对应内容
    // /\[(.*?)\]/g:
    //   \[ 和 \]：匹配字面量的方括号。方括号在正则表达式中有特殊含义，所以需要用反斜杠转义。
    //   (.*?)：这是一个捕获组。
    //     .：匹配任何字符（除了换行符）。
    //     *：匹配前一个字符零次或多次。
    //     ?：使 * 成为非贪婪模式，确保它只匹配到最近的闭合方括号。
    //   g：全局标志，确保替换所有匹配项而不仅仅是第一个。
    html = html.replace(/\[(.*?)\]/g, (match, content) => {
      // 替换成图标
      if (['生命值', '攻击力', '余烬', '部署阶段余烬', '金币', '容量', '龙族宝藏'].includes(content)) {
        return ItemCard.iconHtml(content);
      }
      // 替换成粗体字
      return `<span class="bold-span">${content}</span>`;
    });

    return html;
  }

  static iconHtml(iconName) {
    return `<span class="inline-image-wrapper"><img src="/image/other/${iconName}.webp"></span>`;
  }
  set onClickHandler(handler) {
    this._onClickHandler = handler;
  }

  get item() {
    return this._item;
  }

  get termsHtml() {
    if (!this._item) { return ""; }

    let html = "";
    if (this._item.terms) {
      this._item.terms.forEach(item => {
        if (ItemCard.TYPES_WITH_CARD.includes(item.type)) {
          html += `<div class="term-summon">`;
          html += `<p class="term-title">${item.name}</p>`;
          html += `<p class="term-effect">${item['unit-type'] ? item['unit-type'] : item.type}</p>`;
          if (typeof item.size != 'undefined' || typeof item.cost != 'undefined'
            || typeof item.attack != 'undefined' || typeof item.health != 'undefined') {
            html += `<p class="term-effect">`;
            if (item.attack || item.health) {
              html += `${item.attack || 0} ${ItemCard.iconHtml('攻击力')} ${item.health || 0} ${ItemCard.iconHtml('生命值')}`;
            }
            if (typeof item.cost != 'undefined') {
              html += ` ${item.cost} ${ItemCard.iconHtml('余烬')}`;
            }
            if (typeof item.size != 'undefined') {

              html += ` ${item.size} ${ItemCard.iconHtml('容量')}`;
            }
            html += '</p>';
          }
          html += `<p class="term-effect">${ItemCard.#effectToHtml(item.effect)}</p></div>`;
        }
        else {
          html += ItemCard.getTermHtml(item);
        }
      });
    }
    return html;
  }

  static getTermHtml(item) {
    if (!item) { return ''; }
    let html = '';

    switch (item.type) {
      case "基础":
        html += `<div class="term-basic">`;
        break;
      case "能力":
        html += `<div class="term-ability">`;
        break;
      case "触发":
        html += `<div class="term-trigger">`;
        break;
      case "特性":
        html += `<div class="term-feature">`;
        break;
      case "增益":
        html += `<div class="term-buff">`;
        break;
      case "减益":
        html += `<div class="term-debuff">`;
        break;
      case "属性":
        html += `<div class="term-property">`;
        break;
      default:
        console.error('无法显示的词条: [' + item.name + ']', item);
        return;
    }

    // 存在一个重名的词条 [复生], 其中一个意思是 复活时触发动作, 另一个是表示单位死亡后返回牌堆顶端
    // 所以为了方便初始, 词条库里把后者存储为 [永生] 加以区别
    const termName = item.name == "永生" ? "复生" : item.name;
    html += `<p class="term-title">${termName}</p>`;
    if (item.type == "能力" && typeof item.cd != "undefined") {
      html += `<p class="term-effect">冷却: ${item.cd}`;
    }
    html += `<p class="term-effect">${ItemCard.#effectToHtml(item.effect)}</p></div>`;

    return html;
  }
  static createCard(item) {
    // <item-card src="/image/cards/不朽交易.webp" class=""></item-card>
    const card = document.createElement(ItemCard.TAG_NAME);
    card.item = item;
    switch (item.type) {
      case "神器":
        card.setAttribute("src", "/image/artifacts/" + item.name + ".webp");
        break;
      case "升级石":
        card.setAttribute("src", "/image/upgrades/" + item.name + ".webp");
        break;
      default:
        card.setAttribute("src", "/image/cards/" + item.name + ".webp");
        break;
    }
    return card;
  }
}

customElements.define(ItemCard.TAG_NAME, ItemCard);