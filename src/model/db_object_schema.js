const express = require("express");
const { default: mongoose } = require("mongoose");



// Database object schema...
const dbObjSchema = mongoose.Schema(
    {
    username:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    }

}, 
{timestamps: true} 
);


module.exports = mongoose.model("myDbSchema1" , dbObjSchema);
