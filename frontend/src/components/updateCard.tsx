import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useUpdateTodo } from "@/hooks/useUpdateTodos";
import { CloseSquare } from "iconsax-react";

interface Task {
  id?: string;
  title: string;
  description: string;
}

type UpdateCardPropsType = {
  setEditTask: (value: boolean) => void;
  editTaskData: Task;
};

type FormData = {
  title: string;
  id: string;
  description: string;
};

export function UpdateCard({ setEditTask, editTaskData }: UpdateCardPropsType) {
  const { mutate: updateTodo, isPending } = useUpdateTodo();
  const { id, title, description } = editTaskData;

  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      title,
      description,
      id,
    },
  });

  function handleCloseMenu() {
    setEditTask(false);
  }

  const onSubmit = (data: FormData) => {
    updateTodo(data, {
      onSuccess: () => {
        reset();
        handleCloseMenu();
      },
    });
  };

  return (
    <div
      className="fixed top-0 right-0 w-[500px] h-full bg-[#F0F7FF] border transition  bg-opacity-50 z-50 p-6"
      data-aos="fade-left"
      data-aos-duration="200"
      
      // data-aos="fade-right"
      // data-aos-duration="3000"
    >
      <div className="text-left">
        <button onClick={handleCloseMenu} className="">
          <CloseSquare size="36" color="#4285F4" variant="Bulk" />
        </button>
      </div>

      <Card className=" mt-4  bg-opacity-10">
        <CardContent className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <Input
                {...register("title", { required: true })}
                id="title"
                className="placeholder:text-slate-400 placeholder:font-semibold medium-text border-b-2 rounded-none"
                placeholder="Task name"
              />
              <Input {...register("id")} id="title" type="hidden" />
              <Textarea
                {...register("description", { required: true })}
                id="description"
                className=""
                placeholder="Task description"
              />
            </div>
            <CardFooter className="flex justify-end mt-6">
              <Button 
              type="submit" 
              // color="#4285F4" 
              className="bg-[#4285F4] mt-2 text-white hover:bg-white hover:text-[#4285F4] border-[#4385f4] hover:border-[#4285F4]"

              // className="bg-[#4285F4]" 
              disabled={isPending}>
                {isPending ? "Editing" : "Edit"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
