Navbar
import { useForm } from "react-hook-form";
import Navbar from "../../components/navbar";
// import { NoteRemove } from "iconsax-react";

// type FormValues = {
//   workTodo: string;
// };

function WorkTodos() {


  const form = useForm();
  const { register, handleSubmit } = form;

  // The data gives the current item that is being added in the form.
  function handleAddTask() {
    // reset({ workTodo: "" });
  }
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

        </div>
      </div>
    </>
  );
}

export default WorkTodos;
