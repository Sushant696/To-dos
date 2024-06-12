import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import useAddTodos from "@/hooks/useAddTodos";

type TaskCardProps = {
    setTaskEditor: (value: boolean) => void;
};

type FormDataProps = {
    title: string;
    description: string;
};

function TaskCard({ setTaskEditor }: TaskCardProps) {
    const { register, handleSubmit, reset } = useForm<FormDataProps>({
        defaultValues: {
            title: "",
            description: ""
        }
    });

    const { mutate, isPending } = useAddTodos();

    function handleCloseMenu() {
        setTaskEditor(false);
    }

    const onSubmit = (data: FormDataProps) => {
        mutate(data, {
            onSuccess: () => {
                reset();
                handleCloseMenu();
            },
            onError: (error) => {
                console.error("Mutation error occurred:", error);
            },
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
                                required
                                className="placeholder:text-slate-400 placeholder:font-semibold medium-text"
                                placeholder="Task name"
                            />
                            <Textarea
                                {...register("description", { required: true })}
                                id="description"
                                required
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
