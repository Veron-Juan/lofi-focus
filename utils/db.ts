import mongoose from "mongoose";

const connect = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("MongoDB connection string is not defined");
    }

    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;