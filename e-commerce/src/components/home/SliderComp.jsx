import React from 'react'
import Slider from 'react-slick'
const SliderComp = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <div className='my-12'>
    <Slider {...settings}>
<div className='!flex items-center bg-gray-100 '>
    <div className='px-20'>
        <div className='text-6xl font-bold'>En gozel ayaqqabi burda</div>
        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae facilis maxime totam at iste saepe rem veritatis quia sunt.</div>
<button className='bg-gray-200 rounded-full text-2xl flex justify-center items-center w-[200px] h-16 cursor-pointer'>Incele</button>
    </div>
    <div>
    <img className='w-96 h-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eFQnq9ZKOaYwapq8n1vgsrqyke1E2ijKJA&s" alt="" />
    </div>
</div>
<div  className='!flex items-center bg-gray-100 '>
<div className='px-20'>
        <div className='text-6xl font-bold'>En gozel ayaqqabi burda</div>
        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae facilis maxime totam at iste saepe rem veritatis quia sunt.</div>
<button className='bg-gray-200 rounded-full text-2xl flex justify-center items-center w-[200px] h-16 cursor-pointer'>Incele</button>
    </div>
   <div>
   <img className='w-96 h-96'  src="https://i.pinimg.com/736x/3e/d0/c6/3ed0c6dec8d3986dd74b735242c21bf0.jpg" alt="" />
   </div>
</div>
<div  className='!flex items-center bg-gray-100 '>
<div className='px-20'>
        <div className='text-6xl font-bold'>En gozel ayaqqabi burda</div>
        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae facilis maxime totam at iste saepe rem veritatis quia sunt.</div>
<button className='bg-gray-200 rounded-full text-2xl flex justify-center items-center w-[200px] h-16 cursor-pointer'>Incele</button>
    </div>
   <div>
   <img className='w-96 h-96'  src="https://contents.mediadecathlon.com/p2717212/18bb5c3bdf39ca9b494c718cf4422c75/p2717212.jpg?format=auto&quality=70&f=2520x0" alt="" />
   </div>
</div>
    </Slider>
    </div>
  )
}

export default SliderComp
