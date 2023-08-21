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