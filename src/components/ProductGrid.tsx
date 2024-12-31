import React from 'react';
import { products } from '../data/products';
import ProductCard from './ui/ProductCard';

const ProductGrid = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">All Products</h3>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-gray-200 rounded">All</button>
            <button className="px-4 py-2 hover:bg-gray-200 rounded">Wooden</button>
            <button className="px-4 py-2 hover:bg-gray-200 rounded">Furnished</button>
            <button className="px-4 py-2 hover:bg-gray-200 rounded">Table</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;