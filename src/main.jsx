import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/index.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
