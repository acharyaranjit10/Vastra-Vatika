import React from 'react';
import data_product from '../Assets/data';
import Item from '../Items/Item';

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-y-2.5 py-8 md:py-16 px-4 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 text-center">POPULAR IN WOMEN</h1>
      <hr className="w-32 sm:w-48 h-1 rounded-full bg-gray-800 border-none mt-2" />
      <div className="mt-8 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 w-full max-w-screen-xl mx-auto">
        {data_product.map((item, i) => (
          <div key={i} className="w-full min-w-0 overflow-hidden"> {/* Strict containment */}
            <div className="w-full h-full flex justify-center"> {/* Centering wrapper */}
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;