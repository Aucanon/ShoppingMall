//API接口进行统一管理
import requests from "./request";
import mockRequest from './mockRequest'

// /api/product/getBaseCategoryList get 无参数
//发送请求的返回结果是promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

//获取首页轮播图接口
export const reqGetBannerList = () => mockRequest.get('/banner')
    //获取floor数据
export const reqFloorList = () => mockRequest.get('/floor')