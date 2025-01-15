import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../Controllers/postControllers.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", getPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

export default router;
