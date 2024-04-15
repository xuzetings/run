// 节流的基本思想是，在一定时间间隔内，无论触发了多少次函数，都只会执行一次。
function throttle(func, delay) {  
  let lastCall = 0;  
  return function(...args) {  
      const now = Date.now();  
      if (now - lastCall < delay) {  
          return;  
      }  
      lastCall = now;  
      return func.apply(this, args);  
  };  
}