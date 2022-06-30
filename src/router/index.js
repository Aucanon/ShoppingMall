import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import routes from './routes'
import store from '@/store'

//重写push、replace解决编程式导航重复点击问题
// let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// VueRouter.prototype.push = function(location, resolve, reject) {
//     if (resolve && reject) {
//         originPush.call(this, location, resolve, reject)
//     } else {
//         originPush.call(this, resolve, reject, () => {}, () => {})
//     }
// }
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, resolve, reject, () => {}, () => {})
    }
}


let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

router.beforeEach(async(to, from, next) => {
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效
                    store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        //未登录
        next()
    }
})

export default router