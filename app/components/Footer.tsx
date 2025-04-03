"use client"

import Link from "next/link"
import { Wallet } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Crypto Loan Brokers</span>
            </div>
            <p className="text-gray-400 mb-4">Access liquidity without selling your cryptocurrency assets.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-400 hover:text-white transition-colors">
                  Crypto Loan Guide
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-white transition-colors">
                  Apply for a Loan
                </Link>
              </li>
              <li>
                <a href="mailto:help@cheapcryptoloan.com" className="text-gray-400 hover:text-white transition-colors">
                  help@cheapcryptoloan.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Crypto Loan Brokers. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 