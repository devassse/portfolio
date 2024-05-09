import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Suspense } from "react";
import "./i18n";
import "./index.css";
import "./responsiviness.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback="Loading ...">
      <App />
    </Suspense>
  </React.StrictMode>
);
