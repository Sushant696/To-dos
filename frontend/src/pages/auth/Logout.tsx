import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"


export default function Logout() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        const response = await fetch("http://localhost:5500/api/user/logout", {
            method: "post",
            credentials: "include"
        })
        if (response.ok) {
            navigate("/")
        }
    }
    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    )
}


