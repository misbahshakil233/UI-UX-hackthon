import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Heading */}
      <h1 className="text-lg font-bold text-gray-600 mb-2 text-center">
        What we do
      </h1>
      
      {/* Subheading */}
      <p className="text-7xl font-bold mb-6 text-center">
        Innovation tailored for you
      </p>
      
      {/* Breadcrumb */}
      <nav className="text-black text-sm md:text-base mb-6 flex">
        Home &gt; <span className="text-gray-400 ml-1">Team</span>
      </nav>
      
      {/* Image */}
      <div className="w-full max-w-4xl mb-8">
        <Image
          src="/blog.png" // Replace with your actual image path
          alt="Team"
          width={5000}
          height={500}
          className="object-cover w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Meet Our Team Heading */}
      <p className="text-4xl font-bold text-center mt-12">
        Meet Our Team
      </p>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/team-1.jpg"
            alt="Team Member 1"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">John Doe</p>
          <p className="text-gray-500 mb-4">Project Manager</p>
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
          <Image
            src="/team-2.jpg"
            alt="Team Member 2"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">Jane Smith</p>
          <p className="text-gray-500 mb-4">Lead Designer</p>
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
          <Image
            src="/team-3.jpg"
            alt="Team Member 3"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">Mike Johnson</p>
          <p className="text-gray-500 mb-4">Software Engineer</p>
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

      {/* 2nd row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/team-4.jpg"
            alt="Team Member 1"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">John Doe</p>
          <p className="text-gray-500 mb-4">Project Manager</p>
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
          <Image
            src="/team-5.jpg"
            alt="Team Member 2"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">Jane Smith</p>
          <p className="text-gray-500 mb-4">Lead Designer</p>
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
          <Image
            src="/team-6.jpg"
            alt="Team Member 3"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">Mike Johnson</p>
          <p className="text-gray-500 mb-4">Software Engineer</p>
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

       {/* 3rd row */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/team-7.jpg"
            alt="Team Member 1"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">John Doe</p>
          <p className="text-gray-500 mb-4">Project Manager</p>
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
          <Image
            src="/team-8.jpg"
            alt="Team Member 2"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">Jane Smith</p>
          <p className="text-gray-500 mb-4">Lead Designer</p>
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
          <Image
            src="/team-9.jpg"
            alt="Team Member 3"
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
          <p className="font-bold text-lg mt-4">Username</p>
          <p className="text-gray-500 mb-4">profession</p>
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

    </div>
  );
};

export default Page;
