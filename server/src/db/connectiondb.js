
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

async function connection() {
  try {
    // connection response an object
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log(`\n mongoDB is connnected !!${connectionInstance.connection}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
    process.exit(1);
  }
}
export default connection;
