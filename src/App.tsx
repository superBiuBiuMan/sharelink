import { useState } from "react";
import { useBaseCloudInfo } from "./utils/provider";
import { Button } from "@mui/material";
function App() {
  const { name, type } = useBaseCloudInfo();
  const [count, setCount] = useState(0);

  return (
    <span>
      <Button variant="contained">Hello world</Button>
    </span>
  );
}

export default App;
