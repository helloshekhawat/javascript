import mongoose,{Schema, mongo} from "mongoose";

const commentSchema = new Schema({
    content:{
        type: String,
        required: true,
        trim: true
    },
    video:[{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],
    owner:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
},
{
    timestamps: true,
    UpdateAt: true
})

export const comment = mongoose.model("comment", commentSchema)