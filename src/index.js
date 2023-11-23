// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log("server is running at port 8000")
    })
})
.catch((err)=>{
    console.log("connection fail", err)
})
// first method to connect datebase
/*
import { Express } from "express";
const app = express()

;(async()=>{
    try {
       await mangoose.connect(`${process.env.MANGODB_URL}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("error in app", error)
        throw error
       })
       app.listen(process.env.PORT,() => {
        console.log(
            "its working"
        )
       })
    } catch (error) {
        console.error("Error:", error)
    }
})()
*/
