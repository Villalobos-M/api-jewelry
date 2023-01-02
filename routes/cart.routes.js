import { Router } from "express";
const router = Router();

//controllers
import { getAllCarts, createCart } from "../controllers/cart.controller.js";

router.get("/", getAllCarts);

router.post("/", createCart);

export default router;
