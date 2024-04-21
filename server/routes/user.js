import express from "express";
import {
  test,
  signup,
  signin,
  logout,
  forgetPassword,
  changePassword,
  updatePassword
} from "../controllers/user.js";
import protect from "../middlewares/protect.js";
const router = express.Router();

router.get("/test", test);
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", logout);
router.post("/forgot-password", forgetPassword);
router.post("/change-password/:id/:token", changePassword);
router.post('/profile',protect,updatePassword)

export default router;
