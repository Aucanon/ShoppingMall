import { reqGetSearchInfo } from "@/api"

const state = {
    searchList: []
}

const actions = {
    //获取search模块数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }
}

const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}

//计算属性 项目中getters用来简化仓库中的数据
const getters = {
    //state为当前仓库的state
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attrsList() {
        return state.searchList.attrsList
    },
    trademarkList() {
        return state.searchList.trademarkList
    }
}


export default {
    state,
    mutations,
    actions,
    getters
}