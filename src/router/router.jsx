import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import App from "../App";
import Single from "./../pages/single/Single";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/category/:categoryId", element: <Home /> },
      { path: "/article/:id", element: <Single /> },
    ],
  },
]);
