"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { AuroraBackground } from '../components/ui/aurora-background';

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AuroraBackground>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Apply for Your Crypto Loan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Fill in your details below and one of our crypto loan experts will contact you to discuss your loan requirements and guide you through the process.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 backdrop-blur-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 backdrop-blur-sm"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Country of Residence *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 backdrop-blur-sm"
                placeholder="Enter your country of residence"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 backdrop-blur-sm"
                placeholder="Enter your phone number"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a Call Back
            </button>
          </form>
        </div>
      </main>
    </AuroraBackground>
  );
} 