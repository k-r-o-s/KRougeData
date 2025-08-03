import { createCssLink } from './util.js';

const template = document.createElement('template');
template.innerHTML = `
  <div class="search-tag-text">
    <span></span>
    <button class="tag-clear-button">❌</button>
  </div>`;

export class SearchTag extends HTMLElement {
  static TAG_NAME = 'search-tag'
  static MAX_LENGTH = 7; // 超过这个长度显示省略号

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = createCssLink('../proto/search-tag/style.css');
    shadowRoot.appendChild(linkElem);

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    this.textSpan = shadowRoot.querySelector('span');
    this.button = shadowRoot.querySelector('button');
    this.clickCallback = null;
    this.clearCallback = null;
  }
  /**
   * @param { Query } value 
   */
  set query(value) {
    this._query = value;
    let text = value && value.text ? value.text : '[   ]';
    // 超过 7 个字符显示省略号
    if (text.length > SearchTag.MAX_LENGTH) {
      text = text.slice(0, SearchTag.MAX_LENGTH) + '...';
    }
    this.textSpan.textContent = text;
  }
  get query() {
    return this._query;
  }
  get clearButton() {
    return this.button;
  }
  get queryJson() {
    return this._query ? JSON.stringify(this._query) : "";
  }

  /**
   * 
   * @param { string } name 
   * @param { string } oldValue 
   * @param { string } newValue 
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'closable':
        newValue == 'true'
          ? this.button.classList.remove("tag-button-hidden")
          : this.button.classList.add("tag-button-hidden");
        break;
      default: break;
    }
  }

  /**
   * @param { boolean } closable
   */
  static create(closable) {
    const ele = document.createElement(SearchTag.TAG_NAME);
    ele.setAttribute('closable', closable ? 'true' : 'false');
    return ele;
  }

  static get observedAttributes() {
    return ['closable']; // 监听的属性列表
  }
}

customElements.define(SearchTag.TAG_NAME, SearchTag);