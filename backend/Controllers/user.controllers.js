const User = require("../Model/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Joi = require("joi");

let userSchema = Joi.object({
  name: Joi.string().min(4).required({
    "string.base": "Name Must String",
    "string.min": "Name Should contain Mininum 4 Character",
    "string.empty": "Name is Mandatory",
  }), 
  location: Joi.string().required({
    "string.base": "Location must be Required",
  }),
  email: Joi.string().email().required({
    "string.base": "Email must be required",
    "string.min": "Email is Mandatory",
  }),
  password: Joi.string().min(6).required({
    "string.base": "Passwod must be required",
    "string.min": "Password is Mandatory",
  }),
});

//! SIGNUP USER DETAILS

let signUp = async (req, res, next) => {
  try {
    console.log(req.body);
    let { name, email, password, location } = req.body;
    let { value, error } = userSchema.validate({name,location,email,password});

    if (error) {
      console.log(error);
      return res.status(401).json({error: true,message: "validation Failled",err: error.details[0].message,});
    } 
    else {
      let newUser = await User.create(value);
      res.status(201).json({error: false,message: "User added successfully",data: newUser,});
    }
  } catch (error) {
    next()
    // res.status(400).json({ error: true, data: error.message });
  }
};

//! LOGIN USER

let loginUser = async (req, res, next) => {
  try {
    let { password, email } = req.body;
    let isUserAvailable = await User.findOne({ email });

    if (!isUserAvailable) {
      return res.status(404).json({error: true,message: `User Not Found With given email ${email}`});
    }
    //! Authentication password comparing using JWT Authentication

    const hashUser = await isUserAvailable.compareMyPassword(password);
    // console.log(hashUser)
    if (hashUser) {
      let token = jwt.sign(
        { email: isUserAvailable.email },
        process.env.JWT_KEY,
        { expiresIn: process.env.JWT_EXPIRESIN }
      );
      //  console.log(token)
      return res.status(201).json({ error: false, message: "Login Successfully", token });
    }
  }
   catch (error) {
    next(error);
    // res.status(400).json({ error: true, data: error.message })
  }
};




module.exports = { signUp, loginUser };
