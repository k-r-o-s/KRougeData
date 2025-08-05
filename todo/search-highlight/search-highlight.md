# CSS Custom Highlight API 的使用方法

-----

来详细说说 **CSS Custom Highlight API** 的使用方法。这个 API 的核心思想是让你用 JavaScript 告诉浏览器页面的哪些文本范围需要高亮，然后用 CSS 来定义这些高亮如何显示。整个过程不会修改 DOM，非常高效。

## CSS Custom Highlight API 的使用步骤

使用 Custom Highlight API 主要涉及以下几个步骤：

1. **准备高亮范围（JavaScript）**
2. **创建 Highlight 对象并添加范围（JavaScript）**
3. **注册 Highlight 对象（JavaScript）**
4. **定义高亮样式（CSS）**
5. **清除高亮（JavaScript，当需要时）**

-----

### 1\. 准备高亮范围（JavaScript）

首先，你需要确定要高亮的文本在文档中的具体位置。这个位置是通过 **`StaticRange`** 对象来描述的。一个 `StaticRange` 对象代表文档中一个连续的文本范围，它不依赖于 DOM 结构的变化。

通常，你会通过以下方式获取这些范围：

* **搜索文本：** 这是最常见的场景。你会遍历文档的文本内容，找到所有匹配搜索词的位置，然后为每个匹配创建一个 `StaticRange`。
* **用户选择：** 用户通过鼠标选择文本时，你可以通过 `window.getSelection().getRangeAt(0)` 获取一个 `Range` 对象，然后将其转换为 `StaticRange`。

**示例：搜索文本并创建 `StaticRange`**

```javascript
function findAndCreateRanges(searchText, rootNode) {
    const ranges = [];
    // 使用 TextIterator 或简单的递归遍历找到所有文本节点
    // 这里为了简化，我们假设在一个已知文本内容中查找
    // 实际应用中会复杂得多，可能需要遍历document.body
    
    // 假设我们只在一个特定的div中搜索
    const targetElement = rootNode || document.body;
    const walker = document.createTreeWalker(
        targetElement,
        NodeFilter.SHOW_TEXT,
        null, // No filter function needed for SHOW_TEXT
        false
    );

    let node;
    while ((node = walker.nextNode())) {
        const textContent = node.textContent;
        let startIndex = 0;

        while ((startIndex = textContent.indexOf(searchText, startIndex)) !== -1) {
            const endIndex = startIndex + searchText.length;
            const range = new StaticRange({
                startContainer: node,
                startOffset: startIndex,
                endContainer: node,
                endOffset: endIndex
            });
            ranges.push(range);
            startIndex = endIndex; // Move to the end of the current match
        }
    }
    return ranges;
}
```

**注意**：上面 `findAndCreateRanges` 函数是一个简化的示例。在实际应用中，遍历整个文档并准确找到所有文本匹配项会更复杂，你可能需要一个更 robust 的文本节点遍历和匹配算法。

-----

### 2\. 创建 Highlight 对象并添加范围（JavaScript）

一旦你有了 `StaticRange` 对象的集合，你需要将它们添加到 **`Highlight`** 对象中。一个 `Highlight` 对象可以包含一个或多个 `StaticRange`。

```javascript
// 假设 findAndCreateRanges 已经返回了所有匹配的范围
const searchRanges = findAndCreateRanges("highlight", document.body);

// 创建一个新的 Highlight 对象
const searchHighlight = new Highlight(...searchRanges);
// 或者也可以先创建空 Highlight 对象，再通过 add() 添加
// const searchHighlight = new Highlight();
// searchRanges.forEach(range => searchHighlight.add(range));
```

-----

### 3\. 注册 Highlight 对象（JavaScript）

接下来，你需要将创建的 `Highlight` 对象注册到浏览器中。这通过 **`CSS.highlights`** 全局对象来完成。`CSS.highlights` 是一个 `HighlightRegistry` 对象，它允许你通过一个唯一的名称来管理多个高亮集合。

```javascript
// 将我们的 Highlight 对象注册到 'search-results' 这个名称下
// 如果之前有同名的高亮，会被新的替换
CSS.highlights.set('search-results', searchHighlight);
```

**`'search-results'`** 就是你给这个高亮集合起的名字，之后会在 CSS 中引用它。

-----

### 4\. 定义高亮样式（CSS）

