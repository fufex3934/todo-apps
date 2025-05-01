import { Schema, model, models } from "mongoose";
const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Todo = models.Todo || model("Todo", TodoSchema);
