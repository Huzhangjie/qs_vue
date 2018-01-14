// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import i18n from './lang'
// import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.config.productionTip = false
// Vue.use(Element, {
//   size: 'medium',
//   i18n: (key, val) => i18n.t(key, value)
// })

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   i18n,
//   components: { App },
//   template: '<App/>'
// })
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
Vue.use(Element, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
