import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const MONGO_URI = <string>process.env.MONGO_URI;
  try {
    // set("strictQuery", true); we will have to set this in mongoose V7.
    await connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
}

export default dbConnect;
