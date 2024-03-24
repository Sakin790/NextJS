import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB Connected");
    });
    connection.on("error", (error) => {
      console.log("MongoDB Connection error", error);
    });
    process.exit(1);
  } catch (error) {
    console.log("Something went Wrong...!", error);
  }
}
