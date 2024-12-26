import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer'
import Link from "next/link";
const Page = () => {
  return (
    <div>
      
      <div className="px-5 pt-4">
  {/* Content Above Image */}
  {/* Add any additional content here */}

  {/* Image Section */}
  <Image
    src="/list.png" // Path to the image
    alt="Product Image"
    width={3000} // Width of the image
    height={200} // Height of the image
    className="max-w-full h-auto block mt-4 md:mt-6"
    style={{
      marginTop: "60px", // Ensure it clears the navbar
    }}
  />
</div>

      <div style={{ padding: "10px" }}>
        {/* Outer White Background Section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "8px",
          
          }}
        >
          {/* Single-Line Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <div className="container flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-0 px-4 py-2">
  {/* Text Section */}
  <div className="text-section">
    <p className="text-gray-600 text-sm sm:text-base m-0">Showing All Results</p>
  </div>

  {/* Center Section: View and Boxes */}
  <div className="view-section flex items-center gap-4">
    {/* "View" Text */}
    <p className="font-bold text-gray-800 m-0">View</p>

    {/* Small Square with Dots */}
    <div className="icon-grid grid grid-cols-2 gap-1 border border-gray-300 rounded w-8 h-8">
      <div className="dot bg-black rounded-full w-2 h-2"></div>
      <div className="dot bg-black rounded-full w-2 h-2"></div>
      <div className="dot bg-black rounded-full w-2 h-2"></div>
      <div className="dot bg-black rounded-full w-2 h-2"></div>
    </div>

    {/* Small Square with Horizontal Lines */}
    <div className="icon-lines flex flex-col justify-evenly border border-gray-300 rounded w-8 h-8">
      <div className="line bg-black h-0.5 w-4/5"></div>
      <div className="line bg-black h-0.5 w-4/5"></div>
      <div className="line bg-black h-0.5 w-4/5"></div>
    </div>
  </div>

  {/* Buttons and Select */}
  <div className="action-section flex items-center gap-2">
    <select className="p-2 border border-gray-300 rounded cursor-pointer">
      <option>Popularity</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Filter
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
        
      <Image
          src="/images.png" // Path to the image (relative to the 'public' folder)
          alt="Product Image"
          width={3000} // Width of the image
          height={300} // Height of the image
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
      </div>
     <br></br>
<Footer />
     <br></br>
     {/* Images Row Section 1 */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {/* Product 1 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-1.png"
              alt="Product Image 1"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 2 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-2.png"
              alt="Product Image 2"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 3 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-3.png"
              alt="Product Image 3"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 4 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-4.png"
              alt="Product Image 4"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>

      {/* Images Row Section 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {/* Product 5 */}
        
          <div className="flex flex-col items-center">
            <Image
              src="/product-5.png"
              alt="Product Image 5"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
       

        {/* Product 6 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-6.png"
              alt="Product Image 6"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 7 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/roduct-8.png"
              alt="Product Image 7"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>

        {/* Product 8 */}
        <Link href="/moreproduct">
          <div className="flex flex-col items-center">
            <Image
              src="/product-8.png"
              alt="Product Image 8"
              width={200}
              height={200}
              className="object-cover"
            />
            <p className="mt-4 text-black text-sm">Graphic Designer</p>
            <div className="text-gray-500 text-sm">English Department</div>
            <div className="flex items-center mt-4">
              <div className="text-gray-400 text-lg mr-4">$16.48</div>
              <div className="text-green-500 text-lg">$6.48</div>
            </div>
            {/* Colored Circles */}
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
              <div className="w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
