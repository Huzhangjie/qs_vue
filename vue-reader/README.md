# vue-reader

> 仿网易云阅读

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 看到徐玲同学的项目 使用readme记录每一天的进度 这里我也记录一下 ^-^

## 先说一下目前已经完成的部分 （截止至2018.01.27 10:00pm）

* 4个大的页面 书城 分类 书架 订阅
  * 每页的顶部左上角都是头像 点击头像从左边有一个抽屉式菜单
  * 除了头像 顶部右边和中间的组件是不同的
  * 我的解决方案就是 头像组件占据整个宽度 fixed在顶部 
    同级还有一个等高的div占据位置，防止内容浮上去

* 底部有个tabbar 已经使用路由router-link到了对应的page组件 
  * router-link 点击后会自动有一个 router-link-active的样式 这里遇到一个`bug` (将路由重定向首页到书城页面时，router-link-active的样式没被激活，需要点击后才可以  `-.-!!` )

* 书城的子路由的`tuijian.vue`(原谅我随意的取名)，没部分一次展示6本书，一开始使用float,导致下面的部分就开始搞事情，给我出乱子。后来发现使用grid网格布局简直完美。

* 书城和分类共用的`男生-女生-出版`的`HeaderTab.vue`组件，顶部右侧的搜索，目录，加号等各自就属于对应的页面所使用到的了

* 数据方面，目前的数据还全都是在本组件中写死的，或者是父组件传过来的(还是写死的)。想的是先将页面做的差不多，再去使用axios,Vuex去获取数据和数据的处理，状态的改变。所以，其实组件间的点击事件我都还没有去写。先挖个坑在那把。

## 一切不以下雪为目的的降温，都是耍流氓(哼，题外话)

----------

### Day 1 （2018.01.29）

* 今天开始动手去处理后台数据的设计

*  引入`Vuex`去统一管理组件的状态
*  将之前设置在`tuijian.vue`中的data给剥离出来，写到了api文件夹中，但是这个各个页面的状态，数据的模块还没想好怎么去划分开。数据的结构也没想好。
*  现在的数据的结构还是处于一个实验状态，只是为了熟悉`vuex`的调用action，触发mutation去改变state的一个步骤。
*  在去获取数据时其中遇到一个问题
> action中使用commit去告诉mutations修改状态，我本以为commit中使用的参数的名字是可以和对应的mutation的第二个参数(第一个为state)不同的，但是<h3>我错了
```javascript
	// action中调用
	commit(types.RECEIVE_BOOKS, {rdbks})
	
	// mutations 中要参数相同
	[types.RECEIVE_BOOKS] (state, {rdbks}) {
	    state.recomend_books = rdbks
	}
```
----------

### Day 2 （2018.01.30）

* 发现点击到其他路由在切回`tuijian`路由时，其中的组件是重新创建过的。因为渲染上去的数据请求时写在组件的`created`生命周期函数中的，意味着每次切换都会消耗资源
* 搜索过后找的解决方法，在包含对应组建的`router-view`外使用`keep-alive`包裹着，组件就会被缓存到内存中。`keep-alive`还有许多的配置属性:`include`,`exclude`等

#### 今晚下雪啦^-^