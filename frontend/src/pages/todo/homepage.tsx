
import Navbar from "../../components/navbar";
import { useForm } from "react-hook-form";
import { NoteRemove } from "iconsax-react";

type FormValues = {
  task: string;
};

function Home() {


  const form = useForm<FormValues>();
  const { register, handleSubmit } = form;


  function onsubmit() {
    console.log("Task Added");
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
          <h1 className="w-full  m-4"></h1>
          <NoteRemove size="32" variant="Bold" color="#CD201F" />
        </div>
      </div>
    </>
  );
}

export default Home;
