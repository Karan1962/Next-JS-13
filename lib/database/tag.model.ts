import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema<ITag>({
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String, required: true, trim: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }], // References related questions
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // References users who follow the tag
  createdOn: { type: Date, default: Date.now }, // Defaults to current timestamp
});
const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
