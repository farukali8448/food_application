const {Schema,model}=require('mongoose')

let foodCategory=new Schema({
    CategoryName:{
        type:String,
        required:true
    }

})

module.exports=new model("foodCategory",foodCategory)