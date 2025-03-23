import dotenv from "dotenv";
import connection from "./db/connectiondb.js";
import { app } from "./app.js";

dotenv.config();
connection()
  .then(() => {
    app.listen(process.env.PORT || 5501);
    //listening to error event
    app.on("error", () => {
      console.log("error");
      throw error;
    });
    console.log("server is running at port: " + process.env.PORT);
  })
  .catch((err) => console.log("mongodb connection failed!!", err));
