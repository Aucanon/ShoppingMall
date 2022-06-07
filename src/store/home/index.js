import { reqCategoryList } from "@/api"

const state = {
    categoryList: [],
}

const actions = {
    //通过API里面的接口函数调用，向服务器发请求获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList.slice(0, 16)
    }
}


const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}