import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
