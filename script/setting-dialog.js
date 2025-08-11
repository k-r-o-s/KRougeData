const template = document.createElement('template');
template.innerHTML = `
    <section-divider text="主题" tooltip="切换主题风格"></section-divider>
    <div class="setting__container-theme-sel">
      <div data-value="banished" class="setting__button-theme btn-theme-banished">流放者</div>
      <div data-value="pyreborne" class="setting__button-theme btn-theme-pyreborne">薪龙族</div>
      <div data-value="lunacoven" class="setting__button-theme btn-theme-lunacoven">月巫团</div>
      <div data-value="underlegion" class="setting__button-theme btn-theme-underlegion theme-selected">地下菌团</div>
      <div data-value="lazarusleague" class="setting__button-theme btn-theme-lazarusleague">拉撒路</div>
      <div data-value="hellhorned" class="setting__button-theme btn-theme-hellhorned theme-disabled">狱魔</div>
      <div data-value="awoken" class="setting__button-theme btn-theme-awoken theme-disabled">觉者</div>
      <div data-value="stygainguard" class="setting__button-theme btn-theme-stygainguard theme-disabled">冥卫</div>
      <div data-value="umbra" class="setting__button-theme btn-theme-umbra theme-disabled">影主</div>
      <div data-value="meltingremnant" class="setting__button-theme btn-theme-meltingremnant theme-disabled">熔尸</div>
    </div>
    <section-divider text="文字" tooltip="设置文字规格"></section-divider>
    <div class="setting__container-font-sel">
      <div>
        <label for="setting__opt-small-font">
          <input type="radio" name="setting__font-size" value="small" id="setting__opt-small-font" />
          小</label>
      </div>
      <div>
        <label for="setting__opt-medium-font">
        <input type="radio" name="setting__font-size" value="medium" id="setting__opt-medium-font" checked />
        中</label>
      </div>
      <div>
        <label for="setting__opt-large-font">
        <input type="radio" name="setting__font-size" value="large" id="setting__opt-large-font" />
        大</label>
      </div>
    </div>
`;

export class SettingDialogContent extends HTMLElement {
  static TAG_NAME = 'setting-dialog-content';
  static CLASS_FONT_SIZE_PREFIX = 'root__font-size-';
  static CLASS_THEME_PREFIX = 'root__theme-';
  static THEME_SELECTED_CLASS = 'theme-selected';

  #currentFontSize = '';
  #currentTheme = '';

  constructor() {
    // 必须调用 super()
    super();

    // 创建 Shadow DOM
    // const shadowRoot = this.attachShadow({ mode: 'open' });

    // 创建 link 元素并添加到 shadowRoot
    // let linkElem;
    // linkElem = createCssLink('/proto/setting-dialog/style.css');
    // shadowRoot.appendChild(linkElem);

    // 复制 template 的内容并添加到 Shadow DOM
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    this.onThemeChanged = null;
    this.onFontSizeChanged = null;
  }
  // 可选：定义生命周期回调函数
  connectedCallback() {
    this.themeSelDiv = this.querySelector('.setting__container-theme-sel');
    this.fontSelDiv = this.querySelector('.setting__container-font-sel');
    this.themeButtons = /**@type{NodeListOf<HTMLDivElement>}*/
      (this.querySelectorAll('.setting__button-theme'));
    this.fontSizeButtons = /**@type{NodeListOf<HTMLInputElement>}*/
      (this.querySelectorAll('input[name="setting__font-size"]'));

    const root = document.getElementsByTagName('html')[0];
    root.classList.forEach(cls => {
      if (cls.startsWith(SettingDialogContent.CLASS_FONT_SIZE_PREFIX)) {
        this.#currentFontSize = cls.substring(SettingDialogContent.CLASS_FONT_SIZE_PREFIX.length);
      }
      if (cls.startsWith(SettingDialogContent.CLASS_THEME_PREFIX)) {
        this.#currentTheme = cls.substring(SettingDialogContent.CLASS_THEME_PREFIX.length);
      }
    })

    this.themeButtons.forEach(btn => {
      if (btn.classList.contains('theme-disabled')) {
        return;
      }
      btn.addEventListener('click', (event) => {
        const btn = /**@type{HTMLDivElement}*/(event.target);
        this.changeTheme(btn.dataset.value);
      })
    })

    this.fontSizeButtons.forEach(radio => {
      radio.addEventListener('change', (event) => {
        const radio = /**@type{HTMLInputElement}*/(event.target);
        this.changeFontSize(radio.value)
      });
    });
  }
  disconnectedCallback() { }
  // /**
  //  * 
  //  * @param {string} name 
  //  * @param {string} oldValue 
  //  * @param {string} newValue 
  //  */
  // attributeChangedCallback(name, oldValue, newValue) {
  //   const THEME_SELECTED_CLASS = 'theme-selected';

