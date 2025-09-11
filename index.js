import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/App";
import About from "./src/components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./src/components/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
