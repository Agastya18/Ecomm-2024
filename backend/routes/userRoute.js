import { Router } from "express";
import { userRegister } from "../Controllers/userController.js";

const router = Router();


 router.route("/register").post(userRegister)
    
    
export default router;