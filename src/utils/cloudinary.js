import  {v2 as cloudinary}  from "cloudinary";
import fs from "fs" // filesystem is a node js library it help you to read write in file change permission and many more
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (filePath) => {
    try {
        if(!filePath) return null;
        // file upload on cloudinary
        const response  = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto"
        }) 
        console.log("file upload is succesfull, here is your URL :", response.url);
        return response.url
    } catch (error) {
        fs.unlinkSync(filePath) // remove the file if file upload get fail
        console.log("file upload is fail : ", error)
        return null

    }
}
export {uploadOnCloudinary}