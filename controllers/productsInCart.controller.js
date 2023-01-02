import ProductsInCart from "../models/productsInCart.model.js";

// Post product
const createProductInCart = async (req, res, next) => {
   const { quantity, productId, cartId } = req.body;

   // if (!cartId || !quantity, productId) {
   //    return next(new AppError(404, "It is necessary to fill all the fields"));
   // }

   await ProductsInCart.create({
      quantity,
      productId,
      cartId,
   });

   res.status(201).json({
      status: "success",
      message: "a productInCart was created",
   });
};

// Get all products
const getAllProductInCart = async (req, res, next) => {
   try {
      const product = await ProductsInCart.findAll({});

      res.status(200).json({
         status: "success",
         data: {
            product,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

export { createProductInCart, getAllProductInCart };
