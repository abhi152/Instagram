
const bcrypt = require("bcryptjs/dist/bcrypt")
const express=require("express")
const mongoose =require("mongoose")
const User=mongoose.model("User")
const router=express.Router()
const jwt=require("jsonwebtoken")

const requireLogin=require("../middleware/requireLogin")
const JWTSECRET="vjjwallhkxnvbxgqyyigi"
router.get("/protected",requireLogin,(req,res)=>{
    res.send("Hello user");
})
router.post("/signup",(req,res)=>{
    
    console.log(req.body)
    const{name,email,password}=req.body;
    
    if(!name || !email || !password)
    {
        res.status(422).json({error:"Please Fill all the field"})
    }
    else
    {
        User.findOne({email:email}).then((saveduser)=>{
            if(saveduser){
                res.status(422).json({message:"User is already registered"})
            }
            else{

                bcrypt.hash(password,12).then(hashedpassword=>{

                    const user=new User({
                        email,password :hashedpassword,name
                    })
                    user.save().then(user=>{
                        res.json({message:"User Registred Succesfully"})
                    })
                })
               
            }
        })
    }
})

router.post("/login",(req,res)=>{
    const{email,password}=req.body;
    if(!email || !password)
    {
        res.status(422).json({error:"All fields should be filled"})
    }
    else
    {
        User.findOne({email:email})
        .then((saveduser)=>{
            if(saveduser)
            {
               bcrypt.compare(password,saveduser.password).then((doMatch)=>{
                    if(doMatch){
        //  res.json({message:"user Logged in sucessfully",saveduser})

                        const token=jwt.sign({_id:saveduser._id},JWTSECRET)
                        const{_id,name ,email}=saveduser
                        res.json({token ,user:{_id,name ,email}})
                    }
                    else
                    {
                        res.json({error:"Invalid username or password"})
                    }
               })
            }
            else
            {
                res.json({error:"Invalid username or password"})
            }
        })
    }
})

module.exports=router