import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center mb-8">Your Cart</h1>

      {/* Cart Item */}
      <div className="flex justify-center items-center">
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
