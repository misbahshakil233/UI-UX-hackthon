"use client";

import Image from "next/image";

const Neural = () => {
  return (
    <section className="relative h-screen w-full bg-white">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full w-full">
        
        {/* Image on the Left */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end md:pl-10">
          <Image
            src="/neyral.png" // Hero image path
            alt="Hero Image"
            width={700}
            height={500}
            className="object-contain max-w-full h-auto" // Maintains aspect ratio
          />
        </div>

        {/* Text Overlay on the Right */}
        <div className="relative w-full md:w-1/2 text-black px-6 md:pl-16 md:pr-10">
          <h1 className="text-xs sm:text-sm md:text-xl font-semibold mb-2 md:mb-4 text-gray-400">
            SUMMER 2020
          </h1>

          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
            Part of the Neural <br /> Universe
          </p>

          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-500 font-semibold">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          {/* Price and Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-green-500 text-white py-2 px-6 sm:py-3 sm:px-8 hover:bg-green-400 transition duration-300 text-sm sm:text-base md:text-lg">
              BUY NOW
            </button>
            <button className="bg-white text-green-600 py-2 px-6 sm:py-3 sm:px-8 hover:bg-green-500 hover:text-white border-2 border-green-600 transition duration-300 text-sm sm:text-base md:text-lg">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neural;
