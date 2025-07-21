export class SearchPanel extends HTMLElement {

  static TEMPLATE_ID = 'search-panel-template';
  static TAG_NAME = 'search-panel'

  constructor() {
    // 必须调用 super()
    super();

    // 获取 template 内容
    const template = document.getElementById(SearchPanel.TEMPLATE_ID);
    if (template) {
      // 复制 template 的内容并添加到 Shadow DOM
      const content = template.content.cloneNode(true);
      this.appendChild(content);

      const divider = this.querySelector('#divider');
      if (!divider) {
        console.error('template with ID "' + SearchPanel.TEMPLATE_ID + '" clone failed, <div id=\"divider\"> not found');
      }
      this.divider = divider;
    } else {
      console.error('Template with ID "' + SearchPanel.TEMPLATE_ID + '" not found.');
    }
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    // console.log('SearchPanel 已连接到文档111。');
  }

  disconnectedCallback() {
    // console.log('SearchPanel 已从文档断开。');
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

customElements.define(SearchPanel.TAG_NAME, SearchPanel);