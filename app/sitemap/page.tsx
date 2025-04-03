import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import Link from "next/link"

export default function Sitemap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
            
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Pages</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-blue-600 hover:text-blue-800">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/apply" className="text-blue-600 hover:text-blue-800">
                      Apply for a Loan
                    </Link>
                  </li>
                  <li>
                    <Link href="/guide" className="text-blue-600 hover:text-blue-800">
                      Crypto Loan Guide
                    </Link>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Home Page Sections</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/#benefits" className="text-blue-600 hover:text-blue-800">
                      Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="/#how-it-works" className="text-blue-600 hover:text-blue-800">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/#faqs" className="text-blue-600 hover:text-blue-800">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:help@cheapcryptoloan.com" className="text-blue-600 hover:text-blue-800">
                      help@cheapcryptoloan.com
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 