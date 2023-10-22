const mongoose=require('mongoose')
const {Schema}=mongoose;


const OrderSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    order_data:{
        type:String,
        required:true,
        unique:true,
    }
})

module.exports=new mongoose.model("Order",OrderSchema)