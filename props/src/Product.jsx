import React from 'react'

function Product({name,oldprice,price}) {
  return (
   <div>
   <div style={{border:'1px solid black',padding:'40px',boxShadow:"0px 0px 0px 1px grey",height:'200px'}}>
    <p style={{fontSize:'24px'}}>Ad:{name}</p>
    <p style={{fontSize:'22px',fontWeight:'600'}}>Qiymet: <del style={{color:"red",fontSize:"18px"}}>{oldprice} AZN</del>    {price}AZN</p>
   </div>
    
    
   </div>
  )
}

export default Product
