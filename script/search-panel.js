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

    this.toggleButtons = [];
    ["clan-section", "type-section", "rarity-section", "cost-section"].forEach(eleId => {
      const section = this.querySelector("#" + eleId);
      if (!section) { console.error("Can't find section: [" + eleId + "]"); }
      const buttons = Array.from(section.querySelectorAll("image-toggle-button"));
      this.toggleButtons.push(...buttons);
    });
  }

  // // 可选：定义生命周期回调函数
  // connectedCallback() { }
  // disconnectedCallback() { }
  // attributeChangedCallback(name, oldValue, newValue) { }
  // static get observedAttributes() {  return [];  } // 监听的属性列表

  ///////////////////////////////////////////////////////
  get searchText (){
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
  
  #processSearchingText(text) {
    const regex = /[&:|]/g;
    searchText.replace(regex, '');
    return text;
  }
}

customElements.define(SearchPanel.TAG_NAME, SearchPanel);