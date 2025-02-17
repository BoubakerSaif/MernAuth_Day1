import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../Model/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.JWT;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no Token");
  }
});

export { protect };
