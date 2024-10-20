const express=require('express');
const { signup } = require('../controller/Signup');
const { login } = require('../controller/Login');
const { auth } = require('../middleware/Auth');

const router=express.Router();


router.post("/create",signup);

router.post("/login",login);


router.get("/testing",auth,(req,resp)=>{
    resp.json({
        success:true,
        msg:"WELCOME TO DASHBOARD"
    })
})



module.exports=router;