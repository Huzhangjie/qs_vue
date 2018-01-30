<template>
  <div>
    <header-tab />
    <types-tab />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import headerTab from '@/components/HeaderTab'
import typesTab from '@/components/typesTab'
export default {
  components: {
    headerTab,
    typesTab
  }
}
</script>

<style>

</style>
