import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Wallet, BarChart3, DollarSign } from "lucide-react"
import { Navbar } from "./components/Navbar"
import { FAQ } from "./components/FAQ"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 max-w-4xl mx-auto">
              <span className="block">Crypto Loan: Unlock Liquidity</span>
              <span className="block mt-2">Without Selling Your Crypto</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-medium text-gray-600 max-w-2xl mx-auto">
              Get an Quick Cryptocurrency Loan
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Use your Bitcoin, Ethereum, or other crypto assets to access cash without having to sell your stack. No
              credit checks, fast approvals, and flexible repayment options.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#get-loan"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-blue-600 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-gray-200 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-600">No Credit Check</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-600">Keep Your Crypto</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-600">Fast Approval</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="ml-2 text-gray-600">Competitive Rates</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Crypto Loan Benefits</h2>
              <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why our crypto-backed loans are the smart choice for accessing liquidity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <BarChart3 className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">High Loan-to-Value (LTV) Ratio</h3>
                <p className="text-gray-600">
                  Get up to 97% of your crypto's value as a loan, maximizing your borrowing potential.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Shield className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Autoliquidation</h3>
                <p className="text-gray-600">
                  Unlike DeFi protocols like Aave, we don't liquidate your collateral without you having time to add
                  more collateral.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Wallet className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Withdrawal Options</h3>
                <p className="text-gray-600">
                  Receive funds in your preferred currency via bank transfer, stablecoins, or crypto wallets.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <DollarSign className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fixed Interest Rates</h3>
                <p className="text-gray-600">
                  Benefit from a fixed loan cost, unlike in DeFi protocols like Aave where rates can fluctuate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
              <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Our simple 3-step process to get your crypto-backed loan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pt-6">Compare Cryptocurrency Loan Providers</h3>
                  <p className="text-gray-600">
                    We compare the best crypto loan providers to find you the best deal with optimal terms and rates.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pt-6">Customize Your Crypto Loan Terms</h3>
                  <p className="text-gray-600">
                    Talk with our specialists to customize your loan terms with the best provider for your specific
                    needs.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 pt-6">Get Your Funds Quickly</h3>
                  <p className="text-gray-600">
                    After approval, receive your funds in your preferred currency or wallet, often within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="#get-loan"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Start Your Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section id="get-loan" className="py-16 sm:py-24 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Get Started?</h2>
              <p className="mt-6 text-xl text-blue-100">
                Apply now to unlock the value of your crypto assets without selling them
              </p>
              <div className="mt-10 bg-white p-8 rounded-2xl shadow-xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="crypto-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Cryptocurrency Type
                      </label>
                      <select
                        id="crypto-type"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select cryptocurrency</option>
                        <option value="bitcoin">Bitcoin (BTC)</option>
                        <option value="ethereum">Ethereum (ETH)</option>
                        <option value="usdc">USD Coin (USDC)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Loan Amount
                      </label>
                      <input
                        type="text"
                        id="loan-amount"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="$10,000"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-blue-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Get Your Crypto Loan Quote
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white">Crypto Loan Brokers</span>
              </div>
              <p className="text-gray-400 mb-4">Access liquidity without selling your cryptocurrency assets.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Telegram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.692 14.889c.161.143.361.213.561.213.219 0 .438-.078.609-.22.313-.258.352-.723.094-1.035l-2.298-2.847 2.298-2.847c.258-.313.219-.777-.094-1.035-.313-.258-.777-.219-1.035.094l-2.25 2.786c-.151.187-.217.422-.217.657s.066.47.217.657l2.115 2.577z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Crypto Loan Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Supported Cryptocurrencies</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Bitcoin (BTC)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Ethereum (ETH)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    USD Coin (USDC)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tether (USDT)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    View All
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">support@cryptoloanbrokers.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+1 (888) 123-4567</span>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="rounded-l-lg px-4 py-2 w-full focus:outline-none text-gray-900"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Crypto Loan Brokers. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

