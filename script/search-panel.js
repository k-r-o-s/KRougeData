import { ImageToggleButton } from './image-toggle-button.js'
import { SearchTag } from './search-tag.js';

const template = document.createElement('template');
template.innerHTML = `
  <!-- 查询输入框和按钮区 -->
  <div class="search-container">
    <input type="search" id="search-input" placeholder="请输入搜索条件..." list="search-list">
    <button id="search-button">🔎</button>
  </div>
  <div class="search-tag-list"></div>
  <!-- 卡牌氏族选取区 -->
  <section-divider text="氏族"></section-divider>
  <div id="clan-section" class="image-toggle-button-group">
  </div>
  <!-- 卡牌类型选取区 -->
  <section-divider text="类型"></section-divider>
  <div id="type-section" class="image-toggle-button-group">
  </div>
  <!-- 卡牌稀有度选取区 -->
  <section-divider text="稀有度"></section-divider>
  <div id="rarity-section" class="image-toggle-button-group">
  </div>
  <!-- 卡牌费用选取区 -->
  <section-divider text="费用"></section-divider>
  <div id="cost-section" class="image-toggle-button-group">
  </div>
  <!-- 标签选取区 -->
  <section-divider text="标签"></section-divider>`;

export class SearchPanel extends HTMLElement {
  static TAG_NAME = 'search-panel';
  /** @type {Query} */
  static RESET_QUERY = {
    "text": '',
    "clan": [],
    "type": [],
    "rarity": [],
    "cost": [],
  }

  constructor() {
    super();

    const content = template.content.cloneNode(true);
    this.appendChild(content);

    /** @type{HTMLButtonElement} */
    this.searchButton = this.querySelector('#search-button');
    /** @type{HTMLInputElement} */
    this.searchInput = this.querySelector("#search-input");
    /** @type{HTMLDivElement} */
    this.searchTagList = this.querySelector(".search-tag-list");

    this.#createToggleButtons();
    this.#createTermTags();
    this.tagClickCallbacks = new Map();
  }

  #createToggleButtons() {
    /** @type {ImageToggleButton[]} */
    this.toggleButtons = [];

