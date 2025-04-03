"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What Happens if My Collateral Value Drops?",
    answer: "If the value of your crypto falls below a set LTV ratio, we'll notify you in advance to deposit additional collateral or repay part of your loan to avoid liquidation."
  },
  {
    question: "How Fast Can I Get My Loan?",
    answer: "Most loans are approved and funded within minutes, depending on blockchain confirmation times."
  },
  {
    question: "How Do I Repay My Loan?",
    answer: "You can repay your loan anytime via crypto, fiat bank transfer, or card payments."
  },
  {
    question: "What Happens When I Repay My Loan?",
    answer: "Once repaid, your collateral is instantly returned to your wallet, ready for your next move."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  } text-blue-600`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get a Crypto Loan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
} 