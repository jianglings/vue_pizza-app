import Vue from 'vue'
import Vuex from 'vuex'

import menuItems from './module/menuItems.js'
import users from './module/users.js'
import status from './module/status.js'

Vue.use(Vuex)

// 记住将store 在vue实例中应用
export const store = new Vuex.Store({
    modules: {
        menuItems,
        users,
        status,
    }
    // state: {
    //     // 设置属性
    // },

    // getters: {
    //     // 获取属性状态
    // },

    // mutations: {
    //     // 改变属性状态
    // },

    // actions: {
    // }
})