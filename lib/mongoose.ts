import mongoose from "mongoose";

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MISSING MONGODB URL");

  if (mongoose.connection.readyState >= 1) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "devFlow",
    });
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};
