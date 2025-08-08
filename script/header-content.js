import { createCssLink } from "./util.js";

const template = document.createElement('template');
template.innerHTML = `
  <span class="header-icon">
    <img src="/image/other/怪物火车2.webp" alt="">
  </span>怪物火车 2 数据查询
  <button class="menu-button">
    <img src="/image/other/menu-burger.svg">
  </button>`;

export class HeaderContent extends HTMLElement {

  static TAG_NAME = 'header-content'

  constructor() {
    // 必须调用 super()
    super();

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define(HeaderContent.TAG_NAME, HeaderContent);