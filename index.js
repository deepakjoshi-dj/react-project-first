import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/App";
import About from "./src/components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import RestaurantsPage from "./src/components/RestaurantsPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantsPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
