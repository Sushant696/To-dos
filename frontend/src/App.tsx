// import LoginForm "./components/LoginForm"

import Home from "./components/homepage";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import WorkTodos from "./components/work";
import Completedtasks from "./components/completed";
// import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/personal" element={<Home />} />
        <Route path="/work" element={<WorkTodos />} />
        <Route path="/completed" element={<Completedtasks />} />
      </Routes>
    </>
  );
}

export default App;
