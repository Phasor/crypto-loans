import Navbar from './components/Navbar';
import EmailOptIn from './components/EmailOptIn';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <EmailOptIn />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unlock Liquidity Without Selling Your Crypto
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Get an Instant Cryptocurrency Loan
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Leverage your Bitcoin, Ethereum, or other crypto assets to access instant cash while keeping your investment. No credit checks, fast approvals, and flexible repayment options.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Crypto-Backed Loans?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">High Loan-to-Value (LTV) Ratio</h3>
              <p>Get up to 97% of your crypto's value as a loan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Instant Loan Approval</h3>
              <p>No waiting, no paperwork, no credit checks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Multiple Withdrawal Options</h3>
              <p>Receive funds in your preferred currency via bank transfer, stablecoins, or crypto wallets.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Flexible Repayment Terms</h3>
              <p>Repay on your schedule and retrieve your collateral anytime.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Deposit Your Crypto</h3>
                <p>Transfer your chosen cryptocurrency as collateral from our list of 50+ supported assets.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Customize Your Loan Terms</h3>
                <p>Use our simple loan calculator to choose your loan amount, currency, and repayment period.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Get Instant Approval</h3>
                <p>Receive funds instantly after confirming your loan terms. No hidden fees or unnecessary delays.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Manage & Repay Anytime</h3>
                <p>Easily track your loan, adjust your LTV, or repay early via crypto, bank transfers, or card payments.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Can You Do with a Crypto Loan?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Buy More Crypto</h3>
              <p>Increase your portfolio without selling your holdings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Optimize Your Taxes</h3>
              <p>Borrowing is not a taxable event, helping you defer capital gains taxes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Fund Big Purchases</h3>
              <p>Use your crypto's value for a home, car, or travel expenses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Invest in Your Business</h3>
              <p>Expand operations or cover business expenses with instant liquidity.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transparent Loan Terms</h2>
          <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Loan Amount:</h3>
                <p>From $100 to $1,000,000+</p>
              </div>
              <div>
                <h3 className="font-semibold">Supported Cryptos:</h3>
                <p>BTC, ETH, USDT, USDC, ADA, SOL, and 50+ more</p>
              </div>
              <div>
                <h3 className="font-semibold">Annual Percentage Rate (APR):</h3>
                <p>Starting at 2.25% per month</p>
              </div>
              <div>
                <h3 className="font-semibold">Loan Duration:</h3>
                <p>Flexible terms with no fixed repayment schedule</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What Happens if My Collateral Value Drops?</h3>
              <p>If the value of your crypto falls below a set LTV ratio, we'll notify you in advance to deposit additional collateral or repay part of your loan to avoid liquidation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How Fast Can I Get My Loan?</h3>
              <p>Most loans are approved and funded within minutes, depending on blockchain confirmation times.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How Do I Repay My Loan?</h3>
              <p>You can repay your loan anytime via crypto, fiat bank transfer, or card payments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What Happens When I Repay My Loan?</h3>
              <p>Once repaid, your collateral is instantly returned to your wallet, ready for your next move.</p>
            </div>
          </div>
        </section>

        <section id="get-started" className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Crypto Loan Today!</h2>
          <p className="text-lg text-gray-600 mb-8">Don't sell your crypto—leverage it. Get instant liquidity, maintain your holdings, and seize financial opportunities.</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get a Loan Now
          </button>
        </section>
      </main>
    </div>
  );
}
