const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")

//! Creation of Structure or schema for user collection 

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Name is Mandatory"],
        minLength:[1,"Name Should Contain Atleast 4 Characters"],
        maxLength:[10,"Name Should Contain Only 10 Characters"],
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique: true,
        required: [true, 'Email address is required'],

    },
    password:{
        type:String,
        required:[true,"Password is Mandatory"]
    },
    date:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

//! dont use arrow function for pre method

userSchema.pre("save",async function(next){
    let salt=await bcryptjs.genSalt(11);
    this.password=await bcryptjs.hash(this.password,salt);
    //! from 5 and above version of mongoose next() is not required
    next()
    
})

userSchema.methods.compareMyPassword=async function(password)
{
    let hashedPassword=await bcryptjs.compare(password,this.password);

    return hashedPassword;
}

module.exports=new mongoose.model("User",userSchema)


