import asyncHandler from "express-async-handler";
import Post from "../Model/postModel.js";

// *desc Create new Post
// route POST /api/posts
// @access Private

const createPost = asyncHandler(async (req, res) => {
  res.send("Create Post");
});

// *desc get All Posts
// route GET /api/posts
// @access Public

const getPosts = asyncHandler(async (req, res) => {
  res.send("get All Posts");
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
