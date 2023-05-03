import mongoose from "mongoose";
const UserSchma = new mongoose.Schema({
    username:{
        type:String,
        requried:true,
        unique:true, //不能重複
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true})

export default mongoose.model("User", UserSchma)