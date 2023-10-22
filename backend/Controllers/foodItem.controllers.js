const FOOD=require("../Model/foodItems.model")

let itemsData=async(req,res)=>{
    try {
        let getItemsData=await FOOD.find()
        res.status(200).json({error:false,message:"food items fetch successfully",data:getItemsData})
        
    } catch (error) {
        console.log(error)
    }

}

module.exports={itemsData}