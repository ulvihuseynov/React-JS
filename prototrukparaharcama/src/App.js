
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import product from './product.json'
import Product from './components/Product';
import Basket from './components/Basket'
function App() {
  const [money,setMoney]=useState(1000000)
  const [basket,setBasket]=useState([])
  const [total,setTotal]=useState([])
  useEffect(()=>{
setTotal(basket.reduce((acc,item)=>{
return acc+(item.amount * (product.find(products=>products.id===item.id).price))
},0))
  },[basket])
  console.log(total,'total')
  const resetBtn =()=>{
   setBasket([])
  }
  return (
    <div>
      <Header total={total} money={money}/>
      <div className='container products'>
      {
       
       product.map((item,)=>(
         <Product total={total} money={money} basket={basket} setBasket={setBasket} key={item.id} products={item}/>
       ))
       
     }
      </div>
      <Basket resetBtn={resetBtn} total={total} product={product} basket={basket}/>
     
    </div>
  );

  }





export default App;
