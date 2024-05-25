import { Button } from "@/components/ui/button"


function Home() {
    

    function handleLogout() {
        fetch("http://localhost:5500/api/user/logout", {
            method: "post",
            headers:{"Authorization":`bearer`}
        })
    }
    return (
        <div>
            welcome to this sweet todo app dear...

            <Button onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Home
