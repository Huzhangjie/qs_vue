<template>
  <div class="wrapper">
    <div class="tab-wrapper">
      <div class="tab-item" v-for="item in types" :key="item"
        :class="{'active': isActive == `${item}`}"
        @click="changeActive">
        {{item}}
      </div>
    </div>
    <div class="icon-wrapper">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script>
//  <div class="tab-item" :class="{'active': isActive[0] == '男生'}"
//       @click="changeActive">男生</div>
//     <div class="tab-item" :class="{'active': isActive[1] == '女生'}">女生</div>
//     <div class="tab-item" :class="{'active': isActive[0] == '出版'}">出版</div>
//   <div>
export default {
  data() {
    return {
      types: ['男生', '女生', '出版'],
      isActive: '男生'
    }
  },
  computed: {

  },
  methods: {
    changeActive (e) {
      this.isActive = e.target.innerText
    }
  }
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
.tab-wrapper {
  background-color: #888888;  
  width: 50vw;
  height: 6vh;
  border-radius: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.tab-item {
  flex: 1; 
  height: 5vh; 
  margin: 1px;
  line-height: 5vh;
  text-align: center;
  border-radius: 2.5vh;
}
.active {
  background-color: white;
}
.icon-wrapper {
  width: 25vw
}
.iconfont {
  font-size: 24px;
  float: right;
}
</style>
