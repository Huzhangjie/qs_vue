<template>
  <div class="wrapper">
    <div class="types-wrapper">
      <div class="type-item" v-for="item in types" :key="item.path">
        <router-link tag="li" :to="'/bookstore/' + item.path" >
          {{item.type}}
        </router-link>
      </div>
    </div>
    <div class="types-wrapper-block"></div>
    <div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [{
          path: 'tuijian',
          type: '推荐'
        },{
          path: 'kouwei',
          type: '口味'
        },{
          path: 'mianfei',
          type: '免费'
        },{
          path: 'paihang',
          type: '排行'
        },{
          path: 'zhuanti',
          type: '专题'
        }
      ],
      isActive: '推荐'
    }
  },
  methods: {
    changeActive (item) {
      console.log(item)
      this.isActive = item
    }
  }
}
</script>

<style scoped>
.types-wrapper {
  position: fixed;
  background-color: white;
  height: 5vh;
  width: 100vw;
  display: flex;
  z-index: 10;
}
.types-wrapper:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  border-bottom: 1px solid #888888;
  transform: scaleY(.2);
}
.types-wrapper-block {
  /* 占位 types-wrapper fixed定位 下面的内容不会上去 */
  height: 5vh;
}
.type-item {
  color: #5e5e5e;
  flex: 1;
  text-align: center;
  line-height: 5vh;
}
.active {
  color: #eb6666;
  position: relative;
}
.active:after {
  content: '';
  position: absolute;
  left: 45%;
  bottom: 2px;
  width: 10%;
  border-bottom: 2px solid #eb6666;
}
.content {
  width: 100vw;
  height: 100vh;
  background-color: red;
} 
.router-link-active {
  color: #eb6666;
  position: relative;
}
.router-link-active:after {
  content: '';
  position: absolute;
  left: 45%;
  bottom: 2px;
  width: 10%;
  border-bottom: 2px solid #eb6666;
}
</style>
