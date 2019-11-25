import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import axios from 'axios'
import { store } from './store/store.js'


Vue.use(VueRouter);

// 配置默认根路径
axios.defaults.baseURL = "https://pizza-app-8b5f5.firebaseio.com/"

// 配置Vue原型
Vue.prototype.$axios = axios;

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
