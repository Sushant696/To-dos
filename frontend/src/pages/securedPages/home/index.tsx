import SideMenu from "@/components/sidebar"
import SecuredHome from "../dashboard/Home"

function TodoHome() {
    return (
        <div className="flex">
            <SideMenu />
            <SecuredHome />
        </div>
    )
}

export default TodoHome
