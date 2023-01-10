const express = require("express");
const myRouter = require("./routes/api1");
const myRouter2 = require("./routes/api2");
const myRouter3 = require("./routes/api3");
const app = express();

const dotenv = require('dotenv');

dotenv.config({
    path: './config/config.env'
});

// Middle-Ware that convert Request-body to json.
app.use(express.json());


// Middle-Ware that Checks REquested method and requested uri..

app.use(
    (req , res , next ) => {
        console.log(" Request Method :~ " + req.method + ", Requested URI  :~ " + req.url);
        next();
    }
)


// Using router
app.use("/api",myRouter);

app.use("/api2" , myRouter2);

app.use("/api3" , myRouter3);


const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server Started.")
    console.log(`using Port ${port}`)
});


