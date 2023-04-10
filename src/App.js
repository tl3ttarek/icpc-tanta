// import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { RouterConfig } from "./Navigation/config";

function App() {
  return (
    <div className="App">
      <RouterProvider router={RouterConfig} />
    </div>
  );
}

export default App;
