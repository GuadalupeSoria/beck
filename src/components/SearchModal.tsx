import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Products</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          autoFocus
        />

        <div className="max-h-96 overflow-y-auto">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
          
          {searchQuery && filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-4">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;