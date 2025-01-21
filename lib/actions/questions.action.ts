/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { connectToDatabase } from "../mongoose";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch (err) {
    console.log(err);
  }
}
