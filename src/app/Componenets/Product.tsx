import Image from "next/image";

function Offer() {
  return (
    <div className="flex lg:gap-0 gap-14 items-center lg:flex-row flex-col justify-evenly">
      {/* Image Container */}
      <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
        <Image
          src="/sofa blu.png"
          alt="Furnitur"
          width={509}
          height={550}
        />
      </div>

      {/* Text and Add to Cart Section */}
      <div className="flex flex-col gap-5">
        <h2 className="sm:text-[2.4em] text-[1.4em] font-semibold">
          Unique Features Of Latest & Trending Products
        </h2>
        
        <p className="sm:w-[500px] w-[90%] justify-center m-auto sm:text-[0.9em] text-[0.7em] leading-relaxed">
          Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. 
          Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands. 
          It serves 3 million customers across the region and offers more than 1 million products. Growing at a very fast pace, 
          Exclusive offers a diverse assortment in categories ranging from consumer electronics to home and living.
        </p>

        {/* Add to Cart Button */}
        <button className="mt-4 py-2 px-6 w-[175px] h-[45px] bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Offer;






























// import Image from "next/image";




// function Offer() {
//   return (
//     <div className="flex lg:gap-0 gap-14 items-center lg:flex-row flex-col justify-evenly">
//  <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
//  <Image
//             src='/sofa blu.png'
//             alt="Furnitur"
//             width={509}
//             height={550}
//             />

// </div>
//    <div className="flex flex-col gap-5">
//         <h2 className="sm:text-[2.4em] text-[1.4em] font-semibold">Unique Features Of leatest &
//         Trending Poducts</h2>
//         <p className="sm:w-[500px] w-[90%] justify-center m-auto sm:text-[0.9em] text-[0.7em] ">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer. </p>
//     </div>
//     </div>
//     )}

//     export default Offer