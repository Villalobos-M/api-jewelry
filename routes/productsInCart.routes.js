import { Router } from "express";
const router = Router();

//controllers
import {
   getAllProductInCart,
   createProductInCart,
} from "../controllers/productsInCart.controller.js";

router.get("/", getAllProductInCart);

router.post("/", createProductInCart);

export default router;
