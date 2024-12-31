export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: 'credit-card' | 'paypal';
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
}