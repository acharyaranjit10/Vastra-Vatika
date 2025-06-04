import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown.svg';
import Item from '../components/Items/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [visibleItems, setVisibleItems] = useState(4);
  
  // Filter products by category
  const categoryProducts = all_product.filter(item => props.category === item.category);

  // Toggle to show more or less items
  const toggleShowMore = () => {
    if (visibleItems === 4) {
      setVisibleItems(categoryProducts.length);
    } else {
      setVisibleItems(4);
    }
  };

  return (
    <div className="pb-16">
      <div className="bg-gradient-to-b from-pink-100 to-green-50/20">
        <img 
          src={props.banner} 
          alt={props.category} 
          className="w-full max-h-48 sm:max-h-64 object-contain"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mx-auto max-w-7xl py-4 sm:py-6 px-4 sm:px-6 lg:px-8 gap-4 sm:gap-0">
        <p className="text-gray-600 text-sm sm:text-base">
          <span>Showing 1-{Math.min(visibleItems, categoryProducts.length)}</span> out of {categoryProducts.length} products
        </p>
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-1.5 sm:py-2 text-gray-700 text-sm sm:text-base">
          Sort by
          <img src={dropdown_icon} alt="Dropdown Icon" className="w-3 h-3 sm:w-4 sm:h-4 ml-2 align-middle" />
        </div>
      </div>
      
      {/* Product grid - always 2 columns on mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 mt-4 sm:mt-8">
        {categoryProducts.slice(0, visibleItems).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      
      {/* Show More/Less button - only shown when there are more than 4 items */}
      {categoryProducts.length > 4 && (
        <div className="flex justify-center mt-8 sm:mt-12">
          <button
            className="bg-gray-100 text-gray-600 font-medium text-base sm:text-lg rounded-full px-6 py-2 sm:px-8 sm:py-3 cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={toggleShowMore}
          >
            {visibleItems === 4 ? 'Show More' : 'Show Less'}
          </button>
        </div>
      )}
    </div>
  );
};