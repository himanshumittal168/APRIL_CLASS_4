const express=require('express');
const { signup } = require('../controller/Signup');
const { login } = require('../controller/Login');
const { auth, isStudent } = require('../middleware/Auth');

const router=express.Router();


router.post("/create",signup);

router.post("/login",login);


router.get("/testing",auth,(req,resp)=>{
    resp.status(200).json({
        success:true,
        msg:"WELCOME TO DASHBOARD"
    })
})


router.get("/studentroute",auth,isStudent,(req,resp)=>
{
    resp.status(200).json({
        success:true,
        msg:"WELCOME TO STUDENT ROUTE"
    })
})





module.exports=router;