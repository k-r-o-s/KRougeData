// 页面加载时，显示默认选中的值
window.addEventListener('DOMContentLoaded', () => {
  // 获取所有名为 'fruit' 的 radio button
  const fontSelDiv = document.querySelector('.setting__container-font-sel');
  const radioButtons = fontSelDiv.querySelectorAll('input[name="setting__font-size"]');

  // 遍历所有 radio button，并为每个添加 'change' 事件监听器
  radioButtons.forEach(radio => {
    radio.addEventListener('change', (event) => {
      // 当 'change' 事件触发时，获取当前选中的 radio button 的值
      const radio = /**@type{HTMLInputElement}*/(event.target);
      const selectedValue = radio.value;
      console.log('当前选中的值:', selectedValue);
    });
  });
});