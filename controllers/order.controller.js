import Order from "../models/order.model.js";

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
   try {
      const order = await Order.findAll({});

      res.status(200).json({
         status: "success",
         data: {
            order,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

export { createOrder, getAllOrders };
