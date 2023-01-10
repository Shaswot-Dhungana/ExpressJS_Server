const jwt = require("jsonwebtoken");

const dotenv = require('dotenv');

dotenv.config({
    path: './config/config.env'
});

const SECRET_KEY = process.env.JWT_SECRET_KEY;




const auth = (req , res , next) => {
    try{
l
let token = req.header.authorization;
if(token){

    // Dispatch token , eg. token = bearer <token> , after splitting after 1 space character , token = <token>

    token = token.split(" ")[1];
    let   user = jwt.verify(token , SECRET_KEY);
    req.uid = user.uid;




} else if (!token){

    res.status(401).json({
        msg: "UnAuthorized User.."
    })

} else{
    res.status(500).json({
        msg: "Sorry , Something Went Wrong. [ Internal Server Error ]."
    })
}

    next();


    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: "Sorry , Something Went Wrong. [ Internal Server Error ]."
        })
    }
}


module.exports = auth;