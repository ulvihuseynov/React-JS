import React from 'react'
import Products from './Products'
import {products} from './ProductParam'
function Product() {
  return (
    <div>
{
  products && products.map(productItem=>(
    <Products key={productItem.id} proItem={productItem}/>
  ))
}
    </div>
  )
}

export default Product
