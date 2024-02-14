import  User from "../models/userModel.js";
import jwt from "jsonwebtoken";
 const verifyUser=async(req,res,next)=>{
    try {
    const token = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ", "")
       // console.log(token)
        if (!token) {
            return res.status(401).json({ message: "You need to Login token" });
        }
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
       // console.log(decoded)
        const user = await User.findById(decoded.id).select("-password ");
        if(!user)
        {
            return res.status(401).json({ message: "User not found" });
        
        }
      //  console.log(user)
        req.user = user;
        
        next();
        
    } catch (error) {
        res.status(401).json({ message: "You need to Login error" });
    }

}

const Admin = async(req,res,next)=>{
    try {
        const user = await User.findById(req.user._id).select("-password -refreshToken");
        if(user.isAdmin)
        {
            next();
        }
        else{
            return res.status(401).json({ message: "You are not authorized as  admin" });
        }
    } catch (error) {
        res.status(401).json({ message: "You are not admin error" });
    }

}
export{
    verifyUser,
    Admin

}