import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)




Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    //注册仓库，实例对象多一个$store属性
    store
}).$mount('#app')