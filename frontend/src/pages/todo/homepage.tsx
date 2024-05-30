
import { useForm } from "react-hook-form";

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

      <div className="">
        <form onSubmit={handleSubmit(onsubmit)} className="">
          <button
            type="submit"
            className=""
          >
            + Add
          </button>
          <input
            type="text"
            {...register("task", { required: true })}
            required
            placeholder="Add New Personal Task"
            className=""
          />
        </form>
      </div>
    </>
  );
}

export default Home;
