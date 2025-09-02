import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Qualification: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: Number, required: true },
});
export default mongoose.model("course", courseSchema);
