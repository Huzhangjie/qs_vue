// var a = {};

// // 精细化的操作对象的属性访问
// // 三个参数 都是必需的  
// // 1. 目标对象 想要劫持的对象
// // 2. 需要定义的属性或方法的名字 
// // 3. 目标属性所拥有的特性 descriptor
// Object.defineProperty(a, "b", {
//   value: 123,
//   writable: true,
//   configurable: false // 不能再define
// })
// a.b = 234
// console.log(a.b)

// 被代理或被劫持的对象
var a = {}
// Object.defineProperty(a, "b", {
//   value: 345,
//   enumerable: true // 可遍历可枚举
// })
// console.log(Object.keys(a))

// for(key in a) {
//   console.log(key, a[key])
// }

Object.defineProperty(a, 'b', {
  set: function setter (newValue) {
    if(newValue === this.value){
      return 
    }
    console.log(`以前的值${this.value} 新值为 ${newValue}`)
    this.value = newValue
  },
  get: function getter() {
    console.log("你拿到我的值了"+ this.value)
    return this.value
  }
})

a.b = 3

a.b