import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'

export default [{
        name: 'pay',
        path: '/pay/',
        component: Pay,
        meta: { show: true }
    },
    {
        name: 'trade',
        path: '/trade/',
        component: Trade,
        meta: { show: true }
    },
    {
        name: 'shopCart',
        path: '/shopcart/',
        component: ShopCart,
        meta: { show: true }
    },
    {
        name: 'addCartSuccess',
        path: '/addcartsuccess/',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        name: 'detail',
        path: '/detail/:skuid?',
        component: Detail,
        meta: { show: true }
    },
    {
        name: 'home',
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    {
        path: '/',
        redirect: '/home',
        meta: { show: true }
    }
]