"use client";

import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="relative h-screen w-full bg-gray-100">
      {/* Hero Image */}
      <div className="relative h-full w-full">
        <Image
          src="/hero.jpg" // Hero image path
          alt="Hero Image"
          layout="fill"
          className="object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/2 left-80 transform -translate-y-1/2 text-left text-white px-6 max-w-lg">
          {/* Summer 22 Text */}
          <h1 className="text-xs font-semibold mb-4">SUMMER 2020</h1>
          <br></br>
         
          {/* New Collection Text */}
          <p className="text-5xl font-extrabold mb-6">NEW COLLECTION</p>
          {/* Small Description */}
          <p className="text-xl mb-8">
            We know how large object will act,
            <br></br> 
            but things on a small scale.
          </p>

          {/* Button */}
          <button className="bg-lightGreen text-white py-5 px-10 hover:bg-green-400 bg-green-500 transition duration-300 text-lg">
            SHOP  NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
