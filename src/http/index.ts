import { createAlova } from "alova";
import adapterFetch from "alova/fetch";

const alovaInstance = createAlova({
  baseURL: "",
  requestAdapter: adapterFetch(),
  responded: {
    onSuccess: async (response, method) => {
      const { shareCloud } = method.config.params || {}; // 拿到 shareCloud
      const logic = panLogicMap[shareCloud] || panLogicMap.default;
      return await logic(response);
    },
    onError: async (error) => {
      return { code: -1, message: error.message || "网络异常", data: null };
    },
  },
});

export default alovaInstance;
