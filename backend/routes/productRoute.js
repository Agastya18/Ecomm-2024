import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";
import { createProduct, createProductReview, deleteProduct, deleteReview, getAllProducts, getAllReviews, getProductById,  getTopRatedProduct,  updateProduct } from "../Controllers/productController.js";

 const router = Router();



router.route("/create-product").post(createProduct); // use verifyuser,admin in future
router.route("/get-product/:id").get(getProductById); // use verifyuser in future
router.route("/all-product").get(getAllProducts); // use verifyuser in future
router.route("/update-product/:id").put(verifyUser,Admin,updateProduct)
router.route("/delete-product/:id").delete(verifyUser,Admin,deleteProduct)
router.route("/top-product").get(verifyUser,getTopRatedProduct)
router.route("/:id/reviews").post(verifyUser,createProductReview)
router.route("/reviews").get(verifyUser, getAllReviews)
router.route("/delete-review").delete(verifyUser,deleteReview)


 

 
    
export default router;