import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown.svg';
import Item from '../components/Items/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-b from-pink-100 to-green-50/20">
        <img src={props.banner} alt={props.category} className="w-full max-h-64 object-contain" />
      </div>
      <div className="flex justify-between items-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600">
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 text-gray-700">
          Sort by
          <img src={dropdown_icon} alt="Dropdown Icon" className="w-4 h-4 ml-2 align-middle" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center mt-24">
        <div className="bg-gray-100 text-gray-600 font-medium text-lg rounded-full px-8 py-3 cursor-pointer">
          Explore More
        </div>
      </div>
    </div>
  );
};