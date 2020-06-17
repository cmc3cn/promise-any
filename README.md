# promise-any
最简版 promise.any， 实现方式令人拍手称绝

ES6 promises don't provide any(). A small library to implement them. Will convert arguments to promises if not already a promise.

```javascript
var promiseAny = require('promise-any');

promiseAny([
    Promise.reject('✗'),
    Promise.resolve('✓'),
]).then(function(value) {
    // value is '✓' :)
});

promiseAny([
    Promise.reject('✗'),
    Promise.reject('✗'),
]).catch(function(reasons) {
    // reasons is ['✗', '✗'] :(
});
```

```
function reverse(promise) {
    return new Promise((resolve, reject) => Promise.resolve(promise).then(reject, resolve));
}

Promise.any = function promiseAny(arr) {
    return reverse(
    	Promise.all(
    		arr.map(reverse)
    	)
    );
};

var fn1  = new Promise((resolve, reject) => {
	setTimeout(resolve,1000,'a-1000');
});

var fn2  = new Promise((resolve, reject) => {
	setTimeout(resolve,900,'a-900');
});

var fn3  = new Promise((resolve, reject) => {
	setTimeout(reject,200,'a-300');
});


Promise.any([
    fn1,fn2,fn3
]).then(function(value) {
    console.log(value)
});
```
Promise.any 只对第一个实现很感兴趣，

这点不同于 Promise.race

Promise.race对第一个返回感兴趣，但是第一个返回可能是 reject状态的，所以从某种意义上来说， 不如promise.any实际意义更大。虽然Promise.race已经被部分内核实现，而Promise.any仍然处于草案
