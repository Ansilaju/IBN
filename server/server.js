import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";
import rateLimit from "express-rate-limit";
import userRoutes from "./Routes/userRoutes.js";
import studentRoutes from "./Routes/studentRoutes.js";
import contactRoutes from "./Routes/contactRoutes.js";
import courseRoutes from "./Routes/courseRoutes.js";
import workshopRoutes from "./Routes/workshopRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(hpp());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use("/api", limiter);

app.use("/api/users", userRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/workshop", workshopRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
