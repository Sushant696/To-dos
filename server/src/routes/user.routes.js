import { Router } from "express";
import { verifyJWT } from "../middleWares/auth.middleware.js";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js"

const userRouter = Router()
userRouter.route('/register').post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/logout").post(verifyJWT, logoutUser)

export default userRouter 
