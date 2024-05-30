import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./pages/routing/routes";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routing />
          {/* <SecuredRoutes /> */}
        </Router>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
