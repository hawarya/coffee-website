const mongoose=require('mongoose')
async function connectionDB(){
try{
await mongoose.connect("mongodb://localhost:27017/ecom-react-coffee")
.then(()=>{
    console.log("DB connected")
 
})
.catch(error=>{
    console.log("DB connection error",error);
})
}
catch(error){
    res.error(error)
}}
module.exports=connectionDB;