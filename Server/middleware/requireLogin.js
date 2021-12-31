const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")

const User=mongoose.model("User")

const JWTSECRET="vjjwallhkxnvbxgqyyigi"
module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
        res.status(401).json({error:"You Should Logged in"})
    }
    const token =authorization.replace("Bearer ","")
    jwt.verify(token,JWTSECRET,(err,payload)=>{
        if(err)
        {
            res.status(401).json({error:"You Should logged in"})
        }
        else
        {
            const {_id}=payload
            User.findById(_id).then(userdata=>{
                req.user=userdata
                next()
            })
           // next()

        }
    })
}