# Notes

## 在 Custom Element 中使用 HTML Template

在 HTML 中编写 Custom Element 时，使用 `<template>` 标签是一种非常高效且推荐的方式来定义其结构和样式。`<template>` 元素中的内容在页面加载时不会被渲染，只有当它被激活（例如通过 JavaScript）时才会被解析和显示。这使得它非常适合作为 Custom Element 的“蓝图”。

下面是如何在 Custom Element 中使用 HTML template 的详细步骤和示例：

### 1\. 定义 `<template>` 标签

首先，在您的 HTML 文件中定义一个 `<template>` 标签，其中包含您 Custom Element 的内部结构。通常，会给 `<template>` 一个 `id`，以便稍后在 JavaScript 中引用它。

```html
<template id="my-custom-element-template">
  <style>
    /* Custom Element 的内部样式 */
    :host {
      display: block; /* 默认情况下，自定义元素是 inline 的，通常需要设为 block */
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
    }
    h3 {
      color: #336699;
    }
    p {
      font-size: 0.9em;
      color: #666;
    }
  </style>
  <div>
    <h3><slot name="title">默认标题</slot></h3>
    <p><slot name="content">这是自定义元素的内容。</slot></p>
    <button id="myButton">点击我</button>
  </div>
</template>
```

在上面的示例中：

* `<style>` 标签定义了 Custom Element 的**局部样式**。`:host` 选择器用于选择 Custom Element 本身。
* `<slot>` 元素是 Shadow DOM 的一个强大特性，它允许您从外部插入内容到 Custom Element 的指定位置。带有 `name` 属性的 `<slot>` 称为**具名插槽**。

### 2\. 定义 Custom Element 类

接下来，在 JavaScript 中定义 Custom Element 的类。这个类需要继承 `HTMLElement`。

```javascript
class MyCustomElement extends HTMLElement {
  constructor() {
    super(); // 必须调用 super()

    // 创建 Shadow DOM
    const shadowRoot = this.attachShadow({ mode: 'open' }); // mode: 'open' 表示可以通过 JavaScript 访问 Shadow DOM

    // 获取 template 内容
    const template = document.getElementById('my-custom-element-template');
    if (template) {
      // 复制 template 的内容并添加到 Shadow DOM
      const content = template.content.cloneNode(true);
      shadowRoot.appendChild(content);

      // 获取按钮并添加事件监听器
      const button = shadowRoot.querySelector('#myButton');
      if (button) {
        button.addEventListener('click', () => {
          alert('Custom Element 按钮被点击了!');
        });
      }
    } else {
      console.error('Template with ID "my-custom-element-template" not found.');
    }
  }

  // 可选：定义生命周期回调函数
  connectedCallback() {
    console.log('MyCustomElement 已连接到文档。');
  }

  disconnectedCallback() {
    console.log('MyCustomElement 已从文档断开。');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`属性 ${name} 从 ${oldValue} 变为 ${newValue}。`);
  }

  static get observedAttributes() {
    return ['some-attribute']; // 监听的属性
  }
}
```

在 `constructor` 中：

* `this.attachShadow({ mode: 'open' })` 创建了一个**影子根 (Shadow Root)**。Shadow DOM 提供了样式和 DOM 的封装，这意味着 Custom Element 的内部样式不会泄露到外部，外部样式也不会轻易影响到内部。
* `document.getElementById('my-custom-element-template')` 获取了之前定义的 `<template>` 元素。
* `template.content.cloneNode(true)` 是关键一步。`template.content` 返回一个 `DocumentFragment`，它包含了 `<template>` 内部的所有节点。`cloneNode(true)` 确保了所有子节点也被深度复制。
* `shadowRoot.appendChild(content)` 将复制的内容添加到 Shadow DOM 中。

### 3\. 注册 Custom Element

最后，使用 `customElements.define()` 方法注册您的 Custom Element。

```javascript
customElements.define('my-custom-element', MyCustomElement);
```

第一个参数是您希望在 HTML 中使用的标签名（必须包含连字符 `-`）。第二个参数是您定义的 Custom Element 类。

### 4\. 使用 Custom Element

现在，您可以在 HTML 中像使用任何其他 HTML 标签一样使用您的 Custom Element 了：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Custom Element With Template</title>
</head>
<body>

  <h1>使用 Custom Element</h1>

  <template id="my-custom-element-template">
    <style>
      :host {
        display: block;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
      }
      h3 {
        color: #336699;
      }
      p {
        font-size: 0.9em;
        color: #666;
      }
      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 10px;
      }
      button:hover {
        background-color: #0056b3;
      }
    </style>
    <div>
      <h3><slot name="title">默认标题</slot></h3>
      <p><slot name="content">这是自定义元素的内容。</slot></p>
      <button id="myButton">点击我</button>
    </div>
  </template>

  <script>
    class MyCustomElement extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.getElementById('my-custom-element-template');
        if (template) {
          const content = template.content.cloneNode(true);
          shadowRoot.appendChild(content);

          const button = shadowRoot.querySelector('#myButton');
          if (button) {
            button.addEventListener('click', () => {
              alert('Custom Element 按钮被点击了!');
            });
          }
        } else {
          console.error('Template with ID "my-custom-element-template" not found.');
        }
      }

      connectedCallback() {
        console.log('MyCustomElement 已连接到文档。');
      }

      disconnectedCallback() {
        console.log('MyCustomElement 已从文档断开。');
      }
    }
    customElements.define('my-custom-element', MyCustomElement);
  </script>

  <my-custom-element>
    <span slot="title">我的第一个自定义组件</span>
    <p slot="content">这是一个通过 Custom Element 和 HTML template 构建的组件示例。它展示了如何使用插槽来灵活地插入内容。</p>
  </my-custom-element>

  <my-custom-element>
    <span slot="title">另一个组件实例</span>
    <p slot="content">您可以使用相同的自定义元素多次，每次都可以插入不同的内容。</p>
  </my-custom-element>

