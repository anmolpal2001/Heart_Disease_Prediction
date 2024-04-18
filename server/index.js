import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.js";
import connectDB from "./config/database.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World1");
});

app.use("/api/v1/auth", userRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Some Internal Issue";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});