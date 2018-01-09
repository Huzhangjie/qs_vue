function observer(value, vm) {
  if(!value || typeof value !== 'object') {
    return ;
  }
  return new Observer(value)
}

function Observer (data) {
  // n个{{title}} -> push 数组中
  this.data = data;
  this.walk(data);
}

Observer.prototype = {
  walk (data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    })
  },
  defineReactive (data, key, val) {
    var dep = new Dep();
    Object.defineProperty(data, key, {
      enumerable: true,// 可枚举
      configurable: false,//不可再define
      get: function getter () {
        if(Dep.target){
          // Dep.target在watcher中指向watcher本身 
          // 下面就是讲对应的watcher(订阅者) push进Dep(发布者对象)
          dep.addSub(Dep.target);
        }
        return val;
      },
      set: function setter (newVal) {
        if(newVal === val) {
          return ;
        }
        val = newVal;
        dep.notify();
      }
    })
  }
}

function Dep () {
  this.subs = [];
}

Dep.prototype = {
  addSub (sub) {
    this.subs.push(sub);
  },
  notify () {
    this.subs.forEach(sub =>{
      sub.update()
    })
  }
}
Dep.target = null;