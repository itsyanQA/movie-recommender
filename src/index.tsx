import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style/colors.scss";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryAlert from "./components/ErrorBoundary/ErrorBoundary";
import { logError } from "./helper/ErrorBoundaryHelper";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorBoundaryAlert} onError={logError}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
