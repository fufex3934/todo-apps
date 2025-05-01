import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

let connection: typeof mongoose;

async function dbConnect(): Promise<typeof mongoose> {
  if (connection) {
    return connection;
  }

  connection = await mongoose.connect(MONGODB_URI!);
  return connection;
}

export default dbConnect;
