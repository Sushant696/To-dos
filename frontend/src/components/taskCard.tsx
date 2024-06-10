import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";


type TaskCardProps = {
    setTaskEditor: (value: boolean) => void;
};

type FormData = {
    title: string;
    description: string;
};

function TaskCard({ setTaskEditor }: TaskCardProps) {
    const queryClient = useQueryClient();

    const { register, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            title: "",
            description: ""
        }
    });

    const postTodo = async (data: FormData) => {
        const response = await axios.post("https://taskly-55pj.onrender.com/api/todo/addTodo", {

            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        if (!response.statusText) {
            throw new Error('Failed to add todo');
        }
        return response;
    };

    const { mutate, isPending } = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })

    function handleCloseMenu() {
        setTaskEditor(false);
    }

    const onSubmit = (data: FormData) => {
        mutate(data, {
            onSuccess: () => {
                reset();
                handleCloseMenu();
            }
        });
    };

    return (
        <Card className="w-4/9 p-1">
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid w-full items-center gap-2">
                        <div className="flex flex-col">
                            <Input
                                {...register("title", { required: true })}
                                id="title"
                                className="placeholder:text-slate-400 placeholder:font-semibold medium-text"
                                placeholder="Task name"
                            />
                            <Textarea
                                {...register("description", { required: true })}
                                id="description"
                                className=""
                                placeholder="Task description"
                            />
                        </div>
                    </div>
                    <CardFooter className="flex justify-end gap-6 mt-6">
                        <Button onClick={handleCloseMenu} variant="outline">Cancel</Button>
                        <Button type="submit" disabled={isPending}>{isPending ? "Adding" : "Add task"}</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}

export default TaskCard;
