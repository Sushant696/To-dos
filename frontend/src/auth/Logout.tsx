import { Button } from "@/components/ui/button"


export default function Logout() {
    const handleLogout = () => {
        fetch("http://localhost:5500/api/user/logout", {
            method: "post"
        })
    }
    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    )
}


