 import { User } from "../models/userModel.js";

 // @desc    Register a new user
// @route   POST /api/v1/register
// @access  Public
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
// @desc    login user & get token
// @route   POST /api/v1/login
// @access  Public
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

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const userLogout = async(req,res)=>{
     const log= await User.findByIdAndUpdate(req.user._id,{refreshToken:null},{new:true})
     const option={
        httpOnly: true,  
    }
    return res.status(200).clearCookie("accessToken",option).clearCookie("refreshToken",option).json({message:"User logged out successfully"});

}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getCurrentUser = async(req,res)=>{
   const currentUser= await User.findById(req.user._id).select("-password");
    if(currentUser){
         return res.status(200).json({message:"User found",currentUser})
    }
    else{
         return res.status(400).json({message:"User not found"})
    }
}

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async(req,res)=>{
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if(req.body.password){
            user.password = req.body.password;
        }
        const updatedUser = await user.save({validateBeforeSave: false});
        if(updatedUser){
            return res.status(200).json({message:"User updated successfully",
            user:{
                _id:updatedUser._id,
                name:updatedUser.name,
                email:updatedUser.email,
                isAdmin:updatedUser.isAdmin,
                avatar:updatedUser.avatar,
                refreshToken:updatedUser.refreshToken,
            }})
        }
        else{
            return res.status(400).json({message:"Invalid user data"})
        }
    }
    else{
        return res.status(400).json({message:"User not found"})
    }

}

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = async(req,res)=>{
    const user = await User.findById(req.params.id).select("-password");
    if(user){
        return res.status(200).json({message:"User found",user})
    }
    else{
        return res.status(400).json({message:"User not found"})
    }
}

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUserRole= async(req,res)=>{
    const user = await User.findById(req.params.id);
    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin;
        const updatedUser = await user.save({validateBeforeSave: false});
        if(updatedUser){
            return res.status(200).json({message:"User updated successfully",
            user:{
                _id:updatedUser._id,
                name:updatedUser.name,
                email:updatedUser.email,
                isAdmin:updatedUser.isAdmin,
                avatar:updatedUser.avatar,
                refreshToken:updatedUser.refreshToken,
            }})
        }
        else{
            return res.status(400).json({message:"Invalid user data"})
        }
    }
    else{
        return res.status(400).json({message:"User not found"})
    }
}




export {
    userRegister,
    userLogin,
    userLogout,
    getCurrentUser,
    updateUserProfile,
    getUserById,
    updateUserRole,
  
}


