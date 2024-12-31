import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="py-12 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            
            <div className="space-y-4">
              <Button
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                size="lg"
                className="w-full"
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => navigate('/shop')}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;