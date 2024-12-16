function Services() {
    return (
      <div>
        {/* Heading for Latest Products */}
        <h2 className="text-center text-3xl font-bold mb-8">What Shopex Offers !</h2>
        
        <section className="flex justify-center flex-wrap gap-10 py-28 px-4">
          
          {/* Card for Image 1 */}
          <div className="flex flex-col justify-center items-center text-center px-2 py-5 border border-[#939393] rounded-lg shadow-lg w-[280px]">
            {/* Small Icon Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-full mb-4">
              <img src="/delry 1.png" alt="Icon 1" className="w-16 h-16 object-contain" />
            </div>
            
            {/* Main Full Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-lg">
              <img src="/deliry truk.png" alt="Service 1" className="w-full h-auto rounded-lg" />
            </div>
          </div>
  
          {/* Card for Image 2 */}
          <div className="flex flex-col justify-center items-center text-center px-2 py-5 border border-[#939393] rounded-lg shadow-lg w-[280px]">
            {/* Small Icon Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-full mb-4">
              <img src="/cashback 1.png" alt="Icon 2" className="w-16 h-16 object-contain" />
            </div>
            
            {/* Main Full Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-lg">
              <img src="/deliry truk.png" alt="Service 2" className="w-full h-auto rounded-lg" />
            </div>
          </div>
  
          {/* Card for Image 3 */}
          <div className="flex flex-col justify-center items-center text-center px-2 py-5 border border-[#939393] rounded-lg shadow-lg w-[280px]">
            {/* Small Icon Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-full mb-4">
              <img src="/delry.png" alt="Icon 3" className="w-16 h-16 object-contain" />
            </div>
            
            {/* Main Full Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-lg">
              <img src="/deliry truk.png" alt="Service 3" className="w-full h-auto rounded-lg" />
            </div>
          </div>
  
          {/* Card for Image 4 */}
          <div className="flex flex-col justify-center items-center text-center px-2 py-5 border border-[#939393] rounded-lg shadow-lg w-[280px]">
            {/* Small Icon Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-full mb-4">
              <img src="/call img.png" alt="Icon 3" className="w-16 h-16 object-contain" />
            </div>
            
            {/* Main Full Image */}
            <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-lg">
              <img src="/deliry truk.png" alt="Service 4" className="w-full h-auto rounded-lg" />
            </div>
          </div>
  
        </section>
      </div>
    );
  }
  
  export default Services;
  
  
  
  
  
  
  






































// import { TruckIcon, Headset, DollarSign } from "lucide-react";

// function Services() {
//   return (
//     <div>
//       <section className="flex justify-center flex-wrap gap-10 py-28 px-4">
        
//         {/* Card for Free and Fast Delivery */}
//         <div className="flex flex-col gap-5 justify-center items-center text-center px-2 py-5 border border-[#939393] rounded-lg shadow-lg w-[280px]">
//           <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-lg">
//             <TruckIcon size={75} className="text-white py-3 px-3 bg-black rounded-lg" />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h2 className="sm:text-[1.5em] text-[1.1em] font-[501] font-poppins">FREE AND FAST DELIVERY</h2>
//             <p className="sm:text-[1em] text-[0.9em] text-[#636363]">Free delivery for all orders over $140</p>
//           </div>
//         </div>

//         {/* Card for Customer Support */}
//         <div className="flex flex-col gap-5 justify-center items-center text-center px-2 py-5 border border-[#939393] rounded-lg shadow-lg w-[280px]">
//           <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-lg">
//             <Headset size={75} className="text-white py-3 px-3 bg-black rounded-lg" />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h2 className="sm:text-[1.5em] text-[1.1em] font-[501] font-poppins">24/7 CUSTOMER SUPPORT</h2>
//             <p className="sm:text-[1em] text-[0.9em] text-[#636363]">We are here to help anytime, anywhere</p>
//           </div>
//         </div>

//         {/* Card for Secure Payments */}
//         <div className="flex flex-col gap-5 justify-center items-center text-center px-2 py-5 border border-[#939393] rounded-lg shadow-lg w-[280px]">
//           <div className="py-2 px-2 bg-[#939393] bg-opacity-50 rounded-lg">
//             <DollarSign size={75} className="text-white py-3 px-3 bg-black rounded-lg" />
//           </div>
//           <div className="flex flex-col gap-2">
//             <h2 className="sm:text-[1.5em] text-[1.1em] font-[501] font-poppins">SECURE PAYMENTS</h2>
//             <p className="sm:text-[1em] text-[0.9em] text-[#636363]">Easy and secure payment methods for your convenience</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Services;
