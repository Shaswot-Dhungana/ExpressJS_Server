const express = require("express");
const myRouter2 = express.Router();


myRouter2.post("/signup" , (req,res)=>{
    res.send("Api 2 signup")
})


myRouter2.post("/signin" , (req , res) => {
    res.send("Api 2 signin ")
})

module.exports = myRouter2;