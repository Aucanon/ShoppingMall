//API接口进行统一管理
import requests from "./request";

// /api/product/getBaseCategoryList get 无参数
//发送请求的返回结果是promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })