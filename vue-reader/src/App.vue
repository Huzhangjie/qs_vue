<template>
  <vue-drawer-layout ref="drawer" @mask-click="closeDrawer">
    <div class="drawer-content" slot="drawer">
      <slide-menu></slide-menu>
    </div>
    <div slot="content"> 
      <read-header @drawer="drawer"/>      
      <router-view />
      <read-tab />
    </div>
  </vue-drawer-layout>
</template>

<script>
import slideMenu from '@/components/SlideMenu'
import readHeader from '@/components/ReaderHeader'
import readTab from '@/components/ReaderTab'

export default {
  name: 'App',
  components: {
    readHeader,
    readTab,
    slideMenu
  },
  mounted() {
    // console.log(this.$refs)
    // this.$refs.drawer.toggle(true)
  },
  methods: {
    drawer() {
      // 子组件emit方法 点击头像打开菜单
      this.$refs.drawer.toggle(true)
    },
    closeDrawer() {     
      this.$refs.drawer.toggle(false)
    }
  }
}
</script>

<style>
@import url(//at.alicdn.com/t/font_553259_eqyo7kxkcphf47vi.css);

* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}


</style>
