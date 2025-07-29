import { MT_DATA } from "../data/monster-train-2/index.js";

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
  </div>`;

export class ItemCard extends HTMLElement {

  static TAG_NAME = 'item-card'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');

    const styleUrl = new URL('../proto/item-card/style.css', import.meta.url);
    linkElem.setAttribute('href', styleUrl.href);
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
      this.effectElement.textContent = value.effect;
      this.image.classList.remove("card-img-normal");
      this.image.classList.add("card-img-small");
    } else {
      this.nameDiv.style.display = "none";
      this.effectArea.style.display = "none";
      this.image.classList.remove("card-img-small");
      this.image.classList.add("card-img-normal");
    }
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
        switch (item.type) {
          case "基础":
            html += `<div class="term-basic">`
            break;
          case "能力":
            html += `<div class="term-ability">`
            break;
          case "触发":
            html += `<div class="term-trgger">`
            break;
          case "特性":
            html += `<div class="term-feature">`
            break;
          case "增益":
            html += `<div class="term-buff">`
            break;
          case "减益":
            html += `<div class="term-debuff">`
            break;
          case "属性":
            html += `<div class="term-property">`
            break;
          default: // TODO: 生成单位 和 生成卡牌, 以及重复名字的词条: 复生
            return;
        }
        html += `<p class="term-title">${item.name}</p>
          <p class="term-effect">${item.effect}</p>
          </div>`;
      });
    }
    return html;
  }
}

customElements.define(ItemCard.TAG_NAME, ItemCard);