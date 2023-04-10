import { createBrowserRouter } from "react-router-dom";
import { ROOT } from "./paths";
import { Layout } from "../Layout/Layout";
import Home from "../Pages/Home/Home";

export const RouterConfig = createBrowserRouter([
  {
    path: ROOT,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
