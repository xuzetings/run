// 防抖（debounce）
// 防抖的基本思想是，如果一个函数持续地、频繁地触发，那么只在最后一次触发后，等待一定的延迟时间再执行。
function debounce(func, wait) {  
  let timeout;  
  return function(...args) {  
      const context = this;  
      clearTimeout(timeout);  
      timeout = setTimeout(() => func.apply(context, args), wait);  
  };  
}