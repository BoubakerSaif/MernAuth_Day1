import asyncHandler from "express-async-handler";
import User from "../Model/userModel.js";
import generateToken from "../Utils/generateToken.js";

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
    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        photo: user.photo,
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});

// *desc login user
// route POST /api/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(200).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        photo: user.photo,
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    throw new Error(error);
  }
});

// *desc logout user
// route POST /api/users/logout
// @access Public

const logoutuser = asyncHandler(async (req, res) => {
  res.cookie("JWT", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "User Logged Out" });
});

// *desc Update user
// route PUT /api/users
// @access Private

const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, password, photo } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.email = email || user.email;
      user.age = age || user.age;
      user.password = password || user.password;
      user.photo = photo || user.photo;
      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});

export { registerUser, authUser, logoutuser, updateUser };
