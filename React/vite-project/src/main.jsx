import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./global.css";
import MyApp from "./MyApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      {/* we need to wrapt the main app by BrowserRouter if we are using react-router-dom for changing the  */}
      <MyApp></MyApp>
    </BrowserRouter>
  </StrictMode>,
);
