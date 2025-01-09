import asyncHandler from "express-async-handler";
import User from "../Model/userModel.js";

// *desc Register new user
// route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, photo, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      age,
      photo,
      password,
    });
    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      photo: user.photo,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// *desc login user
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  res.send("Auth User");
});

// *desc logout user
// route POST /api/users/logout
// @access Public

const logoutuser = asyncHandler(async (req, res) => {
  res.send("Logout User");
});

export { registerUser, authUser, logoutuser };
