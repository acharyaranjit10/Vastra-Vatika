// components/Items/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="w-full">
      <Link to={`/product/${props.id}`} className="block group">
        {/* Image Container with Hover Effect */}
        <div className="relative aspect-square overflow-hidden rounded-t-xl">
          <img 
            src={props.image} 
            alt={props.name} 
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
          {/* Discount Badge */}
          {props.old_price && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {Math.round((1 - props.new_price/props.old_price) * 100)}% OFF
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 text-base md:text-lg line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {props.name}
          </h3>
          
          {/* Price Section */}
          <div className="mt-2 flex items-center gap-3">
            <div className="text-gray-900 font-bold text-lg">Rs.{props.new_price}</div>
            {props.old_price && (
              <div className="text-gray-500 line-through text-sm">Rs.{props.old_price}</div>
            )}
          </div>
          
          {/* Rating */}
          <div className="mt-2 flex items-center">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-1">(24)</span>
          </div>
          
          {/* Add to Cart Button */}
          <button className="mt-3 w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors">
            Buy Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Item;