import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import useAddTodos from "@/hooks/useAddTodos";
// import { Label } from "./ui/label";

type TaskCardProps = {
  setTaskEditor: (value: boolean) => void;
};

type FormDataProps = {
  title: string;
  description: string;
  // startDate: Date;
  // endDate: Date;
};

function TaskCard({ setTaskEditor }: TaskCardProps) {
  const { register, handleSubmit, reset } = useForm<FormDataProps>({
    defaultValues: {
      title: "",
      description: "",
      // startDate: new Date(),
      // endDate: new Date(),
    },
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
            <div className="flex flex-col gap-2">
              <Input
                {...register("title", { required: true })}
                id="title"
                required
                className="placeholder:text-slate-400 placeholder:font-semibold medium-text"
                placeholder="Task Title"
              />
              <textarea
                {...register("description", { required: true })}
                id="description"
                required
                className="outline-none placeholder:text-slate-400  medium-text h-24 resize-none p-2"
                placeholder="Task description"
              />
              {/* <div className="border border-black flex ">
                <Input
                  {...register("startDate", { required: true })}
                  id="startDate"
                  required
                  className="border m-1 w-1/5"
                  type="date"
                />
                <div className="border m-1 w-1/4">
                  <Label>End date   </Label>
                  <Input
                    {...register("endDate", { required: true })}
                    id="endDate"
                    required
                    //   className="placeholder:text-slate-400 placeholder:font-semibold medium-text"
                    type="date"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <CardFooter className="flex justify-end gap-6 mt-6">
            <Button onClick={handleCloseMenu} variant="outline">
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Adding" : "Add task"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
