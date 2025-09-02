import express from "express";
import {
  registerStudent,
  getAllStudents,
  deleteStudent,
} from "../Controllers/studentController.js";

const router = express.Router();

// Routes
router.post("/register", registerStudent);
router.get("/all", getAllStudents);
router.delete("/:id", deleteStudent);

export default router;
