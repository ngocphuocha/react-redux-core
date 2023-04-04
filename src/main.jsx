import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
const JSON_URL = import.meta.env.VITE_JSON_URL;

axios.defaults.baseURL = JSON_URL;
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Users from "./pages/Users";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./store/reducers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users/:userId",
    element: <Users />,
  },
]);

const store = createStore(allReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
