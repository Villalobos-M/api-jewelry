import express, { json } from "express";
const app = express();
app.use(json());

//Router
import userRouter from "./routes/user.routes.js";
import cartRouter from "./routes/cart.routes.js";
import productRouter from "./routes/product.routes.js";
import productsInCartRouter from "./routes/productsInCart.routes.js";

//error
import globalErrorHandler from "./controllers/error.controller.js";
import AppError from "./utils/appError.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/carts", cartRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/productsInCart", productsInCartRouter);

app.use("*", (req, res, next) => {
   return next(
      new AppError(404, `${req.originalUrl} not found in this server.`),
   );
});

app.use(globalErrorHandler);

export default app;
