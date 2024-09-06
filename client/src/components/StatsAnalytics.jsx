// src/components/StatsAnalytics.js
import React from 'react';

const stats = [
  { title: 'Users', value: '10K+' },
  { title: 'Downloads', value: '500K+' },
  { title: 'Reviews', value: '5K+' },
];

const StatsAnalytics = () => {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex justify-around">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsAnalytics;
