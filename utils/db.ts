import mongoose from "mongoose";

const connect = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MongoDB connection string is not defined");
    }

    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;