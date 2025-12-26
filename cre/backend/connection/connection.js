const mongoose =require('mongoose');

async function connectionDB(){
    try{
await mongoose.connect("mongodb://localhost:27017/user")
 console.log("DB connected")
    }
    catch(error){
        console.error("DB connection error",error);    }
}
module.exports=connectionDB;