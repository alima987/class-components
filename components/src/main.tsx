import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { store } from './redux/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store = {store}>
    <RouterProvider router={router} />
  </Provider>,
);
