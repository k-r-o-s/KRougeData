import { createCssLink } from './util.js';

const template = document.createElement('template');
template.innerHTML = `
  <div class="search-tag-text">
    <span></span>
    <!--<button class="tag-clear-button">❌</button>-->
  </div>`;

export class SearchTag extends HTMLElement {
  static TAG_NAME = 'search-tag'
  static MAX_LENGTH = 7; // 超过这个长度显示省略号

  #text = "";

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    [
      '../css/default.css',
      '../proto/item-card/style.css',
      '../proto/search-tag/style.css',
    ].forEach(css => {
      const link = createCssLink(css);
      shadowRoot.appendChild(link);
    });

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    this.textDiv = shadowRoot.querySelector('search-tag-text');
    this.textSpan = shadowRoot.querySelector('span');
    this.button = null; // shadowRoot.querySelector('button');
    this.clickCallback = null;
    this.clearCallback = null;
  }
  /**
   * @param { Query } value 
   */
  set query(value) {
    this._query = value;
    let text = value && value.text ? value.text : '';
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
  /**@type{boolean}*/
  get closable() {
    return this.getAttribute('closable') == 'true';
  }
  /**@param{boolean} value*/
  set closable(value) {
    this.setAttribute('closable', value ? 'true' : 'false');
  }
  /**@type{string}*/
  get text() {
    return this.#text;
  }
  /**@param{string}value */
  set text(value) {
    this.#text = value;
    this.setAttribute('text', value);
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
        if (newValue == 'true') {
          this.#createRemoveButton();
        } else {
          this.#removeRemoveButton();
        }
        break;
      case 'text':
        this.#text = newValue;
        this.textSpan.textContent = newValue;
        break;
      default: break;
    }
  }
  #createRemoveButton() {
    //  <button class="tag-clear-button">❌</button>
    this.button = document.createElement('button');
    this.button.classList.add('tag-clear-button');
    this.button.textContent = '❌';
    this.textDiv.appendChild(this.button);
  }
  #removeRemoveButton() {
    if (!this.button) { return; }
    this.textDiv.removeChild(this.button);
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
    return ['closable', 'text']; // 监听的属性列表
  }
}

customElements.define(SearchTag.TAG_NAME, SearchTag);