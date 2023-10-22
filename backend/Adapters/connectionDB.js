const {connect,mongoose}=require('mongoose')
require('dotenv').config();


connect(process.env.URL)
.then(
    ()=>{
         console.log("MongoDB connected successfully")
    }
).catch((err)=>{
    console.log(err)
})