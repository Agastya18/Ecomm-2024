 

//import{ User} from "../models/userModel.js";
import User from "../models/userModel.js";

import { uploadOnCloudinary } from "../utils/cloudinary.js";

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
    console.log("backend file data",req.file)
     const avatarLocalPath = req.file;
     if(!avatarLocalPath){
            return   res.status(400).json({message:"Please upload an image"})
     }
        const avatarCloudinaryPath = await uploadOnCloudinary(avatarLocalPath.path);
        if(!avatarCloudinaryPath){
            return   res.status(400).json({message:"Image upload failed"})
        }
        

    const user = await User.create({name,email,password,avatar:avatarCloudinaryPath.url})
    if(user){
        return res.status(201).json({message:"User created successfully",
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            avatar:avatarCloudinaryPath.url,
            
           
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
        
       
       
        const option={
            httpOnly:true,
            
     }
     //console.log(accessToken);
     res.status(200).cookie("accessToken",accessToken,option);
     
     const loggedInUser = {
         _id:exUser._id,
         name:exUser.name,
         email:exUser.email,
         isAdmin:exUser.isAdmin,
         avatar:exUser.avatar,
        
     }
     if(loggedInUser){
            return res.status(200).json({message:"User logged in successfully",user:loggedInUser,accessToken})
     }
        else{
                return res.status(400).json({message:"Invalid credentials"})
        }




}

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Private
const userLogout = async(req,res)=>{
     const log= await User.findByIdAndUpdate(req.user._id,{new:true})
     const option={
        httpOnly: true,  
    }
    return res.status(200).clearCookie("accessToken",option).json({message:"User logged out successfully"});

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
        const avatarLocalPath = req.file;
        if(avatarLocalPath){
            const avatarCloudinaryPath = await uploadOnCloudinary(avatarLocalPath.path)
            if(!avatarCloudinaryPath){
                return   res.status(400).json({message:"Image upload failed"})
            }
            user.avatar = avatarCloudinaryPath.url;
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
    const users = await User.findById(req.params.id).select("-password");
    if(users){
        return res.status(200).json({message:"User found",users})
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
  //  console.log(req.body);
    
    if(user){
        user.name =  user.name;
        user.email =  user.email;
        user.isAdmin = req.body.isAdmin;
        user.avatar =  user.avatar;

        

        const updatedUser = await user.save({validateBeforeSave: false});
        if(updatedUser){
            return res.status(200).json({message:"User updated successfully",
            user:{
                _id:updatedUser._id,
                name:updatedUser.name,
                email:updatedUser.email,
                isAdmin:updatedUser.isAdmin,
                avatar:updatedUser.avatar,
                
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

// @desc    Get all user profile
// @route   GET /api/users/all-user
// @access  Private/admin

const getAllUsers = async(req,res)=>{

    try {
      //  const users= await User.find().select("-password");
      const users = await User.find({}).select("-password")
      
      
        
        
        if(!users)
        {
              return res.status(404).json({message:"Users not found"});
        }
        return  res.status(200).json({message:"Users found",users:users});

        
    } catch (error) {
        console.log("not working........1.....1...");
        return res.status(500).json({message:"Server error"});

        
    }
    


    

}

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
 const deleteUser = async(req,res)=>{

    const user= await User.findById(req.params.id);
   // console.log("user",user);
    if(user){
        if(user.isAdmin){
            return res.status(400).json({message:"You can not delete admin user"})
        }
        await User.deleteOne({_id:user._id});
        return res.status(200).json({message:"User deleted successfully"});


    }else{
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
    getAllUsers,
    updateUserRole,
    deleteUser,
    
  
}


