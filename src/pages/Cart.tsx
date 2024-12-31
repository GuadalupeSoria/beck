import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  if (state.items.length === 0) {
    return (
      <div className="py-12 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map(item => (
              <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <select
                      value={item.quantity}
                      onChange={(e) => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: Number(e.target.value) }
                      })}
                      className="rounded border p-1"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 font-bold flex justify-between">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
            </div>
            <Button 
              className="w-full"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;