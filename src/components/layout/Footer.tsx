import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">BECK</h3>
          <p className="text-gray-400">Your one-stop shop for modern furniture and lighting solutions.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            <li><Link to="/shipping" className="text-gray-400 hover:text-white">Shipping</Link></li>
            <li><Link to="/returns" className="text-gray-400 hover:text-white">Returns</Link></li>
            <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-gray-800 text-white flex-1"
            />
            <button className="px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">© 2024 BECK. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;