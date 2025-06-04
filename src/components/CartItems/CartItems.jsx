import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove.svg';

const CartItems = () => {
  const { getTotalCart, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Desktop Table Headers */}
      <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-x-24 py-5 text-gray-700 font-semibold text-lg">
        <p>Products</p>
        <p>Title</p>
        <p className="text-right">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Total</p>
        <p>Remove</p>
      </div>
      <hr className="border-t-2 border-gray-200 my-4" />
      
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              {/* Mobile View */}
              <div className="md:hidden flex flex-col border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-start">
                  <img className="h-16 w-16 object-contain" src={e.image} alt={e.name} />
                  <img
                    className="h-5 w-5 cursor-pointer mt-1"
                    onClick={() => removeFromCart(e.id)}
                    src={remove_icon}
                    alt="Remove"
                  />
                </div>
                
                <div className="mt-3">
                  <p className="font-medium text-gray-800">{e.name}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-gray-500 text-sm">Price</p>
                      <p>Rs.{e.new_price}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-sm">Quantity</p>
                      <div className="flex justify-start mt-1">
                        <button className="w-12 h-8 border-2 border-gray-300 bg-white text-center">
                          {cartItems[e.id]}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-sm">Total</p>
                      <p>Rs.{e.new_price * cartItems[e.id]}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desktop View */}
              <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-x-6 py-4 text-gray-600 font-medium text-sm md:text-base">
                <img className="h-16 w-16 object-contain" src={e.image} alt={e.name} />
                <p>{e.name}</p>
                <p className="text-right">Rs.{e.new_price}</p>
                <div className="flex justify-center">
                  <button className="w-16 h-10 border-2 border-gray-300 bg-white text-center">
                    {cartItems[e.id]}
                  </button>
                </div>
                <p className="text-right">Rs.{e.new_price * cartItems[e.id]}</p>
                <img
                  className="h-4 w-4 ml-auto cursor-pointer"
                  onClick={() => removeFromCart(e.id)}
                  src={remove_icon}
                  alt="Remove"
                />
              </div>
              
              <hr className="border-t border-gray-200 my-2 md:my-4" />
            </div>
          );
        }
        return null;
      })}
      
      <div className="mt-16 md:flex md:justify-end gap-x-10">
        <div className="md:w-1/3">
          <h1 className="text-xl font-bold text-gray-800 mb-4">Cart Totals</h1>
          <div className="bg-gray-100 rounded-md p-6">
            <div className="flex justify-between py-3 text-gray-600">
              <p>Subtotal</p>
              <p>Rs.{getTotalCart()}</p>
            </div>
            <hr className="border-t border-gray-200 my-3" />
            <div className="flex justify-between py-3 text-gray-600">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="border-t border-gray-200 my-3" />
            <div className="flex justify-between py-3 text-gray-800 font-bold text-lg">
              <h3>Total</h3>
              <h3>Rs.{getTotalCart()}</h3>
            </div>
            <button className="w-full mt-6 py-3 rounded-md bg-red-500 text-white font-semibold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/3">
          <p className="text-gray-700 font-medium mb-3">If you have a promocode, enter here</p>
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <input
              type="text"
              placeholder="promocode"
              className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="px-4 py-2 bg-black text-white font-semibold text-lg hover:bg-gray-800 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;