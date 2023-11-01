import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import App from "../App";
import Single from "./../pages/single/Single";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

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
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);
