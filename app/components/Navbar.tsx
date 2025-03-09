import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              CryptoLoans
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                How It Works
              </Link>
              <Link href="#benefits" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Benefits
              </Link>
              <Link href="#faqs" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                FAQs
              </Link>
              <Link 
                href="#get-started" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 