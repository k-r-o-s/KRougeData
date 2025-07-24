export class SearchPanel extends HTMLElement {

  static TEMPLATE_ID = 'search-panel-template';
  static TAG_NAME = 'search-panel'

  constructor() {
    super();

    const template = document.getElementById(SearchPanel.TEMPLATE_ID);
    if (!template) {
      console.error('Template with ID "' + SearchPanel.TEMPLATE_ID + '" not found.');
      return;
    }
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    this.searchButton = this.querySelector('#search-button');
    this.searchInput = this.querySelector("#search-input");
    this.searchTagList = this.querySelector(".search-tag-list");

    this.toggleButtons = [];
    ["clan-section", "type-section", "rarity-section", "cost-section"].forEach(eleId => {
      const section = this.querySelector("#" + eleId);
      if (!section) { console.error("Can't find section: [" + eleId + "]"); }
      const buttons = Array.from(section.querySelectorAll("image-toggle-button"));
      this.toggleButtons.push(...buttons);
    });

    this.tagClickCallbacks = new Map();
  }

  // // 可选：定义生命周期回调函数
  // connectedCallback() { }
  // disconnectedCallback() { }
  // attributeChangedCallback(name, oldValue, newValue) { }
  // static get observedAttributes() {  return [];  } // 监听的属性列表

  ///////////////////////////////////////////////////////
  get searchText() {
    return this.searchInput.value;
  }

  get conditions() {
    const conditons = [];
    this.toggleButtons.forEach(btn => {
      if (!btn || btn.isOff) { return; }
      const condition = btn.getAttribute("condition").split(";")
      if (condition) { conditons.push(...condition); }
    });
    return conditons;
  }
  addSearchTag(text, clickCallback) {
    const MAX_TAG_COUNT = 30;
    let tag = null;
    const list = this.searchTagList;
    let isNew = true;
    for (let i = 0; i < list.childNodes.length; i++) {
      const node = list.childNodes[i];
      if (node.text == text) {
        tag = node;
        isNew = false;
        break;
      }
    }
    if (isNew) {
      tag = document.createElement("search-tag");
      tag.setAttribute("text", text);
    }
    // 即使它是原有的元素, insert 操作依然会把它从旧的位置移除并插入到第一个位置
    list.insertBefore(tag, list.firstElementChild);
    if (isNew && list.childNodes.length > MAX_TAG_COUNT) {
      list.removeChild(list.lastElementChild);
    }
    if (isNew) {
      tag.addEventListener('click', clickCallback);
      tag.clickCallback = clickCallback;
      const clearCallback = () => {
        this.removeSearchTag(tag);
      }
      tag.clearButton.addEventListener('click', clearCallback);
      tag.clearCallback = clearCallback;
    }
  }
  removeSearchTag(tag) {
    tag.removeEventListener('click', tag.clickCallback);
    tag.clearButton.removeEventListener('click', tag.clearCallback);
    tag.parentElement.removeChild(tag);
  }
}

customElements.define(SearchPanel.TAG_NAME, SearchPanel);