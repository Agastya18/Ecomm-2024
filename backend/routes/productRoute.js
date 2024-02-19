import { Router } from "express";

import { Admin, verifyUser } from "../middleware/authMiddleware.js";
import { createProduct, createProductReview, deleteProduct, deleteReview, deleteReviewAdmin, getAllProducts, getAllReviews, getProductById,  getTopRatedProduct,  updateProduct } from "../Controllers/productController.js";
import { upload } from "../middleware/multer.js";
import { getAllUsers } from "../Controllers/userController.js";
 const router = Router();



router.route("/create-product").post(upload.array("images",4),verifyUser,Admin,createProduct); // use verifyuser,admin in future
router.route("/get-product/:id").get(verifyUser,getProductById); // use verifyuser in future
router.route("/all-product").get(getAllProducts); // use verifyuser in future
router.route("/update-product/:id").put(verifyUser,Admin,upload.array('images',4),updateProduct)
router.route("/delete-product/:id").delete(verifyUser,Admin,deleteProduct)
router.route("/top-product").get(getTopRatedProduct)  // may be add verify
router.route("/:id/reviews").post(verifyUser,createProductReview)
router.route("/reviews/:id").get(verifyUser, getAllReviews)
router.route("/delete-review/:id").delete(verifyUser,deleteReview)
router.route("/admin/delete-review/:id").delete(verifyUser,Admin,deleteReviewAdmin)


//router.route('/allusers').get(getAllUsers)


 

 
    
export default router;