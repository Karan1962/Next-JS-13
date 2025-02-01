/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import User from "../database/user.model";
import { connectToDatabase } from "../mongoose";

export const getUserById = async (params: any) => {
  try {
    connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
