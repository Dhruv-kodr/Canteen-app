const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        type:String,
        required:true
    },
})

const userModel = mongoose.model('user',userSchema)

module.exports=userModel;