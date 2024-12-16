import Image from "next/image";

function Pic() {
  return (
    <div className="relative">
      {/* Section Container without black background */}
      <section className="flex justify-center items-center py-10 relative">
        {/* The Content Container */}
        <div className="absolute z-10 text-center text-white">
          <p className="text-2xl font-bold flex-col text-indigo-900 font-poppins">Get Leatest Update By Subscribe
          0ur Newslater</p>
          <button className="mt-4 px-8 py-2 bg-[#ff22aa] font-poppins rounded-md">Shop Now!</button>
        </div>

        {/* The Image */}
        <Image
          src="/Rectangle 102.png" // Path to the image
          alt="Offer Best Speaker"
          width={1920} // Image width
          height={462} // Image height
          className="object-cover w-full h-[462px] md:h-[462px]"
        />
      </section>
    </div>
  );
}

export default Pic;

