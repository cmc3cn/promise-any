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
