import Vue from 'vue'
import Router from 'vue-router'
import bookStore from '@/pages/bookstore'
import bookShelf from '@/pages/bookshelf'
import classify from '@/pages/classify'
import subscribe from '@/pages/subscribe'
import TuiJian from '@/components/bookstore/TuiJian'
import KouWei from '@/components/bookstore/KouWei'
import MianFei from '@/components/bookstore/MianFei'
import PaiHang from '@/components/bookstore/PaiHang'
import ZhuanTi from '@/components/bookstore/ZhuanTi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/bookStore'
    },
    {
      path: '/bookStore',
      name: '书城',
      component: bookStore,
      children: [{
          path: 'tuijian',
          name: '推荐',
          component: TuiJian
        },
        {
          path: 'kouwei',
          name: '口味',
          component: KouWei
        },
        {
          path: 'mianfei',
          name: '免费',
          component: MianFei
        },
        {
          path: 'paihang',
          name: '排行',
          component: PaiHang
        },
        {
          path: 'zhuanti',
          name: '专题',
          component: ZhuanTi
        }
      ]
    },
    {
      path: '/bookShelf',
      name: '书架',
      component: bookShelf
    },
    {
      path: '/classify',
      name: '分类',
      component: classify
    },
    {
      path: '/subscribe',
      name: '订阅',
      component: subscribe
    }
  ]
})
