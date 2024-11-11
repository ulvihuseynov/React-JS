import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../redux/productSlice'
import DetailComp from '../components/detail/DetailComp'
import Loading from '../components/Loading'

const Detail = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const { productDetails, productDetailsStatus}=useSelector(state=>state.product)

    useEffect(()=>{
        dispatch(getProductDetails(id))
    },[dispatch,id])
  return (
    <div>
    {
        productDetails ==='LOADING' ? <Loading/> :  <DetailComp productDetails={productDetails}/>
    }
    </div>
  )
}

export default Detail
