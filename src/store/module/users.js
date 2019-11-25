const state = {
    currentUser: null,

}


const getters = {
    currentUser: state => state.currentUser,

}

const mutations = {
    userStatus(state, user) {
        // 更改用户状态信息
        if (user) {
            state.currentUser = user;
            state.isLogin = true;
        } else {
            state.currentUser = null;
            isLogin = false
        }
    },
}

const actions = {
    setUser({ commit }, user) {
        commit("userStatus", user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}