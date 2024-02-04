import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";

import { upload } from "../middleware/multer.js";
import { createOrder, deleteOrder, getAllOrders, getMyOrders, getOrderById, updateOrderStatus } from "../Controllers/orderController.js";

 const router = Router();

router.route("/order/new").post(verifyUser, createOrder)
router.route("/admin/orders").get(verifyUser, Admin, getAllOrders);
router.route("/order/me").get(verifyUser, getMyOrders);

router.route('/order/:id').get(verifyUser, getOrderById);

router.route("/admin/order/:id").put(verifyUser, Admin, updateOrderStatus).delete(verifyUser, Admin, deleteOrder);










 export default router;