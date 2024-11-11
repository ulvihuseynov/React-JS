import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/productSlice'
import ReactPaginate from "react-paginate"
import Product from './Product'
import Loading from '../Loading'

const Products = ({category, sort}) => {
 
  const dispatch=useDispatch()
  const {product,productStatus}=useSelector(state=>state.product)
console.log(sort)


  useEffect(()=>{
    // dispatch(getProducts())
    if (category) {
      dispatch(getCategoryProducts(category))
      
    }else{
      dispatch(getProducts())
    
    }
  },[dispatch,category]);

  const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage=6
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
   <div >
    {
      productStatus==='LOADING' ? <Loading/>:
    <>
      <div className='flex flex-wrap w-full '>
{
  currentItems?.sort((a,b)=>sort==='artan' ? a.price - b.price : sort==='azalan' ? b.price - a.price : null)?.map((productItem,index)=>(
<Product key={index} product={productItem}/>
  ))
}
      </div>

      <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
    }
   </div>
    
  )
}

export default Products
