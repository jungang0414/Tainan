import Photos from "../models/Photos.js"
//新增新的陣列
export const createPhotos = async(req, res) => {
    const newPhotos = new Photos(req.body)
    try {
        const savePhotos = await newPhotos.save()
        res.status(200).json(savePhotos)
    } catch(error) {
        res.status(500).json(error)
    }
}
//查詢全部
export const getAllPhotos = async(req,res) => {
    try {
        const PhotosList = await Photos.find()
        res.status(200).json(PhotosList)
    } catch(error) {
        res.status(500).json("無法抓取資料")
    }
}
//更新圖片
export const updatePhotos = async(req,res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const updatePhotos = await Photos.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(updatePhotos)
    } catch(error) {
        res.status(500).json(error)
    }
}