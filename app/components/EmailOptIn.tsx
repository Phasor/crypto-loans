'use client';

import { useState } from 'react';

export default function EmailOptIn() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="fixed top-24 right-4 w-80 bg-white rounded-lg shadow-lg p-6 z-40">
      <h3 className="text-xl font-bold mb-4">Start Your Crypto Loan</h3>
      <p className="text-gray-600 mb-4">Get instant access to liquidity without selling your crypto.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Started Now
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4">
        By submitting, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
} 