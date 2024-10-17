const express=require('express');

const app=express();
require('dotenv').config();
// MIDDLE WARE use  to parse the req body
app.use(express.json());



app.listen(process.env.port,()=>
{
    console.log("SERVER STARTED");
})


require("./config/database").connect();

