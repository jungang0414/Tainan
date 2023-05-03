import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema({
    name:{
        type:String, //單集名稱
        required:true, //
    },
    youtube:{
        type:String,
        required:true,
    },
    // podcast:{ 
    //     type:String,
    //     required:true,
    // },
    introduction:{ //簡介
        type:String,
        required:true,
    },
    photos:{
        type:[String], //照片
        required:true,
    }
})

export default mongoose.model("Content", ContentSchema)

