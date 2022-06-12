import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api"

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
}

const actions = {
    //通过API里面的接口函数调用，向服务器发请求获取服务器数据
    //获取三级列表数据
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    //获取首页轮播图
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    //获取floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList()
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
}

//mutations 是唯一修改state的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList.slice(0, 16)
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}


const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}