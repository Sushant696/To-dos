/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { useDeleteTodo } from "@/hooks/useDeleteTodos";
import { Button } from "antd";

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

    const deleteTodoMutation = useDeleteTodo();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Request Failed: {error.message}</div>;

    function handleDelete(id: any) {
        deleteTodoMutation.mutate(id);
    }

    return (
        <div>
            <ul className=''>
                {data?.map((task) => (
                    <li key={task._id} className='mt-6 shadow-xl rounded-md p-4'>
                        <h2 className='medium-text font-bold'>{task.title}</h2>
                        <p>{task.description}</p>
                        <Button
                            onClick={() => { handleDelete(task._id); }}
                            className="bg-[#4285F4] mt-2 text-white"
                        >
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayTodos;
