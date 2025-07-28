const template = document.createElement('template');
template.innerHTML = `
  <button div class="image-toggle-button button-size56x56" id="button">
    <img id="image">
  </button>`;

export class ImageToggleButton extends HTMLElement {

  static TAG_NAME = 'image-toggle-button'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    const styleUrl = new URL('../proto/image-toggle-button/style.css', import.meta.url);
    linkElem.setAttribute('href', styleUrl.href);
    this.shadowRoot.appendChild(linkElem);

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
    button.addEventListener('dblclick', () => {
      if (!this.parentElement) { return; }
      const siblings = this.parentElement.childNodes;
      const tagName = ImageToggleButton.TAG_NAME.toUpperCase();
      for (let i = 0; i < siblings.length; i++) {
        const ele = siblings[i];
        if (ele.nodeName == tagName) {
          ele.setAttribute('off', ele != this ? '1' : '0');
        }
      }
    });
    this.image = image;
    this.button = button;
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    // console.log('ImageToggleButton 已连接到文档');
  }

  disconnectedCallback() {
    // console.log('ImageToggleButton 已从文档断开。');
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
        // button-size56x56 by default
        if (newValue == "42x42") {
          this.button.classList.remove("button-size56x56");
          this.button.classList.add("button-size42x42");
        } else if (newValue == "42x48") {
          this.button.classList.remove("button-size56x56");
          this.button.classList.add("button-size42x48");
        }
        break;
      case "off":
        newValue == "1" ? this.button.classList.add("toggle-off") : this.button.classList.remove("toggle-off");;
        break;
      default:
        console.error("unsupported attribute type: [" + name + "]");
    }
  }

  get isOff() {
    return this.button.classList.contains("toggle-off");
  }

  static get observedAttributes() {
    return ['src', 'title', 'text', 'size', "off"]; // 监听的属性列表
  }
}

customElements.define(ImageToggleButton.TAG_NAME, ImageToggleButton);