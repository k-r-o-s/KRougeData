// 全局 DEBUG 模式开关
export const __DEBUG = false;

// DEBUG 模式下打印数据
export function __log_data(text, data) {
  if (!__DEBUG) { return; }
  console.log(text);
  console.log(data);
}

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

export function createCssLink(cssUrl) {
  const linkElem = document.createElement('link');
  linkElem.setAttribute('rel', 'stylesheet');
  const styleUrl = new URL(cssUrl, import.meta.url);
  linkElem.setAttribute('href', styleUrl.href);

  return linkElem;
}
