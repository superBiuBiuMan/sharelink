import { createContext, useContext } from "react";

export const BaseCloudInfo = createContext({
  name: "1",
  type: "2",
});

export const useBaseCloudInfo = () => {
  return useContext(BaseCloudInfo);
};
