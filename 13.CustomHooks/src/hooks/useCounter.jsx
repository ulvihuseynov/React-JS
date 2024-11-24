import React, {useState} from 'react'

function useCounter() {
  const [count,setCount]=useState(0)
  const artir=()=>{
    setCount(count+1)
  }

  const azalt=()=>{
   if (count>0) {
    setCount(count-1)
   }
  }
  return {count,artir,azalt}
}

export default useCounter
