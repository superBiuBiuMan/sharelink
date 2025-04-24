import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
const alovaInstance = createAlova({
  baseURL: "",
  timeout: 10000,
  requestAdapter: adapterFetch(),
  // 响应拦截
  responded: {
    onSuccess: async (response, method) => {
      // 统一处理 response
      const json = await response.json();
      return json;
      // if (response.status !== 200) {
      //   // 手动抛出固定格式异常
      //   throw {
      //     code: json.code ?? "-1",
      //     message: json.message ?? "网络异常",
      //     data: null,
      //   };
      // } else {
      //   // 正常返回
      //   return {
      //     code: json.code ?? "-1",
      //     message: json.message ?? "网络异常",
      //     data: json.data ?? null,
      //   };
      // }
    },
    // 请求失败的拦截器
    // 请求错误时将会进入该拦截器。
    // 第二个参数为当前请求的method实例，你可以用它同步请求前后的配置信息
    onError: (error, method) => {
      return error;
      // return Promise.reject({
      //   code: -1,
      //   message: error.message || "网络异常",
      //   data: null,
      // });
    },
  },
});

export default alovaInstance;
