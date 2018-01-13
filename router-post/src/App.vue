<template>
  <div id="app">
    <el-badge class="item" :value="11" :max="9">
      <el-button nativeType="submit" size="medium" @click="addComment">评论</el-button>
    </el-badge>
    <el-badge class="item" :value="1" :max="9">
      <el-button :disabled="saveDisabled" @click="doSave" size="mini" type="primary">发布</el-button>
    </el-badge>
    <el-badge isDot class="item" :value="11" :max="9">
      <el-button size="small" type="text">前往</el-button>
    </el-badge>
  </div>
</template>

<script>
import ElButton from '@/components/ElButton'
import ElBadge from "@/components/ElBadge"

export default {
  name: 'app',
  data() {
    return {
      saveDisabled: true
    }
  },
  components: {
    ElButton,
    ElBadge
  },
  mounted() {
    setTimeout(() => {
      this.saveDisabled = false
    }, 5000);
  },
  methods: {
    addComment () {
      console.log('添加评论')
    },
    doSave() {
      console.log('发布')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
