import mongoose, {Schema, SchemaType} from "mongoose";


const likeSchema = new Schema(
    {
        video:[{
            type: Schema.Types.ObjectId, // videos is getting by object id
            ref: "Video"
        }],
        commment:{
            type: Schema.Types.ObjectId,
            ref: "comment" // have to check from where it get reference

        },
        likedby: [{
            type: Schema.Types.ObjectId,
            ref: "User"   
        }],
        tweet: [{
            type: Schema.Types.ObjectId,
            ref:"tweet" // have to check from where it get reference
        }]

    },{
        timestamps: true
    }
)

export const like = mongoose.model("like", likeSchema)