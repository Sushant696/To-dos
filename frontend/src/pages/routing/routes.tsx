import { Route, Routes } from "react-router-dom";
import Main from "../showcase/home";
import Login from "../auth/LoginForm";
import CreateAccount from "../auth/CreateAccount";
import Features from "../features";

import Pricing from "../pricing";
import ProtectedRoute from "@/components/ProtectedRoute";
import FetchAuthStatus from "@/utils/auth.middleware";
import SecuredHome from "../securedPages/dashboard/Home";


function Routing() {
  FetchAuthStatus();

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<SecuredHome />} />
          {/* <Route path="/home" element={<Logout />} /> */}
        </Route>
      </Routes>
    </>
  );
}


export default Routing;
