import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
  // </React.StrictMode>
);
