import React from 'react'

const TableMobile = ({head,body}) => {
  return (
    <div className='border divide-y rounded p-4'>
      {
        body.map((items,key)=>(
            <section className='pt-4 first:pt-0 grid gap-y-2'>
                {
items.map((item,key)=>(
<div className='tetx-sm flex items-center gap-x-6'>
  <h6 className='min-w-[70px] text-sm font-semibold text-gray-500'>  {head[key].name}</h6>
{ Array.isArray(item) ? (
                    <div
                    className="flex gap-x-2 "
                    >{item}</div>
                 ) :item}
</div>
))
                }
                {/* <h6 className='text-sm font-semibold text-gray-500 mb-2'>{h.name}</h6> */}
                
            </section>
        ))
      }
    </div>
  )
}

export default TableMobile
