import mongoose, {Schema} from "mongoose";

const playlistSchema = new Schema({

    name:{
        type: String,
        required:true,
        lowercase: true,
        index: true
    },
    Description:{
        type: String
    },

    Video:[{
        type: Schema.Types.ObjectId,
        ref : "Video"
    }],

    owner:[
        {
            type:Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},
{
    timestamps: true
})

export const playlist = mongoose.model("playlist", playlistSchema)