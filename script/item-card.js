import { MT_DATA } from "../data/monster-train-2/index.js";

export class ItemCard extends HTMLElement {

  static TEMPLATE_ID = 'item-card-template';
  static TAG_NAME = 'item-card'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '../proto/item-card/style.css'); // 指向你的 CSS 文件
    shadowRoot.appendChild(linkElem);

    // 获取 template 内容
    const template = document.getElementById('item-card-template');
    if (!template) {
      console.error('Template with ID "item-card-template" not found.');
      return;
    }
    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    this.image = shadowRoot.querySelector('.card-image');
    if (!this.image) {
      console.error('.card-image in template with ID "item-card-template" not found.');
      return;
    }
    this.nameDiv = shadowRoot.querySelector('.card-name');
    if (!this.nameDiv) {
      console.error('.card-name in template with ID "item-card-template" not found.');
      return;
    }
    this.nameDiv.style.display = "none";
    
    this.effectArea = shadowRoot.querySelector('.card-effect-area');
    if (!this.effectArea) {
      console.error('.card-effect-area in template with ID "item-card-template" not found.');
      return;
    }
    this.effectElement = shadowRoot.querySelector('.card-effect');
    if (!this.effectElement) {
      console.error('.card-effect in template with ID "item-card-template" not found.');
      return;
    }
    this.effectArea.style.display = "none";

    this.image.addEventListener('click', () => {
      alert('Custom Element 按钮被点击了!');
    });
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

  set item(value) {
    this._item = value;
    if(value && value.type == "神器" || value.type == "升级石") {
      this.nameDiv.style.display = "block";
      this.effectArea.style.display = "block";
      this.nameDiv.textContent = value.name;
      this.effectElement.textContent = value.effect;
      this.image.classList.add("card-img-small");
    } else {
      this.image.classList.add("card-img-normal");
    }
  }
  get item() {
    return this._item;
  }

  get termsHtml() {
    if (!this._item || !this._item.effect) { return ""; }

    const dataOfTerms = new Map();
    function getTerms(terms, effect) {
      const regex = /\[(.*?)\]/g;
      let term = "";
      let termData = undefined;
      let match = undefined;
      while (match = regex.exec(effect)) {
        term = match[1];
        if (!term || terms.has(term)) { continue; }
        termData = MT_DATA.get(term);
        if (!termData) { console.error("[" + term + "] 的数据未配置, 请在 terms.js 中配置"); continue;}
        terms.set(term, termData);
        if (termData.effect && term.effect != "-") {
          getTerms(terms, termData.effect);
        }
      }
    }
    getTerms(dataOfTerms, this._item.effect);
    let html = "";
    dataOfTerms.forEach(item => {
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
        default: // TODO: 生成单位 和 生成卡牌, 以及重复名字的词条: 复生
          return;
      }
      html += `<p class="term-title">${item.name}</p>
        <p class="term-effect">${item.effect}</p>
        </div>`;
    });
    return html;
  }
}

customElements.define(ItemCard.TAG_NAME, ItemCard);