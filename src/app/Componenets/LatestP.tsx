import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';


function Sales() {
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: "$190.00",
      originalPrice: "$190.00",
      altText: "Product 1 Image",
      imgSrc: "/bests 1.png", // Direct image path in public folder
      imgWidth: "223px", // Custom width
      imgHeight: "229px", // Custom height
      rating: 4,
      reviews: 50,
      off: "40%",
    },
    {
      id: 2,
      name: "Comfort Handy Craft",
      price: "$80.00",
      originalPrice: "$100.00",
      altText: "Product 2 Image",
      imgSrc: "/bests 2.png", // Direct image path in public folder
      imgWidth: "245px", // Custom width
      imgHeight: "245px", // Custom height
      rating: 5,
      reviews: 120,
      off: "80%",
    },
    {
      id: 3,
      name: "Comfort Handy Craft",
      price: "$160.00",
      originalPrice: "$200.00",
      altText: "Product 3 Image",
      imgSrc: "/bests 3.png", // Direct image path in public folder
      imgWidth: "221px", // Custom width
      imgHeight: "222px", // Custom height
      rating: 5,
      reviews: 80,
      off: "70%",
    },
    {
      id: 4,
      name: "Comfort Handy Craft",
      price: "$60.00",
      originalPrice: "$80.00",
      altText: "Product 4 Image",
      imgSrc: "/bests 4.png", // Direct image path in public folder
      imgWidth: "267px", // Custom width
      imgHeight: "277px", // Custom height
      rating: 4,
      reviews: 200,
      off: "30%",
    },
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: "$60.00",
      originalPrice: "$80.00",
      altText: "Product 5 Image",
      imgSrc: "/bests 5.png", // Direct image path in public folder
      imgWidth: "303px", // Custom width
      imgHeight: "264px", // Custom height
      rating: 4,
      reviews: 200,
      off: "30%",
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: "$60.00",
      originalPrice: "$80.00",
      altText: "Product 6 Image",
      imgSrc: "/bests 2.png", // Direct image path in public folder
      imgWidth: "245px", // Custom width
      imgHeight: "245px", // Custom height
      rating: 4,
      reviews: 200,
      off: "30%",
    },
  ];

  return (
    <div>
      <section className="flex flex-col gap-5 px-4 py-28 justify-center">
        <div className="flex justify-center text-center">
          <h1 className="sm:text-[2.5em] text-[1.7em] font-jost font-[510]">
            Latest Products
          </h1>
        </div>

        {/* Navbar-like layout below the heading */}
        <div className="flex justify-center gap-12 mt-8">
          <div className="text-lg font-semibold text-gray-700 hover:text-pink-600 cursor-pointer">
            New Arrival
          </div>
          <div className="text-lg font-semibold text-gray-700 hover:text-pink-600 cursor-pointer">
            Best Seller
          </div>
          <div className="text-lg font-semibold text-gray-700 hover:text-pink-600 cursor-pointer">
            Featured
          </div>
          <div className="text-lg font-semibold text-gray-700 hover:text-pink-600 cursor-pointer">
            Special Offer
          </div>
        </div>

        {/* Display products in a row */}
        <div className="flex flex-wrap justify-between gap-7 mt-8">
          {products.map((items) => (
            <div
              key={items.id}
              className="sm:w-[30%] w-[90%] py-4 px-4 rounded-lg border border-[#939393] flex flex-col items-center"
            >
              <div className="absolute font-poppins text-[0.9em] px-4 bg-red-500 top-2 left-0">
                {items.off}
              </div>
              <div className="absolute flex flex-col gap-4 font-poppins top-3 right-2">
                <FaHeart size={40} className="rounded-full py-2 px-2 " />
                <FaEye size={40} className="rounded-full py-2 px-2 " />
              </div>
              <img
                src={items.imgSrc} // Using the direct image path from the public folder
                alt={items.altText}
                width={items.imgWidth}  // Custom width passed here
                height={items.imgHeight} // Custom height passed here
                className="m-auto transform hover:scale-110 transition-all duration-500"
              />
              <div className="flex flex-col gap-2 mt-3 text-center">
                <p className="sm:text-[1.1em] text-[1em] font-poppins">{items.name}</p>
                <div className="flex gap-2 items-center justify-center">
                  <p className="sm:text-[1.1em] text-[1em] font-poppins text-red-500">
                    {items.price}
                  </p>
                  <p className="sm:text-[0.9em] line-through text-[0.7em] text-[#838383] font-poppins">
                    {items.originalPrice}
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <FaStar size={15} className="text-yellow-400" />
                  <FaStar size={15} className="text-yellow-400" />
                  <FaStar size={15} className="text-yellow-400" />
                  <FaStar size={15} className="text-yellow-400" />
                  <span>{`(${items.reviews})`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sales;
