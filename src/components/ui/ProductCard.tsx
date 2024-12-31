import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import Button from './Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-medium">{product.name}</h4>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </Link>
      <div className="mt-2">
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: 'ADD_TO_CART', payload: product });
          }}
          size="sm"
          className="w-full"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;