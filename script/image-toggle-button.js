class ImageToggleButton extends HTMLElement {

  static TEMPLATE_ID = 'image-toggle-button-template';
  static TAG_NAME = 'image-toggle-button'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', '../proto/image-toggle-button/style.css'); // 指向你的 CSS 文件
    this.shadowRoot.appendChild(linkElem);


    // 获取 template 内容
    const template = document.getElementById(ImageToggleButton.TEMPLATE_ID);
    if (template) {
      // 复制 template 的内容并添加到 Shadow DOM
      const content = template.content.cloneNode(true);
      shadowRoot.appendChild(content);

      // 获取按钮并添加事件监听器
      const image = shadowRoot.querySelector('#image');
      const button = shadowRoot.querySelector('#button');
      if (!image || !button) {
        console.error('template with ID "' + ImageToggleButton.TEMPLATE_ID + '" clone failed, <image> not found');
      }
      button.addEventListener('click', () => {
        button.classList.toggle("toggle-off");
      });
      this.image = image;
      this.button = button;
    } else {
      console.error('Template with ID "' + ImageToggleButton.TEMPLATE_ID + '" not found.');
    }
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    console.log('ImageToggleButton 已连接到文档111。');
  }

  disconnectedCallback() {
    console.log('ImageToggleButton 已从文档断开。');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "title":
        this.button.title = newValue;
        break;
      case "src":
        this.image.src = newValue;
        if (newValue == "") {
          this.image.style.visibility = 'hidden';
        } else {
          this.image.style.visibility = 'visible';
        }
        break;
      case "text":
        this.button.textContent = newValue;
        break;
      case "size":
        // image-toggle-button-medium by default
        if (newValue == "small") {
          this.button.classList.remove("image-toggle-button-medium");
          this.button.classList.add("image-toggle-button-small");
        }
        break;
      default:
        console.error("unsupported attribute type: [" + name + "]");
    }
  }

  get isOff() {
    return this.button.classList.contains("toggle-off");
  }

  static get observedAttributes() {
    return ['src', 'title', 'text', 'size']; // 监听的属性列表
  }
}

customElements.define(ImageToggleButton.TAG_NAME, ImageToggleButton);