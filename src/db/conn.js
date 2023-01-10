const mongoose = require("mongoose");




const dotenv = require('dotenv');

dotenv.config({
    path: '../config/config.env'
});

mongoose.set('strictQuery' , true);

let mongo_url = process.env.Mongo_Uri || "mongodb://localhost:27017/test" ;

function connectDB(){
    // let db_url = new String(process.env.Mongo_Uri);
    // let db_url_filtered = db_url.toString();
   


    

mongoose.connect(mongo_url).then(
    () => {
        console.log("Connected to db");
        
    }
).catch(
    (error)=>{
        console.log("Error Genrated while Connected to Database... ")
        console.log(error);
    }
)

}

module.exports = connectDB;
