import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Crypto Loan Brokers
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#benefits" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Benefits
            </Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              How It Works
            </Link>
            <Link href="/guide" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Crypto Loan Guide
            </Link>
            <Link href="/#faqs" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              FAQs
            </Link>
            <Link 
              href="/apply" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get A Crypto Loan
            </Link>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
} 