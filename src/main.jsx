import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./pages/LandingPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Credits from "./pages/Credits.jsx";
import Words from "./pages/Words.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/words",
    element: <Words />,
  },
  {
    path: "/credits",
    element: <Credits />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
