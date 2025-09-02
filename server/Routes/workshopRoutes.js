import express from "express";
import { bookWorkshop } from "../Controllers/workshopController.js";

const router = express.Router();

router.post("/book", bookWorkshop);

export default router;
