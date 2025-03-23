// Routing.js
import { Route, Routes } from "react-router-dom";
import Main from "../showcase/home";
import Login from "../auth/LoginForm";
import CreateAccount from "../auth/CreateAccount";
import Features from "../features";
import Pricing from "../pricing";
import ProtectedRoute from "@/components/ProtectedRoute";
import TodoHome from "../securedPages/home";
import ProfileForm from "../securedPages/dashboard/ProfileForm";
import Calender from "../securedPages/calendar";
import Inbox from "../securedPages/Inbox";
import Notes from "../securedPages/Notes";
import Setting from "../securedPages/setting";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../securedPages/layout";

function Routing() {
  useEffect(() => {
    AOS.init({
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
          <Route element={<Layout />}>
            <Route path="/home" element={<TodoHome />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
