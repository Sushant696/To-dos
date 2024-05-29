import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/reducers/authReducer";

// const [loading, setLoading] = useState(true);

const FetchAuthStatus = async () => {
  const dispatch = useDispatch();
  try {
    const response = await fetch("http://localhost:5500/api/user/verifyUser", {
      credentials: "include",
    });
    const result = await response.json();
    console.log(result.data.authentication, "result");
    localStorage.setItem("authStatus", result.data.isAuthenticated);
    dispatch(setAuth(result.data.isAuthenticated));
  } catch (error) {
    console.error("Error fetching the data from the backend", error);
    dispatch(setAuth(false));
  }
};

export default FetchAuthStatus;
