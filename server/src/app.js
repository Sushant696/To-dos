import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();
// making custom cors options 


// configs using the use
// const allowedOrigins = ['https://to-dos-khaki.vercel.app/'];

const allowedOrigins = ['https://to-dos-khaki.vercel.app/', 'http://localhost:5173'];
// const allowedOrigins = ['http://localhost:5173'];
// const corsOptions = {
//     origin: function (origin, callback) {
// Check if the origin is in the allowedOrigins array or if origin is not provided (null or undefined)
//         if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// Allow the request if origin is valid or not provided (like in non-browser requests)
//             callback(null, true);
//         } else {
// Deny the request if origin is not in the allowedOrigins array
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
// };

app.use(cors(allowedOrigins));
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
