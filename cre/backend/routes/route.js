const express=require('express');
const userModel=require('../model/model')
const router=express.Router();

router.get("/",async (req,res)=>{
   try{
const user=await userModel.find();
res.send(user);
   }
   catch(error){
    res.send(error);
   }
})
router.post("/signup",async (req,res)=>{
    try{

const {name,email,password}=req.body;
const existingUser=await userModel.findOne({email})
if(existingUser){
    res.send("user already exist")
}
const newUser=new userModel({
    name,email,password
})
await newUser.save();
res.json({
    message:"user Added",
    data:newUser
});
    }
    catch(error){
        res.send(error)
    }
})

router.post("/login",async(req,res)=>{
    try{
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user || user.password!=password){
        return res.status(401).json({ message: "Invalid Credentials" });
    }
    return res.status(200).json({ message: "Login Successful" });
    }
    catch(error){
        res.send(error)
    }
})

router.put("/user/:id",async (req,res)=>{
    try{
    const id=req.params.id;
const updateUser=await userModel.findByIdAndUpdate(
    id,req.body,{new:true,runValidators:true}
)
if(!updateUser){
    res.send("user not found")
}
res.json({
    message:"user updated",
    data:updateUser
})
    }
    catch(error){
        res.send(error);
    }
})
 router.delete("/user/:id",async(req,res)=>{
try{
const id=req.params.id;
const deleteUpdate=await userModel.findByIdAndDelete(id)
if(!deleteUpdate){
    res.send("user not found")
}
res.send("user deleted")
}
catch(error){
    res.send(error);
}
 })
module.exports=router;