import { Button } from "@/components/ui/button"


function Home() {


    async function handleLogout() {
        const response = await fetch("http://localhost:5500/api/user/logout", {
            method: "post",
            // headers:{"Authorization":`bearer`}
        })
        console.log(response)
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
