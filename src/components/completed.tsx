import { useEffect, useState } from "react";
import Navbar from "./navbar";

function Completedtasks() {
  const [tasks, setTasks] = useState<string[]>();
  
  useEffect(() => {
    const storedTasks = localStorage.getItem("DeletedTasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  console.log(tasks);

  return (
    <>
      <Navbar />
      <div>
        {tasks?.map((delTodos, key) => {
          return (
            <div key={key}>
              <h1>{delTodos}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Completedtasks;
