import express from "express";
import {
  registerUser,
  logoutuser,
  authUser,
} from "../Controllers/userControllers.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutuser);

export default router;
