import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const protect = async (req, res,next) => {
  try {
    const token = req.body.token || req.cookies.token || req.headers["Authorization"].split(" ")[1];
    console.log()
    if (!token || token == undefined || token == "") {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Something went wrong, while verifying token",
    });
  }
};


export default protect;