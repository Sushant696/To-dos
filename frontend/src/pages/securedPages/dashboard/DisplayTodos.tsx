
import axios from "axios";
import { useQuery } from 'react-query';


interface Task {
    id: string;
    title: string;
    description: string;
}


function DisplayTodos() {

    const useFetchTodos = async () => {
        const response = await axios.get("http://localhost:5500/api/todo/getTodo");
        return response.data.Todos;
    };

    const { data, error, isLoading } = useQuery<Task[], Error>('todos', useFetchTodos);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Request Failed: {error.message}</div>;

    return (
        <div>
            <ul className=''>
                {data?.map((task, index) => (
                    <li key={index} className='mt-5 shadow-lg rounded-md p-4'>
                        <h2 className='medium-text font-bold'>{task.title}</h2>
                        <p>{task.description}</p>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default DisplayTodos;
