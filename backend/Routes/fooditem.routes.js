const express = require('express');
const {itemsData}=require("../Controllers/foodItem.controllers")
let router=express.Router()

router.get("/getitems",itemsData)

module.exports=router;