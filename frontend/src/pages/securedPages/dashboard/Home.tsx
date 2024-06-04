// import AddTodos from "@/components/addTodos"
import TaskCard from "@/components/taskCard";
import { Add } from "iconsax-react";
import { useState } from "react";
import DisplayTodos from "./DisplayTodos";
import SideBar from "@/components/sidebar";


function SecuredHome() {
    const [taskEditor, setTaskEditor] = useState<boolean>(false);
    const date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const getMonth = () => { return month[date.getMonth()] }

    function handleTaskAdd() {
        // console.log("Task Added")
        setTaskEditor(true)
    }

    return (
        <div className="container_todo">
            <SideBar />
            <h1 className="subtitle-text font-semibold">Today</h1>
            <h1> {getMonth()} {date.getDay()}</h1>
            <div className="my-4">
                <button
                    type="submit"
                    className="flex items-center gap-2"
                    onClick={handleTaskAdd}
                >
                    <Add size="32" color="#FF8A65" variant="Bulk" /> Add Task
                </button>
            </div>
            {taskEditor && <TaskCard setTaskEditor={setTaskEditor} />}
            <DisplayTodos />

        </div>
    )
}

export default SecuredHome
