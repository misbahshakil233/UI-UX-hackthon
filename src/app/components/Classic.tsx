"use client";

import Image from "next/image";

const Classic = () => {
  return (
    <section className="relative h-screen w-full bg-[#23856D]">
      {/* Hero Image */}
      <div className="relative h-full w-full flex justify-end">
        <Image
          src="/clasic.png" // Hero image path
          alt="Hero Image"
          width={300} // Adjust the width as needed
          height={300} // Adjust height accordingly
          className="object-cover w-auto h-full absolute right-40" // Adjust image to the right side
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-48 transform -translate-y-1/2 text-white px-6 max-w-lg">
          {/* Summer 22 Text */}
          <h1 className="text-xs sm:text-xl font-semibold mb-4">SUMMER 2020</h1>

          {/* New Collection Text */}
          <p className="text-5xl sm:text-6xl font-extrabold mb-6">Vita Classic <br /> Product</p>

          {/* Small Description */}
          <p className="text-xl sm:text-lg mb-8">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          {/* Price and Button */}
          <div className="flex items-center gap-4">
            <p className="text-xl font-bold">$16.48</p>
            <button className="bg-lightGreen text-white py-3 px-8 sm:py-2 sm:px-6 hover:bg-green-400 bg-[#2DC071] transition duration-300 text-lg sm:text-base">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classic;
