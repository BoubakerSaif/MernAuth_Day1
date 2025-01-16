import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCredentials } from "./authSlice";
import { toast } from "react-toastify";
export const singUp = createAsyncThunk(
  "user/signup",
  async ({ user, navigate }) => {
    axios.defaults.withCredentials = true;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users",
        user
      );
      if (data) {
        navigate("/");
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const singIn = createAsyncThunk(
  "user/signin",
  async ({ user, navigate }, { dispatch }) => {
    axios.defaults.withCredentials = true;

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/auth",
        user
      );
      dispatch(setCredentials(data));
      if (data) {
        navigate("/");
      }
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async ({ user, navigate }) => {
    try {
      const { data } = await axios.put("http://localhost:5000/api/users", user);
      if (data) {
        toast.success("Profile updated Successfully");
        navigate("/");
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logoutUser = createAsyncThunk("user/logout", async (navigate) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/users/logout");
    navigate("/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(singUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(singUp.fulfilled, (state, action) => {
      state.loading = false;
      state.createdUser = action.payload;
    });
    builder.addCase(singUp.rejected, (state) => {
      state.loading = false;
    });
    ///////////////////////////////////////////////////////////
    builder.addCase(singIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(singIn.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(singIn.rejected, (state) => {
      state.loading = false;
    });
    //////////////////////////////////////////////////////////
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.updatedUser = action.payload;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false;
    });
    /////////////////////////////////////////////////////////////////
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.logoutedUser = action.payload;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
