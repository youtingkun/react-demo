import "./App.css";
import { useRoutes } from "react-router-dom";
import { useRoutesData } from "@/routes";

function App() {
  const routes = useRoutesData();

  let element = useRoutes(routes);
  return element;
}

export default App;
