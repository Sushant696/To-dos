import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/reducers/authReducer";

// const [loading, setLoading] = useState(true);

const FetchAuthStatus = async () => {
  const dispatch = useDispatch();
  try {
    const response = await fetch("http://localhost:5500/api/user/verifyuser", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("response", response);
    const result = await response.json();
    localStorage.setItem("authStatus", result.data.isAuthenticated);

    dispatch(setAuth(result.data.isAuthenticated));
  } catch (error) {
    console.error("Error fetching the data from the backend", error);
    dispatch(setAuth(false));
  }
};

export default FetchAuthStatus;
8;
