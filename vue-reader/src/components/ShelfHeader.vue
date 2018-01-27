<template>
  <div class="wrapper">
    <div class="text">书架</div>
    <div class="right">
      <i class="iconfont icon-xitongcaidan"></i>
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  height: 8vh;
  position: fixed;
  top: 0;
  left: 25vw;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
}
.text {
  flex: 2;
  text-align: center;
  font-size: 20px;
  position: relative;
}
.text:after {
  content: '';
  width: 10px;
  height: 10px;
  display: block;
  border-bottom: 1px solid #5e5e5e;
  border-right: 1px solid #5e5e5e;
  transform: rotate(45deg);
  position: absolute;
  top: 25%;
  right: 30%;
}
.right {
  flex: 1;
  background-color: pink;
}
.iconfont {
  font-size: 24px;
  float: right;
}
</style>
