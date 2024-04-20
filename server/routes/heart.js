import express from "express";
import { predict,getResults } from "../controllers/heart.js";
import protect from "../middlewares/protect.js";
const router = express.Router();

router.post("/predict",protect,predict);
router.get("/results",protect,getResults);

export default router;