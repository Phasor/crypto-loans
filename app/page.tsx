import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Wallet, BarChart3, DollarSign } from "lucide-react"
import { Footer } from "./components/Footer"
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
              Get a Quick Cryptocurrency Loan
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
                  Get up to 97% of your crypto&apos;s value as a loan, maximizing your borrowing potential.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Shield className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Autoliquidation</h3>
                <p className="text-gray-600">
                  Unlike DeFi protocols like Aave, our lenders don&apos;t liquidate your collateral without you having time to add
                  more collateral.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Wallet className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Withdrawal Options</h3>
                <p className="text-gray-600">
                  Receive funds in your preferred currency via bank transfer, stablecoins, or other cryptos.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <DollarSign className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fixed Interest Rates</h3>
                <p className="text-gray-600">
                  Benefit from a fixed loan cost, unlike in DeFi protocols like Aave where rates can fluctuate wildy.
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
                    After approval, receive your funds in your preferred currency.
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

        {/* CTA Section */}
        <section id="get-loan" className="py-16 sm:py-24 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Get Started?</h2>
              <p className="mt-6 text-xl text-blue-100">
                Apply now to unlock the value of your crypto assets without selling them
              </p>
              <div className="mt-10">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-blue-600 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
