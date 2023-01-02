import { Router } from "express";
const router = Router();

//controllers
import {
   getAllUsers,
   createUser,
   logginUser,
   updateUser,
   deleteUser,
} from "../controllers/user.controller.js";

import { getAllOrders, getOrderById } from "../controllers/order.controller.js";

//middlewares
import { validateSession } from "../middlewares/auth.middleware.js";

router.post("/", createUser);
router.post("/loggin", logginUser);
router.get("/", validateSession, getAllUsers);
router.patch("/:id", validateSession, updateUser);
router.delete("/:id", validateSession, deleteUser);

router.get("/orders", validateSession, getAllOrders);
router.get("/orders/:id", validateSession, getOrderById);

export default router;
