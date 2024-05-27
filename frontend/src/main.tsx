import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./pages/routing/routes";
import SecuredRoutes from "./pages/routing/securedRoutes";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routing />
        <SecuredRoutes />
      </Router>
    </Provider >
  </React.StrictMode>
);
