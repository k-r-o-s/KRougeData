import { MT_DATA } from '../data/monster-train-2/index.js';
import { ImageToggleButton } from './image-toggle-button.js'
import { SearchTag } from './search-tag.js';

//-----------------------------------------------------------------------
//                   HTML 模板
//-----------------------------------------------------------------------
const template = document.createElement('template');
template.innerHTML = `
  <div class="search-top-image">
  </div>
  <!-- 查询输入框和按钮区 -->
  <section-divider text="文字" tooltip="输入内容后无需回车会自动搜索\n按钮 [+] 可以保存当前搜索条件\n点击标签[重置]会重置所有搜索条件\n可以搜索英文名">
  </section-divider>
  <div class="search-container">
    <button id="save-button">➕</button>
    <input id="search-input" placeholder="请输入搜索条件..." list="search-list">
    <button id="clear-button">❌</button>
  </div>
  <div class="search-tag-list"></div>
  <!-- 卡牌氏族选取区 -->
  <section-divider text="氏族" tooltip="鼠标中键点击 [未选中] 的按钮会单选它\n 鼠标中键点击 [选中] 的按钮会单不选它">
  </section-divider>
  <div id="clan-section" class="image-toggle-button-group">
  </div>
  <!-- 卡牌类型选取区 -->
  <section-divider text="类型" tooltip="神器和升级石会无视稀有度和费用条件筛选\n鼠标中键点击 [未选中] 的按钮会单选它\n 鼠标中键点击 [选中] 的按钮会单不选它"></section-divider>
  <div id="type-section" class="image-toggle-button-group">
  </div>
  <!-- 卡牌稀有度选取区 -->
  <section-divider text="稀有度" tooltip="神器和升级石会无视稀有度筛选\n鼠标中键点击 [未选中] 的按钮会单选它\n 鼠标中键点击 [选中] 的按钮会单不选它"></section-divider>
  <div id="rarity-section" class="image-toggle-button-group">
  </div>
  <!-- 卡牌费用选取区 -->
  <section-divider text="费用" tooltip="神器和升级石会无视费用筛选\n鼠标中键点击 [未选中] 的按钮会单选它\n 鼠标中键点击 [选中] 的按钮会单不选它"></section-divider>
  <div id="cost-section" class="image-toggle-button-group">
  </div>
  <!-- 标签选取区 -->
  <section-divider text="词条" tooltip="游戏内的词条被分为了以下几个组\n点击组名展开\n点击词条标签可以快速搜索"></section-divider>
  <div id="tag-section" class="tag-accordion-container">
  </div>`;

/** @typedef {HTMLDetailsElement & { text: string }} AccordionDetail */
/** @typedef {(query: Query| string)=>undefined} OnTagClickedCallback */
/** @typedef {(currentTagGroup: string)=>undefined} OnTagGroupOpenCallback */

export class SearchPanel extends HTMLElement {
  static TAG_NAME = 'search-panel';
  static CLANS = ['无氏族', '流放者', '薪龙族', '月巫团', '地下菌团', '拉撒路联盟'
    , '狱魔', '觉者', '冥卫', '影主', '熔尸'];
  static TYPES = ['单位', '法术', '装备', '房间', '神器', '升级石', '祸患', '天灾'];
  static RARITIES = ['勇者', '普通', '高级', '稀有'];
  static RESET_QUERY_NAME = '[重置]';
  /**@type{Query}*/
  static RESET_QUERY = {
    "text": '',
    "clan": SearchPanel.CLANS,
    "type": SearchPanel.TYPES,
    "rarity": SearchPanel.RARITIES,
    "cost": MT_DATA.costs,
  };

  //-----------------------------------------------------------------------
  //                   私有变量
  //-----------------------------------------------------------------------
  #currentTagGroup = '';
  /**@type{OnTagClickedCallback?}*/
  #onTagClicked = undefined;
  /**@type{OnTagGroupOpenCallback?}*/
  #onTagGroupChanged = undefined;

