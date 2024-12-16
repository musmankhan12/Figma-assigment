// components/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
 <div>
     
      {/* INTENTIONAL Vertical GAP between Hero Section & Featured Products */}
      <div style={{ height: '100px' }}></div>

      {/* Featured Products Section */}
      <div
        className="relative"
        style={{
          width: '100%',
          padding: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold mb-8 text-black">Top Categories</h2>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          style={{ width: '90%', margin: '0 auto' }}
        >
          {/* Product 1 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/tc 1.png"
              alt="Product 1"
              className="w-[178px] h-[178px] object-cover mb-3"
            />
            <h3 className="text-lg text-pink-500   font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 2 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/tc 2.png"
              alt="Product 2"
              className="w-[158px] h-[157px] object-cover mb-3"
            />
            <h3 className="text-lg text-pink-500  font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 3 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/tc 3.png"
              alt="Product 3"
              className="w-[149px] h-[149px] object-cover mb-3"
            />
            <h3 className="text-lg text-pink-500  font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>

          {/* Product 4 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/tc 1.png"
              alt="Product 4"
              className="w-[178px] h-[178px] object-cover mb-3"
            />
            <h3 className="text-lg text-pink-500 font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="text-sm text-gray-600">$42.00</p>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default HeroSection;