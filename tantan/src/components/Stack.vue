<template>
  <ul class="stack">
    <li class="stack-item"
      :style="[transformIndex(index),transform(index)]"
      v-for="(item, index) in pages" :key="index">
      <div v-html="item.html"></div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    // 设计UI状态
    return {
      basicdata: {
        start: {},
        end: {}
      },
      temporaryData: {
        opacity: 1,
        zIndex: 10,
        rotate: 0,
        visible: this.stackinit.visible || 3,
        currentPage: this.stackinit.currentPage || 0,
        poswidth: 0,
        posheight: 0,
        offsetY: ''
      }
    }
  },
  props: {
    stackinit: {
      type: Object,
      default: []
    },
    pages: {
      type: Array,
      default: []
    }
  },
  mounted () {
    this.$on('next', () =>{
      this.next();
    });
    this.$on('prev', ()=>{
      this.prev();
    })
    document
      .addEventListener('touchmove',
      (e) => e.preventDefault())
  },
  methods: {
    transformIndex(index) {
      if(index === this.temporaryData.currentPage) {
        let style = {}
        style['zIndex'] = 10
        style['opacity'] = this.temporaryData.opacity
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px,'
          + this.temporaryData.posheight + 'px,0px) rotate(' + this.temporaryData.rotate + 'deg)' 
        style['transitionTimingFunction'] = 'ease'
        style['transitionDuration'] = '300ms'
        return style
      }
    },
    transform(index) {
      let currentPage = this.temporaryData.currentPage
      let length = this.pages.length
      let lastPage = currentPage === 0 ? this.pages.length-1 : currentPage -1
      let perIndex = index - currentPage > 0 ? index - currentPage : index - currentPage + length
      let style = {
      }
      let visible = this.temporaryData.visible
      if(index === this.temporaryData.currentPage) {
        return 
      } 
      if(this.inStack(index, currentPage)) {
        style['opacity'] = 1
        style['transform'] = 'translate3D(0,0,' + -1 * 60 * (perIndex-this.offsetRatio)+ 'px)'
      }
      return style
    },
    inStack(index, currentPage) {
      let stack = []
      let visible = this.temporaryData.visible
      let length = this.pages.length
      for(let i = 0; i < visible; i++) {
        if(currentPage + i < length) {
          stack.push(currentPage + i)
        } else {
          stack.push(currentPage + i - length)
        }
      }
      return stack.indexOf(index) >= 0
    }, 
    nextTick () {
      // 记录最终滑动距离
      this.temporaryData.lastPosWidth = this.temporaryData.poswidth
      this.temporaryData.lastPosHeight = this.temporaryData.posheight
      this.temporaryData.lastRotate = this.temporaryData.rotate
      this.temporaryData.lastZindex = 20
      // 循环currentPage
      this.temporaryData.currentPage = this.temporaryData.currentPage === this.pages.length - 1 ? 0 : this.temporaryData.currentPage + 1
      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.opacity = 1
        this.temporaryData.rotate = 0
      })
    },
    prev() {
      let width = this.$el.offsetWidth
      this.temporaryData.poswidth = -width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '-3'
      this.nextTick()
    },
    next() {
      let width = this.$el.offsetWidth
      this.temporaryData.poswidth = width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '3'
      this.nextTick()
    }
    
  },
  computed: {
    offsetRatio () {
      let width = this.$el.offsetWidth
      let height = this.$el.offsetHeight
      let offsetWidth = width - Math.abs(this.temporaryData.poswidth)
      let offsetHeight = height - Math.abs(this.temporaryData.posheight)
      let ratio = 1 - (offsetWidth * offsetHeight) / (width * height) || 0
      return ratio > 1 ? 1 : ratio
    }
  }
}  
</script>
<style>
.stack {
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;
  perspective-origin: 50% 150%;
  margin: 0;
  padding: 0;
}
.stack-item {
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  opacity: 0;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-touch-callout: none;
  user-select: none;
 -webkit-user-select: none;
  pointer-events: auto;
}
.stack-item img {
  width: 100%;
  display: block;
  pointer-events: none;
}
</style>
