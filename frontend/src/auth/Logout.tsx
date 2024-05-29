import { Button } from "@/components/ui/button"


export default function Logout() {
    const handleLogout = () => {
        fetch("http://localhost:5500/api/user/logout")
    }
    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    )
}


