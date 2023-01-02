import "dotenv/config";
import bcrypt from "bcryptjs";
import pkg from "jsonwebtoken";
const { sign } = pkg;

// Utils
import filterObj from "../utils/filterObj.js";

//models
import User from "../models/user.model.js";

//catchAsync
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

// Get all users
const getAllUsers = catchAsync(async (req, res, next) => {
   try {
      const user = await User.findAll({
         where: {
            status: "active",
         },
      });

      res.status(200).json({
         status: "success",
         data: {
            user,
         },
      });
   } catch (error) {
      console.log(error);
   }
});

// Post User
const createUser = catchAsync(async (req, res, next) => {
   const { username, email, password, role } = req.body;

   if (!username || !email || !password) {
      return next(new AppError(404, "It is necessary to fill all the fields"));
   }

   const salt = await bcrypt.genSalt(12);
   const hashpassword = await bcrypt.hash(password, salt);

   const newUser = await User.create({
      username,
      email,
      password: hashpassword,
      role,
   });

   newUser.password = undefined;

   res.status(201).json({
      status: "success",
      data: {
         newUser,
      },
   });
});

// Login
const logginUser = catchAsync(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await User.findOne({
      where: { email, status: "active" },
   });

   if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError(404, "Credentials are invalid"));
   }

   const token = sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
   });

   res.status(200).json({
      status: "success",
      token,
   });
});

// Update User
const updateUser = catchAsync(async (req, res, next) => {
   const { id } = req.params;
   const data = filterObj(req.body, "username", "email");

   const user = await User.findOne({
      where: {
         id,
         status: "active",
      },
   });

   if (!user) {
      return next(new AppError(404, "Cant update user, invalid ID"));
   }

   await user.update({
      ...data,
   });

   res.status(204);
});

// Delete user (soft)
const deleteUser = catchAsync(async (req, res) => {
   const { id } = req.params;

   const user = await User.findOne({
      where: {
         id: id,
         status: "active",
      },
   });

   if (!user) {
      return next(new AppError(404, "Cant delete user, invalid ID"));
   }

   // Soft delete
   await user.update({
      status: "deleted",
   });

   res.status(200).json({
      status: "success",
   });
});

export { getAllUsers, createUser, logginUser, updateUser, deleteUser };
