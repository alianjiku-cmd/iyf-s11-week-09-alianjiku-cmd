import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // ✅ make sure you have App.jsx in src/
import "./index.css";      // ✅ optional, for global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

