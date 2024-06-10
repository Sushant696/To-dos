import { Router } from "express";
import { addTodo, sendTodos, deleteTodos } from "../controllers/todo.controller.js"
import { verifyJWT } from "../middleWares/auth.middleware.js";


const TodoRotuer = Router();
TodoRotuer.route("/").get()
TodoRotuer.route("/addTodo").post(verifyJWT, addTodo)
TodoRotuer.route("/getTodo").get(verifyJWT, sendTodos)
TodoRotuer.route("/deleteTodo").post(deleteTodos)

export default TodoRotuer