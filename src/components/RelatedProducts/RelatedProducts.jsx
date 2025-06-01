import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'; // Make sure to import useLayoutEffect and useRef
import data_product from '../Assets/data'; // Assuming this path is correct for your product data
import Item from '../Items/Item'; // Assuming this path is correct for your Item component

const RelatedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);
  
  // useRef to store the scroll position before state updates trigger a re-render.
  // This value persists across renders without causing extra re-renders.
  const scrollPositionRef = useRef(0); 

  // --- Determine how many items to display based on screen width ---
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) return 2; // Mobile
      if (window.innerWidth < 768) return 3; // Small tablet
      if (window.innerWidth < 1024) return 4; // Tablet
      return 5; // Desktop
    };
    
    // Set initial visible items
    setVisibleItems(updateVisibleItems());
    
    // Add event listener to update visible items on window resize
    const handleResize = () => setVisibleItems(updateVisibleItems());
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array ensures this effect runs only once on mount and unmount

  // Calculate the total number of "slides" or pages based on the total products
  // and how many items are visible at once.
  const totalSlides = Math.ceil(data_product.length / visibleItems);
  
  // --- useLayoutEffect to restore scroll position immediately after DOM updates ---
  // This runs synchronously after React's DOM mutations but before the browser paints.
  useLayoutEffect(() => {
    // Only scroll if there's a saved position and it's not the very top (initial load might be 0)
    if (scrollPositionRef.current !== 0) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [currentIndex, visibleItems]); // Re-run this effect when currentIndex or visibleItems changes

  // --- Handlers for navigation (Prev/Next buttons and Pagination Dots) ---

  const handlePrev = (e) => {
    e.preventDefault(); // Prevent default browser behavior that might cause a jump
    
    // Capture the current scroll position before updating the state
    scrollPositionRef.current = window.scrollY;
    
    // Update the current slide index
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : totalSlides - 1));
  };
  
  const handleNext = (e) => {
    e.preventDefault(); // Prevent default browser behavior
    
    // Capture the current scroll position
    scrollPositionRef.current = window.scrollY;
    
    // Update the current slide index
    setCurrentIndex(prev => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handleDotClick = (e, index) => {
    e.preventDefault(); // Prevent default browser behavior
    
    // Capture the current scroll position
    scrollPositionRef.current = window.scrollY;
    
    // Set the current slide index directly to the clicked dot's index
    setCurrentIndex(index);
  };

  return (
    <div className="w-full py-10 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* --- Section Title and Description --- */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Related Products
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover more products you might love
          </p>
        </div>
        
        <div className="relative">
          {/* --- Navigation Arrows --- */}
          {/* Using divs with onClick, tabIndex, and role="button" for accessibility */}
          <div 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            aria-label="Previous products"
            tabIndex="0" // Makes the div keyboard focusable
            role="button" // Informs screen readers it's a button
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          
          <div 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            aria-label="Next products"
            tabIndex="0" // Makes the div keyboard focusable
            role="button" // Informs screen readers it's a button
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          {/* --- Products Grid --- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {data_product
              .slice(currentIndex * visibleItems, (currentIndex + 1) * visibleItems)
              .map((item, i) => (
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
        </div>
        
        {/* --- Pagination Dots --- */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array(totalSlides).fill().map((_, i) => (
            <div
              key={i}
              onClick={(e) => handleDotClick(e, i)} // Use the new handler for dots
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex 
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 w-6' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              tabIndex="0" // Makes dots keyboard focusable
              role="button" // Informs screen readers they are buttons
            />
          ))}
        </div>
        
        {/* --- View All Products Button --- */}
        <div className="mt-10 flex justify-center">
          <div className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-full shadow-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl cursor-pointer">
            View All Products
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;