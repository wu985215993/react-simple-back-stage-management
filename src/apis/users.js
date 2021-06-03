import { request } from "../utils/request";

//登录接口
export const loginApi = (params) => request.post("users/login", params);
export const getAccountListApi = () => request.post("users/getAccountList");
export const handleDeleteApi = (id) => {
  request.delete(`users/delAccount?id=${id}`);
};
export const addOrEditAccountApi = (params) => {
  request.post(`users/addOrEditAccount`, params);
};
