import axios from 'axios'
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
//引入store模块
import store from '@/store'


const requests = axios.create({
        // 基础路径    
        baseURL: '/api',
        // 请求超时时间
        timeout: 5000,
    })
    // 请求拦截器
requests.interceptors.request.use((config) => {
        //config:配置对象，对象内有一个重要属性，header请求头
        if (store.state.detail.uuid_token) {
            //添加一个请求头字段
            config.headers.userTempId = store.state.detail.uuid_token
        }
        //进度条开始动
        nprogress.start()
        return config
    })
    //响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到
    //进度条结束
    nprogress.done()
    return res.data
}, (err) => {
    alert(err.message)
        //响应失败的回调函数
    return Promise.reject(new Error('faile'))
})

export default requests