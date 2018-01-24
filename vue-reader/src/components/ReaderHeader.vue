<template>
<div>
 <div class="wrapper">
    <img :src="src">
  </div>
  <div class="header-block"></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      src: "http://s0.hao123img.com/res/img/moe/0922zt.jpg"
    }
  }
}
</script>
<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6vh;
  background-color: pink;
  z-index: 10;
}
.wrapper img {
  height: 100%;
  width: 6vh;
  background-color: green;
  float: left;
  margin: auto 5vw;
  border-radius: 50%;
}
.header-block {
  height: 6vh;
  background-color: red;
}
</style>
