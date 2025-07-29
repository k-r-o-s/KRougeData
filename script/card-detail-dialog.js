import { createCssLink } from './util.js';

const template = document.createElement('template');
template.innerHTML = `
    <p class="card-title">
      <span class="inline-image-wrapper">
        <img src="">
      </span><span class="title-text"></span>
    </p>
    <div class="card-basic-info">
      <item-card id="card" src="../../image/cards/不朽交易.webp" class=""></item-card>
      <div class="card-terms"></div>
    </div>
    <hr id="champion-paths-hr">
    <div class="champion-paths">
      <div class="tabs-container">
        <input type="radio" id="tab1" name="tab-group">
        <label id="tab1-label" for="tab1">强力食品</label>

        <input type="radio" id="tab2" name="tab-group">
        <label id="tab2-label" for="tab2">耐吃的零食</label>

        <input type="radio" id="tab3" name="tab-group" checked>
        <label id="tab3-label" for="tab3">超级食品</label>
        <div class="tab-content">
          <item-card src=""></item-card>
          <item-card src=""></item-card>
          <item-card src=""></item-card>
        </div>
      </div>
    </div>
    <hr>
    <div class="card-notes"></div>`;

export class CardDetails extends HTMLElement {

  static TAG_NAME = 'card-details';

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    let linkElem;

    linkElem = createCssLink('../css/default.css');
    this.shadowRoot.appendChild(linkElem);

    linkElem = createCssLink('../proto/item-card/style.css');
    this.shadowRoot.appendChild(linkElem);

    linkElem = createCssLink('../proto/img-in-text/style.css');
    this.shadowRoot.appendChild(linkElem);

    linkElem = createCssLink('../proto/card-detail-dialog/style.css');
    this.shadowRoot.appendChild(linkElem);

    linkElem = document.createElement('style');
    linkElem.textContent = `
      .card-title {
        width: 100%;
        background-color: var(--krs-main-bgcolor-dark);
        color: white;
        font-weight: bold;
        font-size: 18px;
        padding: 4px;
      }
      .card-title img {
        width: 70px;
        height: auto;
      }
      .inline-image-wrapper {
        width: 4em;
      }
    `;
    this.shadowRoot.appendChild(linkElem);


    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    shadowRoot.appendChild(content);

    ['tab1', 'tab2', 'tab3'].forEach(id => {
      const radio = shadowRoot.querySelector('#' + id);
      radio.addEventListener('change', () => {
        this.#onTabSelected(id);
      });
    });
  }

  // 生命周期回调函数
  connectedCallback() {
  }

  disconnectedCallback() {
    // console.log('CardDetails 已从文档断开。');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      default:
        console.error("unsupported attribute type: [" + name + "]");
    }
  }
  static get observedAttributes() {
    return [];
  }

  set item(value) {
    this._item = value;
    const title = this.shadowRoot.querySelector('.card-title');
    title.querySelector(".title-text").textContent = value['english-name'];
    const titleIcon = title.querySelector('img');
    titleIcon.setAttribute("src", "image/other/" + value.type + ".webp");

    const card = this.shadowRoot.querySelector('#card');
    card.item = value;
    switch (value.type) {
      case "神器":
        card.setAttribute("src", "/image/artifacts/" + value.name + ".webp");
        break;
      case "升级石":
        card.setAttribute("src", "/image/other/" + value.name + ".webp");
        break;
      default:
        card.setAttribute("src", "/image/cards/" + value.name + ".webp");
        break;
    }

    const cardTermDiv = this.shadowRoot.querySelector('.card-terms');
    cardTermDiv.innerHTML = card.termsHtml;

    const championPathDiv = this.shadowRoot.querySelector('.champion-paths');
    const championPathHr = this.shadowRoot.querySelector('#champion-paths-hr');
    if (value.paths) {
      championPathDiv.style.display = 'flex';
      championPathHr.style.display = 'block';

      for (let i = 0; i < value.paths.length; i++) {
        this.shadowRoot.querySelector("#tab" + (i + 1) + "-label").textContent = value.paths[i].name;
        this.shadowRoot.querySelector('#tab1').checked = true;
        this.#onTabSelected('tab1');
      }
    } else {
      championPathDiv.style.display = 'none';
      championPathHr.style.display = 'none';
    }
  }
  #onTabSelected(id) {
    if (!this._item || !this._item.paths) { return; }
    const championPathDiv = this.shadowRoot.querySelector('.champion-paths');
    const championPathHr = this.shadowRoot.querySelector('#champion-paths-hr');
    championPathDiv.style.display = 'flex';
    championPathHr.style.display = 'block';

    const seq = parseInt(id[3]) - 1;
    if (isNaN(seq) || typeof seq == 'undefined' || seq < 0) { return; }
    let imgSrc = this._item.name + "-" + this._item.paths[seq].name;
    const images = this.shadowRoot.querySelector('.tab-content').querySelectorAll('item-card');
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute('src', `/image/paths/${imgSrc + (i + 1)}.webp`);
    }
  }
}

customElements.define(CardDetails.TAG_NAME, CardDetails);