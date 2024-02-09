import { model } from "mongoose";
import mongoose from "mongoose";
const { Schema } = mongoose;

const answerSchema = new Schema(
  {
    answerFreeText: {
      type: String,
      required: true,
    },
    answerRadio: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const answerModle = mongoose.models.answer || model("answer", answerSchema);

export default answerModle;
