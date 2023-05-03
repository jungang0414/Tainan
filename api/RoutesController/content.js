import Content from "../models/Content.js";

export const creatContent = async(req,res,next)=> {
    const newContent = new Content(req.body)
    try {
        const saveContent = await newContent.save()
        res.status(200).json(saveContent)
    } catch(error) {
        res.status(500).json(error)
    }
}

