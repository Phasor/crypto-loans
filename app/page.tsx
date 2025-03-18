import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ "--navbar-height": "calc(64px + 3rem)" } as React.CSSProperties}>
      {/* White Navbar Section */}
      <header className="bg-white relative z-10">
        <Navbar />
      </header>

      {/* Gradient Content Section */}
      <div className="flex-1 relative">
        {/* Static Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50/30 to-white">
          {/* Base waves */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.03)_45%,transparent_55%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.05)_25%,transparent_35%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.03)_65%,transparent_75%)]"></div>
          
          {/* Darker wave accents */}
          <div className="absolute inset-0 bg-[linear-gradient(75deg,transparent,rgba(37,99,235,0.07)_35%,transparent_45%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent,rgba(37,99,235,0.07)_55%,transparent_65%)]"></div>
        </div>
        
        {/* Content */}
        <main className="relative max-w-4xl mx-auto px-4 pt-24 pb-16">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crypto Loan: Unlock Liquidity Without Selling Your Crypto
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Get an Quick Cryptocurrency Loan
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use your Bitcoin, Ethereum, or other crypto assets to access cash without having to sell your stack. No credit checks, fast approvals, and flexible repayment options.
            </p>
          </section>

          <section id="benefits" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Crypto Loan Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">High Loan-to-Value (LTV) Ratio</h3>
                <p>Get up to 97% of your crypto&apos;s value as a loan.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">No Autoliquidation</h3>
                <p>Unlike DeFi protocols like Aave, we don&apos;t liquidate your collateral without you having time to add more collateral.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Multiple Withdrawal Options</h3>
                <p>Receive funds in your preferred currency via bank transfer, stablecoins, or crypto wallets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Flixed Interest Rates</h3>
                <p>Benefit from a fixed loan cost, unlike in DeFi protocols like Aave.</p>
              </div>
            </div>
          </section>

          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Compare Cryptocurrency Loan Providers</h3>
                  <p>We compare the best crypto loan providers to find you the best deal.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Customize Your Crypto Loan Terms</h3>
                  <p>Talk with our specialists to customize your loan terms with the best provider.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Get Fast Approval</h3>
                  <p>Receive funds quickly after conducting KYC and AML.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Manage & Repay Flexibly</h3>
                  <p>Repay your loan or roll it over to a new loan.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Crypto Loan Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Stack More Crypto!</h3>
                <p>Increase your portfolio without selling your holdings.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Optimize Your Taxes</h3>
                <p>Borrowing is not a taxable event, helping you defer capital gains taxes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Fund Big Purchases</h3>
                <p>Use your crypto&apos;s value for a home, car, or travel expenses.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Invest in Your Business</h3>
                <p>Expand operations or cover business expenses with fast liquidity.</p>
              </div>
            </div>
          </section>

          <div className="text-center mb-16">
            <Link href="/apply" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Crypto Loan Now
            </Link>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Example Loan Terms</h2>
            <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Loan Amount:</h3>
                  <p>From $10,000 to $1,000,000+</p>
                </div>
                <div>
                  <h3 className="font-semibold">Supported Cryptos:</h3>
                  <p>BTC, ETH, USDT, USDC, ADA, SOL, and 50+ more</p>
                </div>
                <div>
                  <h3 className="font-semibold">Annual Percentage Rate (APR):</h3>
                  <p>Starting at 0.8% per month</p>
                </div>
                <div>
                  <h3 className="font-semibold">Loan Duration:</h3>
                  <p>Flexible terms with no fixed repayment schedule</p>
                </div>
              </div>
            </div>
          </section>

          <section id="faqs" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">What Happens if My Collateral Value Drops?</h3>
                <p>If the value of your crypto falls below a set LTV ratio, we&apos;ll notify you in advance to deposit additional collateral or repay part of your loan to avoid liquidation. Lenders typically give you several hours to add more collateral. This is a key benefit over using DeFi loans like Spark or Aave, since these protocols automatically liquidate your collateral without warning if the market suddenly dips.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">How Fast Can I Get My Loan?</h3>
                <p>Most loans are typically approved and funded within a week, depending on loan size.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">How Do I Repay My Loan?</h3>
                <p>Interest is typically charged monthly, but can also be added to the loan and all paid at the end of the loan term.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">What Happens When I Repay My Loan?</h3>
                <p>Once repaid, your collateral is returned to your wallet, ready for your next move.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">How Many Lenders are in the Market?</h3>
                <p>The number ebbs and flows but there are typically decent 10-20 lenders in the market.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Does your Service Cost Me Anything?</h3>
                <p>We are remunerated by the lenders, not the borrowers. This means that it costs you nothing to use our service and you ensure you get the best deal.</p>
              </div>
            </div>
          </section>

          <section id="get-started" className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Crypto Loan Today!</h2>
            <p className="text-lg text-gray-600 mb-8">Don&apos;t sell your crypto—leverage it. Get instant liquidity, maintain your holdings, and seize financial opportunities.</p>
            <Link href="/apply" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get a Crypto Loan Now
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
