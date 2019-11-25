const state = {
    menuItems: {},
}


const getters = {
    getMenuItems: state => state.menuItems,
}

const mutations = {
    setMenuItems(state, data) {
        // data = res.data
        state.menuItems = data;
    },
    
    removeMenuItems(state, data) {
        //遍历menuItems数组，将匹配的item从menuItems数组中删除
        state.menuItems.forEach((item, index) => {
            if (item === data) {
                state.menuItems.splice(index, 1);
            }
        })
    },

    addToMenuItems(state, data) {
        state.menuItems.push(data)
    },
}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions,
}