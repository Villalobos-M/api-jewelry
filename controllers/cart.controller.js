import Cart from "../models/cart.model.js";

// Post cart
const createCart = async (req, res, next) => {
   const { userId } = req.body;

   // if (!username || !userId || !cartId) {
   //    return next(new AppError(404, "It is necessary to fill all the fields"));
   // }

   await Cart.create({
      userId,
   });

   res.status(201).json({
      status: "success",
      message: "a cart was created",
   });
};

// Get all carts
const getAllCarts = async (req, res, next) => {
   try {
      const cart = await Order.findAll({});

      res.status(200).json({
         status: "success",
         data: {
            cart,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

export { createCart, getAllCarts };
