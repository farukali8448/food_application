const { orderData } = require("../Controllers/order.controller");

const express=require('express')
const router=express.Router()


router.post("/orderdata",orderData)


module.exports=router;