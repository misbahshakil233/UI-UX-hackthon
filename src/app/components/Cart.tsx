import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      {/* Heading */}
      <p className="text-cyan-600 font-semibold">Practice Advice</p>
      <h1 className="text-3xl font-semibold text-center mb-8">Feature Post</h1>
      <p className="text-gray-500">
        Problems trying to resolve the conflict between <br></br>
        the two major realms of Classical physics: Newtonian mechanics.
      </p>

      {/* Cart Item */}
      <div className="flex justify-center items-center mt-8">
        <div className="text-center">
          <img 
            src="/ost.png" // Replace with the actual image path
            alt="OST Item" 
            className="object-cover w-full h-auto rounded-lg shadow-lg mb-4" // Full width with auto height
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
