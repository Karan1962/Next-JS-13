/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import Question from "../database/question.model";
import Tag from "../database/tag.model";
import { connectToDatabase } from "../mongoose";

interface QuestionParams {
  title: string;
  content: string;
  tags: string[];
  author: string;
  path?: string; // Assuming path is optional
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createQuestion(params: QuestionParams) {
  try {
    connectToDatabase();
    const { title, content, tags, author } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        {
          name: { $regex: new RegExp(`^${tag}$`, "i") },
        },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
  } catch (err) {
    console.log(err);
  }
}