    // <image-toggle-button src="image/other/流放者.webp" condition="clan:流放者" title="流放者">
    // </image-toggle-button>
    /** @type {HTMLDivElement} */
    const clanSection = this.querySelector('#clan-section');
    ['无氏族', '流放者', '薪龙族', '月巫团', '地下菌团', '拉撒路联盟'
      , '狱魔', '觉者', '冥卫', '影主', '熔尸'].forEach(clan => {
        const button = ImageToggleButton.create();
        button.setAttribute('src', `image/other/${clan}.webp`);
        button.setAttribute('condition', `clan:${clan}`);
        button.setAttribute('title', clan);
        clanSection.appendChild(button);
        this.toggleButtons.push(button);
      })
    // <image-toggle-button src="image/other/单位.webp" condition="type:单位" title="单位" size="42x48">
    // </image-toggle-button>
    const typeSection = this.querySelector('#type-section');
    ['单位', '法术', '装备', '房间', '神器', '升级石', '祸患', '天灾'].forEach(type => {
      const button = ImageToggleButton.create();
      button.setAttribute('src', `image/other/${type}.webp`);
      button.setAttribute('condition', `type:${type}`);
      button.setAttribute('title', type);
      button.setAttribute('size', '42x48');
      typeSection.appendChild(button);
      this.toggleButtons.push(button);
    })
    // <image-toggle-button src="image/other/勇者.webp" condition="rarity:勇者" title="勇者"
    //  size="42x42"></image-toggle-button>
    const raritySection = this.querySelector('#rarity-section');
    ['勇者', '普通', '高级', '稀有'].forEach(rarity => {
      const button = ImageToggleButton.create();
      button.setAttribute('src', `image/other/${rarity}.webp`);
      button.setAttribute('condition', `rarity:${rarity}`);
      button.setAttribute('title', rarity);
      button.setAttribute('size', '42x42');
      raritySection.appendChild(button);
      this.toggleButtons.push(button);
    })
    // <image-toggle-button src="" text="0" condition="cost:0" size="42x42">
    // </image-toggle-button>
    const costSection = this.querySelector('#cost-section');
    // TODO: 费用从 MT_DATA 中动态获取
    ['0', '1', '2', '3', '4+', 'X'].forEach(cost => {
      const button = ImageToggleButton.create();
      if (cost == '4+') {
        button.setAttribute('condition', `cost:4;cost:5;cost:6;cost:7;cost:8`);
      } else {
        button.setAttribute('condition', `cost:${cost}`);
      }
      button.setAttribute('text', cost);
      button.setAttribute('title', cost);
      button.setAttribute('size', '42x42');
      costSection.appendChild(button);
      this.toggleButtons.push(button);
    })
  }

  #createTermTags() {

  }

  ///////////////////////////////////////////////////////
  get searchText() {
    return this.searchInput.value;
  }

  get conditions() {
    /** @type { string[] } */
    const conditons = [];
    this.toggleButtons.forEach(btn => {
      if (!btn || btn.isOff) { return; }
      const condition = btn.getAttribute("condition").split(";")
      if (condition) { conditons.push(...condition); }
    });
    return conditons;
  }
  /**
   * @param {(query:Query)=>undefined} callback 
   */
  set onTagClicked(callback) {
    this._onTagClicked = callback;
  }

  /**
   * 
   * @param {Query} query 
   */
  addSearchTag(query) {
    const MAX_TAG_COUNT = 30;
    /** @type { SearchTag } */
    let tag = null;
    const list = this.searchTagList;
    let isNew = true;
    const queryJson = query ? JSON.stringify(query) : "";
    for (let i = 0; i < list.childNodes.length; i++) {
      const node = /** @type { SearchTag } */ (list.childNodes[i]);
      if (node.queryJson == queryJson) {
        tag = node;
        isNew = false;
        break;
      }
    }
    if (isNew) {
      tag = /** @type { SearchTag } */ (SearchTag.create(true));
      tag.query = query;
    }
    // 即使它是原有的元素, insert 操作依然会把它从旧的位置移除并插入到第一个位置
    list.insertBefore(tag, list.firstElementChild);
    if (isNew && list.childNodes.length > MAX_TAG_COUNT) {
      list.removeChild(list.lastElementChild);
    }
    if (isNew) {
      const callback = () => {
        this._onTagClicked(tag.query);
      };
      tag.addEventListener('click', callback);
      tag.clickCallback = callback;
      const clearCallback = () => {
        this.removeSearchTag(tag);
      }
      tag.clearButton.addEventListener('click', clearCallback);
      tag.clearCallback = clearCallback;
    }
  }
  addResetTag() {
    this.addSearchTag(SearchPanel.RESET_QUERY);
  }
  /**
   * 
   * @param {SearchTag} tag 
   */
  removeSearchTag(tag) {
    tag.removeEventListener('click', tag.clickCallback);
    tag.clearButton.removeEventListener('click', tag.clearCallback);
    tag.parentElement.removeChild(tag);
  }
  /**
   * 
   * @param {Query} query 
   */
  setQuery(query) {
    this.searchInput.value = query.text;
    ["clan", "type", "rarity", "cost"].forEach(sectionId => {
      const section = this.querySelector("#" + sectionId + "-section");
      const buttons = section.querySelectorAll(ImageToggleButton.TAG_NAME);
      const qSegment = query[/** @type { "clan" | "type" | "rarity" | "cost" } */(sectionId)];
      if (!qSegment || qSegment.length == 0) {
        buttons.forEach(ele => ele.setAttribute('off', '0'));
      } else {
        buttons.forEach(ele => {
          const eleConditon = ele.getAttribute('condition');
          if (!eleConditon) { return; }
          // 一个按钮的 condition可能包含多个条件, 先用分号拆分, 然后在用冒号拆分
          // 例子: <image-toggle-button text="4+" condition="cost:4;cost:5;cost:6;cost:7;cost:8">
          const buttonConditions = eleConditon.split(';');
          const conditionValue = buttonConditions[0].split(':')[1];
          if (qSegment.includes(conditionValue)) {
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