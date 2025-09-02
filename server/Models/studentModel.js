import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    qualification: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
    subcourse: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
