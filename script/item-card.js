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
    this.shadowRoot.appendChild(linkElem);

    // 获取 template 内容
    const template = document.getElementById('item-card-template');
    if (template) {
      // 复制 template 的内容并添加到 Shadow DOM
      const content = template.content.cloneNode(true);
      shadowRoot.appendChild(content);

      // 获取按钮并添加事件监听器
      this.image = shadowRoot.querySelector('#image');
      if (!this.image) {
        console.error('Template with ID "item-card-template" not found.');
        return;
      }
      this.image.addEventListener('click', () => {
        alert('Custom Element 按钮被点击了!');
      });
    }
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    console.log('MyCustomElement 已连接到文档。');
  }

  disconnectedCallback() {
    console.log('MyCustomElement 已从文档断开。');
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
    return ['src']; // 监听的属性
  }
}

customElements.define(ItemCard.TAG_NAME, ItemCard);