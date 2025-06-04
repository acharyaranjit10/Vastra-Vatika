import React, { useContext, useState } from 'react';
import star_icon from '../Assets/star_icon.svg';
import star_dull_icon from '../Assets/star_dull_icon.svg';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  
  // Sample images for gallery
  const galleryImages = [
    product?.image || 'default-image.jpg',
    product?.image || 'default-image.jpg',
    product?.image || 'default-image.jpg',
    product?.image || 'default-image.jpg'
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  const {
    name = 'Unknown Product',
    old_price = '0',
    new_price = '0',
    rating = 4,
    reviews = 0,
  } = product;

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6">
      {/* Mobile Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 md:hidden">
        Home / Products / {name.substring(0, 20)}...
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="lg:w-1/2">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto py-2 md:py-0">
              {galleryImages.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 cursor-pointer border-2 rounded-md transition-all duration-300 ${selectedImage === index ? 'border-red-500' : 'border-gray-200'}`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`} 
                    className="h-16 w-16 md:h-20 md:w-16 object-cover rounded-sm"
                  />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-grow flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden p-4">
              <img 
                src={galleryImages[selectedImage]} 
                alt={name} 
                className="w-full h-auto max-h-[500px] object-contain transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <img
                    key={index}
                    src={index < rating ? star_icon : star_dull_icon}
                    alt={`star-${index}`}
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({reviews} reviews)</span>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl font-bold text-green-600">Rs.{new_price}</div>
              <div className="text-xl text-gray-500 line-through">Rs.{old_price}</div>
              <div className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                {Math.round(((old_price - new_price) / old_price) * 100)}% OFF
              </div>
            </div>
            
            <div className="text-gray-700 mb-8">
              <p className="mb-4">
                Crafted from high-quality fabric, this versatile piece offers both comfort and style. 
                Perfect for any occasion, it features a sleek design that complements any wardrobe.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Premium quality material for lasting comfort
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Easy care - machine washable
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Perfect fit for all body types
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h2>
              <div className="flex flex-wrap gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-lg border-2 transition-colors duration-300 ${
                      selectedSize === size 
                        ? 'bg-red-100 border-red-500 text-red-700 font-bold' 
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
               <button
                onClick={() => { 
                 
                  if (!selectedSize) {
                    alert("Please select a size first!");
                    return;
                  }
                  addToCart(product.id);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                ADD TO CART
              </button>
              
              <button className="flex-1 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-bold py-3.5 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                WISHLIST
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Category:</span> Women, T-shirt, Croptop
                </div>
                <div>
                  <span className="font-medium">Tags:</span> Modern, Latest
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Info Tabs */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {['Description', 'Reviews', 'Shipping'].map((tab) => (
                  <button
                    key={tab}
                    className="py-2 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300"
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-4 text-gray-700">
              <p className="mb-3">
                This premium {name} is crafted from 100% organic cotton, ensuring maximum comfort and breathability. 
                The fabric is soft against the skin and maintains its shape wash after wash.
              </p>
              <p>
                Featuring a modern cut and versatile design, it's perfect for both casual outings and formal occasions. 
                The attention to detail in stitching and finishing makes this a standout piece in any wardrobe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;