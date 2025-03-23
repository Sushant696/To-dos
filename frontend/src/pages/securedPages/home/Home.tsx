// import AddTodos from "@/components/addTodos"
import TaskCard from "@/components/taskCard";
import { Add } from "iconsax-react";
import { useState } from "react";
import DisplayTodos from "./Todos";

function SecuredHome() {
  const [taskEditor, setTaskEditor] = useState<boolean>(false);
  const date = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getMonth = () => {
    return month[date.getMonth()];
  };

  function handleTaskAdd() {
    setTaskEditor(true);
  }
  console.log(date.getDate());
  return (
    <div className="container_todo mt-8">
      <h1 className="subtitle-text font-semibold">Today</h1>
      <h1>
        {" "}
        {getMonth()} {date.getDate()}
      </h1>
      <div className="my-4">
        <button
          type="submit"
          className="flex items-center gap-2"
          onClick={handleTaskAdd}
        >
          <Add size="32" color="#4285F4" variant="Bulk" /> Add Task
        </button>
      </div>
      {taskEditor && <TaskCard setTaskEditor={setTaskEditor} />}
      <DisplayTodos />
    </div>
  );
}

export default SecuredHome;
