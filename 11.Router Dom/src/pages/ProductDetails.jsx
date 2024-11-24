import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from './ProductParam'
import Products from './Products'
function ProductDetails() {
  const {id}=useParams()
  // console.log(params)
  return (
    <div>
    <h1>Meluamat</h1>
    <hr />
    {
      products && products.map((product)=>{
        if (product.id==id) {
          return <Products key={id} product={product} />
        }
      })
    }
    </div>
  )
}

export default ProductDetails
