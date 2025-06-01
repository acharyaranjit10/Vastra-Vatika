import React from 'react';
import rtarrow_icon from '../Assets/arrow.svg';

const Breadcrumb = (props) => {
  const { product } = props;

  return (
    <div className="flex items-center gap-x-2 text-sm text-gray-600 font-semibold capitalize mt-14 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      HOME
      <img src={rtarrow_icon} alt="" className="w-4 h-4" />
      SHOP
      <img src={rtarrow_icon} alt="" className="w-4 h-4" />
      {product.category}
      <img src={rtarrow_icon} alt="" className="w-4 h-4" />
      {product.name}
    </div>
  );
};

export default Breadcrumb;