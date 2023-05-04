import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import contentApiRoute from "./ApiRoutes/content.js";
// import usersApiRoute from "./ApiRoutes/users.js";
// import authApiRoute from "./ApiRoutes/auth.js";
import photosApiRoute from "./ApiRoutes/photos.js";

const app = express();
dotenv.config();

const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGODB)
    console.log("Connected")
  }catch(error){
    console.log("disConnected")
  }
}

mongoose.connection.on("connected",()=> {
  console.log("資料庫連接成功")
})

mongoose.connection.on("disconnected",()=>{
  console.log("資料庫連接失敗")
})


const port = 5000;
  app.listen(port, () => {
    connect();
    console.log(`connected to ${port}`)
  })

app.use(express.json()) //視為json

//middlewares
app.use("/api/v1/content",contentApiRoute)
// app.use("/api/v1/users", usersApiRoute)
// app.use("/api/v1/auth", authApiRoute)
app.use("/api/v1/photos", photosApiRoute)

app.use((error,res,req,next)=>{
  const errorStatus = error.status || 500 ;
  const errorMessage = error.message || "ApiRoute出錯";
  return res.status(errorStatus).json({
    status:errorStatus,
    Message:errorMessage
  })
})