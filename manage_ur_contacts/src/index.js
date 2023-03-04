import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./globalStyle";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
