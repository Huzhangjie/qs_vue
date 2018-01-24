<template>
  <div class="wrapper">
    <div class="tab-item" v-for="tab in tabList" :key="tab.name">
      <i class="iconfont" :class="tab.icon"></i>
      <div class="name">{{tab.name}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tabList: [
          {
            name: "书城",
            icon: "icon-shuji"
          },
          {
            name: "分类",
            icon: "icon-fenlei"
          },
          {
            name: "书架",
            icon: "icon-shujia"
          },
          {
            name: "订阅",
            icon: "icon-icon--"
          }
        ]
      }
    }
  }
</script>
<style>
.wrapper {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 8vh;
}
.wrapper:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-top: 1px solid red;
  transform: scaleY(.5)
}
.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.iconfont {
  font-size: 24px;
}
</style>
