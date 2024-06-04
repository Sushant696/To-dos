// import Logout from "@/pages/auth/Logout"
import Navbar from "../../components/navbar"
import { Link } from "react-router-dom"

function Features() {
    return (
        <div>
            <Navbar />
            Here are the features of my todo application
            {/* <Logout /> */}
            <Link to={"/second"}>second</Link>
        </div>
    )
}

export default Features
