import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const order = state.order;

  if (!order) {
    navigate('/');
    return null;
  }

  return (
    <div className="py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
          <p className="text-gray-600">Order #{order.id}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Shipping Address</h3>
              <p>{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.zipCode}</p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Items</h3>
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-x-4">
          <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;