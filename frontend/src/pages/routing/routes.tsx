import { Route, Routes } from "react-router-dom";
import Main from "../showcase/home";
import Login from "../auth/LoginForm";
import CreateAccount from "../auth/CreateAccount";
import Features from "../features";

import Pricing from "../pricing";
import ProtectedRoute from "@/components/ProtectedRoute";
import TodoHome from "../securedPages/home";


function Routing() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/home1" element={<TodoHome />} />


        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/private" element={<TodoHome />} />
        </Route>
      </Routes>
    </>
  );
}


export default Routing;
