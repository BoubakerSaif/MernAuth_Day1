import asyncHandler from "express-async-handler";
import Post from "../Model/postModel.js";

// *desc Create new Post
// route POST /api/posts
// @access Private

const createPost = asyncHandler(async (req, res) => {
  const { title, description, photo } = req.body;
  try {
    const post = await Post.create({
      title,
      description,
      photo,
      createdBy: req.user._id,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// *desc get All Posts
// route GET /api/posts
// @access Public

const getPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find().populate("createdBy");
    res.status(200).json(posts);
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

// *desc Update Post
// route PUT /api/posts/:id
// @access Private

const updatePost = asyncHandler(async (req, res) => {
  res.send("Update Post");
});

// *desc Delete Post
// route DELETE /api/posts/:id
// @access Private

const deletePost = asyncHandler(async (req, res) => {
  res.send("Delete Post");
});

export { createPost, updatePost, getPosts, deletePost };
