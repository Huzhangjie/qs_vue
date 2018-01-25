<template>
  <div class="wrapper">
    <div class="tab-item">男生</div>
    <div class="tab-item">女生</div>
    <div class="tab-item">出版</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
  background-color: #888888;
  position: fixed;
  top: 1vh;
  left: 25vw;
  width: 50vw;
  height: 6vh;
  border-radius: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 10;
}
.tab-item {
  flex: 1; 
  height: 5vh;
  background-color: red;
  margin: 1px;
  line-height: 5vh;
  text-align: center;
  border-radius: 2.5vh;
}
</style>
