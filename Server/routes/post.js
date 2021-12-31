const express=require("express")
const mongoose =require("mongoose")
const requireLogin = require("../middleware/requireLogin")
const Post=mongoose.model("Post")

const router=express.Router()

router.get('/allpost',(req,res)=>{
    Post.find()
    .populate("postedby","_id name")
    .then(posts=>{
        res.json({posts})
    })
})
router.post('/createpost',requireLogin,(req,res)=>{
    const{title,body}=req.body;
    if(!title || !body)
    {
        res.status(422).json({error:"Please add all the post"})
    }
    console.log(req.user)
    req.user.password=undefined
    const post=new Post({
        title,
        body,
        postedby:req.user

    })
    post.save().then(results=>{
        res.json({post :results})
    })
})

router.get("/mypost",requireLogin,(req,res)=>{
    Post.find({postedby:req.user._id})
    .populate("postedby","_id name")
    .then(mypost=>{
        res.json({mypost:mypost})
    })
})
module.exports=router