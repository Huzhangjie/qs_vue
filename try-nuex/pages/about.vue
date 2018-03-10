<template>
  <div>
    <p>Hi from {{name}}</p>
    <nuxt-link to="/">Back Home</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    // nuxt本质 将.vue 交给后端渲染
    // webpack server-side-renderer
    // react next.js
    // .vue => html css js
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About Page'
  }
}
</script>

<style>

</style>
