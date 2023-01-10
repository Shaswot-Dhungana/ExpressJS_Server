const express = require("express");
const { default: mongoose } = require("mongoose");

// Database object schema...
const dbObjSchema2 = mongoose.Schema(
    {
    title :{
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }

}, 
{timestamps: true} 
);


module.exports = mongoose.model("myDbSchema2" , dbObjSchema2);
