import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

type TaskCardProps = {
    setTaskEditor: (value: boolean) => void
}

function TaskCard({ setTaskEditor }: TaskCardProps) {
    function handleCloseMenu() {
        setTaskEditor(false)
    }
    return (
        <Card className="w-4/9 p-1">
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-2">
                        <div className="flex flex-col space-y-1.5">
                            {/* <Label htmlFor="name">Task Name</Label> */}
                            <Input id="name" className="placeholder:text-slate-400 placeholder:font-semibold medium-text" placeholder="Task name" />
                            <Textarea id="description" className="" placeholder="Task description" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-6">
                <Button onClick={handleCloseMenu} variant="outline">Cancel</Button>
                <Button>Add Task</Button>
            </CardFooter>
        </Card>
    )
}

export default TaskCard