现在，你可以在 CSS 中为之前注册的高亮集合定义样式了。这通过一个新的 **`::highlight()` 伪元素** 来完成。伪元素接受你注册时使用的名称作为参数。

```css
/* 为名为 'search-results' 的高亮定义样式 */
::highlight(search-results) {
    background-color: yellow; /* 醒目的黄色背景 */
    color: black;            /* 黑色文本，确保对比度 */
    font-weight: bold;       /* 加粗 */
    border-radius: 3px;      /* 稍微圆角 */
    /* 你还可以使用其他文本相关的 CSS 属性，如 text-decoration, outline 等 */
}

/* 你也可以定义多个高亮名称，并分别设置样式 */
/* ::highlight(misspellings) {
    text-decoration: underline wavy red;
} */
```

-----

### 5\. 清除高亮（JavaScript，当需要时）

当搜索词改变，或者用户清除搜索时，你需要移除之前的高亮。这非常简单，只需从 `CSS.highlights` 中删除对应的名称即可：

```javascript
// 移除名为 'search-results' 的高亮
CSS.highlights.delete('search-results');
// 或者，如果你只是想清空集合但保留名称，可以这样做：
// CSS.highlights.set('search-results', new Highlight());
```

-----

## 完整示例（简化的搜索高亮）

让我们把这些片段组合起来，实现一个简单的搜索高亮功能：

**HTML:**

```html
<style>
    body {
        font-family: sans-serif;
        line-height: 1.6;
        padding: 20px;
    }
    ::highlight(search-results) {
        background-color: yellow;
        color: black;
        font-weight: bold;
        border-radius: 3px;
        padding: 1px 0; /* 让高亮更美观一点 */
    }
</style>

<input type="text" id="searchInput" placeholder="请输入搜索词">
<button id="searchButton">搜索</button>
<button id="clearButton">清除高亮</button>

<div id="content">
    <p>CSS Custom Highlight API 是一个强大的工具。它允许开发者以声明式的方式高亮页面上的任意文本范围，而无需修改 DOM 结构。这个 API 对于实现搜索高亮、语法高亮、拼写检查等功能非常有用。</p>
    <p>了解如何使用这个 API 可以大大提升网页的性能和用户体验。它的核心概念包括 Highlight 对象和 ::highlight() 伪元素。</p>
    <p>希望这个示例能帮助你理解 Custom Highlight API。</p>
</div>

<script>
    // JavaScript 将放在这里
</script>
```

**JavaScript (`<script>` 标签内):**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const contentDiv = document.getElementById('content');

    function highlightSearchTerm() {
        // 1. 清除之前的高亮
        CSS.highlights.delete('search-results'); 

        const searchTerm = searchInput.value.trim();
        if (!searchTerm) {
            return; // 没有搜索词则不执行高亮
        }

        const ranges = [];
        // 2. 遍历 contentDiv 的所有文本节点并查找匹配项
        const walker = document.createTreeWalker(
            contentDiv,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while ((node = walker.nextNode())) {
            const textContent = node.textContent;
            let startIndex = 0;

            while ((startIndex = textContent.indexOf(searchTerm, startIndex)) !== -1) {
                const endIndex = startIndex + searchTerm.length;
                const range = new StaticRange({
                    startContainer: node,
                    startOffset: startIndex,
                    endContainer: node,
                    endOffset: endIndex
                });
                ranges.push(range);
                startIndex = endIndex;
            }
        }

        // 3. 创建 Highlight 对象并注册
        if (ranges.length > 0) {
            const searchHighlight = new Highlight(...ranges);
            CSS.highlights.set('search-results', searchHighlight);
        }
    }

    searchButton.addEventListener('click', highlightSearchTerm);
    searchInput.addEventListener('input', highlightSearchTerm); // 输入时也实时高亮

    clearButton.addEventListener('click', () => {
        CSS.highlights.delete('search-results');
        searchInput.value = ''; // 清空搜索框
    });
});
```

-----

**兼容性提示：**

在实际项目中，请务必检查 [Can I use...](https://https://caniuse.com/?search=Highlight) 来了解当前浏览器对 Custom Highlight API 的支持情况。对于不支持的浏览器，你可能需要考虑提供一个降级方案（例如传统的 DOM 修改方式），或者根据你的目标用户群体决定是否直接使用。

通过这个 API，你可以实现高性能、不干扰 DOM 结构的复杂文本高亮功能，极大地提升用户体验。
