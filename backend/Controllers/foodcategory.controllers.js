const Category=require("../Model/foodcategory.model")

let categoryData=async(req,res)=>{
    try {
        let getCategoryData=await Category.find()
        res.status(200).json({error:false,message:"food Category fetch successfully",data:getCategoryData})
        
    } catch (error) {
        console.log(error)
    }

}
module.exports={categoryData}