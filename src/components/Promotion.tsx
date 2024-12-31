import React from 'react';

const Promotion = () => {
  return (
    <section className="bg-[#E8F4F5] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
            alt="Modern sofa"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">Get Best Discount</h2>
          <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content</p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promotion;