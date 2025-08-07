// 全局 DEBUG 模式开关
export const __DEBUG = true;

// DEBUG 模式下打印数据
/**
 * 
 * @param {string} text 
 * @param {any} data 
 * @returns 
 */
export function __log_data(text, data) {
  if (!__DEBUG) { return; }
  console.log(text);
  console.log(data);
}
/**
 * 
 * @param {Map<string, ItemData>} items 
 * @returns 
 */
export function __check_entities(items) {
  // 匹配被中括号 [] 包括起来的文字
  const regex = /\[(.*?)\]/g;
  const entitiesNotFound = new Set();
  
  for (const [_, item] of items) {
    if (!item) { continue; }

    const text = (item.effect || "") + (item.tips || "");
    
    // 例如匹配到了 "[结算]", matchAll 返回一个所有匹配项
    // 每个匹配项类似于 ["[结算]", "结算", ...]
    const it = text.matchAll(regex)
    for (const match of it) {
      if (!items.has(match[1])) {
        entitiesNotFound.add(match[0]);
      }
    };
  }
  return Array.from(entitiesNotFound).sort();
}

/**
 * 
 * @param {string} cssUrl 
 * @returns 
 */
export function createCssLink(cssUrl) {
  const linkElem = document.createElement('link');
  linkElem.setAttribute('rel', 'stylesheet');
  const styleUrl = new URL(cssUrl, import.meta.url);
  linkElem.setAttribute('href', styleUrl.href);

  return linkElem;
}

/**
 * 创建一个防抖函数, 类似于 lodash 的同名函数
 * 
 * // 应用场景如下, 
 * // 用户在搜索输入框进行输入时, 会设置一个定时器
 * // 如果用户在设定的时间间隔内（比如 300ms）再次输入
 * // 那么上一个定时器就会被取消, 新的定时器被重新设置
 * // 只有当用户停止输入, 且定时器倒计时结束, 搜索函数才会真正执行。
 * 
 * const searchHandler = (query) => {
 *   // 执行你的搜索逻辑, 比如调用 API
 *   console.log('执行搜索:', query);
 * };
 * 
 * // 创建一个防抖过的函数, 延迟 500ms
 * const debouncedSearch = debounce(searchHandler, 500);
 * 
 * // 在输入框的事件监听器中使用
 * document.getElementById('searchInput').addEventListener('input', (event) => {
 *   debouncedSearch(event.target.value);
 * });
 * 
 * @param {function} func 
 * @param {number} delay 
 * @returns function
 */
export function debounce(func, delay) {
  /**@type{number?}*/
  let timer;
  return function(/**@type{any[]}*/...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}