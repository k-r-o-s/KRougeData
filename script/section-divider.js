class SectionDivider extends HTMLElement {

  static TEMPLATE_ID = 'section-divider-template';
  static TAG_NAME = 'section-divider'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '../proto/section-divider/style.css'); // 指向你的 CSS 文件
    this.shadowRoot.appendChild(linkElem);


    // 获取 template 内容
    const template = document.getElementById(SectionDivider.TEMPLATE_ID);
    if (template) {
      // 复制 template 的内容并添加到 Shadow DOM
      const content = template.content.cloneNode(true);
      shadowRoot.appendChild(content);

      const divider = shadowRoot.querySelector('#divider');
      if (!divider) {
        console.error('template with ID "' + SectionDivider.TEMPLATE_ID + '" clone failed, <div id=\"divider\"> not found');
      }
      this.divider = divider;
    } else {
      console.error('Template with ID "' + SectionDivider.TEMPLATE_ID + '" not found.');
    }
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