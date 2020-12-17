import axios from "axios";
import qs from "qs";

// import {
//   Toast
// } from 'mint-ui'

// create an axios instance
const service = axios.create({
  //   baseURL: "/api", // url = base url + request url
  // type: "formData",
  baseURL: "http://121.4.58.185:3000/", // url = base url + request url
  timeout: 20000, // request timeout
});
// service.interceptors.request.use(
//   (config) => {
//     console.log(service);
//     console.log(config.method);
//     console.log(service.prototype.toString.call(config.data));
//     console.log(config);
//     // 如果不是FormData类型，且为post请求，则进行数据的序列化
//     if (
//       Object.prototype.toString.call(config.data) !== "[object FormData]" &&
//       config.method === "post"
//     ) {
//       // 请求拦截器处理
//       console.log(config.data);

//       config.data = qs.stringify(config.data);
//       console.log(config.data);
//     }
//     console.log(config);
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
// request interceptor
service.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    return res;
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //     // if (res.code == 50000) {
    //     //   return res
    //     // }
    //     // Toast({
    //     //   message: res.msg || '出错了',
    //     //   position: 'bottom',
    //     //   duration: 2000
    //     // });

    //     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //     return;
    //     return Promise.reject(new Error(res.msg || 'Error'))
    // } else {
    // return res;
    // }
  },
  (error) => {
    console.log("11111111111111", error); // for debug

    // Toast({
    //   message: error.msg,
    //   iconClass: 'icon icon-error',
    //   duration: 2 * 1000
    // })
    return Promise.reject(error);
    // alert(error);
  }
);

export default service;
