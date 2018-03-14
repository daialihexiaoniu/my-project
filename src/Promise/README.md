# What is promise?
Promise 是抽象异步处理对象以及对其进行各种操作的组件。  
Promise 将异步处理和吃力规则进行规范化，并按照采用统一的接口来编写，采取规定方法之外的写法都会出错。
```
var promise = getAsyncPromise('file.txt');
promise.then(function(result) {
    // 获取文件内容成功时的处理
}).catch(function(error) {
    // 获取文件内容失败时的处理
});
```
Promise 的功能是可以将复杂的异步处理轻松的进行模式化。  
___
Promise API 有以下三种  
1、Constructor  
想要创建一个 promise 对象，可以使用 ```new``` 来调用 ```Promise``` 的构造器进行实例化。
```
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后调用 resolve 或 reject
})
```
2、Instance Method  
对于动过 new 生成的 promise 对象为了设置其值在 resolve(成功) / reject(失败) 是调用的回调函数 可以使用 ```promise.then()``` 实例方法。  
```
promise.then(onFulfilled, onRejected)
```
resolve(成功)时  
  ```onfulFilled``` 会被调用
reject()  
  ```onRejected``` 会被调用