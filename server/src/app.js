import express from "express";
import cookieParser from "cookie-parser";
// import cors from "cors";
const app = express();

// CORS middleware
const cors = (req, res, next) => {
  const origin = "http://localhost:5173";
  // const origin = process.env.PRODUCTION || "https://to-dos-khaki.vercel.app";

  console.log(origin);
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
};

app.use(cors);
app.use(express.json({ limit: "16kb" })); // limiting the incomming json
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // public is folder name
app.use(cookieParser());

// router imports
import userRouter from "./routes/user.routes.js";
import TodoRotuer from "./routes/todo.routes.js";

// router declarations
app.use("/api/user", userRouter);
app.use("/api/todo", TodoRotuer);

export { app };
