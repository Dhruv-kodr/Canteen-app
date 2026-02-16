const mongoose = require('mongoose')


const foodManageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:File,
        required:true,
    },
},
{
    timestamps:true
}
)

const foodManageModel = mongoose.model('foodManage',foodManageSchema)
module.exports = foodManageModel