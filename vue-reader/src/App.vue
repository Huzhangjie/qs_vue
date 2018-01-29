<template>
  <div id="app">
    <read-header />
    <router-view/>
    <read-tab />
  </div>
</template>

<script>
import readHeader from '@/components/ReaderHeader'
import readTab from '@/components/ReaderTab'

export default {
  name: 'App',
  components: {
    readHeader,
    readTab
  }
}
</script>

<style>
@import url(//at.alicdn.com/t/font_553259_tcpf7vtr9zilik9.css);

* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}

</style>
