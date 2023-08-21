# js迭代器
什么是迭代?
::: tip 什么是迭代?
大白话讲就是把一个数据集合里的数据一个一个的展示出来。可中断，因为迭代是一个过程，而不是一个结果。
迭代讲的是过程， 而遍历是结果。
:::
## 迭代对象
迭代对象都有什么呢？
js内置了迭代接口的对象有如下：
- 数组Array
- 字符串String
- Map
- Set
- 获取到的dom数组（伪数组）  

迭代对象一般使用for...of来进行遍历，
可以说“可以使用forof的对象就是具有迭代接口，就是迭代对象。”
所谓迭代接口就是一个属性`Symbol.iterator`，不具备这个属性的是不可迭代的
所以我们也就可以手动给一个`Object`对象赋予了一个`Symbol.iterator`属性
```js
const obj = {
  name:'nickname',
  age:17
}

// 生成器
function* fn(){
  for(const key in Object.keys(this)){
    yield this[key]
  }
}

// 手动赋予一个迭代接口
obj[Symbol.iterator] = fn

// 这样obj就可以使用for...of了
for(const val of obj){
  console.log(val)
}
```
效果如下:
![迭代对象](/images/jsList/syntax/diedai_res.png)

## 生成器
所谓生成器就是一个函数，但是这个函数有点特殊，它可以返回一个迭代器，而且这个迭代器是可以中断的。
```js{1}
function* fn(){
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}
```
生成器函数, function 后面有个*，这个*就是生成器函数的标志.  
调用一次生成器函数, 就会返回yield后面的值, 但是生成器函数不会执行, 只有调用生成器函数返回的迭代器的next方法才会执行生成器函数.
:::tip
所以箭头函数不能写成生成器函数，因为箭头函数没有*, 也就没有yield关键字。
:::
示例:
```js{10}
function* fn(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}
console.log(fn()); // 返回一个迭代器 打印结果: Object [Generator] {}
// 必须使用next()方法才能获取到值
const it = fn()
console.log(it.next()); // 打印结果: { value: 1, done: false }
console.log(it.next()); // 打印结果: { value: 2, done: false }
console.log(it.next()); // 打印结果: { value: 3, done: false }
console.log(it.next()); // 打印结果: { value: 4, done: false }
console.log(it.next()); // 打印结果: { value: 5, done: false }
console.log(it.next()); // 打印结果: { value: undefined, done: true }
```
:::tip
注意上面的`const it = fn()`, 让后续的`.next()`方法都是在同一个迭代器上调用的, 所以才会有上面的结果.
不要写成下面这样:
```js
console.log(fn().next()); // 打印结果: { value: 1, done: false }
console.log(fn().next()); // 打印结果: { value: 1, done: false }
console.log(fn().next()); // 打印结果: { value: 1, done: false }
```
这样每一个`.next()`方法都是在不同的迭代器上调用的, 所以每次都是从头开始执行生成器函数, 所以每次都是返回1.
:::

返回的对象有两个属性:  
- value: 生成器函数中yield后面的值
- done: 生成器函数中的yield是否执行完毕, 如果执行完毕, 就是true, 否则就是false