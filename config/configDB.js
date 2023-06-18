import mongoose from "mongoose";

// MongoDB Connection
const mongoDBConnection = () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB conneted successfully`.bgGreen.black.bold);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black.bold);
  }
};

// export default
export default mongoDBConnection