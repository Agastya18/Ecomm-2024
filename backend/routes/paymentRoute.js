import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";

import { createPaymentIntent, t } from "../Controllers/paymentController.js";




 const router = Router();

 router.route('/t').get(t)
  router.route('/create-checkout-session').post(createPaymentIntent)






export default router;






