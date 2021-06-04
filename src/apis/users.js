import {
  request
} from "../utils/request";

//登录接口
const loginApi = (params) => request.post("users/login", params);
const getAccountListApi = () => request.post("users/getAccountList");
const handleDeleteApi = (id) => request.delete(`users/delAccount?id=${id}`);
const addOrEditAccountApi = (params) =>
  request.post(`users/addOrEditAccount`, params);

export {
  loginApi,
  getAccountListApi,
  handleDeleteApi,
  addOrEditAccountApi
};