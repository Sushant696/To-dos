/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useDeleteTodo } from "@/hooks/useDeleteTodos";
import { Button } from "antd";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { UpdateCard } from "../../../components/updateCard.tsx";

interface Task {
  _id?: string;
  title: string;
  description: string;
}

function DisplayTodos() {
  const [editTask, setEditTask] = useState<boolean>(false);
  const [editTaskData, setEditTaskData] = useState<Task>({
    title: "",
    description: "",
  });

  const useFetchTodos = async () => {
    const response = await axios.get(
      // "https://taskly-55pj.onrender.com/api/todo/getTodo",
      `${import.meta.env.VITE_BACKEND_URL}/todo/getTodo`,
      {
        withCredentials: true,
      }
    );
    return response.data.Todos;
  };

  const { data, error, isLoading } = useQuery<Task[], Error>({
    queryKey: ["todos"],
    queryFn: useFetchTodos,
  });

  const { mutate: deletetodo, isPending: isDeleting } = useDeleteTodo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Request Failed: {error.message}</div>;

  function handleDelete(id: any) {
    deletetodo(id); // passing this to mutation function of useDeleteTodo
  }
  function handleEditTodos(
    id: string | undefined,
    title: string,
    description: string
  ) {
    setEditTask(true);
    const data = { id: id ?? "", title, description };
    setEditTaskData(data);
    console.log("Edit todo successful", data);
  }

  const reverseData = data?.slice().reverse();



  return (
    <div>
      <ul className="">
        {reverseData?.map((task) => (
          <li key={task._id} className="mt-6 shadow-xl rounded-md p-4">
            <div className="flex justify-between">
              <div>
                <h2 className="medium-text font-bold">{task.title}</h2>
                <p>{task.description}</p>
                <Button
                  onClick={() => {
                    handleDelete(task._id);
                  }}
                  className="bg-[#4285F4] mt-2 text-white"
                  disabled={isDeleting}
                >
                  Completed
                </Button>
              </div>
              <Button
                className="border-none "
                onClick={() => {
                  handleEditTodos(task._id, task.title, task.description);
                }}
              >
                <FaEdit size={24} color="#4285F4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {editTask && (
        <div className="">
          <UpdateCard setEditTask={setEditTask} editTaskData={editTaskData} />
        </div>
      )}
    </div>
  );
}

export default DisplayTodos;
