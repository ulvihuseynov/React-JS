import { useDispatch, useSelector } from "react-redux"
import { getAlldata } from "../redux/ProductSlice"
import { useEffect, useRef } from "react"

const Home = () => {
const {product}= useSelector(state=>state.product)
console.log(product)
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAlldata())
},[dispatch])
const inputRef=useRef()
const onFocus=()=>{
  inputRef.current.focus()
  console.log('count')
}
  return (

<div>
<input type="text" placeholder="Bir seyler yazin" ref={inputRef} />
<button onClick={onFocus}>Focus</button>
 {
product?.map((item)=>(
  <div key={item?.id}>
<img style={{width:'150px'}} src={item?.image} alt="" />
<div>{item?.title}</div>
  </div>
))

}
</div>
  
  )
}

export default Home
