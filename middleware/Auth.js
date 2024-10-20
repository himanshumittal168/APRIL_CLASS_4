// auth who are you
// PAYLOAD -> id,email,role
const jwt=require("jsonwebtoken");
require("dotenv").config()
exports.auth=(req,resp,next)=>
{
    try
    {
        const token=req.body.token;
        if(!token || token==undefined)
        {
            return resp.status(401).json(
                {
                    message:"Token Missing"
                });
        }
        try
        {
            const payload=jwt.verify(token,process.env.secret);
            req.user=payload;
        }
        catch(err)
        {
            return resp.status(401).json(
                {
                    message:"Token MisMatch"
                });
        }
        next();
    }
    catch(err)
    {
        req.status(500).json({
            msg:"INTERNAL SERVER ERROR"
        })
    }
}