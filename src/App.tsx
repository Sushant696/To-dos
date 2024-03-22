// import LoginForm "./components/LoginForm"

import Home from "./components/homepage";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
// import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
