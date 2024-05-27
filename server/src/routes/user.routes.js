import { Router } from "express";
import { verifyJWT } from "../middleWares/auth.middleware.js";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js"

const userRouter = Router()
userRouter.route('/register').post(registerUser)
userRouter.route("/login").post(loginUser)

// secured route
userRouter.route("/logout").post(verifyJWT, logoutUser)
userRouter.route("/refresh-token").post(refreshAccessToken)

export default userRouter 
