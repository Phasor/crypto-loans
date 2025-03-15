"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import { AuroraBackground } from '../components/ui/aurora-background';
import emailjs from '@emailjs/browser';

// Validate required environment variables
if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
  throw new Error('Missing NEXT_PUBLIC_EMAILJS_PUBLIC_KEY environment variable');
}
if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
  throw new Error('Missing NEXT_PUBLIC_EMAILJS_SERVICE_ID environment variable');
}
if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
  throw new Error('Missing NEXT_PUBLIC_EMAILJS_TEMPLATE_ID environment variable');
}
if (!process.env.NEXT_PUBLIC_CONTACT_EMAIL) {
  throw new Error('Missing NEXT_PUBLIC_CONTACT_EMAIL environment variable');
}

// Since we've validated the environment variables, we can safely assert their types
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL as string;

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    loanSize: '',
    collateral: '',
    additionalInfo: ''
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: CONTACT_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          country: formData.country,
          phone: formData.phone || 'Not provided',
          loan_size: formData.loanSize,
          collateral: formData.collateral,
          additional_info: formData.additionalInfo || 'None provided',
          message: `New loan application received:
Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Phone: ${formData.phone || 'Not provided'}
Loan Size Wanted: $${formData.loanSize}
Collateral Available: ${formData.collateral}
Additional Information: ${formData.additionalInfo || 'None provided'}`
        }
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Our team will contact you shortly.'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        country: '',
        phone: '',
        loanSize: '',
        collateral: '',
        additionalInfo: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your application. Please try again later.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AuroraBackground>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16 min-h-screen">
        <div className="text-center mb-12 scroll-mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Apply for Your Crypto Loan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Fill in your details below and one of our crypto loan experts will contact you to discuss your loan requirements and guide you through the process.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

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

            <div>
              <label htmlFor="loanSize" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Loan Size Wanted ($) *
              </label>
              <input
                type="number"
                id="loanSize"
                name="loanSize"
                required
                min="10000"
                value={formData.loanSize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 backdrop-blur-sm"
                placeholder="Enter desired loan amount (minimum $10,000)"
              />
            </div>

            <div>
              <label htmlFor="collateral" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Collateral Available *
              </label>
              <input
                type="text"
                id="collateral"
                name="collateral"
                required
                value={formData.collateral}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 backdrop-blur-sm"
                placeholder="e.g., 2 BTC, 30 ETH, etc."
              />
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 backdrop-blur-sm"
                placeholder="Any other information you'd like us to know (loan duration, preferred payment method, etc.)"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </button>
          </form>
        </div>
      </main>
    </AuroraBackground>
  );
} 