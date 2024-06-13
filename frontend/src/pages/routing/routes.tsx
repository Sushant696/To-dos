import { Route, Routes } from "react-router-dom";
import Main from "../showcase/home";
import Login from "../auth/LoginForm";
import CreateAccount from "../auth/CreateAccount";
import Features from "../features";

import Pricing from "../pricing";
import ProtectedRoute from "@/components/ProtectedRoute";
import TodoHome from "../securedPages/home";
import UserProfile from "../securedPages/dashboard/Profile";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Routing() {
  useEffect(() => {
    AOS.init({
      // Your AOS config and  styling goes here
      offset: 0,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
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
          <Route path="/home" element={<TodoHome />}></Route>
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
