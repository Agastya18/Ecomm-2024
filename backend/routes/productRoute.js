import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";
import { createProduct, createProductReview, deleteProduct, getAllProducts, getAllReviews, getProductById,  getTopRatedProduct,  updateProduct } from "../Controllers/productController.js";

 const router = Router();



router.route("/create-product").post(verifyUser,Admin,createProduct);
router.route("/get-product/:id").get(verifyUser,getProductById);
router.route("/all-product").get(verifyUser,getAllProducts);
router.route("/update-product/:id").put(verifyUser,Admin,updateProduct)
router.route("/delete-product/:id").delete(verifyUser,Admin,deleteProduct)
router.route("/top-product").get(verifyUser,getTopRatedProduct)
router.route("/:id/reviews").post(verifyUser,createProductReview)
router.route("/reviews").get(verifyUser, getAllReviews)


 

 
    
export default router;