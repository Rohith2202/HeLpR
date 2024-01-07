const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    locality:{
        type:String,
        required:true
    },
    curr_date:{
        type:Date,
        required:true
    },
    comments:{
        type:[
            {
                description: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
})
PostModel=mongoose.model("Post",postSchema)
module.exports=PostModel