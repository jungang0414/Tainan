import express from "express"
import Content from "../models/Content.js";
import { creatContent } from "../RoutesController/content.js";

const router = express.Router()
//創建一筆資料
router.post("/",creatContent)


//抓取一筆資料
router.get("/find/:id", async(req, res) => {
    const id = req.params.id;
    try {
        const getContent = await Content.findById(id)
        res.status(200).json(getContent)
    } catch (error) {
        res.status(500).json(error)
    }
})
export default router

//修改一筆資料
router.put("/:id", async(req,res)=>{
    const id =req.params.id;
    const body = req.body
    try {
        const putContent = await Content.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(putContent)
    } catch(error) {
        res.status(500).json(error)
    }
})

//刪除一筆資料
router.delete("/:id", async(req,res)=>{
    const id = req.params.id;
    try {
        await Content.findByIdAndDelete(id)
        res.status(200).json("刪除資料成功")
    } catch(error) {
        res.status(500).json(error)
    }
})