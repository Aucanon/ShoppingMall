import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import routes from './routes'

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


export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})