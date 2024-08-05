import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import App from "./App";

//1 - setup router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Creating a router instance with route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root element that includes layout and nested routes
    children: [
      {
        path: "/",
        element: <Home />, // Home page route
      },
      {
        path: "/home",
        element: <Home />, // Home page route (alias)
      },
      {
        path: "about",
        element: <About />, // About page route
      },
      {
        path: "portfolio",
        element: <Portfolio />, // Portfolio page route
      },
      {
        path: "contact",
        element: <Contact />, // Contact page route
      },
    ],
  },
]);

// Rendering the application into the DOM with routing configuration
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
