
import { Route, Routes } from "react-router-dom";
import Main from "../home/home";
import Login from "../../auth/LoginForm";
import CreateAccount from "../../auth/CreateAccount";
import Features from "../features";
import { useEffect } from "react";
import Pricing from "../pricing";
import { setAuth } from "@/redux/reducers/authReducer";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useDispatch } from "react-redux";


function Routing() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticated = document.cookie.includes('accessToken'); // 
    dispatch(setAuth(isAuthenticated));

  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <ProtectedRoute path="/login" element={<Features />} />
        <Route path="/sign-up" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default Routing;



// check for cookiess
// dispatch an action setAuth(isAuthenticated)