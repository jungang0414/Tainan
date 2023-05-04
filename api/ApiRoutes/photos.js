import express from "express";
import {createPhotos, getAllPhotos, updatePhotos} from "../RoutesController/photos.js"; 

const router = express.Router()

//新增新的陣列
router.post("/", createPhotos);
//查詢全部
router.get("/", getAllPhotos);
//新增新的圖片
router.put("/:id", updatePhotos);


export default router