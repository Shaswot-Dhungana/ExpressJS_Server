const userModel = require("../model/db_object_schema");
const bcryptjs = require("bcrypt")
const jwt = require("jsonwebtoken")


const dotenv = require('dotenv');

dotenv.config({
    path: '../config/config.env'
});

const SECRET_KEY = process.env.JWT_SECRET_KEY || "MYsecretKey12345";

const signup = async (req , res) => {
console.log("api 3 signup...")

const { username , password , email } = req.body;



try{

    // Checking User Existes or not...
const existingUser = await userModel.findOne(
    {
        email: email
    }
)
if(existingUser){
    return res.status(400).json({
        success: false,
        msg: "User already Exists.."
    })
}

// Hashing / Encrypting Password using bcryptJS

const hashPassword = await bcryptjs.hash(password,10);
console.log(hashPassword)

// Passing Data to Database..

const result = await userModel.create({
    email: email,
    password: hashPassword,
    username: username
});

// JWT

const token = jwt.sign({
    email: result.email,
    uid: result._id
    },SECRET_KEY);
res.status(201).json({
    success: true,
    user: result,
    token: token
});


} catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        msg: "Sorry , Something Went Wrong. [ Internal Server Error ]."
    })
}

}



const signin = async (req , res) => {


const { email , password  } = req.body;



try{

   // Checking User Existes or not...
   const existingUser = await userModel.findOne(
    {
        email: email
    }
)

if(existingUser){


    // Password Checking....

    const checkPassword = await bcryptjs.compare(password , existingUser.password);

    if(checkPassword){
        // res.status(200).json({
        //     msg: "Password Matched.."
        // })


    // JWT

const token = jwt.sign({
    email: existingUser.email,
    uid: existingUser._id
    },SECRET_KEY);
res.status(200).json({
    user: existingUser,
    token: token
});        


    } else if (!checkPassword){
        res.status(501).json({
            msg: "Password is not matching.."
        })
    } else {
        res.status(500).json({
            msg: "Sorry , Something Went Wrong. [ Internal Server Error ]."
        })
    }






} else {
    res.status(501).json({
        msg: "User doesnot exists.!!!"
    })
}

} catch (error){
    console.log(error);
    res.status(500).json({
        msg: "Sorry , Something Went Wrong. [ Internal Server Error ]."
    })
}



}


module.exports = { signup , signin };
