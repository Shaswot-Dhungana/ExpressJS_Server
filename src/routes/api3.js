const express = require("express");
const myRouter3 = express.Router();
const { signup , signin } = require("../controllers/userController")


myRouter3.post("/signup" , signup);

myRouter3.post("/signin" , signin);


module.exports= myRouter3;