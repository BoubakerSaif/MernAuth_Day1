import express from "express";
import {
  registerUser,
  logoutuser,
  authUser,
  updateUser,
} from "../Controllers/userControllers.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutuser);
router.put("/", protect, updateUser);

export default router;
