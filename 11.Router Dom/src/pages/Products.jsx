import React from 'react'
import { useNavigate } from 'react-router-dom';

function Products({proItem}) {
const {id,name,price}=proItem;

const navigate=useNavigate()
  return (
    <div style={{margin:"40px 20px",backgroundColor:"lightgrey",padding:"10px"}}>
     <div>Mehsul melumatlari</div>
     <h3>Isim:{name}</h3>
     <h3>Qiymet: {price}</h3>
     <button onClick={()=>navigate("/product-details/" + id)}>Detayina git</button>
    </div>
  )
}

export default Products
