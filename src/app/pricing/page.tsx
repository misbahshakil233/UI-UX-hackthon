import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Heading */}
      <h1 className="text-lg font-bold text-gray-600 mb-2 text-center">
        Pricing
      </h1>

      {/* Subheading */}
      <p className="text-5xl font-bold mb-6 text-center">
        Simple Pricing
      </p>

      {/* Breadcrumb */}
      <nav className="text-black text-sm md:text-base mb-6 flex">
        Home &gt; <span className="text-gray-400 ml-1">Pricing</span>
      </nav>

      

      {/* Pricing Text */}
      <p className="text-2xl font-bold mb-6 text-center mt-24">Pricing</p>
      <h1 className="text-xs font-bold text-gray-400 mb-2 text-center">
        Problems trying to resolve the conflict between <br />
        the two major realms of Classical physics: Newtonian mechanics
      </h1>

      {/* Pricing Selection */}
      <div className="flex items-center justify-center space-x-4 mt-10">
        {/* Monthly */}
        <p className="text-lg font-bold text-gray-600">Monthly</p>
        <button className="relative inline-flex items-center justify-center w-12 h-6 bg-gray-300 rounded-full">
          <span className="absolute left-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform transform"></span>
        </button>


        {/* Yearly */}
        <p className="text-lg font-bold text-gray-600">Yearly</p>
        

        {/* Save 25% */}
        <span className="text-sm font-semibold text-blue-600 bg-green-100 px-2 py-1 rounded-md">
          Save 25%
        </span>
      </div>

       {/* Cards Container */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg">
           
            <p className="text-gray-700 text-sm font-bold">georgia.young@example.com</p>
            <p className="text-gray-700 text-sm font-bold">georgia.young@ple.com</p>
            <p className="text-gray-700 text-sm font-bold mt-10">Get Support</p>
            <button className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-[#252B42] p-6 rounded-lg">
            {/* Icon with blur effect */}
            <div className="relative mb-4">
             
            </div>
            <p className="text-white text-sm font-bold">georgia.young@example.com</p>
            <p className="text-white text-sm font-bold">georgia.young@ple.com</p>
            <p className="text-white text-sm font-bold mt-10">Get Support</p>
            <button className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg">
            
            <p className="text-gray-700 text-sm font-bold">georgia.young@example.com</p>
            <p className="text-gray-700 text-sm font-bold">georgia.young@ple.com</p>
            <p className="text-gray-700 text-sm font-bold mt-10">Get Support</p>
            <button className="mt-4 border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
        <div>
        <Image
          src="/images.png" // Path to the image (relative to the 'public' folder)
          alt="Product Image"
          width={3000} // Width of the image
          height={300} // Height of the image
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
        </div>
        {/* Subheading */}
      <p className="text-3xl font-bold mt-36 text-center">
      Start your 14 days free trial
      </p>
      <h1 className="text-xs font-bold text-gray-400 mt-10 text-center ">
      Met minim Mollie non desert Alamo est sit cliquey dolor <br></br>
      do met sent. RELIT official consequent.
      </h1>
      <button className="bg-blue-600 px-6 py-4 rounded-lg text-white mt-10 transition-all duration-300 hover:bg-blue-700">
          Try it free now
        </button>
      <div className="flex justify-center md:justify-start space-x-6 mt-8">
                <a href="https://twitter.com" className="text-blue-600 hover:text-gray-600">
                  <FaTwitter size={24} />
                </a>
                <a href="https://facebook.com" className="text-blue-600 hover:text-gray-600">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://instagram.com" className="text-blue-600 hover:text-gray-600">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" className="text-blue-600 hover:text-gray-600">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
    </div>
  );
};

export default Page;
