import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/App";
import About from "./src/components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantsPage from "./src/components/RestaurantsPage";

const Instamart = lazy(() => import("./src/components/Instamart"));
const Body = lazy(() => import("./src/components/Body"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Body />
          </Suspense>
        ),
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
