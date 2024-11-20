import React, { useState } from "react";
import {  FaSortUp,FaSort,FaSortDown } from "react-icons/fa";
import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'
import TableMobile from "./TableMobile";
const Table = ({ head, body, searchAble }) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
 
  const [sorting,setSorting]=useState(false)
  const [search, setSearch] = useState("");
  const filterdData =body && body.filter((items) =>
    items.some((item) => {
      // console.log(item)
      return item.toString().toLocaleLowerCase('AZ').includes(search.toLocaleLowerCase('AZ')) || item?.key?.toString().toLocaleLowerCase('AZ').includes(search.toLocaleLowerCase('AZ'))
    })
  ).sort((a,b)=>{
    if (sorting?.orderBy=='asc') {
   return    a[sorting.index].toString().localeCompare(b[sorting.index])
    }
    if (sorting?.orderBy=='desc') {
      return    b[sorting.index].toString().localeCompare(a[sorting.index])
       }
  });
 
  // console.log(sorting)
  if (!body|| body.length==0) {
    return (
      <div className="p-4 rounded bg-yellow-200 text-yellow-700 text-sm">Gosterilicek data yoxdur</div>
    )
  }


  return (
    <>
    
      {searchAble && (
        <div className="mb-4 flex gap-x-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Table search"
            className="w-full outline-none h-10 px-3 border rounded border-gray-400 text-sm"
          />
          {sorting && (<button
          onClick={()=>setSorting(false)}
          className="h-10 rounded border test-sm px-4 boder-red-500 text-red-500 whitespace-nowrap">Remove sorting</button>)}
        </div>
      )}
         {isMobile && <TableMobile head={head} body={filterdData}/>}
         {!isMobile && (
 <div className="w-full border rounded p-4">
 <table className="w-full">
   <thead>
     <tr>
      
      {head.map((h, index) => (
         <th
    width={h?.width}
   
           className="text-left text-sm font-semibold bg-gray-50 text-gray-600 p-3 border-b"
           key={index}
         >
           <div className="inline-flex items-center gap-x-2">
           {h.name}
           {h?.sortable && (
     <button onClick={()=>{
       if (sorting?.index == index) {
         setSorting({
           index,
           orderBy:sorting.orderBy =='asc' ? 'desc': 'asc'
           })
       }else{
         setSorting({
           index,
           orderBy:'asc'
           })
       }
     
     }}>
        {sorting?.index==index && (
         sorting.orderBy=='asc' ? <FaSortDown size={14}/> :<FaSortUp size={14}/>
        )}
    {sorting?.index!==index && <FaSort size={14}/>}

     </button>
    )}
    </div>
         </th>
       ))}
     
     </tr>
   </thead>
   <tbody>
     {filterdData && filterdData.map((items, key) => (
       <tr className="group" key={key}>
         {items.map((item, index) => (
           <td
             className="p-3 text-sm group-hover:bg-blue-50 group-hover:text-blue-700"
             key={index}
         
           >
          { Array.isArray(item) ? (
             <div
             className="flex gap-x-2 "
             >{item}</div>
          ) :item}
   
           </td>
         ))}
       </tr>
     ))}
   </tbody>
 </table>
</div>
         )}
  {/* } */}
      {/* {search} */}
     
    </>
  );
};

export default Table;
