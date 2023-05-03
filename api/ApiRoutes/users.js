import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.send("使用者資料")
})

export default router

