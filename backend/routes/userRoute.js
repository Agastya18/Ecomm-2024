import { Router } from "express";
import { userLogin, userLogout, userRegister } from "../Controllers/userController.js";
import { verifyUser } from "../middleware/authMiddleware.js";

const router = Router();


 router.route("/register").post(userRegister)
 router.route("/login").post(userLogin)
 router.route("/logout").post(verifyUser,userLogout)
    
export default router;