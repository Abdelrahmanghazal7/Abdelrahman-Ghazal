import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Portfolio from './Portfolio/Portfolio';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <App /> </div>,
  },

  {
    path: "/Portfolio",
    element: <div> <Portfolio /> </div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);

export default root;
