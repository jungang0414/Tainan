import express from "express"
import { creatContent, getContent, updateContent, deleteContent, getAllContent} from "../RoutesController/content.js";

const router = express.Router()
//創建一筆資料
router.post("/", creatContent)
//抓取一筆資料
router.get("/find/:id", getContent)
//修改一筆資料
router.put("/:id", updateContent)
//刪除一筆資料
router.delete("/:id", deleteContent)
//抓取所有資料
router.get("/",getAllContent)

export default router