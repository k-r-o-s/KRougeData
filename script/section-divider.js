const template = document.createElement('template');
template.innerHTML = `<div class="section-divider" id="divider"></div>`;

export class SectionDivider extends HTMLElement {

  static TAG_NAME = 'section-divider'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    const styleUrl = new URL('../proto/section-divider/style.css', import.meta.url);
    linkElem.setAttribute('href', styleUrl.href);
    this.shadowRoot.appendChild(linkElem);

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    const divider = shadowRoot.querySelector('#divider');
    if (!divider) {
      console.error('template with ID "' + SectionDivider.TEMPLATE_ID + '" clone failed, <div id=\"divider\"> not found');
    }
    this.divider = divider;
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    // console.log('SectionDivider 已连接到文档111。');
  }

  disconnectedCallback() {
    // console.log('SectionDivider 已从文档断开。');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "text":
        this.divider.textContent = newValue;
        break;
      default:
        console.error("unsupported attribute type: [" + name + "]");
    }
  }

  static get observedAttributes() {
    return ['text']; // 监听的属性列表
  }
}

customElements.define(SectionDivider.TAG_NAME, SectionDivider);