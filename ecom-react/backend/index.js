

const express=require('express')

const cors=require('cors')
const PORT=5000;
const connectionDB=require('./connection/connection')
const router=require('./routes/productRoute')
const app=express()
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use(express.json())
connectionDB();
app.use("/",router);

   app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})






















// trim=true //to remove space
//unique=true //to get unique value
//min =0 to value should be greater than 0 ,max 


// app.get("/",(req,res)=>{
//     res.send("veiw Products")
// })
// app.post("/add",(req,res)=>{
//  const   {name,description,price,image,category}=req.body;
 

// })