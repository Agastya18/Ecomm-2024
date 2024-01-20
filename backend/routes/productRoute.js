import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";
import { createProduct } from "../Controllers/productController.js";

 const router = Router();

router.route("/create-product").post(verifyUser,Admin,createProduct);

 
    
export default router;