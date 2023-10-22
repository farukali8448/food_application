const express=require('express')
const { signUp,loginUser}=require("../Controllers/user.controllers")

const router=express.Router()

router.post("/createuser",signUp)
router.post("/login",loginUser)



module.exports=router;