import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Crypto Loan Brokers - Unlock Liquidity Without Selling Your Crypto",
  description:
    "Get a cryptocurrency loan using your Bitcoin, Ethereum, or other crypto assets as collateral. No credit checks, fast approvals, and flexible repayment options.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-white dark:bg-gray-900 ${inter.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
