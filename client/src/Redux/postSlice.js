import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk("post/getAll", async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/posts");
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

export const createMyPost = createAsyncThunk(
  "post/create",
  async ({ post, navigate }) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/posts",
        post
      );
      navigate("/");
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.allPosts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////////////////////
    builder.addCase(createMyPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createMyPost.fulfilled, (state, action) => {
      state.loading = false;
      state.createdPost = action.payload;
    });
    builder.addCase(createMyPost.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default postSlice.reducer;
