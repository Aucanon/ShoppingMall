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
    //获取search模块数据   http://gmall-h5-api.atguigu.cn/api/list  post 带参数
    //当前接口传参params给服务器至少为一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

//获取detail页面数据
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

//将产品添加到购物车、获取更新某一个产品的个数
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${ skuId }/${ skuNum }`, method: 'post' })

//获取购物车数据
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

//删除购物车数据
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

//切换商品选中状态
export const reqUpdataChecked = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })