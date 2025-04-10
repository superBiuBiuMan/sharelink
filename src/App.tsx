import { useState } from "react";
import { useBaseCloudInfo } from "./utils/provider";
function App() {
  const { name, type } = useBaseCloudInfo();
  const [count, setCount] = useState(0);

  return (
    <span>
      你好,世222界
      {name}
      {type}
    </span>
  );
}

export default App;
