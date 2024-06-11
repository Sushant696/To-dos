import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useUpdateTodo } from "@/hooks/useUpdateTodos";


type UpdateCardPropsType = {
    setUpdateCard: (value: boolean) => void;
};

type FormData = {
    title: string;
    description: string;
};

export function UpdateCard({ setUpdateCard }: UpdateCardPropsType) {
    const { mutate: updateTodo, isPending } = useUpdateTodo();


    const { register, handleSubmit, reset } = useForm<FormData>({
        defaultValues: {
            title: "",
            description: ""
        }
    });

    function handleCloseMenu() {
        setUpdateCard(false);
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
                        <Button type="submit" disabled={isPending}>{isPending ? "Editing" : "Edit"}</Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}

