import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="min-h-screen py-12 px-6 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-center">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </h2>
        </div>
        
        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            />
          </div>
          
          <Button type="submit" className="w-full">
            {isLogin ? 'Sign in' : 'Sign up'}
          </Button>
        </form>
        
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-gray-600 hover:text-black"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;