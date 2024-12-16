import React from "react";

const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Content (Heading and Navigation) */}
        <div className="text-center mb-10">
          <h2 className="text-cyan-900 text-3xl font-bold mb-4">
            Discount Item
          </h2>
          <div className="flex justify-center space-x-3 text-sm text-sky-900 hover:text-blue-950 mb-6">
            <span className="underline cursor-pointer">Wood Chair</span>
            <span className="underline cursor-pointer">Plastic Chair</span>
            <span className="underline cursor-pointer">Sofa Collection</span>
          </div>
       
        </div>

        {/* Main Content (Description and Image) */}
        <div className="flex flex-wrap items-center gap-10">
          <div className="flex-1">

          <h3 className="text-2xl font-bold text-gray-800">
            20% Discount Of All Products
          </h3>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Material expose like metals</li>
              <li>Simple neutral colours</li>
              <li>Clear lines and geometric figures</li>
              <li>Material expose like metals</li>
            </ul>
            <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>

          {/* Right Content (Image) */}
          <div className="flex-1">
            <img
              src="/Discount it.png"
              alt="Chair"
              className="rounded-full shadow-md w-[699px] h-[597px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
