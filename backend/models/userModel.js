import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false},
    avatar: {type: String, required: true, default: "/images/avatar.png"},
    refreshToken: {type: String}
},{timestamps: true})

// password hashing before saving
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// matching password function
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}
//genrating access token for user
userSchema.methods.getAccessToken = function(){
    return jwt.sign({id: this._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRY})
}
//genrating refresh token for user
userSchema.methods.getRefreshToken = function(){
    return jwt.sign({id: this._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}

export const User = mongoose.model("User", userSchema)
