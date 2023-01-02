import Order from "../models/order.model.js";

//error
import AppError from "../utils/appError.js";

// Post order
const createOrder = async (req, res, next) => {
   const { totalPrice, userId, cartId } = req.body;

   // if (!username || !userId || !cartId) {
   //    return next(new AppError(404, "It is necessary to fill all the fields"));
   // }

   await Order.create({
      totalPrice,
      userId,
      cartId,
   });

   res.status(201).json({
      status: "success",
      message: "a order was created",
   });
};

// Get all orders
const getAllOrders = async (req, res, next) => {
   const orders = await Order.findAll({
      where: {
         userId: req.currentUser.id,
         status: "active",
      },
   });

   res.status(200).json({
      status: "success",
      data: {
         orders,
      },
   });
};
// Get all orders
const getOrderById = async (req, res, next) => {
   const { id } = req.params;
   const order = await Order.findOne({
      where: {
         id,
         status: "active",
      },
   });

   if (!order) {
      return next(new AppError(404, "Cant found order, invalid ID"));
   }

   res.status(200).json({
      status: "success",
      data: {
         order,
      },
   });
};

export { createOrder, getAllOrders, getOrderById };
