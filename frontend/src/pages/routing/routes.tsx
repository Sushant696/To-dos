
import { Route, Routes } from "react-router-dom";
import Main from "../home/home";
import Login from "../../auth/login";
import CreateAccount from "../../auth/CreateAccount";
import Features from "../features";
import Pricing from "../pricing";

// import LoginForm from "./components/LoginForm";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default Routing;
