import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useForm } from "react-hook-form";
import { NoteRemove } from "iconsax-react";

type FormValues = {
  task: string;
};

function Home() {
  const storedTasks = localStorage.getItem("Tasks");
  const [taskArray, setTaskArray] = useState<string[]>(
    storedTasks ? JSON.parse(storedTasks) : []
  );
  const storedDeletedTasks = localStorage.getItem("DeletedTasks");
  const [deletedTasks, setDeletedTasks] = useState<string[]>(
    storedDeletedTasks ? JSON.parse(storedDeletedTasks) : []
  );

  const form = useForm<FormValues>();
  const { register, handleSubmit, reset } = form;

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(taskArray));
    localStorage.setItem("DeletedTasks", JSON.stringify(deletedTasks));
  }, [taskArray, deletedTasks]);

  function onsubmit(data: FormValues) {
    const { task } = data;
    setTaskArray([...taskArray, task]);
    console.log(taskArray);
    reset({ task: "" });
  }

  function handleRemoveTodos(key: number) {
    const delTodos = taskArray[key];
    setTaskArray(taskArray.filter((_, i) => i !== key));
    setDeletedTasks((prevDelTasks) => [...prevDelTasks, delTodos]);
    console.log(delTodos);
  }

  return (
    <>
      <Navbar />

      <div className=" w-full flex justify-center flex-col items-center">
          <form onSubmit={handleSubmit(onsubmit)} className="w-[35%] flex">
            <input
              type="text"
              {...register("task", { required: true })}
              required
              placeholder="Add New Personal Task"
              className="w-full p-4 roundedd-[10px] border-opacity-30 border border-[#333] rounded-r-[0px]"
            />
            <button
              type="submit"
              className="bg-[#2667FF] text-[#ffff] px-8 py-2 rounded-[8px] border-opacity-30 border border-[#fff] rounded-l-[0px]"
            >
              Add
            </button>
          </form>
        <div className="mt-[4rem] w-[40%]">
          {taskArray.map((toDo, key) => {
            return (
              <div
                key={key}
                className="flex items-center border p-2 m-4"
                onClick={() => {
                  handleRemoveTodos(key);
                }}
              >
                <h1 className="w-full  m-4">{toDo}</h1>
                <NoteRemove size="32" variant="Bold" color="#CD201F" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
