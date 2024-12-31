import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import SearchModal from '../SearchModal';

const Header = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="py-4 px-6 flex items-center justify-between bg-white shadow-sm">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold">BECK</Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/shop" className="hover:text-gray-600">Shop</Link>
            <Link to="/blog" className="hover:text-gray-600">Blog</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact Us</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => navigate('/auth')}
          >
            <User className="w-5 h-5" />
          </button>
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Header;