import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

function Home() {
  const [sort,setSort]=useState('')
  const [category,setcategory]=useState('')

  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div className='flex '>
        <Category setcategory={setcategory}/>
        <Products category={category}  sort={sort}/>
      </div>
    </div>
  )
}

export default Home
