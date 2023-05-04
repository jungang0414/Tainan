import Content from "../models/Content.js";

export const creatContent = async(req,res)=> {
    const newContent = new Content(req.body)
    try {
        const saveContent = await newContent.save()
        res.status(200).json(saveContent)
    } catch(error) {
        res.status(500).json(error)
    }
}

export const getContent = async(req, res)=> {
    const id = req.params.id;
    try {
        const getContent = await Content.findById(id)
        res.status(200).json(getContent)
    } catch(error) {
        res.status(500).json(error)
    }
}

export const updateContent = async(req,res)=> {
    const id = req.params.id;
    const body = req.body;
    try {
        const updateContent = await Content.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(updateContent)
    } catch(error) {
        res.status(500).json(error)
    }
}

export const deleteContent = async(req, res) => {
    const id = req.params.id;
    try {
        await Content.findByIdAndDelete(id)
        res.status(200).json("刪除成功")
    } catch(error) {
        res.status(500).json(error)
    }
}

export const getAllContent = async(req,res) => {
    try {
        const contentList = await Content.find()
        res.status(200).json(contentList)
    } catch(error) {
        res.status(500).json("無法抓取資料")
    }
}
