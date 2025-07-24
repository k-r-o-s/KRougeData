# Notes

## HTML

### 在 Custom Element 中使用 HTML Template

在 HTML 中编写 Custom Element 时，使用 `<template>` 标签是一种非常高效且推荐的方式来定义其结构和样式。`<template>` 元素中的内容在页面加载时不会被渲染，只有当它被激活（例如通过 JavaScript）时才会被解析和显示。这使得它非常适合作为 Custom Element 的“蓝图”。

下面是如何在 Custom Element 中使用 HTML template 的详细步骤和示例：

#### 1\. 定义 `<template>` 标签

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

#### 2\. 定义 Custom Element 类

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

#### 3\. 注册 Custom Element

最后，使用 `customElements.define()` 方法注册您的 Custom Element。

```javascript
customElements.define('my-custom-element', MyCustomElement);
```

第一个参数是您希望在 HTML 中使用的标签名（必须包含连字符 `-`）。第二个参数是您定义的 Custom Element 类。

#### 4\. 使用 Custom Element

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

#### 总结使用 HTML Template 的优势

* **性能优化**：浏览器不会渲染 `<template>` 元素中的内容，直到您明确地将其添加到 DOM 中。这对于构建复杂的 Custom Element 尤其有用，因为它可以减少初始页面加载时间。
* **封装性**：当与 Shadow DOM 结合使用时，`<template>` 提供了一种强大的封装机制。模板内部的样式和 DOM 结构不会与外部文档冲突，也不会被外部样式影响，从而创建出真正独立的组件。
* **可重用性**：您可以定义一次 `<template>`，然后在多个 Custom Element 实例中重复使用它的内容，或者在不同的 Custom Element 中使用不同的 `<template>`。
* **可维护性**：将 Custom Element 的结构和样式定义在一个地方（HTML 中的 `<template>`），可以提高代码的可读性和可维护性。
* **更容易编写**：在 HTML 中编写 DOM 结构通常比在 JavaScript 中通过 `document.createElement()` 创建元素更直观。

使用 `<template>` 是编写健壮、可维护和高性能 Custom Element 的最佳实践之一。

-----

### HTML 的元素可以设置 Tooltip 吗？

是的，HTML元素可以很容易地设置 **tooltip（工具提示）**。最常用的方法是使用 **`title` 属性**。

-----

#### 使用 `title` 属性

`title` 属性是一个全局属性，这意味着它可以应用于几乎所有的 HTML 元素，包括 `<button>`。当用户将鼠标悬停在带有 `title` 属性的元素上时，浏览器会自动显示 `title` 属性的值作为一个小型的文本提示框。

**示例：**

```html
<button title="点击这里执行操作">我的按钮</button>
```

在这个例子中，当鼠标指针停留在“我的按钮”上时，会弹出一个显示“点击这里执行操作”的 tooltip。

-----

#### `title` 属性的特点

* **浏览器原生支持：** 这是最简单、兼容性最好的方法，不需要任何 JavaScript 或 CSS。
* **外观受限：** 浏览器显示的 tooltip 外观是默认的，通常是简单的黑色背景白色文字，且无法通过 CSS 直接自定义其样式。
* **只支持文本：** `title` 属性的值只能是纯文本，不能包含 HTML 标签或复杂的样式。
* **无障碍性：** `title` 属性的 tooltip 通常不能通过键盘操作（如 Tab 键）触发，这在无障碍性方面有所欠缺。对于需要考虑无障碍性的场景，应考虑其他方法。

-----

#### 其他设置 Tooltip 的方法（更高级，可自定义）

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

HTML 中的 `<dialog>` 元素是一个非常实用的组件，用于创建弹出式对话框或模态框。它提供了一种语义化的方式来展示临时内容，例如警告、确认消息或表单。

-----

### 如何显示 `<dialog>`

`<dialog>` 元素默认是隐藏的，你需要使用 JavaScript 来控制它的显示。主要有两种显示方式：

#### 1\. `dialog.show()`：非模态（non-modal）显示

