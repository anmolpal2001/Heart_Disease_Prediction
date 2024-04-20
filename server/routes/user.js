import express from "express";
import { test, signup, signin, logout } from "../controllers/user.js";

const router = express.Router();

router.get("/test", test);
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout",logout);

export default router;