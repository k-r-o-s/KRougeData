import { createCssLink } from "./util.js";

const template = document.createElement('template');
template.innerHTML = `
  <button div class="image-toggle-button button-size56x56" id="button">
    <img id="image">
    <div id="tooltip"></div>
  </button>`;

export class ImageToggleButton extends HTMLElement {

  static TAG_NAME = 'image-toggle-button'

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    [
      '../css/default.css',
      '../proto/item-card/style.css',
      '../proto/image-toggle-button/style.css',
    ].forEach(css => {
      const link = createCssLink(css);
      shadowRoot.appendChild(link);
    });

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    /** @type { HTMLImageElement } */
    this.image = shadowRoot.querySelector('#image');
    /** 
      * @type{ HTMLButtonElement & 
      * {
      *   _clickHandler: (this: HTMLButtonElement, ev: MouseEvent) => any
      *   _dblClickHandler: (this: HTMLButtonElement, ev: MouseEvent) => any
      * }
      } */
    this.button = (shadowRoot.querySelector('#button'));
    this.tooltip = /**@type{HTMLDivElement}*/(shadowRoot.querySelector('#tooltip'));
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    const button = this.button;
    button._clickHandler = () => {
      button.classList.toggle("toggle-off");
    };
    button._dblClickHandler = () => {
      if (!this.parentElement) { return; }
      const siblings = this.parentElement.childNodes;
      const tagName = ImageToggleButton.TAG_NAME.toUpperCase();
      for (let i = 0; i < siblings.length; i++) {
        const ele = siblings[i];
        if (ele.nodeName == tagName) {
          (/** @type { ImageToggleButton } */(ele)).setAttribute('off', ele != this ? '1' : '0');
        }
      }
    };
    button.addEventListener('click', button._clickHandler);
    button.addEventListener('dblclick', button._dblClickHandler);
  }

  disconnectedCallback() {
    const button = this.button;
    button.removeEventListener('click', button._clickHandler);
    button.removeEventListener('dblclick', button._dblClickHandler);
  }
  /**
   * 
   * @param {string} name 
   * @param {string} oldValue 
   * @param {string} newValue 
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "tip":
        this.tooltip.textContent = newValue;
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
        newValue == "1"
          ? this.button.classList.add("toggle-off")
          : this.button.classList.remove("toggle-off");
        break;
      default:
        console.error("unsupported attribute type: [" + name + "]");
    }
  }

  get isOff() {
    return this.button.classList.contains("toggle-off");
  }

  static get observedAttributes() {
    return ['src', 'tip', 'text', 'size', "off"]; // 监听的属性列表
  }

  /**
   * 
   * @returns {ImageToggleButton}
   */
  static create() {
    return /** @type {ImageToggleButton} */(document.createElement(ImageToggleButton.TAG_NAME));
  }
}

customElements.define(ImageToggleButton.TAG_NAME, ImageToggleButton);