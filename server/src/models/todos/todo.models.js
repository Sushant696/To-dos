import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {

    description: { type: String, required: true },
    title: {
      type: String,
      required: true,
      unique: true
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user", // ref from user schema (the one inside model while exporting)
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subtodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", TodoSchema);
