import React from 'react'
import {moneyFormat} from '../helpers'
const Header = ({money,total}) => {
  return (
   <div className='header'>
    {
      total > 0 && money- total !==0 && (
        <div className='header'> Xerclemek ucun <span>{moneyFormat(money -total)}</span> manat pulunuz var.</div>
      )} 
      {
        total ===0 && (
          <div className='header'> Xerclemek ucun <span>{moneyFormat(money)}</span> manat pulunuz var.</div>
        )
      }
{
  money- total ===0 && (
    <div className='header'>Parasiz insan bos insandir</div>
  )
}
   </div>
  )
}

export default Header
