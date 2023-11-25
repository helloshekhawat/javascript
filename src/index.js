// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './env'
})

// connectDB()
// .then(()=>{
    // app.listen(process.env.PORT || 8080, () =>{
    //     console.log(`server is running at port ${process.env.PORT}`)
    // })
// })
// .catch((err)=>{
//     console.log("connection fail", err)
// })


// if server doesn't start pack i try catch
try {
    app.listen(process.env.PORT || 8080, () =>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
} catch (error) {
    console.log("error", error)
}

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
