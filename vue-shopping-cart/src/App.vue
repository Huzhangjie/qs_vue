<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList />
    <hr>
    <ShoppingCart />
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ShoppingCart,
    ProductList
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
