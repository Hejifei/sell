// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App'
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import "common/stylus/index.styl"

// 注册
Vue.use(VueRouter);
Vue.use(VueResource);

//定义路由，每个路由器应该映射一个组件。其中component可以是通过Vue.extend()创建的组件构造器，或者只是一个组件配置对象
const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];
//创建router实例,然后传routes配置
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
//创建和挂载根实例,通过router配置参数注入路由,从而让整个应用都有路由功能.
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});