import {useEffect, useState} from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './slice/CounterSlice';
import { getData } from './country/CountrySlice';
import Country from './Country';


function App() {
// let [counter,setCounter]=useState(0)
const {value}=useSelector(state=>state.counter)
const {countries}=useSelector(state=>state.country)
console.log(countries)
const dispatch=useDispatch()

useEffect(()=>{
  dispatch(getData())
},[])
  return (
    <div className="App">
     <div onClick={()=>dispatch(increment())}>+</div>
     <div>{value}</div>
     <div onClick={()=>dispatch(decrement())}>-</div>
<div style={{display:'flex',flexWrap:'wrap'}}>
  {
  countries?.map((country,index)=>(
    <Country key={index} country={country}/>
  ))
}
</div>
    </div>
  );
}

export default App;
