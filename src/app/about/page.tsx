import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex justify-center items-center bg-white py-16">
        <div className="flex max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          {/* Left Text Section */}
          <div className="flex-1 pr-8">
            <div className="text-center md:text-left mb-4">
              <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <h2 className="text-xs font-bold text-black mt-28">ABOUT COMPANY</h2>
              <h2 className="text-6xl font-bold text-black">ABOUT US</h2>
              <p className="mt-4 text-lg text-gray-500">
                We know how large objects will act, <br />
                but things on a small scale.
              </p>
            </div>

            <div className="text-center md:text-left mt-8">
              <button className="bg-primary-blue text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none">
                Get Quote Now
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Larger Circle background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full opacity-50 z-0"></div>

            {/* Smaller Circle background */}
            <div className="absolute top-28 left-1 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-pink-300 rounded-full opacity-50 z-0"></div>
            <div className="absolute left-24 bottom-32 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-indigo-600 rounded-full opacity-50 z-0"></div>

            {/* Image */}
            <Image
              src="/about.png" // Hero image path
              alt="About Us Image"
              width={500} // Adjust the width as needed
              height={500} // Adjust height accordingly
              className="rounded-lg z-10"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Happy Customers */}
          <div className="text-center">
            <p className="text-4xl font-bold text-black">15K</p>
            <p className="text-xs text-gray-600 font-bold">Happy Customers</p>
          </div>

          {/* Monthly Visitors */}
          <div className="text-center">
            <p className="text-4xl font-bold text-black">150K</p>
            <p className="text-xs text-gray-600 font-bold">Monthly Visitors</p>
          </div>

          {/* Countries Worldwide */}
          <div className="text-center">
            <p className="text-4xl font-bold text-black">15</p>
            <p className="text-xs text-gray-600 font-bold">Countries Worldwide</p>
          </div>

          {/* Top Partners */}
          <div className="text-center">
            <p className="text-4xl font-bold text-black">100+</p>
            <p className="text-xs text-gray-600 font-bold">Top Partners</p>
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className="relative w-full h-[300px] mt-28">
        <Image
          src="/video.png" // Hero image path
          alt="Hero Image"
          width={800}
          height={800}
          objectFit="cover"
          className="absolute inset-0 m-auto rounded-lg"
        />
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-44 gap-8">
  {/* Team Member 1 */}
  <div className="flex flex-col items-center text-center mx-auto">
 
  <h1 className="text-black font-extrabold text-4xl mb-6">Meet Our Team</h1>
  <p className="text-xs text-gray-400 ">
    Problems trying to resolve the conflict between <br />
    the two major realms of Classical physics: Newtonian mechanics
  </p>

    <div className="relative mb-4">
      <Image
        src="/team-1.jpg"
        alt="Team Member 1"
        width={300}
        height={500}
        className="rounded-lg shadow-lg"
      />
    </div>
    <p className="font-bold text-lg mt-4">Username</p>
    <p className="text-gray-500 mb-4">Profession</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>

  {/* Team Member 2 */}
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      <Image
        src="/team-2.jpg"
        alt="Team Member 2"
        width={300}
        height={500}
        className="rounded-lg shadow-lg"
      />
    </div>
    <p className="font-bold text-lg mt-4">Username</p>
    <p className="text-gray-500 mb-4">Profession</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>

  {/* Team Member 3 */}
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      <Image
        src="/team-3.jpg"
        alt="Team Member 3"
        width={300}
        height={500}
        className="rounded-lg shadow-lg"
      />
    </div>
    <p className="font-bold text-lg mt-4">Username</p>
    <p className="text-gray-500 mb-4">Profession</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </div>
</div>

      {/* Additional Image Section */}
      <div className="relative w-full h-[300px] mt-52">
        <Image
          src="/icons.png" // Hero image path
          alt="Hero Image"
          width={3000}
          height={800}
          objectFit="cover"
          className="absolute inset-0 m-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
