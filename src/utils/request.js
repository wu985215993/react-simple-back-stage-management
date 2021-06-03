import axios from "axios";

export const request = axios.create({
  baseURL: "http://jacklv.cn",
});

/* 请求拦截器 */
request.interceptors.request.use(
  (req) => {
      return req
  },
  (err) => {
    return Promise.reject(err);
  }
);
/* 响应拦截器 */
request.interceptors.response.use(
  /* 参数一拦截成功的回调 
   参数res就是拦截的数据 返回值就是给到页面的数据
    参数二拦截失败的回调 */
  (res) => {
    if (res.data.code === 1) {
      return res.data.data;
    } else {
      return Promise.reject(res);
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);
