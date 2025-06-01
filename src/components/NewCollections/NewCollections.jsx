import React from 'react';
import new_collection from '../Assets/new_collection';
import Item from '../Items/Item';

const NewCollections = () => {
  return (
    <div className="w-full py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            NEW COLLECTIONS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our latest arrivals and fresh styles
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {new_collection.map((item, i) => (
            <div key={i} className="flex justify-center">
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-full shadow-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl">
            View All Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;