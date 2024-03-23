import { useEffect,useState } from "react"
import Navbar from "./navbar"

function Completedtasks() {
  const [tasks, setTasks] = useState<string[]>();
  useEffect(()=>{
    const storedTasks = (localStorage.getItem("Tasks"))
    if(storedTasks){
      setTasks(JSON.parse(storedTasks))
    }
  },[])
  console.log(tasks)
  return (
    <div>
        <Navbar/>
      
    </div>
  )
}

export default Completedtasks
