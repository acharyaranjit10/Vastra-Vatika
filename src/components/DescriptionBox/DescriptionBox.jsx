import React from 'react';

const DescriptionBox = () => {
  return (
    <div className="mt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex">
        <div className="flex items-center justify-center text-sm font-semibold w-44 h-16 border border-gray-300">
          Description
        </div>
        <div className="flex items-center justify-center text-sm font-semibold w-44 h-16 border border-gray-300 bg-gray-100 text-gray-600">
          Reviews(150)
        </div>
      </div>
      <div className="flex flex-col gap-y-6 border border-gray-300 p-12 pb-16 text-gray-700 text-sm">
        <p>
          Welcome to Vastra Watika, your go-to destination for stylish, high-quality clothing that blends timeless elegance with modern trends. From casual everyday wear to standout statement pieces, our collection is designed to make you look and feel your best. At Vastra Watika, we believe in affordable fashion that doesn’t compromise on comfort or quality. Explore our curated selection and find the perfect pieces to elevate your wardrobe today!
        </p>
        <p>Vastra Watika: Clothes That Tell Your Story.</p>
      </div>
    </div>
  );
};

export default DescriptionBox;