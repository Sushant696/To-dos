import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from 'react-query';

type TaskCardProps = {
    setTaskEditor: (value: boolean) => void
}
type formData = {
    title: string
    description: string
}

function TaskCard({ setTaskEditor }: TaskCardProps) {

    const queryClient = useQueryClient();

    const { register, handleSubmit, reset } = useForm<formData>({
        defaultValues: {
            title: "",
            description: ""
        }
    });

    const mutation = useMutation(
        async (data: formData) => {
            const response = await fetch("http://localhost:5500/api/todo/addTodo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            return response.json();
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries('todos');
            },
        }
    );

    function handleCloseMenu() {
        setTaskEditor(false);
    }

    async function onSubmit(data: formData) {
        mutation.mutate(data);
        reset();
        handleCloseMenu();
    }

    return (
        <Card className="w-4/9 p-1">
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid w-full items-center gap-2">
                        <div className="flex flex-col">
                            <Input {...register("title", { required: true })} id="name" className="placeholder:text-slate-400 placeholder:font-semibold medium-text" placeholder="Task name" />
                            <Textarea {...register("description", { required: true })} id="description" className="" placeholder="Task description" />
                        </div>
                    </div>
                    <CardFooter className="flex justify-end gap-6 mt-6">
                        <Button onClick={handleCloseMenu} variant="outline">Cancel</Button>
                        <Button type="submit">Add Task</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}

export default TaskCard;
