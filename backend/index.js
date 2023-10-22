const express = require('express')
require('dotenv').config()
const cors = require('cors')
require('./Adapters/connectionDB')
const signUp=require("./Routes/user.routes")
const loginUser=require("./Routes/user.routes")
const getItems=require("./Routes/fooditem.routes")
const Category=require("./Routes/foodcategory.routes")
const OrderDetails=require("./Routes/order.routes")
// const DisplayData=require("./Routes/display.routes")

const app = express()

//! CORS connect frontend to backend
app.use(cors())

//! it used accept json data from the req body
app.use(express.json())


//! User Routes
app.use('/api',signUp)
app.use('/api',loginUser)
app.use("/api",getItems)
app.use("/api",Category)
 app.use('/api',OrderDetails)




//! page not found
app.use("*",(err,req,res,next)=>{
  res.status(404).json({error:true,message:err.message,data:"OK"})
})

//! Error handling Middleware
app.use((err,req,res,next)=>{
res.status(400).json({error:true,message:err.message,data:"OK"})
})

const port = 8000
app.listen(port, () => {
  console.log(`App is running on PORT ${port}`)
})





