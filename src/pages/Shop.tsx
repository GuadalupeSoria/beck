import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const categories = ['All', 'Chairs', 'Tables', 'Lighting', 'Sofas'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Shop</h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;