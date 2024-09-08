import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Header from "./components/Header";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;
