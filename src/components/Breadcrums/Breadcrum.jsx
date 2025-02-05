

import React from 'react'
import './Breadcrum.css'
import rtarrow_icon from '../Assets/arrow.svg';

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
    HOME <img src={rtarrow_icon} alt="" className="arrow" /> 
    SHOP <img src={rtarrow_icon} alt="" className="arrow" /> 
    {product.category} <img src={rtarrow_icon} alt="" className="arrow" /> 
    {product.name}
  </div>
  
  )
}

export default Breadcrum