import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-[#E8F4F5] p-8 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <span className="text-gray-600">#New Trend</span>
          <h2 className="text-4xl font-bold">ABOTAR LIGHTING</h2>
          <p className="text-gray-600">Enlight your world. Make yourself more bright</p>
          <Link to="/shop">
            <Button size="lg">SHOP NOW</Button>
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80"
            alt="Modern lighting fixture"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;