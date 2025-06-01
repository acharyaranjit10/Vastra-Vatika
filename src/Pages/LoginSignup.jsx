import React from 'react';

export const LoginSignup = () => {
  return (
    <div className="min-h-screen bg-pink-100 py-20 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-md shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
        <div className="space-y-4 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 text-gray-700"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 text-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 text-gray-700"
          />
        </div>
        <button className="w-full py-3 mt-6 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none">
          Continue
        </button>
        <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account?{' '}
          <span className="text-red-500 font-bold cursor-pointer hover:text-red-600">Login</span>
        </p>
        <div className="flex items-center gap-x-2 mt-4">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500 focus:ring-red-500 rounded" />
          <p className="text-gray-600 text-xs">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};