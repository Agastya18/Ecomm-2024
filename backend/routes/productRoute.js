import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../Controllers/productController.js";

 const router = Router();

router.route("/create-product").post(verifyUser,Admin,createProduct);
router.route("/get-product/:id").get(verifyUser,getProductById);
router.route("/pro").get(verifyUser,getAllProducts);
router.route("/update-product/:id").put(verifyUser,Admin,updateProduct)
router.route("/delete-product/:id").delete(verifyUser,Admin,deleteProduct)

 
    
export default router;