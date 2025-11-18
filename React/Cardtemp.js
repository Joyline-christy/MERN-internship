import React from 'react';
import "../App.css"

const Cardtemp = ({title,description,src}) => {
  return (
    <div>
     <div className='Card_design'>
        
          <div className='img01'><img src={src} alt="ice cream img"/></div>
          <div className='head'><h1>{title}</h1></div>
          <div className='desc'><p>{description}</p></div>
        
     </div>


    </div>
  )
}

export default Cardtemp
