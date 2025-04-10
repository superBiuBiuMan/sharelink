import { createContext, useContext } from "react";

export const BaseCloudInfo = createContext({
  name: "",
  type: "",
});

export const useBaseCloudInfo = () => {
  return useContext(BaseCloudInfo);
};
