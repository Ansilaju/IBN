import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: false, unique: true, sparse: true },
  BusinessName: { type: String, required: true },
  Place: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
