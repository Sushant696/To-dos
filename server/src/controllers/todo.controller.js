import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Todo } from "../models/todos/todo.models.js";


const addTodo = asyncHandler(async (req, res) => {
    const { title, description } = req.body
    console.log(req.body)
    // if the todos are valid then save them to database
    // then create a get request to make todo avaliable to the frontend then map it and make use of that complete to mark the todo as 

    if (!title || !description) {
        return res.status(400).json(new ApiResponse(400, {}, "Todo description and title are required"))
    }

    const todoSaveToDb = Todo.create({
        description,
        title
    })

    return res.status(200).json((new ApiResponse(200, {}, "Todo added successfully")))
})

const sendTodos = asyncHandler(async (req, res) => {
    const Todos = await Todo.find({}) // database call always use the await keyword
    // res.send({ Todos })
    res.status(200).json({ Todos })
})


const deleteTodos = asyncHandler(async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json(new ApiResponse(400, {}, "Unable to delete todos"));
    }

    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
        return res.status(404).json(new ApiResponse(404, {}, "Unable to delete todo"));
    }

    return res.status(200).json(new ApiResponse(200, {}, "Todo deleted successfully"));
});

export { addTodo, sendTodos, deleteTodos }