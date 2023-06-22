import mongoose from "mongoose";

// create schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    age: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    cell: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      default : null
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
    },
  },
  {
    timestamps: true,
  }
);

// export schema
export default mongoose.models.user || mongoose.model("user", userSchema);
