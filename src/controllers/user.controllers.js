import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res)=> {
    const { fullname, email, Password, username} = req.body
   console.log(email,Password,fullname, username);
    
    if ([fullname, email, Password, username].some((field)=> field?.trim()==="")) {
        throw new ApiError(400, "bhai details bh de de mujhe kya kr raha h")
    }
    const alreadyUser = User.findOne({
        $or: [{username}, {fullname}]
    })
    if (alreadyUser) {
        throw new ApiError (409, "User Already Exist")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if (!avatarLocalPath) {
        throw new ApiError(400, "Please upload Avatar")
        
    }

})

const loginUser = asyncHandler(async (req, res)=> {
    res.status(200).json({
        message: "its a login page"
    })
})

export { registerUser, loginUser }