const {Schema,model} = require('mongoose');

let foodItem=new Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    CategoryName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    options:{
        default:[]
    }
})

module.exports=new model("foodItems",foodItem)