import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 px-6 flex items-center justify-between bg-white">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold">BECK</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">Shop</a>
          <a href="#" className="hover:text-gray-600">Blog</a>
          <a href="#" className="hover:text-gray-600">Pages</a>
          <a href="#" className="hover:text-gray-600">Contact Us</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 cursor-pointer" />
        <ShoppingCart className="w-5 h-5 cursor-pointer" />
        <User className="w-5 h-5 cursor-pointer" />
        <Menu className="md:hidden w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;