使用 `show()` 方法会显示对话框，但它不会阻止用户与对话框之外的内容进行交互。这意味着用户仍然可以点击、滚动或选择对话框后面的页面元素。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>非模态对话框</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        dialog {
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>

    <h1>我的页面内容</h1>
    <p>这里有一些主要的页面内容，当非模态对话框显示时，你仍然可以与这些内容交互。</p>

    <button id="showNonModalBtn">显示非模态对话框</button>

    <dialog id="myNonModalDialog">
        <h2>这是一个非模态对话框</h2>
        <p>你可以继续与页面上的其他元素交互。</p>
        <button id="closeNonModalBtn">关闭</button>
    </dialog>

    <script>
        const myNonModalDialog = document.getElementById('myNonModalDialog');
        const showNonModalBtn = document.getElementById('showNonModalBtn');
        const closeNonModalBtn = document.getElementById('closeNonModalBtn');

        // 显示非模态对话框
        showNonModalBtn.addEventListener('click', () => {
            myNonModalDialog.show();
        });

        // 关闭非模态对话框
        closeNonModalBtn.addEventListener('click', () => {
            myNonModalDialog.close();
        });
    </script>

</body>
</html>
```

#### 2\. `dialog.showModal()`：模态（modal）显示

使用 `showModal()` 方法会显示对话框，并且会创建一个**模态背景（backdrop）**。这个模态背景会覆盖除了对话框本身之外的所有页面内容，并阻止用户与对话框之外的元素进行交互，直到对话框被关闭。这对于需要用户集中注意力并做出选择的场景非常有用。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模态对话框</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        dialog {
            border: 1px solid #ccc;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        /* 模态对话框的背景样式，可以通过 ::backdrop 伪元素来控制 */
        dialog::backdrop {
            background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
            backdrop-filter: blur(5px); /* 背景模糊效果（可选） */
        }
    </style>
</head>
<body>

    <h1>我的页面内容</h1>
    <p>这里有一些主要的页面内容，当模态对话框显示时，你将无法与这些内容交互。</p>

    <button id="showModalBtn">显示模态对话框</button>

    <dialog id="myModalDialog">
        <h2>这是一个模态对话框</h2>
        <p>你必须先关闭此对话框才能与页面上的其他元素交互。</p>
        <button id="closeModalBtn">关闭</button>
        <form method="dialog">
            <button value="confirm">确认操作</button>
            <button value="cancel">取消</button>
        </form>
    </dialog>

    <script>
        const myModalDialog = document.getElementById('myModalDialog');
        const showModalBtn = document.getElementById('showModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');

        // 显示模态对话框
        showModalBtn.addEventListener('click', () => {
            myModalDialog.showModal();
        });

        // 关闭模态对话框（通过点击按钮）
        closeModalBtn.addEventListener('click', () => {
            myModalDialog.close();
        });

        // 监听对话框关闭事件（可选）
        myModalDialog.addEventListener('close', () => {
            console.log('对话框已关闭。返回值为:', myModalDialog.returnValue);
            // 可以在这里根据 returnValue 进行后续操作
        });
    </script>

</body>
</html>
```

-----

### 如何关闭 `<dialog>`

关闭 `<dialog>` 的方式有以下几种：

#### 1\. `dialog.close()`：通过 JavaScript 关闭

这是最常见和推荐的方式，通过调用对话框元素的 `close()` 方法来关闭它。

```javascript
const myDialog = document.getElementById('myDialog');
// ... 当需要关闭时 ...
myDialog.close();
```

你还可以在 `close()` 方法中传入一个字符串参数，这个字符串会作为对话框的 `returnValue` 属性的值，以便你在对话框关闭后获取用户的操作结果（例如，用户是点击了“确认”还是“取消”）。

```javascript
// 关闭并设置返回值
myDialog.close('confirmed');
```

在对话框关闭后，可以通过监听 `close` 事件来获取 `returnValue`：

```javascript
myDialog.addEventListener('close', () => {
    console.log('对话框关闭了，返回值是:', myDialog.returnValue);
});
```

#### 2\. `<form method="dialog">`：通过表单提交关闭（仅限模态对话框）

对于模态对话框（通过 `showModal()` 显示），你可以使用一个特殊的表单提交方式来关闭它。在 `<dialog>` 内部，包含一个 `form` 元素，并将 `method` 属性设置为 `"dialog"`。当这个表单被提交时（例如，点击了表单内的提交按钮），对话框就会自动关闭。

这种方式的优势在于：

* **语义化：** 它表示表单的提交是为了影响对话框的状态。
* **返回值：** 表单内被点击的**提交按钮**的 `value` 属性值会自动成为对话框的 `returnValue`。

<!-- end list -->

```html
<dialog id="myModalDialog">
    <h2>请选择操作：</h2>
    <p>你确定要删除此项吗？</p>
    <form method="dialog">
        <button value="delete">确认删除</button>
        <button value="cancel">取消</button>
    </form>
</dialog>

<script>
    const myModalDialog = document.getElementById('myModalDialog');
    myModalDialog.addEventListener('close', () => {
        console.log('对话框通过表单关闭，结果是:', myModalDialog.returnValue);
        // 如果 returnValue 是 'delete'，执行删除操作
    });
    // ... 调用 myModalDialog.showModal() 显示对话框 ...
</script>
```

在这个例子中，如果用户点击了“确认删除”按钮，`myModalDialog.returnValue` 会是 `"delete"`；如果点击了“取消”按钮，`returnValue` 会是 `"cancel"`。

#### 3\. ESC 键关闭（仅限模态对话框）

当一个模态对话框（通过 `showModal()` 显示）处于打开状态时，用户按下 **Escape (Esc) 键**，对话框会自动关闭。此时，对话框的 `returnValue` 会是空字符串 `""`。

-----

### 总结

* **显示：**
  * `dialog.show()`：非模态，不阻止用户与页面其他部分交互。
  * `dialog.showModal()`：模态，显示遮罩层，阻止用户与页面其他部分交互。
* **关闭：**
  * `dialog.close()`：JavaScript 方法，可以传入返回值。
  * `<form method="dialog">`：模态对话框内通过表单提交关闭，提交按钮的 `value` 会成为返回值。
  * **ESC 键：** 模态对话框会自动响应 ESC 键关闭，`returnValue` 为空字符串。

使用 `<dialog>` 元素可以创建原生、语义化且可访问的对话框，减少了对第三方库的依赖，并提供了良好的浏览器兼容性。

你对 `<dialog>` 的使用还有其他疑问吗？

### 模态方式 `<dialog>` 是默认居中显示吗

是的，**`<dialog>` 元素在默认情况下会以模态方式（当使用 `showModal()` 方法显示时）居中显示**。

-----

#### `dialog` 元素的默认行为

当你通过 JavaScript 调用 `dialog.showModal()` 方法来显示一个 `<dialog>` 元素时，浏览器会自动：

1. **将其置于页面内容的中心。** 无论是水平居中还是垂直居中，它都会尝试在视口的中间显示。
2. **创建一个背景遮罩 (backdrop)。** 这个遮罩会覆盖整个页面的其余部分，并阻止用户与对话框之外的内容进行交互。

这种默认的居中和模态行为是 `<dialog>` 元素的一大优势，因为它省去了开发者手动计算位置和处理遮罩的麻烦。

-----
