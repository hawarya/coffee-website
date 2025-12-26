import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../data/ProductData";
function ProductDetails1() {
const {id}=useParams();

const product=products.find(p=>p.id===Number(id));
const handleAddtoCart=()=>{
    const existingCart=JSON.parse(localStorage.getItem("cart")||[]);
    const existingItems=existingCart.find(item=>item.id===product.id);

    if(existingItems){
        existingItems.quantity+=1;
    }
    else{
        existingCart.push({...product,quantity:1});
    }
    localStorage.setItem("cart",JSON.stringify(existingCart))
}
 if (!product) return <h2>Product not found</h2>;

  return (
    <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} width={"300"}/>
        <p>{product.description}</p>
        <h4>{product.price}</h4>
        <button onClick={handleAddtoCart}>Add To cart</button>
    </div>
  )
}

export default ProductDetails1