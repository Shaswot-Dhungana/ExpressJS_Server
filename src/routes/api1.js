const { Router } = require("express");
const express = require("express");
const connectDB = require("../db/conn");
const myRouter = express.Router();


const db = require("../db/conn");


connectDB();

// creating Router

myRouter.post("/signup" , (req , res) =>{
res.status(200).json({
    msg: "Hellow , this is api1 signup...."
})
}
)


myRouter.post("/signin" , (req , res) =>{
    res.send("Api 1 signin")
})


module.exports = myRouter;