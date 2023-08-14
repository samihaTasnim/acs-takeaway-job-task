import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./error";
import Success from "./pages/Success";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/success-story",
    element: <Success/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about-us",
    element: <Aboutus/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
