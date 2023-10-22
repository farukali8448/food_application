const express = require('express');
const { categoryData } = require('../Controllers/foodcategory.controllers');
let router=express.Router()

router.get("/getcategory",categoryData)

module.exports=router;