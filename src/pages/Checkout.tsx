import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import FormInput from '../components/ui/FormInput';
import { validateShippingAddress } from '../utils/validation';
import { ShippingAddress } from '../types';

const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'paypal'>('credit-card');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateShippingAddress(shippingAddress);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Create order
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      items: state.items,
      total: state.total,
      shippingAddress,
      paymentMethod,
      status: 'processing' as const,
      createdAt: new Date().toISOString()
    };

    // Update order in context
    dispatch({ type: 'SET_ORDER', payload: order });
    
    // Clear cart
    dispatch({ type: 'CLEAR_CART' });
    
    // Navigate to confirmation
    navigate('/order-confirmation');
  };

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
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={shippingAddress.firstName}
                    onChange={handleInputChange}
                    error={errors.firstName}
                  />
                  <FormInput
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={shippingAddress.lastName}
                    onChange={handleInputChange}
                    error={errors.lastName}
                  />
                </div>
                
                <FormInput
                  label="Address"
                  id="address"
                  name="address"
                  type="text"
                  value={shippingAddress.address}
                  onChange={handleInputChange}
                  error={errors.address}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="City"
                    id="city"
                    name="city"
                    type="text"
                    value={shippingAddress.city}
                    onChange={handleInputChange}
                    error={errors.city}
                  />
                  <FormInput
                    label="ZIP Code"
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    value={shippingAddress.zipCode}
                    onChange={handleInputChange}
                    error={errors.zipCode}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'credit-card')}
                      className="text-black focus:ring-black"
                    />
                    <span>Credit Card</span>
                  </label>
                </div>
                <div className="border rounded-md p-4">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'paypal')}
                      className="text-black focus:ring-black"
                    />
                    <span>PayPal</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow h-fit">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full mt-6">Place Order</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;