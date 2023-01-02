import { Router } from "express";
const router = Router();

//controllers
import { getAllOrders, createOrder } from "../controllers/order.controller.js";

router.get("/", getAllOrders);

router.post("/", createOrder);

export default router;
