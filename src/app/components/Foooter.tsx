import React from 'react';
import Image from 'next/image'; // Use if you're using Next.js

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
      {/* Footer Image */}
      <Image
        src="/footer.png" // Path to your image (place in the public folder)
        alt="Footer Image"
        width={3000} // Set the width of the image
        height={300} // Set the height of the image
        style={{ maxWidth: '100%', height: 'auto' }}
      />

    </div>
  );
};

export default Footer;