  //   switch (name) {
  //     case "theme":
  //       // 目前支持的主题
  //       if (['banished', 'pyreborne', 'lunacoven', 'underlegion', 'lazarusleague'].includes(newValue)) {
  //         return;
  //       }
  //       this.themeButtons.forEach(btn => {
  //         if (btn.dataset.value == newValue) {
  //           btn.classList.add(THEME_SELECTED_CLASS);
  //         } else {
  //           btn.classList.remove(THEME_SELECTED_CLASS);
  //         }
  //       })
  //       this.changeTheme(newValue);
  //       break;
  //     case "font-size":
  //       if (['small', 'medium', 'large'].includes(newValue)) {
  //         return;
  //       }
  //       this.fontSizeButtons.forEach(radio => {
  //         if (radio.value == newValue) { radio.checked = true; }
  //       })
  //       this.changeFontSize(newValue);
  //       break;
  //     default: break;
  //   }
  // }

  // /**
  //  * @param {string} value
  //  */
  // set currentFontSizeClass(value) {
  //   if (!value.startsWith(SettingDialogContent.CLASS_FONT_SIZE_PREFIX)) {
  //     console.error('无效的字体设置类名: [' + value + ']'); return;
  //   }
  //   this.setAttribute('font-size', value.substring(SettingDialogContent.CLASS_FONT_SIZE_PREFIX.length));
  // }
  // /**
  //  * @param {string} value
  //  */
  // set currentThemeClass(value) {
  //   if (!value.startsWith(SettingDialogContent.CLASS_THEME_PREFIX)) {
  //     console.error('无效的主题设置类名: [' + value + ']'); return;
  //   }
  //   this.setAttribute('theme', value.substring(SettingDialogContent.CLASS_THEME_PREFIX.length));
  // }
  /**
   * 通过切换 class 的方式应用字体设置
   * 所有字体单位都使用了 rem,
   * 所以当根元素字号变化时, 全页面字号都会相应变化
   * 
   * @param {string} fontSize 
   */
  changeFontSize(fontSize) {
    if (this.#currentFontSize == fontSize) { return; }

    const newClass = SettingDialogContent.CLASS_FONT_SIZE_PREFIX + fontSize;
    const root = document.getElementsByTagName('html')[0];
    if (this.#currentFontSize) {
      root.classList.replace(SettingDialogContent.CLASS_FONT_SIZE_PREFIX + this.#currentFontSize, newClass);
    } else {
      root.classList.add(newClass);
    }
    this.#currentFontSize = fontSize;
    if (this.onFontSizeChanged) {
      this.onFontSizeChanged(fontSize);
    }
    this.fontSizeButtons.forEach(radio => {
      if (radio.value == fontSize) { radio.checked = true; }
    })
  }
  /**
   * 通过切换 class 的方式应用主题
   * 
   * @param {string} themeName 
   */
  changeTheme(themeName) {
    if (this.#currentTheme == themeName) { return; }
    const newClass = SettingDialogContent.CLASS_THEME_PREFIX + themeName;
    const root = document.getElementsByTagName('html')[0];
    if (this.#currentTheme) {
      root.classList.replace(SettingDialogContent.CLASS_THEME_PREFIX + this.#currentTheme, newClass);
    } else {
      root.classList.add(newClass);
    }

    this.#currentTheme = themeName;
    this.themeButtons.forEach(btn => {
      if (btn.dataset.value == themeName) {
        btn.classList.add(SettingDialogContent.THEME_SELECTED_CLASS);
      } else {
        btn.classList.remove(SettingDialogContent.THEME_SELECTED_CLASS);
      }
    })
    if (this.onThemeChanged) {
      this.onThemeChanged(themeName);
    }
  }
}

customElements.define(SettingDialogContent.TAG_NAME, SettingDialogContent);