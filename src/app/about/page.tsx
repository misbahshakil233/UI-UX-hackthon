import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-16">
      <div className="flex max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Left Image */}
        <div className="flex-1 flex justify-center items-center">
          <img 
            src="/your-image-path.jpg" 
            alt="About Us Image" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1 pl-8">
          <div className="text-center md:text-left mb-4">
            <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <h2 className="text-3xl font-bold text-black">About Company</h2>
            <p className="mt-4 text-lg text-gray-700">
              About us description goes here. We know how large objects will act, 
              but things on a small scale is a key aspect for us. We focus on innovation and quality.
            </p>
          </div>

          <div className="text-center md:text-left mt-8">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none">
              Get Quote Now
            </button>
          </div>
        </div>
      </div>

      {/* Circle background under the image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-indigo-500 opacity-50"></div>
    </div>
  )
}

export default AboutUs
