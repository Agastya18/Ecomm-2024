import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";
import { createProduct, getAllProducts, getProductById, updateProduct } from "../Controllers/productController.js";

 const router = Router();

router.route("/create-product").post(verifyUser,Admin,createProduct);
router.route("/get-product/:id").get(verifyUser,getProductById);
//router.route("/pro").get(verifyUser,getAllProducts);
router.route("/update-product/:id").put(verifyUser,Admin,updateProduct)

 
    
export default router;