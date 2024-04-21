import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";

const test = (req, res) => {
  res.send("Test route");
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if ((!firstName, !lastName, !email, !password)) {
      return next(errorHandler(404, " All Detail Required"));
    }

    const hashedpassword = bcryptjs.hashSync(password, 10);
    console.log(firstName, email, password, lastName);

    const alreadyPresent = await User.findOne({ email });
    if (alreadyPresent) {
      return next(errorHandler(404, "User Already present"));
    }

    const data = await User.create({
      firstName,
      lastName,
      email,
      password: hashedpassword,
      profilePic: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}+${lastName}`,
    });
    data.password = null;
    res.status(200).json({
      success: true,
      data: data,
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

    const validPass = bcryptjs.compareSync(password, validUser.password);
    console.log(`email:${email} password:${password}`);

    if (!validPass)
      return next(errorHandler(404, "Username and Password Does Not Match"));

    const { password: userPass, ...sendData } = validUser._doc;

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const expiryDate = new Date((Date.now() / 1000 + 60 * 60 * 24 * 10) * 1000);
    // const expiryDate = new Date((Date.now() / 1000 + 60) * 1000);
    res
      .cookie("token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json({ success: true, sendData, token });
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "Logout Successfully, Thanks for visiting...",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Logout failed, please try again",
    });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({
        success: false,
        message: "User is not available",
      });
    }
    const payload = {
      id: validUser._id,
      email,
    };

    const token = jwt.sign(payload, process.env.CHANGE_PASSWORD_SECRET, {
      expiresIn: "5m",
    });

    const linkForChangePassword = `${process.env.CLIENT_URL}/reset-password/${validUser._id}/${token}`;
    console.log(linkForChangePassword);
    await sendMail(email, "Reset Password", linkForChangePassword);
    return res.status(200).json({
      success: true,
      message: "Link for change password has been sent to your email",
      linkForChangePassword,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error while sending link for change password, please try again",
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const { id, token } = req.params;
    const { newPassword, confirmNewPassword } = req.body;

    const validUser = await User.findById(id);
    if (!validUser) {
      return res.status(404).json({
        success: false,
        message: "User is not available",
      });
    }
    const payload = jwt.verify(token, process.env.CHANGE_PASSWORD_SECRET);

    if (!payload) {
      return res.status(400).json({
        success: false,
        message: "Link is invalid or expired",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password does not match",
      });
    }

    const hashedpassword = bcryptjs.hashSync(newPassword, 10);
    validUser.password = hashedpassword;
    await validUser.save();

    return res.status(200).json({
      success: true,
      message: "Password has been changed successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error while changing password, please try again",
    });
  }
};

export { test, signup, signin, logout, forgetPassword, changePassword };
