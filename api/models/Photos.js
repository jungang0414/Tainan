import mongoose from 'mongoose';

const PhotosSchema = new mongoose.Schema({
    photos:{
        type:[String], //照片
        required:true,
    }
})

export default mongoose.model("Photos", PhotosSchema)