  constructor() {
    super();

    const content = template.content.cloneNode(true);
    this.appendChild(content);

    /** @type{HTMLButtonElement} */
    this.saveButton = this.querySelector('#save-button');
    /** @type{HTMLButtonElement} */
    this.clearButton = this.querySelector('#clear-button');
    /** @type{HTMLInputElement} */
    this.searchInput = this.querySelector("#search-input");
    /** @type{HTMLDivElement} */
    this.searchTagList = this.querySelector(".search-tag-list");
    /** @type{HTMLDivElement} */
    this.tagSection = this.querySelector("#tag-section");

    this.#createToggleButtons();
    this.#createTermTags();
    this.tagClickCallbacks = new Map();
    this.onQueryTagAdded = null;
    this.onQueryTagRemoved = null;
  }

  //-----------------------------------------------------------------------
  //                   私有函数
  //-----------------------------------------------------------------------
  #createToggleButtons() {
    /** @type {ImageToggleButton[]} */
    this.toggleButtons = [];

    // <image-toggle-button src="image/other/流放者.webp" condition="clan:流放者" tip="流放者">
    // </image-toggle-button>
    /** @type {HTMLDivElement} */
    const clanSection = this.querySelector('#clan-section');
    SearchPanel.CLANS.forEach(clan => {
      const button = ImageToggleButton.create();
      button.setAttribute('src', `image/other/${clan}.webp`);
      button.setAttribute('condition', `clan:${clan}`);
      button.setAttribute('tip', clan);
      clanSection.appendChild(button);
      this.toggleButtons.push(button);
    })
    // <image-toggle-button src="image/other/单位.webp" condition="type:单位" tip="单位" size="42x48">
    // </image-toggle-button>
    const typeSection = this.querySelector('#type-section');
    SearchPanel.TYPES.forEach(type => {
      const button = ImageToggleButton.create();
      button.setAttribute('src', `image/other/${type}.webp`);
      button.setAttribute('condition', `type:${type}`);
      button.setAttribute('tip', type);
      button.setAttribute('size', '42x48');
      typeSection.appendChild(button);
      this.toggleButtons.push(button);
    })
    // <image-toggle-button src="image/other/勇者.webp" condition="rarity:勇者" tip="勇者"
    //  size="42x42"></image-toggle-button>
    const raritySection = this.querySelector('#rarity-section');
    SearchPanel.RARITIES.forEach(rarity => {
      const button = ImageToggleButton.create();
      button.setAttribute('src', `image/other/${rarity}.webp`);
      button.setAttribute('condition', `rarity:${rarity}`);
      button.setAttribute('tip', rarity);
      button.setAttribute('size', '42x42');
      raritySection.appendChild(button);
      this.toggleButtons.push(button);
    })
    // <image-toggle-button src="" text="0" condition="cost:0" tip="0" size="42x42">
    // </image-toggle-button>
    const costSection = this.querySelector('#cost-section');
    MT_DATA.costs.forEach(cost => {
      const button = ImageToggleButton.create();
      button.setAttribute('condition', `cost:${cost}`);
      button.setAttribute('text', cost);
      button.setAttribute('tip', cost);
      button.setAttribute('size', '42x42');
      costSection.appendChild(button);
      this.toggleButtons.push(button);
    })
  }
  /**
   * 从所有数据中检索出的词条
   * 用来生成快速标签
   * 
   * 标签根据类别分组, 使用比较新的 Web 标准 Exclusive Accordion 来实现
   */
  #createTermTags() {
    const groupedTerms = MT_DATA.groupedTerms;
    const fragment = document.createDocumentFragment();
    groupedTerms.forEach((terms, term_type) => {
      if (term_type == '能力' || term_type == '召唤单位') {
        return;
      }
      const detail = /**@type{AccordionDetail}*/(document.createElement('details'));
      detail.setAttribute('name', 'tag-group');
      if (term_type == this.#currentTagGroup) {
        detail.toggleAttribute('open');
      }
      detail.text = term_type;
      const title = document.createElement('summary');
      title.textContent = term_type;
      const content = document.createElement('div');
      content.classList.add('accordion-content');
      terms.forEach(term => {
        content.appendChild(this.#createTag(term));
      })
      detail.appendChild(title);
      detail.appendChild(content);
      detail.addEventListener('toggle', (e) => {
        const det = /**@type{AccordionDetail?}*/(e.target);
        if (!det || det.tagName != 'DETAILS' || !det.open) {
          return;
        }
        this.#currentTagGroup = det.text;
        if (this.#onTagGroupChanged) {
          this.#onTagGroupChanged(det.text);
        }
      });
      fragment.appendChild(detail);
    });
    this.tagSection.appendChild(fragment);
  }
  /**
     * 
     * @param {string | Query} textOrQuery 
     * @param {boolean} closable 
     * @returns {SearchTag}
     */
  #createTag(textOrQuery, closable = false) {
    const tag = /** @type { SearchTag } */ (SearchTag.create(closable));
    if (typeof textOrQuery == 'string') {
      tag.text = textOrQuery;
    } else {
      tag.query = textOrQuery;
    }
    tag.closable = closable;

    const callback = () => {
      this.#onTagClicked(tag.query || tag.text);
    };
    tag.addEventListener('click', callback);
    tag.clickCallback = callback;

    if (closable) {
      const clearCallback = () => {
        this.removeSearchTag(tag);
      }
      tag.clearButton.addEventListener('click', clearCallback);
      tag.clearCallback = clearCallback;
    }
    return tag;
  }
  //-----------------------------------------------------------------------
  //                   getter / setter
  //-----------------------------------------------------------------------
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
   * @param {OnTagClickedCallback?} callback 
   */
  set onTagClicked(callback) {
    this.#onTagClicked = callback;
  }
  /**
   * @param {OnTagGroupOpenCallback?} callback
   */
  set onTagGroupChanged(callback) {
    this.#onTagGroupChanged = callback;
  }
  //-----------------------------------------------------------------------
  //                   public 函数
  //-----------------------------------------------------------------------
  /**
   * 
   * @param {Query} query 
   * @param {boolean} closable
   * 
   * @returns {SearchTag}
   */
  addQueryTag(query, closable) {
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
      tag = this.#createTag(query, closable);
      tag.text = query.text || "(空)";
    }
    // 即使它是原有的元素, insert 操作依然会把它从旧的位置移除并插入到第一个位置
    list.insertBefore(tag, list.firstElementChild);
    if (isNew && list.childNodes.length > MAX_TAG_COUNT) {
      list.removeChild(list.lastElementChild);
    }
    if (this.onQueryTagAdded) {
      this.onQueryTagAdded(tag);
    }
    return tag;
  }
  /**
   * 
   * @returns {SearchTag[]}
   */
  getSavedQueryTags() {
    const list =  /**@type{NodeListOf<SearchTag>}*/(this.searchTagList.querySelectorAll(SearchTag.TAG_NAME));
    const savedTags = /**@type{SearchTag[]}*/([]);
    list.forEach((tag) => {
      if (!tag || tag.text == SearchPanel.RESET_QUERY_NAME) { return; }
      savedTags.push(tag);
    });
    return savedTags;
  }
  /**
   * 
   * @returns {SearchTag}
   */
  addResetTag() {
    const tag = this.addQueryTag(SearchPanel.RESET_QUERY, false);
    tag.text = SearchPanel.RESET_QUERY_NAME;
    return tag
  }
  /**
   * 删除搜索标签并清理资源
   * 
   * @param {SearchTag} tag 
   */
  removeSearchTag(tag) {
    const query = tag.query;
    if (query && this.onQueryTagRemoved) {
      this.onQueryTagRemoved(tag);
    }
    tag.removeEventListener('click', tag.clickCallback);
    tag.clearButton.removeEventListener('click', tag.clearCallback);
    tag.parentElement.removeChild(tag);
  }
  /**
   * 
   * @param {string} tagGroup 
   */
  setCurrentTagGroup(tagGroup) {
    this.#currentTagGroup = tagGroup;
    const details = /**@type{NodeListOf<AccordionDetail>}*/(this.tagSection.querySelectorAll('details'));
    details.forEach((d) => {
      if (d.text == tagGroup && !d.open) {
        d.open = true;
      }
    });
  }

  /**
   * 根据搜索条件设置各个面板上控件的状态
   * 
   * @param {Query | string} query 
   */
  setQuery(query) {
    if (typeof query == 'string') {
      this.searchInput.value = query;
      return;
    }
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