import { request } from "../utils/request";

//登录接口
export const loginApi = (params) =>
request.post("users/login", params);