</body>
</html>
```

### 总结使用 HTML Template 的优势

* **性能优化**：浏览器不会渲染 `<template>` 元素中的内容，直到您明确地将其添加到 DOM 中。这对于构建复杂的 Custom Element 尤其有用，因为它可以减少初始页面加载时间。
* **封装性**：当与 Shadow DOM 结合使用时，`<template>` 提供了一种强大的封装机制。模板内部的样式和 DOM 结构不会与外部文档冲突，也不会被外部样式影响，从而创建出真正独立的组件。
* **可重用性**：您可以定义一次 `<template>`，然后在多个 Custom Element 实例中重复使用它的内容，或者在不同的 Custom Element 中使用不同的 `<template>`。
* **可维护性**：将 Custom Element 的结构和样式定义在一个地方（HTML 中的 `<template>`），可以提高代码的可读性和可维护性。
* **更容易编写**：在 HTML 中编写 DOM 结构通常比在 JavaScript 中通过 `document.createElement()` 创建元素更直观。

使用 `<template>` 是编写健壮、可维护和高性能 Custom Element 的最佳实践之一。

-----

## HTML 的元素可以设置 Tooltip 吗？

是的，HTML元素可以很容易地设置 **tooltip（工具提示）**。最常用的方法是使用 **`title` 属性**。

-----

### 使用 `title` 属性

`title` 属性是一个全局属性，这意味着它可以应用于几乎所有的 HTML 元素，包括 `<button>`。当用户将鼠标悬停在带有 `title` 属性的元素上时，浏览器会自动显示 `title` 属性的值作为一个小型的文本提示框。

**示例：**

```html
<button title="点击这里执行操作">我的按钮</button>
```

在这个例子中，当鼠标指针停留在“我的按钮”上时，会弹出一个显示“点击这里执行操作”的 tooltip。

-----

### `title` 属性的特点

* **浏览器原生支持：** 这是最简单、兼容性最好的方法，不需要任何 JavaScript 或 CSS。
* **外观受限：** 浏览器显示的 tooltip 外观是默认的，通常是简单的黑色背景白色文字，且无法通过 CSS 直接自定义其样式。
* **只支持文本：** `title` 属性的值只能是纯文本，不能包含 HTML 标签或复杂的样式。
* **无障碍性：** `title` 属性的 tooltip 通常不能通过键盘操作（如 Tab 键）触发，这在无障碍性方面有所欠缺。对于需要考虑无障碍性的场景，应考虑其他方法。

-----

### 其他设置 Tooltip 的方法（更高级，可自定义）

如果你需要更复杂的 tooltip，例如自定义样式、包含 HTML 内容、或者需要通过键盘操作触发，你可以使用以下方法：

1. **CSS 伪元素（`:before`/`:after`）结合 `data-*` 属性：** 这种方法利用 CSS 来创建和定位 tooltip，并使用 `data-*` 属性存储 tooltip 的内容。

    ```html
    <button class="custom-tooltip" data-tooltip="这是一个自定义的提示信息">悬停我</button>

    <style>
    .custom-tooltip {
      position: relative;
      /* 其他按钮样式 */
    }

    .custom-tooltip::before {
      content: attr(data-tooltip); /* 从 data-tooltip 属性获取内容 */
      position: absolute;
      bottom: 120%; /* 放在按钮上方 */
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: white;
      padding: 5px 8px;
      border-radius: 4px;
      white-space: nowrap; /* 防止文本换行 */
      opacity: 0; /* 默认隐藏 */
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
      z-index: 1000;
    }

    .custom-tooltip:hover::before {
      opacity: 1; /* 鼠标悬停时显示 */
      visibility: visible;
    }

    /* 可选：添加一个小箭头 */
    .custom-tooltip::after {
        content: '';
        position: absolute;
        bottom: 100%; /* 箭头位置 */
        left: 50%;
        transform: translateX(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: #333 transparent transparent transparent;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 1000;
    }
    .custom-tooltip:hover::after {
        opacity: 1;
        visibility: visible;
    }
    </style>
    ```

2. **JavaScript 库或框架：** 许多前端库和框架（如 Bootstrap, Materialize CSS, Ant Design 等）都提供了功能强大的 tooltip 组件，它们通常支持更多的自定义选项、动画效果和更好的无障碍性。

3. **自定义 JavaScript：** 你也可以完全通过 JavaScript 来创建和管理 tooltip，这允许你实现任何你想要的功能和交互。

**总结：**

对于简单的文本提示，**`title` 属性是 `<button>` 元素设置 tooltip 最直接和有效的方式**。如果你需要更丰富的交互和自定义外观，则应考虑使用 CSS 伪元素或 JavaScript 解决方案
