import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./components/HomePage.jsx";
import Timeline from "./components/Timeline.jsx";
import Stats from "./components/Stats.jsx";
import FriendDetailes from "./components/FriendDetailes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: HomePage },
      { path: "timeline", Component: Timeline },
      { path: "stats", Component: Stats },
      
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
