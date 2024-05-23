import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();
// making custom cors options 


// configs using the use
// const corsOption = {
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
// }
app.use(cors("*"))

app.use(express.json({ limit: '16kb' })) // limiting the incomming json
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public")) // public is folder name
app.use(cookieParser())

// router imports 
import userRouter from "./routes/user.routes.js";
import TodoRotuer from "./routes/todo.routes.js";


// router declarations 
app.use("/api/user", userRouter);
app.use("/api/todo", TodoRotuer);

export { app };
