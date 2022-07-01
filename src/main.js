import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import { MessageBox } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import '@/plugins/validate'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert



Vue.config.productionTip = false

const loadimage = require('./assets/load.gif')

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: loadimage
})

new Vue({
    render: h => h(App),
    //配置全局事件总线$bud
    beforeCreate() {
        Vue.prototype.$bus = this
        Vue.prototype.$API = API
    },
    router,
    //注册仓库，实例对象多一个$store属性
    store
}).$mount('#app')