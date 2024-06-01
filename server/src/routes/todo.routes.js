import { Router } from "express";
import { addTodo, sendTodos, deleteTodos } from "../controllers/todo.controller.js"


const TodoRotuer = Router();
TodoRotuer.route("/").get()
TodoRotuer.route("/addTodo").post(addTodo)
TodoRotuer.route("/getTodo").get(sendTodos)
TodoRotuer.route("/deleteTodo").post(deleteTodos)

export default TodoRotuer