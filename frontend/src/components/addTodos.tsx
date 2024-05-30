import { useForm } from "react-hook-form"
type FromValues = {
    task: string;
}

function AddTodos() {
    const form = useForm<FromValues>();
    const { register, handleSubmit } = form;
    function onsubmit() {


    }
    return (
        <div>
            <div className="w-8/12">
                <form onSubmit={handleSubmit(onsubmit)} className="flex items-center gap-2 border">
                    <button
                        type="submit"
                        className=""
                    >
                    </button>
                    <input
                        type="text"
                        {...register("task", { required: true })}
                        required
                        placeholder="Add Task"
                        className="outline-none border-none w-full bg-transparent text-blue-900 placeholder-black"
                    />
                </form>
            </div>
        </div>
    )
}

export default AddTodos
