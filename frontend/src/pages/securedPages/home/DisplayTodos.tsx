/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { useDeleteTodo } from "@/hooks/useDeleteTodos";
import { Button } from "antd";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
// import { UpdateCard } from "@/components/updateCard";
import { UpdateCard } from "../../../components/updateCard.tsx"

interface Task {
    _id: string;
    title: string;
    description: string;
}

function DisplayTodos() {
    const [updateCard, setUpdateCard] = useState<boolean>(false)


    const useFetchTodos = async () => {
        const response = await axios.get("https://taskly-55pj.onrender.com/api/todo/getTodo", {
            withCredentials: true
        });
        return response.data.Todos;
    };

    const { data, error, isLoading } = useQuery<Task[], Error>({
        queryKey: ['todos'],
        queryFn: useFetchTodos
    });

    const { mutate: deletetodo, isPending: isDeleting } = useDeleteTodo();


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Request Failed: {error.message}</div>;

    function handleDelete(id: any) {
        deletetodo(id); // passing this to mutation function of useDeleteTodo
    }
    function handleEditTodos(title: string, description: string) {
        const data = { title, description }
        console.log("Edit todo successful", data)
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
                                    disabled={isDeleting}
                                >
                                    Delete
                                </Button>
                            </div>
                            <Button
                                className="border-none "
                                onClick={() => { handleEditTodos(task.title, task.description) }}

                            >
                                <FaEdit size={24} color="#4285F4" />
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
            {updateCard && <UpdateCard setUpdateCard={setUpdateCard} />}
        </div>
    );
}

export default DisplayTodos;
