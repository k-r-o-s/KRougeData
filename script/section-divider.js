// import { createCssLink } from "./util.js";

const template = document.createElement('template');
template.innerHTML = `<div class="section-divider" id="divider">
    <span class="section-divider__title"></span>
    <span class="section-help-container">
      <span class="section-help-icon hidden"> ? <span>
      <div class="section-help-text"></div>
    </span>
  </div>`;

export class SectionDivider extends HTMLElement {

  static TAG_NAME = 'section-divider'

  constructor() {
    // 必须调用 super()
    super();

    // // 创建 Shadow DOM
    // const shadowRoot = this.attachShadow({ mode: 'open' });

    // // 创建 link 元素并添加到 shadowRoot
    // [
    //   '../css/default.css',
    //   '../proto/item-card/style.css',
    //   '../proto/section-divider/style.css',
    // ].forEach(css => {
    //   const link = createCssLink(css);
    //   shadowRoot.appendChild(link);
    // });

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    this.divider = this.querySelector('.section-divider__title');
    this.helpIcon = /**@type{HTMLSpanElement}*/(this.querySelector('.section-help-icon'));
    this.tooltip = this.querySelector('.section-help-text');
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
  }

  disconnectedCallback() {
    // console.log('SectionDivider 已从文档断开。');
  }

  /**
   * 
   * @param {string} name 
   * @param {string} oldValue 
   * @param {string} newValue 
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "text":
        this.divider.textContent = newValue;
        break;
      case "tooltip":
        this.tooltip.textContent = newValue;
        if (newValue) {
          this.helpIcon.style.display = 'inline-block';
        } else {
          this.helpIcon.style.display = 'none';
        }
        break;
      default:
        console.error("unsupported attribute type: [" + name + "]");
    }
  }

  static get observedAttributes() {
    return ['text', 'tooltip']; // 监听的属性列表
  }
}

customElements.define(SectionDivider.TAG_NAME, SectionDivider);