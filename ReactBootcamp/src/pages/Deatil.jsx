import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Deatil = () => {
  const [allData,setAllData]=useState() 
const {id}=useParams()
console.log(id)
useEffect(()=>{
  const  getAllData= async()=>{
    const {data} =await axios.get(`https://fakestoreapi.com/products/${id}`)
   setAllData(data)
     }
     getAllData()
},[id])
console.log(allData)
return(
  <div>
{
<div>
<div>{allData?.title}</div>
<img style={{width:'130px'}} src={allData?.image} alt="" />
<div>{allData?.price}</div>
</div>


 
}

 </div>
  )
}

export default Deatil
