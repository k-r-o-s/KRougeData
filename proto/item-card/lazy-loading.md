# 懒加载 `Loading="lazy"`

-----

`loading="lazy"` 是一个非常实用的 HTML 属性，用在 `<img>` 和 `<iframe>` 标签上，它的核心好处在于**优化网页加载性能和用户体验**。

-----

## 懒加载 `Loading="lazy"` 介绍

### `loading="lazy"` 的核心好处

`loading="lazy"` 告诉浏览器，这张图片（或 iframe）**不需要立即加载**。它会延迟加载（defer loading），直到用户滚动页面，这张图片\*\*即将进入视口（viewport）\*\*时，浏览器才会开始下载它。

以下是它带来的具体好处：

1. **显著提升首屏加载速度 (Faster Initial Load Times)**

      * **减少初始请求数量和带宽消耗：** 页面刚加载时，浏览器只下载首屏（用户当前能看到的区域）的图片。那些位于页面下方、用户需要滚动才能看到的图片不会立即下载。
      * **释放关键资源：** 这样可以将网络带宽和浏览器处理资源优先用于下载和渲染首屏的关键内容（如 CSS、JavaScript 和主要图片），从而加快页面的**首次内容绘制 (FCP)** 和**最大内容绘制 (LCP)** 时间。用户会感觉页面加载更快，响应更及时。

2. **降低数据使用量和服务器成本 (Reduced Data Usage & Server Costs)**

      * **节省用户流量：** 如果用户只看了一部分页面就离开了，那么页面下方未进入视口的图片永远不会被下载。这对于使用移动数据或有限流量套餐的用户来说，可以显著节省其数据消耗。
      * **降低服务器带宽：** 网站服务器不需要为每个用户都传输所有图片，只传输那些实际被用户看到的图片，从而降低服务器的带宽成本。

3. **改善核心 Web 指标 (Improved Core Web Vitals)**

      * `loading="lazy"` 可以直接改善多个核心 Web 指标：
          * **LCP (Largest Contentful Paint - 最大内容绘制)：** 通过优先加载首屏内容，减少了非关键图片对 LCP 元素的干扰，有助于 LCP 时间变短。
          * **FID (First Input Delay - 首次输入延迟)：** 减少了主线程在图片解码和渲染上的工作量，使得浏览器更快响应用户输入。
          * **CLS (Cumulative Layout Shift - 累计布局偏移)：** 尽管懒加载本身可能引入 CLS（如果图片没有指定宽高），但结合适当的图片尺寸声明，它可以避免因图片加载导致的内容跳动，甚至能帮助优化。

4. **简化开发工作 (Simplified Development)**

      * 在 `loading="lazy"` 属性出现之前，实现图片懒加载通常需要依赖 JavaScript 库（如 Intersection Observer API），这增加了代码量和复杂性。
      * 现在，你只需一个简单的 HTML 属性即可实现原生的懒加载，**无需任何 JavaScript 代码**，大大简化了开发工作。

### 如何使用

非常简单，只需在 `<img>` 或 `<iframe>` 标签中添加 `loading="lazy"` 属性即可：

```html
<img src="your-image.jpg" alt="描述图片内容" loading="lazy">
<iframe src="your-video-embed.html" loading="lazy"></iframe>
```

### 注意事项

* **始终为图片设置 `width` 和 `height` 属性：** 尽管 `loading="lazy"` 本身很好，但为了**避免布局偏移 (CLS)**，强烈建议为所有图片（包括懒加载图片）明确设置 `width` 和 `height` 属性，或者使用 CSS `aspect-ratio` 来预留空间。这样在图片加载前，浏览器就知道它将占据多大的空间，避免页面内容跳动。
* **首屏图片不要使用 `loading="lazy"`：** 对于那些在页面初次加载时就可见的关键图片（LCP 元素），不应该使用 `loading="lazy"`，因为这反而会延迟它们的加载。对于这些关键图片，你可以考虑使用 `fetchpriority="high"` 来进一步加速。

-----

总而言之，`loading="lazy"` 是现代 Web 开发中优化图片和 iframe 加载的基石，它通过延迟加载非关键资源，显著提升了页面性能和用户体验，并且实现起来非常简单。
