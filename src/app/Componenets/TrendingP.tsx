import { FaStar } from 'react-icons/fa';




function Sales() {
  const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: "$190.00",
      originalPrice: "$190.00",
      altText: "Product 1 Image",
      imgSrc: "/trend 1.png",
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
      imgSrc: "/trend 2.png",
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
      imgSrc: "/trend 3.png",
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
      imgSrc: "/trend 4.png",
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
      imgSrc: "/trend 5.png",
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
      imgSrc: "/trend 6.png",
      rating: 4,
      reviews: 200,
      off: "30%",
    },
    // New products
    {
      id: 7,
      name: "Comfort Handy Craft",
      price: "$100.00",
      originalPrice: "$150.00",
      altText: "Product 7 Image",
      imgSrc: "/trend 4.png",
      rating: 4,
      reviews: 75,
      off: "50%",
    },
    {
      id: 8,
      name: "Comfort Handy Craft",
      price: "$120.00",
      originalPrice: "$150.00",
      altText: "Product 8 Image",
      imgSrc: "/trend 6.png",
      rating: 4,
      reviews: 50,
      off: "40%",
    },
  ];

  return (
    <div>
      <section className="flex flex-col gap-5 px-4 pl-20 py-28 justify-center">
        <div className="flex justify-center text-center">
          <h1 className="sm:text-[2.5em] text-[1.7em] font-jost font-[510]">
            Trending Products
          </h1>
        </div>

     

        {/* Display products in a row of 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8">
          {products.map((items) => (
            <div
              key={items.id}
              className="w-[270px] h-[350px] py-4 px-4 rounded-lg border border-[#939393] flex flex-col items-center relative"
            >
              <div className="absolute font-poppins text-[0.9em] px-4 bg-red-500 top-2 left-0">
                {items.off}
              </div>
              <div className="absolute flex flex-col gap-4 font-poppins top-3 right-2">
                {/* <FaHeart size={40} className="rounded-full py-2 px-2 " />
                <Eye size={40} className="rounded-full py-2 px-2 " /> */}
              </div>
              <img
                src={items.imgSrc}
                alt={items.altText}
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
