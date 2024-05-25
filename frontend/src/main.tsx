import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./pages/routing/routes";
import SecuredRoutes from "./pages/routing/securedRoutes";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routing />
      <SecuredRoutes />
    </Router>
  </React.StrictMode>
);
