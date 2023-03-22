import React from "react";
import { createRoot } from "react-dom/client";
// TODO: Could this be causing the issues with test? (investigate)
import "regenerator-runtime/runtime";

import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
