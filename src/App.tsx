import { useBaseCloudInfo } from "./utils/provider";
import { cloudsRegister } from "./cloudsRegister";
function App() {
  const { type } = useBaseCloudInfo();
  const Component = cloudsRegister[type];
  return <Component />;
}

export default App;
