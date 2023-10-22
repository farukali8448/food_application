const Order = require("../Model/orders.model");
require("dotenv").config();


let orderData=async(req,res)=>{
    let data=req.body.orderData
    await data.splice(0,0,{Order_date:req.body.Order_date})
    //if email not existing in db the create:else InserMany()

    let eId=await Order.findOne({'email':req.body.email})
    console.log(eId)
    if (eId=== null) {
        try {
            await Order.create({
                email:req.body.email,
            Order_date:[data]})
            .then(()=>{
                res.json({success:true})
            })
            
        } catch (error) {
            console.log(error.message)
            res.send("Server Error",error.message)
        }
        
    } else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {
                    $push:{Order_data:data}
                }).then(()=>{
                    res.json({success:true})
                })
            
        } catch (error) {
            res.send("Server Error",error.message)
        }
    }
}

module.exports={orderData}
