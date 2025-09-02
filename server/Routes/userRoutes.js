import express from "express";
import {
  deleteUser,
  getAllUsers,
  registerUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", registerUser);
router.delete("/:id/", deleteUser);
export default router;
