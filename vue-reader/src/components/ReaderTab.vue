<template>
  <div class="wrapper">
    <div class="tab-item" v-for="tab in tabList" :key="tab.name">
      <router-link tag="li" :to="'/' + tab.path">
        <div class="item-wrapper">
          <i class="iconfont" :class="tab.icon"></i>
          <div class="name">{{tab.name}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabList: [
          {
            path: "bookstore",
            name: "书城",
            icon: "icon-shuji"
          },
          {
            path: "classify",
            name: "分类",
            icon: "icon-fenlei"
          },
          {
            path: "bookshelf",
            name: "书架",
            icon: "icon-shujia"
          },
          {
            path: "subscribe",
            name: "订阅",
            icon: "icon-icon--"
          }
        ]
      }
    }
  }
</script>
<style scoped>
.wrapper {
  font-size: 20px;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 10vh;
  background-color: pink;
  z-index: 10;
}
.wrapper:before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  border-top: 1px solid red;
  transform: scaleY(.2)
}
.tab-item {
  flex: 1;
}
.item-wrapper {
  width: 25vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.iconfont {
  font-size: 26px;
}
.router-link-active {
  color: red;
}
</style>
