const template = document.createElement('template');
template.innerHTML = `<span class="header-icon">
        <img src="image/other/怪物火车2.webp" alt="">
      </span>怪物火车 2 数据查询`;

export class HeaderContent extends HTMLElement {

  static TAG_NAME = 'header-content'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    const styleUrl = new URL('../proto/header-content/style.css', import.meta.url);
    linkElem.setAttribute('href', styleUrl.href);
    this.shadowRoot.appendChild(linkElem);


    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    // console.log('HeaderContent 已连接到文档111。');
  }

  disconnectedCallback() {
    // console.log('HeaderContent 已从文档断开。');
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
}

customElements.define(HeaderContent.TAG_NAME, HeaderContent);