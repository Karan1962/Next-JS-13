import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MISSING MONGODB URL");

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "devFlow",
    });
    isConnected = true;
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};
