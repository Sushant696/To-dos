import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Todo } from "../models/todos/todo.models.js";

const addTodo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const user = req.user;
  if (!user) {
    return res.status(401).json(new ApiResponse(401, {}, "Unauthorized"));
  }

  if (!title || !description) {
    return res
      .status(400)
      .json(
        new ApiResponse(400, {}, "Todo description and title are required")
      );
  }

  await Todo.create({
    description,
    title,
    createdBy: user._id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Todo added successfully"));
});

const sendTodos = asyncHandler(async (req, res) => {
  const Todos = await Todo.find({
    createdBy: req.user._id,
  });

  res.status(200).json({ Todos });
});

const deleteTodos = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Unable to delete todos"));
  }

  const todo = await Todo.findByIdAndDelete(id);
  if (!todo) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Unable to delete todo"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Todo deleted successfully"));
});

const editTodos = asyncHandler(async (req, res) => {
  const { id, title, description } = req.body;
    if (!id || !title || !description) {
        return res
        .status(400)
        .json(new ApiResponse(400, {}, "Unable to edit todos"));
    }
    const todo = await Todo.findByIdAndUpdate(id, {
        title,
        description,
    });
  return res.json(new ApiResponse(200, {}, "Edit todos"));
});

export { addTodo, sendTodos, deleteTodos, editTodos };
