import Product from "../models/product.model.js";

// Post product
const createProduct = async (req, res, next) => {
   const { title, description, quantity, price, userId } = req.body;

   // if (!username || !userId || !quantity, price, userId) {
   //    return next(new AppError(404, "It is necessary to fill all the fields"));
   // }

   await Product.create({
      title,
      description,
      quantity,
      price,
      userId,
   });

   res.status(201).json({
      status: "success",
      message: "a product was created",
   });
};

// Get all products
const getAllProducts = async (req, res, next) => {
   try {
      const product = await Product.findAll({});

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

export { createProduct, getAllProducts };
