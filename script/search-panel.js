import { ImageToggleButton } from './image-toggle-button.js'

const template = document.createElement('template');
template.innerHTML = `
  <!-- 查询输入框和按钮区 -->
  <div class="search-container">
    <input type="search" id="search-input" placeholder="请输入搜索条件..." list="search-list">
    <datalist id="search-list">
      <option value="迅捷">
      <option value="横扫">
      <option value="多重攻击">
      <option value="英勇">
      <option value="薪火熔胶">
      <option value="月相循环">
      <option value="导流">
      <option value="生长">
      <option value="散播">
      <option value="不稳定">
      <option value="狂怒">
      <option value="护甲">
      <option value="尖刺">
      <option value="舍弃">
      <option value="暴食">
      <option value="燃命">
    </datalist>
    <button id="search-button">🔎</button>
  </div>
  <div class="search-tag-list"></div>
  <!-- 卡牌氏族选取区 -->
  <section-divider text="氏族"></section-divider>
  <div id="clan-section" class="image-toggle-button-group">
    <image-toggle-button src="image/other/流放者.webp" condition="clan:流放者" title="流放者"></image-toggle-button>
    <image-toggle-button src="image/other/薪龙族.webp" condition="clan:薪龙族" title="薪龙族"></image-toggle-button>
    <image-toggle-button src="image/other/月巫团.webp" condition="clan:月巫团" title="月巫团"></image-toggle-button>
    <image-toggle-button src="image/other/地下菌团.webp" condition="clan:地下菌团" title="地下菌团"></image-toggle-button>
    <image-toggle-button src="image/other/拉撒路联盟.webp" condition="clan:拉撒路联盟" title="拉撒路联盟"></image-toggle-button>
    <image-toggle-button src="image/other/狱魔.webp" condition="clan:狱魔" title="狱魔"></image-toggle-button>
    <image-toggle-button src="image/other/觉者.webp" condition="clan:觉者" title="觉者"></image-toggle-button>
    <image-toggle-button src="image/other/冥卫.webp" condition="clan:冥卫" title="冥卫"></image-toggle-button>
    <image-toggle-button src="image/other/影主.webp" condition="clan:影主" title="影主"></image-toggle-button>
    <image-toggle-button src="image/other/熔尸.webp" condition="clan:熔尸" title="熔尸"></image-toggle-button>
    <image-toggle-button src="image/other/无氏族.webp" condition="clan:无氏族" title="无氏族"></image-toggle-button>
  </div>
  <!-- 卡牌类型选取区 -->
  <section-divider text="类型"></section-divider>
  <div id="type-section" class="image-toggle-button-group">
    <image-toggle-button src="image/other/单位.webp" condition="type:单位" title="单位" size="42x48"></image-toggle-button>
    <image-toggle-button src="image/other/法术.webp" condition="type:法术" title="法术" size="42x48"></image-toggle-button>
    <image-toggle-button src="image/other/装备.webp" condition="type:装备" title="装备" size="42x48"></image-toggle-button>
    <image-toggle-button src="image/other/房间.webp" condition="type:房间" title="房间" size="42x48"></image-toggle-button>
    <image-toggle-button src="image/other/神器.webp" condition="type:神器" title="神器" size="42x48"></image-toggle-button>
    <image-toggle-button src="image/other/升级石.webp" condition="type:升级石" title="升级石"
      size="42x48"></image-toggle-button>
    <image-toggle-button src="image/other/祸患.webp" condition="type:祸患" title="祸患" size="42x48"
      off="1"></image-toggle-button>
    <image-toggle-button src="image/other/天灾.webp" condition="type:天灾" title="天灾" size="42x48"
      off="1"></image-toggle-button>
  </div>
  <!-- 卡牌稀有度选取区 -->
  <section-divider text="稀有度"></section-divider>
  <div id="rarity-section" class="image-toggle-button-group">
    <image-toggle-button src="image/other/勇者.webp" condition="rarity:勇者" title="勇者"
      size="42x42"></image-toggle-button>
    <image-toggle-button src="image/other/普通.webp" condition="rarity:普通" title="普通"
      size="42x42"></image-toggle-button>
    <image-toggle-button src="image/other/高级.webp" condition="rarity:高级" title="高级"
      size="42x42"></image-toggle-button>
    <image-toggle-button src="image/other/稀有.webp" condition="rarity:稀有" title="稀有"
      size="42x42"></image-toggle-button>
  </div>
  <!-- 卡牌费用选取区 -->
  <section-divider text="费用"></section-divider>
  <div id="cost-section" class="image-toggle-button-group">
    <image-toggle-button src="" text="0" condition="cost:0" size="42x42"></image-toggle-button>
    <image-toggle-button src="" text="1" condition="cost:1" size="42x42"></image-toggle-button>
    <image-toggle-button src="" text="2" condition="cost:2" size="42x42"></image-toggle-button>
    <image-toggle-button src="" text="3" condition="cost:3" size="42x42"></image-toggle-button>
    <image-toggle-button src="" text="4+" condition="cost:4;cost:5;cost:6;cost:7;cost:8"
      size="42x42"></image-toggle-button>
    <image-toggle-button src="" text="X" condition="cost:X" size="42x42"></image-toggle-button>
  </div>
  <!-- 标签选取区 -->
  <section-divider text="标签"></section-divider>`;

export class SearchPanel extends HTMLElement {

  static TAG_NAME = 'search-panel'

  constructor() {
    super();

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
  //
  // query = {
  //   "text": "月相"
  //   "clan": [],
  //   "type": [],
  //   "rarity": [],
  //   "cost": [],
  // };
  setQuery(query) {
    this.searchInput.value = query.text;
    ["clan", "type", "rarity", "cost"].forEach(sectionId => {
      const section = this.querySelector("#" + sectionId + "-section");
      const buttons = section.querySelectorAll(ImageToggleButton.TAG_NAME);
      if (!query[sectionId] || query[sectionId].length == 0) {
        buttons.forEach(ele => ele.setAttribute('off', '0'));
      } else {
        buttons.forEach(ele => {
          const eleConditon = ele.getAttribute('condition');
          if (!eleConditon) { return; }
          // 一个按钮的 condition可能包含多个条件, 先用分号拆分, 然后在用冒号拆分
          // 例子: <image-toggle-button text="4+" condition="cost:4;cost:5;cost:6;cost:7;cost:8">
          const buttonConditions = eleConditon.split(';');
          const conditionValue = buttonConditions[0].split(':')[1];
          if (query[sectionId].includes(conditionValue)) {
            ele.setAttribute('off', '0');
          } else {
            ele.setAttribute('off', '1');
          }
        })
      }
    });
  }
}

customElements.define(SearchPanel.TAG_NAME, SearchPanel);