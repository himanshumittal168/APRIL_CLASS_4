const express=require('express');
const { signup } = require('../controller/Signup');
const { login } = require('../controller/Login');

const router=express.Router();


router.post("/create",signup);

router.post("/login",login);

module.exports=router;