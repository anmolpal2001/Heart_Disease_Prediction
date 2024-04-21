import express from "express";
import {
  test,
  signup,
  signin,
  logout,
  forgetPassword,
  changePassword,
} from "../controllers/user.js";

const router = express.Router();

router.get("/test", test);
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.post("/forgot-password", forgetPassword);
router.post("/change-password/:id/:token", changePassword);

export default router;
