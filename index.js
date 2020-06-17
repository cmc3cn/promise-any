'use strict';

function reverse(promise) {
    return new Promise((resolve, reject) => Promise.resolve(promise).then(reject, resolve));
}

module.exports = function promiseAny(promiseArr) {
    return reverse(Promise.all(promiseArr.map(reverse)));
};

// 一个更酷的版本： 两行实现

Promise.any = Promise.any || arr => {
    let reverse = promise => new Promise((resolve, reject) => Promise.resolve(promise).then(reject, resolve));
    return reverse(Promise.all(arr.map(reverse)));
};
