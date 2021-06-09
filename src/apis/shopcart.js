import { request } from "../utils/request";

//获取购物车数据
export const getShopcartApi = () => request.get('/shopcart/getShopcartData');
//秀尬死数量
export const changeNumApi = (params) => request.post('/shopcart/changeNum',params);