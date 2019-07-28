// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 重置页面样式表，解决在不同手机浏览器上默认的样式是不统一的
import 'styles/reset.css'
// 解决1像素边框在多倍屏中显示成多倍像素问题
import 'styles/border.css'
// 移动端300ms点击延迟问题,某些机型某些浏览器上当使用click事件时会延迟300ms才执行
// 在项目根目录下，执行npm install fastclick --save
import fastClick from 'fastclick'
// 引入小图标
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
