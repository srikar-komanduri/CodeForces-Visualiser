  
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    feedback:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },    
},{timestamps:true})

mongoose.model("Post",postSchema)