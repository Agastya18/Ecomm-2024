import { Router } from "express";
import {  getAllUsers, getCurrentUser, getUserById, updateUserProfile, updateUserRole, userLogin, userLogout, userRegister } from "../Controllers/userController.js";
import { Admin, verifyUser } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/multer.js";


 const router = Router();

 router.route("/all-users").get(verifyUser,Admin,getAllUsers)
 router.route("/register").post(upload.single("avatar"),userRegister)
 router.route("/login").post(userLogin)
 router.route("/logout").post(verifyUser,userLogout)
 router.route("/me").get(verifyUser,getCurrentUser)
 
 router.route("/update-user").put(verifyUser,upload.single("avatar"),updateUserProfile)
 router.route("/:id").get(verifyUser,getUserById)
 router.route("/:id").put(verifyUser,Admin,upload.single("avatar"),updateUserRole)


 
export default router;
