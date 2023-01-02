import { Router } from "express";
const router = Router();

//controllers
import {
   getAllProducts,
   createProduct,
} from "../controllers/product.controller.js";

router.get("/", getAllProducts);

router.post("/", createProduct);

export default router;
