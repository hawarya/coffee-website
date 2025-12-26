const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number,
         min: [0, "Price cannot be negative"]
    },
    image:{type:String},
    category:{type:String}

})

const ProductModel=mongoose.model("Product",productSchema)
module.exports=ProductModel;