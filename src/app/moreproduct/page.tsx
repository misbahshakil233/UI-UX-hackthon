import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer'
import Link from "next/link";
const Page = () => {
  return (
    <div>
      
      <div style={{ padding: "20px" }}>
        {/* Content Above Image */}
       

        {/* Image Section */}
        <Image
          src="/list.png" // Path to the image (relative to the 'public' folder)
          alt="Product Image"
          width={3000} // Width of the image
          height={200} // Height of the image
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
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
            {/* Text Section */}
            <div className='flex justify-between'>
              <p style={{ margin: 0 }}>Showing All Results</p>
            </div>

            {/* Center Section: View and Boxes */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* "View" Text */}
              <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>View</p>

              {/* Small Square with Dots */}
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  alignItems: "center",
                  justifyItems: "center",
                  gap: "2px",
                }}
              >
                <div style={{ width: "10px", height: "10px", backgroundColor: "#000", borderRadius: "50%" }}></div>
                <div style={{ width: "10px", height: "10px", backgroundColor: "#000", borderRadius: "50%" }}></div>
                <div style={{ width: "10px", height: "10px", backgroundColor: "#000", borderRadius: "50%" }}></div>
                <div style={{ width: "10px", height: "10px", backgroundColor: "#000", borderRadius: "50%" }}></div>
              </div>

              {/* Small Square with Horizontal Lines */}
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <div style={{ width: "80%", height: "2px", backgroundColor: "#000" }}></div>
                <div style={{ width: "80%", height: "2px", backgroundColor: "#000" }}></div>
                <div style={{ width: "80%", height: "2px", backgroundColor: "#000" }}></div>
              </div>
            </div>

            {/* Buttons and Select */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <select
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <option>Popularity</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Filter
              </button>
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
