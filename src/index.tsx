import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import MyThemeProvider from "./theme/MyThemeProvider";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter or HashRouter

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MyThemeProvider>
        <Router>
          <App />
        </Router>
      </MyThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
