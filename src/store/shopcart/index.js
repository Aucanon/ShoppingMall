import { reqCartList } from "@/api";

const state = {}

const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList()
        console.log(result);
    }
}

const mutations = {}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}