import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bookStore from '@/pages/bookstore'
import bookShelf from '@/pages/bookshelf'
import classify from '@/pages/classify'
import subscribe from '@/pages/subscribe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bookStore',
      component: bookStore
    },
    {
      path: '/bookShelf',
      component: bookShelf
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/subscribe',
      component: subscribe
    }
  ]
})
