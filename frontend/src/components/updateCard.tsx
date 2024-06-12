import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useUpdateTodo } from "@/hooks/useUpdateTodos";

interface Task {
    _id?: string;
    title: string;
    description: string;
}

type UpdateCardPropsType = {
    setEditTask: (value: boolean) => void;
    editTaskData: Task;
};

type FormData = {
    title: string;
    description: string;
};

export function UpdateCard({ setEditTask, editTaskData }: UpdateCardPropsType) {
    const { mutate: updateTodo, isPending } = useUpdateTodo();
    const { title, description } = editTaskData;

    const { register, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            title,
            description
        }
    });

    function handleCloseMenu() {
        setEditTask(false);
    }

    const onSubmit = (data: FormData) => {
        updateTodo(data, {
            onSuccess: () => {
                reset();
                handleCloseMenu();
            }
        });
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <Card className="w-[600px]">
                <CardContent className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-4">
                            <Input
                                {...register("title", { required: true })}
                                id="title"
                                className="placeholder:text-slate-400 placeholder:font-semibold medium-text border-b-2 rounded-none"
                                placeholder="Task name"
                            />
                            <Textarea
                                {...register("description", { required: true })}
                                id="description"
                                className=""
                                placeholder="Task description"
                            />
                        </div>
                        <CardFooter className="flex justify-end mt-6">
                            <Button onClick={handleCloseMenu} variant="outline">Cancel</Button>
                            <Button type="submit" disabled={isPending}>{isPending ? "Editing" : "Edit"}</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
