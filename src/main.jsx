import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./components/LandingPage.jsx";
import TestPage from "./components/TestPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import Translate from "./components/Translate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "words", Component: TestPage },
      { path: "translate", Component: Translate },
    ],
  },
  {
    path: "/words",
    element: <TestPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
