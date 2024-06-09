import SideMenu from "@/components/sidebar"
import SecuredHome from "./Home"

function TodoHome() {
    return (
        <div className="flex">
            <SideMenu />
            <SecuredHome />
        </div>
    )
}

export default TodoHome
