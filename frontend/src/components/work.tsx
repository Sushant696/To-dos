import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useForm } from "react-hook-form";
import { NoteRemove } from "iconsax-react";

type FormValues = {
  workTodo: string;
};

function WorkTodos() {
  // add todos to local storage
  const storedWorkTasks = localStorage.getItem("workTasks");
  const [workTodos, setWorkTodos] = useState<string[]>(
    storedWorkTasks ? JSON.parse(storedWorkTasks) : []
  );

  // Delete tasks todos
  const storedDeletedTasks = localStorage.getItem("DeletedTasks");
  const [deletedTasks, setDeletedTasks] = useState<string[]>(
    storedDeletedTasks ? JSON.parse(storedDeletedTasks) : []
  );

  const form = useForm<FormValues>();
  const { register, handleSubmit, reset } = form;

  // The data gives the current item that is being added in the form.
  function handleAddTask(data: FormValues) {
    const { workTodo } = data;
    setWorkTodos([...workTodos, workTodo]);
    reset({ workTodo: "" });
  }

  function handleRemoveTodos(key: number) {
    const delWorkTodos = workTodos[key];
    setDeletedTasks([...deletedTasks, delWorkTodos]);
    setWorkTodos(workTodos.filter((_, index) => index !== key));

    // setDeletedTasks()
    localStorage.removeItem(`${key}`);
    console.log("Todo will get removed now");
  }

  useEffect(() => {
    localStorage.setItem("workTasks", JSON.stringify(workTodos));
    localStorage.setItem("DeletedTasks", JSON.stringify(deletedTasks));
  });

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center flex-col items-center">
        <form onSubmit={handleSubmit(handleAddTask)} className="w-[35%] flex">
          <input
            type="text"
            {...register("workTodo", { required: true })}
            required
            placeholder="Add New Productive Tasks"
            className="w-full p-4 rounded-[10px] border-opacity-30 border border-[#333] rounded-r-[0px]"
          />
          <button
            type="submit"
            className="bg-[#2667FF] text-[#ffff] px-8 py-2 rounded-[8px] border-opacity-30 border border-[#fff] rounded-l-[0px]"
          >
            Add
          </button>
        </form>
        <div className="mt-[4rem] w-[50%]">
          {workTodos.map((toDo, key) => {
            return (
              <div
                key={key}
                className="flex items-center border p-2 m-4"
                onClick={() => {
                  // handleRemoveTodos(key);
                }}
              >
                <h1 className="w-full  font-semibold m-4">{toDo}</h1>
                <NoteRemove
                  onClick={() => {
                    handleRemoveTodos(key);
                  }}
                  size="32"
                  variant="Bold"
                  color="#CD201F"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WorkTodos;
