import React from 'react'

const Country = ({country}) => {
  return (
    <div style={{width:'400px',height:"400px"}}>
      <div>
        <img style={{width:'350px',height:'250px'}} src={country?.flags.png} alt="" />
      </div>
      <div>
        <h1>{country?.name?.common}</h1>
        <p>{country?.capital}</p>
      </div>
    </div>
  )
}

export default Country
