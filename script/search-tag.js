const template = document.createElement('template');
template.innerHTML = `
  <div class="search-tag-text">
    <span></span>
    <button class="search-tag-clear-button">❌</button>
  </div>`;

export class SearchTag extends HTMLElement {

  static TAG_NAME = 'search-tag'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    const styleUrl = new URL('../proto/search-tag/style.css', import.meta.url);
    linkElem.setAttribute('href', styleUrl.href);
    shadowRoot.appendChild(linkElem);

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    this.textSpan = shadowRoot.querySelector('span');
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
      case "text":
        this.textSpan.textContent = newValue;
        break;
      default: break;
    }
  }

  static get observedAttributes() {
    return [
      "text",
    ];
  }

  get clearButton() {
    return this.shadowRoot.querySelector('.search-tag-clear-button');
  }
  get text() {
    return this.textSpan.textContent;
  }
}

customElements.define(SearchTag.TAG_NAME, SearchTag);