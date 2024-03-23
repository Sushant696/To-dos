import { useState } from "react";
import Navbar from "./navbar";
import { useForm } from "react-hook-form";

type FormValues = {
  task: string;
};

function Home() {
  const [taskArray, setTaskArray] = useState<string[]>([]);
  const form = useForm<FormValues>();
  const { register, handleSubmit, reset } = form;

  function onsubmit(data: FormValues) {
    const { task } = data;
    setTaskArray([...taskArray, task]);
    console.log(taskArray);
    reset({ task: "" });
  }

  return (
    <>
      <Navbar />

      <div className=" w-full flex justify-center">
        <form onSubmit={handleSubmit(onsubmit)} className="w-[35%] flex">
          <input
            type="text"
            {...register("task", { required: true })}
            required
            placeholder="Add New Task"
            className="w-full p-4 rounded-[10px] border-opacity-30 border border-[#333] rounded-r-[0px]"
          />
          <button
            type="submit"
            className="bg-[#2667FF] text-[#ffff] px-8 py-2 rounded-[8px] border-opacity-30 border border-[#fff] rounded-l-[0px]"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
