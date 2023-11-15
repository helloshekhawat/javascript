// import mongoose from "mongoose";
// import { DB_NAME } from "../constant.js";

// const connectDB = async() => {
//     try {
//        const connectionInstance =  await mangoose.connect(`${process.env.MANGODB_url}/${DB_NAME}`)
//        console.log(`\n its connected ${connectionInstance.connection.host}`);
//     //    console.log(connectionInstance);
//     } catch (error) {
//         console.log("facing error", error);
//         process.exit(1)
//     }
// }

// export default connectDB
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MANGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB