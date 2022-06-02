import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//重写push、replace解决编程式导航重复点击问题
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, resolve, reject, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, resolve, reject, () => {}, () => {})
    }
}





export default new VueRouter({
    routes: [{
            name: 'home',
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            name: 'search',
            path: "/search/:keyword?",
            component: Search,
            meta: { show: true }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: '*',
            redirect: '/home',
            meta: { show: true }
        }
    ]
})