import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getTotalCart } from '../redux/cartSlice'
import Carts from '../components/cart/CartsComp'
import CartsComp from '../components/cart/CartsComp'

const Cart = () => {
    const dispatch=useDispatch()
  const {carts, itemCount, totalAmount}=useSelector(state=>state.basketCart)
  const navigate=useNavigate()
console.log(carts, itemCount, totalAmount)
  useEffect(()=>{
dispatch(getTotalCart())
  },[dispatch])
  return (
    <div>
    {
carts?.length>0 ? <div>
    {
        carts.map((cartItem,index)=>(
            <CartsComp key={index} cartItem={cartItem}/>
        )

        )
    }
<div className='flex items-center text-2xl justify-end'>Toplam hesab: <span className='font-bold ml-2 text-3xl'>{totalAmount} AZN</span></div>
</div> :
<div>
    Katiniz bos...
</div>
}
    </div>
  )
}

export default Cart
