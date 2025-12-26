const express=require('express');
const connectionDB=require('./connection/connection')
const router=require('./routes/route')
const cors=require('cors')
const PORT=5000;

const app=express()

app.use(express.json())
app.use(cors({
     origin:"http://localhost:5173"
}))
connectionDB();

app.use("/",router);

app.listen(PORT,()=>{
console.log(`server running in port ${PORT}`)
})