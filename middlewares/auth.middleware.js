import pkg from "jsonwebtoken";
const { verify } = pkg;
import "dotenv/config";

// Models
import User from "../models/user.model.js";

// // Utils
// const { AppError } = require("../util/appError");
// const { catchAsync } = require("../util/catchAsync");

const validateSession = async (req, res, next) => {
   let token;

   if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
   ) {
      token = req.headers.authorization.split(" ")[1];
   }

   if (!token) {
      // return next(new AppError(401, "Invalid session"));
      return res.send("sesion invalida");
   }

   const userPayload = verify(token, process.env.JWT_SECRET);

   const user = await User.findOne({
      attributes: { exclude: ["password"] },
      where: { id: userPayload.id, status: "active" },
   });

   if (!user) {
      // return next(new AppError(401, "Invalid session"));
      return res.send("session invalida");
   }

   req.currentUser = user;

   next();
};

export { validateSession };
