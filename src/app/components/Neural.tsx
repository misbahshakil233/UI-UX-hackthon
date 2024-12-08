"use client";

import Image from "next/image";

const Neural = () => {
  return (
    <section className="relative h-screen w-full bg-white">
      {/* Hero Section */}
      <div className="flex items-center justify-between h-full w-full">
        
        {/* Image on the Left */}
        <div className="relative w-1/2 left-44">
          <Image
            src="/neyral.png" // Hero image path
            alt="Hero Image"
         width={700}
         height={500}
            className="object-contain" // Ensures the image maintains aspect ratio
          />
        </div>

        {/* Text Overlay on the Right */}
        <div className="relative w-1/2 text-black px-6 left-40">
          <h1 className="text-xs sm:text-xl font-semibold mb-4 text-gray-400 ">SUMMER 2020</h1>

          <p className="text-5xl sm:text-4xl font-extrabold mb-6">Part of the Neural <br /> Universe</p>

          <p className="text-xl sm:text-lg mb-8 text-gray-500 font-semibold">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          {/* Price and Button */}
          <div className="flex items-center gap-4">
            
            <button className="bg-lightGreen text-white py-3 px-8 sm:py-2 sm:px-6 hover:bg-green-400 bg-green-500 transition duration-300 text-lg sm:text-base">
            BUY NOW
            </button>
            <button className="bg-white text-green-600 py-3 px-8 sm:py-2 sm:px-6 hover:bg-green-500 hover:text-white border-2 border-green-600 transition duration-300 text-lg sm:text-base">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neural;
