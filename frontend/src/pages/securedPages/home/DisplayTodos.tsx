/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { useDeleteTodo } from "@/hooks/useDeleteTodos";
import { Button } from "antd";
import { FaEdit } from "react-icons/fa";
interface Task {
    _id: string;
    title: string;
    description: string;
}

function DisplayTodos() {

    const useFetchTodos = async () => {
        const response = await axios.get("https://taskly-55pj.onrender.com/api/todo/getTodo");
        return response.data.Todos;
    };

    const { data, error, isLoading } = useQuery<Task[], Error>({
        queryKey: ['todos'],
        queryFn: useFetchTodos
    });

    const { mutate, isPending } = useDeleteTodo();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Request Failed: {error.message}</div>;

    function handleDelete(id: any) {
        mutate(id);
    }
    function handleEditTodos(id: string) {
        console.log("Edit todo successful", id)
    }

    return (
        <div>
            <ul className=''>
                {data?.map((task) => (

                    <li key={task._id} className='mt-6 shadow-xl rounded-md p-4'>
                        <div className="flex justify-between">

                            <div>

                                <h2 className='medium-text font-bold'>{task.title}</h2>
                                <p>{task.description}</p>
                                <Button
                                    onClick={() => { handleDelete(task._id); }}
                                    className="bg-[#4285F4] mt-2 text-white"
                                    disabled={isPending}
                                >
                                    Delete
                                </Button>
                            </div>
                            <Button
                                className="border-none "
                                onClick={() => { handleEditTodos(task._id) }}
                            >
                                <FaEdit size={24} color="#4285F4" />
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayTodos;
