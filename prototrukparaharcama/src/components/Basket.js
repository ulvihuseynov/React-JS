import React from 'react'
import BasketItem from './BasketItem'

const Basket = ({basket,product,total,resetBtn}) => {
    console.log(basket)
  return (
    <div>
      {
        basket.map((item)=>(
        <BasketItem product={product.find(product=>product.id===item.id)} key={item.id} item={item}/>   
        ))
      }
      {total > 0 && (
       <div>
          <div>Toplam: {total}</div>
          <button onClick={resetBtn}>Sebeti sifirla</button>
       </div>
      )
       
      }
     
    </div>
  )
}

export default Basket
