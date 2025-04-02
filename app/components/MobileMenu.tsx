'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      <div className={`
        absolute top-full left-0 right-0 
        bg-white shadow-lg 
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
      `}>
        <div className="px-4 py-3 space-y-3">
          <Link 
            href="/#benefits" 
            className="block text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Benefits
          </Link>
          <Link 
            href="/#how-it-works" 
            className="block text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="/guide" 
            className="block text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Crypto Loan Guide
          </Link>
          <Link 
            href="/#faqs" 
            className="block text-gray-700 hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            FAQs
          </Link>
          <Link 
            href="/apply" 
            className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
} 