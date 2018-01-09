// vm => vue的实例 也是mvvm中的vm 虚拟DOM对象
// 真实DOM 非常消耗内存  vm 可以将多次的修改集中称为一次真实的DOM修改
function Compile(el, vm) {
  this.vm = vm;
  this.el = document.querySelector(el);
  this.fragment = null; // 临时结点
  this.init();
}

Compile.prototype = {
  init () {
      // 接管模板去编译， 显示的不是html 只是模板， 从头开始处理模板
      // fragment 碎片 
      this.fragment = this.nodeToFragment(this.el);
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
  },
  compileElement (el) {
      // childNodes 类数组
      var childNodes = el.childNodes;

      [].slice.call(childNodes).forEach((node) => {
          // console.log(node);
          var reg = /\{\{(.*)\}\}/;
          var text = node.textContent;
          // v-model v-on:click mounted
          if(this.isElementNode(node)) {
            // 分析节点 查看是否有v-model等属性
            this.compile(node)
          }else if (this.isTextNode(node) && reg.test(text)){
            this.compileText(node,reg.exec(text)[1]);
          }
          // 如果有子节点 进行递归
          if(node.childNodes && node.childNodes.length) {
            this.compileElement(node)
          }
      });
  },
  compile (node) {
    var nodeAttrs = node.attributes;
    Array.prototype.forEach.call(nodeAttrs, (attr) => {
      var attrName = attr.name;
      if (this.isDirective(attrName)) {
        var exp = attr.value;
        var dir = attrName.substring(2)
        if(this.isEventDirective(dir)) {
          this.compileEvent(node, this.vm, exp, dir);
        } else {
          this.compileModle(node, this.vm, exp, dir);
        }
      }
    })
  },
  isDirective (attr) {
    return attr.indexOf('v-') === 0;
  },
  isEventDirective(dir) {
    return dir.indexOf('on:') === 0;
  },
  compileEvent (node, vm, exp, dir) {
    var eventType = dir.split(':')[1];
    var cb = vm.methods && vm.methods[exp]
    if(eventType && cb) {
      node.addEventListener(eventType, cb.bind(vm), false)
    }
  },
  compileModle (node, vm, exp, dir) {
    var val = this.vm[exp];
    this.modelUpdater(node, val);
    new Watcher(this.vm, exp, value => {
      this.modelUpdater(node, value);
    });
    node.addEventListener('input', e => {
      var newValue = e.target.value;
      if(val === newValue) {
        return ;
      }
      this.vm[exp] = newValue;
      val = newValue;
    })
  },
  modelUpdater (node, value) {
    node.value = typeof value == 'undefine' ? '' : value
  },
  isElementNode (node) {
    return node.nodeType == 1
  },
  isTextNode (node) {
    return node.nodeType == 3
  },
  compileText: function(node, exp) {
    var initText = this.vm[exp];
    this.updateText(node, initText);
    new Watcher(this.vm, exp, value => {
      this.updateText(node, value);
    })
  },
  updateText (node, value) {
    // console.log(node,value)
    node.textContent = typeof value === 'undefined' ? '' : value
  },
  nodeToFragment: function (el) {
      var fragment = document.createDocumentFragment();
      // 新拷贝一份，将模板进行html编译，最后将它替换原有的el.innerHTML
      // DocumentFragment文档碎片 没有标签 不会留下任何痕迹

      var child = el.firstChild;
      while(child) {
          fragment.appendChild(child);
          child = el.firstChild;
      }
      return fragment;
  }
}
