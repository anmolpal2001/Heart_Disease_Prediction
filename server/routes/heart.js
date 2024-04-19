import express from "express";
import { predict } from "../controllers/heart.js";
import protect from "../middlewares/protect.js";
const router = express.Router();

router.post("/predict",protect,predict);

export default router;