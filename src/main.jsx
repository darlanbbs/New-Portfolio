import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import { MyHeader } from "./components/Header";
import Router from "./components/Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <MyHeader />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
