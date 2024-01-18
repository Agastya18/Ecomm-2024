 import { User } from "../models/userModel.js";

 const userRegister = async(req,res)=>{
   const {name,email,password} = req.body;
   if(!name || !email || !password){
       return   res.status(400).json({message:"Please fill all fields"})
   }
   const existedUser = await User.findOne({email})
    if(existedUser){
          return   res.status(400).json({message:"User already exists"})
    }
    const user = await User.create({name,email,password})
    if(user){
        return res.status(201).json({message:"User created successfully",
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            avatar:user.avatar,
            refreshToken:user.refreshToken,
           
        }})
    }
    else{
        return res.status(400).json({message:"Invalid user data"})
    }




  

}
const userLogin = async(req, res) => {
      const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"Please fill all fields"})
        }
        let exUser = await User.findOne({email});
        if(!exUser){
            return res.status(400).json({message:"User does not exist"})
        }
        const isMatch = await exUser.matchPassword(password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const accessToken = await exUser.getAccessToken();
        if(!accessToken){
            return res.status(400).json({message:"Invalid accesstoken"})
        }
        const refreshToken = await exUser.getRefreshToken();
        if(!refreshToken){
            return res.status(400).json({message:"Invalid refreshtoken"})
        }
        exUser.refreshToken = refreshToken;
        await exUser.save({validateBeforeSave: false});
        const option={
            httpOnly:true,
            
     }
     res.status(200).cookie("accessToken",accessToken,option);
     res.status(200).cookie("refreshToken",refreshToken,option);
     const loggedInUser = {
         _id:exUser._id,
         name:exUser.name,
         email:exUser.email,
         isAdmin:exUser.isAdmin,
         avatar:exUser.avatar,
         refreshToken:exUser.refreshToken,
     }
     if(loggedInUser){
            return res.status(200).json({message:"User logged in successfully",loggedInUser,accessToken,refreshToken})
     }
        else{
                return res.status(400).json({message:"Invalid credentials"})
        }




}

const userLogout = async(req,res)=>{
     const log= await User.findByIdAndUpdate(req.user._id,{refreshToken:null},{new:true})
     const option={
        httpOnly: true,  
    }
    return res.status(200).clearCookie("accessToken",option).clearCookie("refreshToken",option).json({message:"User logged out successfully"});

}





export {
    userRegister,
    userLogin,
    
}


