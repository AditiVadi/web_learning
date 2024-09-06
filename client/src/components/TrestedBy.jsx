// src/components/TrustedBy.js
import React from 'react';

const logos = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png'];

const TrustedBy = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto flex justify-around">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="h-12" />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
