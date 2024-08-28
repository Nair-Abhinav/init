import mongoose from "mongoose";

let isConnected = false;

async function connect() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://abhinavnair7404:Abc1234@cluster0.3dau0gk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    const connection = mongoose.connection;

    connection.on("connected", () => {
      isConnected = true;
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.error(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      process.exit(1);
    });
  } catch (error) {
    console.error("Something went wrong!");
    console.error(error);
  }
}

export default connect;