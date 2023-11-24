// bson data and json data
import mongoose, {Schema} from "mongoose";
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken';
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true,
            unique:true
        },
        email:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique:true
        },
        fullname:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String,
            required: true
        },
        coverImage:{
            type: String
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId, // mongoose will auomatically give ObjectId because it give every single user a unique id to store
                ref:"Video"
            } 
        ],
        Password:{
            type:String,
            required: true,
            
        },
        refreshToken:{
            type: String
        }
}, 
{
    timestamps : true
 } 
)
userSchema.pre(
    "save", async function (next){
        if(!this.isModified("Password"))
        return next();
        this.Password = bcryptjs.hash(this.Password, 10)
        next()

    }
)
userSchema.methods.isPasswordCorrect = async function(password){
   return await bcryptjs.compare(password, this.Password)
} 
userSchema.methods.generateAccessToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expireIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
} 
userSchema.methods.generateRefreshToken= async function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expireIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User", userSchema)