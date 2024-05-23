import { Router } from "express";
import { addTodo, sendTodos } from "../controllers/todo.controller.js"


const TodoRotuer = Router();
TodoRotuer.route("/").get()
TodoRotuer.route("/addTodo").post(addTodo)
TodoRotuer.route("/getTodo").get(sendTodos)

export default TodoRotuer