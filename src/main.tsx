import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TexturesProvider } from "./context/textures.tsx";
import { LandingPage } from "./pages/LandingPage/index.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TexturesProvider>
      <RouterProvider router={router} />
    </TexturesProvider>
  </React.StrictMode>
);
