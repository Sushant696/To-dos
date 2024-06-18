import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const response = await fetch(
      // "https://taskly-55pj.onrender.com/api/user/logout"
      `${import.meta.env.VITE_BACKEND_URL}/user/logout`,

      {
        method: "post",
        credentials: "include",
      }
    );
    if (response.ok) {
      navigate("/");
    }
  };
  return <button onClick={handleLogout}>Logout</button>;
}
