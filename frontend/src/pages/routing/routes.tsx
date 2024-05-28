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
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await fetch("http://localhost:5500/api/user/verifyUser", {
          credentials: 'include'
        });
        const result = await response.json();
        console.log(result.data.authentication, "result");
        dispatch(setAuth(result.data.isAuthenticated));
      } catch (error) {
        console.error("Error fetching the data from the backend", error);
        dispatch(setAuth(false));
      } 
      
    };

    fetchAuthStatus();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Features />} />
          {/* Add more protected routes here */}
        </Route>
      </Routes>
    </>
  );
}


export default Routing;
