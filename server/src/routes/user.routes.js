import { Router } from "express";
import { verifyJWT } from "../middleWares/auth.middleware.js";

import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  verifyAccessToken,
  getUserDetails,
  updateUserProfile,
} from "../controllers/user.controller.js";
import upload from "../middleWares/multer.middlewares.js";

const userRouter = Router();
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

// secured route
userRouter.route("/logout").post(verifyJWT, logoutUser);
userRouter.route("/refresh-token").post(refreshAccessToken);
userRouter.route("/verifyUser").get(verifyJWT, verifyAccessToken);
userRouter.route("/updateUserProfile").patch(verifyJWT, upload, updateUserProfile);
userRouter.route("/getUserDetails").get(verifyJWT, getUserDetails);
// userRouter.route("/profilecomplete").get(verifyJWT, getProfileComplete);

export default userRouter;
