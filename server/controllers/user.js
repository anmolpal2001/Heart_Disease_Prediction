import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

const test = (req, res) => {
  res.send("Test route");
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedpassword = bcryptjs.hashSync(password, 10);
    console.log(username, email, password, phone, hashedpassword);

    const data = await User.create({
      firstName,
      lastName,
      email,
      password: hashedpassword,
    });
    res.status(200).json({
      status: true,
    });
  } catch (err) {
    // next(err);
    // next(errorHandler(404, "User Is Not Available"));
    console.log(err);
    res.status(500).json({
      success: false,
      err: err,
      message: "Internal Server Error",
    });
  }
};

const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });

    if (!validUser) return next(errorHandler(404, "User Is Not Available"));

    console.log("he");
    const validPass = bcryptjs.compareSync(password, validUser.password);
    console.log("he");

    if (!validPass)
      return next(errorHandler(404, "Username and Password Does Not Match"));

    const { password: userPass, ...sendData } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT);

    const expiryDate = new Date((Date.now() / 1000 + 60 * 60 * 24 * 10) * 1000);
    // const expiryDate = new Date((Date.now() / 1000 + 60) * 1000);
    res
      .cookie("token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ success: true, sendData });
  } catch (err) {
    next(err);
  }
};
export { test, signup, signin };
