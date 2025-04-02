import Link from 'next/link';
import { ArrowRight, Wallet } from 'lucide-react';
import MobileMenu from './MobileMenu';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
                <Wallet className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Crypto Loan Brokers
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#benefits" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Benefits
            </Link>
            <Link href="/#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link href="/guide" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Crypto Loan Guide
            </Link>
            <Link href="/#faqs" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              FAQs
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileMenu />
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              <span className="hidden md:inline">Get A Crypto Loan</span>
              <span className="md:hidden">Apply</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 