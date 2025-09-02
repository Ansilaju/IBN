import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
});

export default mongoose.model("Workshop", workshopSchema);
