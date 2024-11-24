import React from 'react'
// import styled from 'styled-components';
const Product = ({products,basket ,setBasket,total,money}) => {
const {id,title,price,amount,image}=products
// console.log(amount)
const basketItem=basket.find(item=>item.id===id)

const addBasket=()=>{
  const checkBasket =basket.find(item=>item.id===id)
  if (checkBasket) {
 checkBasket.amount +=1;
     setBasket([...basket.filter(item=>item.id !==id),checkBasket])
    // console.log(basketItem)
  } else {
    setBasket([...basket,products])
  }
}

const removeBasket=()=>{
  const currentBasket = basket.find(item=>item.id===id)
  currentBasket.amount-=1
   if (currentBasket.amount===0) {
    setBasket([...basket.filter(item=>item.id !==products.id)])
   }
   else{
    setBasket([...basket.filter(item=>item.id !==id),currentBasket])
   }

}

    
  return (
 <div>
<div className="product">
<img src={image}  alt='..'/>
<h4>{title}</h4>
<p>{price}</p>
<div>
  <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
<span className='amount'>{(basketItem && basketItem.amount )|| 0}</span>
  <button disabled={total + products.price >money} onClick={addBasket}>Satin al</button>

</div>
</div>
 </div>
  )
}

export default Product
