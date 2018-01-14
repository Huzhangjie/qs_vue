<template>
<ul>
  <li v-for="product in products" :key="product.id">
    {{product.title}} - {{product.price}}
    <br>
    <button @click="addToCart(product)" :disabled="!product.inventory">Add to cart</button>
  </li>
</ul>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
// this.$store.getters
// this.$store.dispatch()
export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  created () {
    this.$store.dispatch('getAllProducts')
  },
  methods: mapActions ([
      'addToCart'
    ])
  
}
</script>
<style>
</style>
