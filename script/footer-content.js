const template = document.createElement('template');
template.innerHTML = `
  <button class="menu-button">
    <img src="/image/other/settings.svg">
  </button>
  <a href="https://github.com/k-r-o-s/KRougeData">&copy; 2025  k-r-o-s / KRougeData</p>`;

export class FooterContent extends HTMLElement {

  static TAG_NAME = 'footer-content'

  constructor() {
    // 必须调用 super()
    super();

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define(FooterContent.TAG_NAME, FooterContent);