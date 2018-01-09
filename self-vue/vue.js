function Vue (options) {
  this.data = options.data || {}
  this.methods = options.methods || {}

  Object.keys(this.data).forEach(key => {
    this.proxyKeys(key)
  })
  observer(this.data);
  new Compile(options.el, this)
  // mouted发生的最佳时期
  // 生命周期函数 就是在相应的时刻发生的事件钩子
  options.mounted.call(this)
}

Vue.prototype = {
  proxyKeys (key) {
    // console.log(key)
    var self = this
    Object.defineProperty(this, key, {
      enumberable: false,
      configurable: true,
      get: function getter () {
        // console.log(`在获取${key}`)
        return self.data[key]
      },
      set: function setter(newVal) {
        // console.log(`设置${key}值为${newVal}`)
        self.data[key] = newVal
      }
    })
  }
}