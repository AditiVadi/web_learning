// src/components/Features.js
import React from 'react';

const features = [
  { title: 'Feature 1', description: 'Description of Feature 1', icon: '📦' },
  { title: 'Feature 2', description: 'Description of Feature 2', icon: '🚀' },
  { title: 'Feature 3', description: 'Description of Feature 3', icon: '💼' },
];

const Features = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
