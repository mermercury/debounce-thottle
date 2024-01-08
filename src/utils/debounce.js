const debounce = (fn, delay) => {
    // closure闭包
    let timeoutId;

    // 收集args
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
       

        timeoutId = setTimeout(() => {
            // 展开args
            fn(...args);
        }, delay);
    };
};

export default debounce;