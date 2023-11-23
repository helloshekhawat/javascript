// bson data and json data
// 
// 
import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
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
        if(!this.isModified("password"))
        return next();
        this.Password = bcrypt.hash(this.Password, 10)
        next()

    }
)
export const User = mongoose.model("User", userSchema)