import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";


import { createOrder, deleteOrder, getAllOrders, getMyOrders, getOrderById,  updateOrderStatus } from "../Controllers/orderController.js";

 const router = Router();


router.route("/new").post(verifyUser, createOrder)  //done
router.route("/admin/all-orders").get(verifyUser, Admin, getAllOrders);   //done
router.route("/me").get(verifyUser, getMyOrders);   //done

router.route('/:id').get(verifyUser, getOrderById);   //done

router.route("/admin/order/:id").put(verifyUser, Admin, updateOrderStatus).delete(verifyUser, Admin, deleteOrder);



export default router;






