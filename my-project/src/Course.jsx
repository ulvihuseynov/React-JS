import React from 'react'

function Course({course}) {
    const {id,title,description,price,image,link}=course;
    
  return (
    <div className='flex '>
      
{/* <div className='my-20  flex '> */}

    <div className='my-8  font-font-poppins shadow-md'>
    <img src={image} alt="" className='w-[100%] object-cover h-40'/>
    <div className='px-4 py-2'>
    <h4 className='text-xl font-semibold text-gray-600 py-3'>{title}</h4>
    <p className=''>{description}</p>
    <p className='py-3 text-xl text-red-700 font-bold text-right'>{price}$</p>
    <a className='text-blue-600 font-semibold' href={link}>Course link</a>
    </div>
    
</div>

</div>
    //   </div>
   
  )
}

export default Course
