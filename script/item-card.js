export class ItemCard extends HTMLElement {
  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 获取 template 内容
    const template = document.getElementById('item-card-template');
    if (template) {
      // 复制 template 的内容并添加到 Shadow DOM
      const content = template.content.cloneNode(true);
      shadowRoot.appendChild(content);

      // 获取按钮并添加事件监听器
      const image = shadowRoot.querySelector('#image');
      if (image) {
        button.addEventListener('click', () => {
          alert('Custom Element 按钮被点击了!');
        });
      }
    } else {
      console.error('Template with ID "item-card-template" not found.');
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
    console.log(`属性 ${name} 从 ${oldValue} 变为 ${newValue}。`);
  }

  static get observedAttributes() {
    return ['some-attribute']; // 监听的属性
  }
}
