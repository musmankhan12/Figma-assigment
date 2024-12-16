import React from 'react';

const HeroSection = () => {
  return (
    <div>
      {/* Vertical GAP between Hero Section & Featured Products */}
      <div style={{ height: '100px' }}></div>

      {/* Featured Products Section */}
      <div className="relative" style={{ width: '100%', padding: '20px', backgroundColor: '#f9f9f9' }}>
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold mb-8 text-black">Featured Products</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" style={{ width: '90%', margin: '0 auto' }}>
          
          {/* Product 1 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/feat p 1.png"
              alt="Product 1"
              className="object-cover mb-3 w-[178px] h-[178px]" // Custom width and height classes for image
            />
            <h3 className="text-lg text-pink-500 font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="w-[150px] h-[50px] text-sm text-gray-600">$42.00</p> {/* Custom width and height for price */}
          </div>

          {/* Product 2 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/featur P 2.png"
              alt="Product 2"
              className="object-cover mb-3 w-[130px] h-[150px]" // Custom width and height classes for image
            />
            <h3 className="text-lg text-pink-500 font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="w-[150px] h-[50px] text-sm text-gray-600">$42.00</p> {/* Custom width and height for price */}
          </div>

          {/* Product 3 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/featr P 3.png"
              alt="Product 3"
              className="object-cover mb-3 w-[175px] h-[175px]" // Custom width and height classes for image
            />
            <h3 className="text-lg text-pink-500 font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="w-[150px] h-[50px] text-sm text-gray-600">$42.00</p> {/* Custom width and height for price */}
          </div>

          {/* Product 4 */}
          <div className="border rounded-md p-4 shadow-md text-center">
            <img
              src="/featr P 4.png"
              alt="Product 4"
              className="object-cover mb-3 w-[216px] h-[151px]" // Custom width and height classes for image
            />
            <h3 className="text-lg text-pink-500 font-semibold mb-2">Cantilever chair</h3>
            <p className="text-sm text-gray-600">Code - Y523201</p>
            <p className="w-[150px] h-[50px] text-sm text-gray-600">$42.00</p> {/* Custom width and height for price */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
