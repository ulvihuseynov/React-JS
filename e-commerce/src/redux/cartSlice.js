import { createSlice } from "@reduxjs/toolkit";


const fetchFromLocalStorage=()=>{
let cart=localStorage.getItem('cart')

if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
} else {
    return []
}
}

const storegeInLocalStorage=(data)=>{
return localStorage.setItem("cart",JSON.stringify(data))
}

const initialState={
    carts: fetchFromLocalStorage(),
    itemCount:0,
    totalAmount:0
}

const cartSlice=createSlice({
    name:'cart',
initialState,
reducers:{
    addToCart:(state,action)=>{
    const isItemCart=state.carts.find(item=>item.id===action.payload.id)

    if(isItemCart){
        const tempCarts=state.carts.map(item=>{
            if (item.id===action.payload.id) {
                let tempQty=item.quantity+action.payload.quantity
                let tempTotalPrice=tempQty+item.price

                return {
                    ...item, quantity:tempQty, totalPrice:tempTotalPrice,
            }
            }else{
                return item
            }
        }) 
        state.carts=tempCarts
        storegeInLocalStorage(state.carts)
    }else{
        state.carts.push(action.payload)
        storegeInLocalStorage(state.carts)

    }
    },
    removeFromCart:(state,action)=>{
const tempCarts=state.carts.filter(item=>item.id !==action.payload)
state.carts=tempCarts
storegeInLocalStorage(state.carts)

    },
   clearCart:(state)=>{
       
        state.carts=[]
        storegeInLocalStorage(state.carts)
        
            },
    getTotalCart:(state)=>{
state.totalAmount=state.carts.reduce((cartTotal,cartItem)=>{
    return cartTotal+=cartItem.price * cartItem.quantity
},0)
state.itemCount=state.carts.length
    }
}
})


export const {addToCart,removeFromCart,clearCart,getTotalCart}=cartSlice.actions
export default cartSlice.reducer