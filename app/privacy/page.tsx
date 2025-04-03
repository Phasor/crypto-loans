import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                At CheapCryptoLoan.com, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information in accordance with the General Data Protection Regulation (GDPR) and other applicable data privacy laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect and process the following data:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li className="mb-2">Personal Data: such as your name, email address, and any other information you provide when you contact us or sign up for services.</li>
                <li className="mb-2">Technical Data: including IP address, browser type and version, time zone setting, and usage data through cookies and analytics tools.</li>
                <li className="mb-2">Communication Data: records of your interactions with us, including emails and contact form submissions.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-600 mb-4">We only collect and process your personal data when we have a legal basis to do so. This may include:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li className="mb-2">Your consent (e.g., subscribing to a newsletter)</li>
                <li className="mb-2">Performance of a contract (e.g., providing services)</li>
                <li className="mb-2">Legal obligation (e.g., fraud prevention)</li>
                <li className="mb-2">Legitimate interests (e.g., improving our services)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li className="mb-2">Provide, operate, and improve our website and services</li>
                <li className="mb-2">Respond to your inquiries or provide customer support</li>
                <li className="mb-2">Send marketing and promotional materials (only with your consent)</li>
                <li className="mb-2">Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Cookies</h2>
              <p className="text-gray-600 mb-8">
                We use cookies to enhance your experience. You can control or disable cookies through your browser settings. By continuing to use our website, you consent to our use of cookies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Data Retention</h2>
              <p className="text-gray-600 mb-8">
                We retain your personal data only as long as necessary to fulfill the purposes for which it was collected, or to comply with legal, regulatory, or reporting obligations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Sharing Your Data</h2>
              <p className="text-gray-600 mb-4">We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li className="mb-2">Trusted third-party service providers who help us operate our business</li>
                <li className="mb-2">Legal authorities when required by law or to protect our rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Your Rights Under GDPR</h2>
              <p className="text-gray-600 mb-4">If you are located in the European Economic Area (EEA), you have the following rights:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-8">
                <li className="mb-2">The right to access your personal data</li>
                <li className="mb-2">The right to rectify inaccurate data</li>
                <li className="mb-2">The right to erase your data ("right to be forgotten")</li>
                <li className="mb-2">The right to restrict or object to processing</li>
                <li className="mb-2">The right to data portability</li>
                <li className="mb-2">The right to withdraw consent at any time</li>
              </ul>
              <p className="text-gray-600 mb-8">
                To exercise any of these rights, please contact us at help@cheapcryptoloan.com.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Data Security</h2>
              <p className="text-gray-600 mb-8">
                We implement appropriate technical and organizational measures to protect your data. However, no method of transmission or storage is completely secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. International Transfers</h2>
              <p className="text-gray-600 mb-8">
                If your data is transferred outside the EEA, we ensure that it is protected using appropriate safeguards, such as standard contractual clauses approved by the European Commission.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-600 mb-8">
                Our site may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Children's Privacy</h2>
              <p className="text-gray-600 mb-8">
                Our website and services are not intended for individuals under the age of 18. We do not knowingly collect data from children.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-8">
                We may update this policy from time to time. The most current version will always be posted on our website with the updated effective date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">13. Contact Us</h2>
              <p className="text-gray-600 mb-8">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact:<br />
                Email: support@cheapcryptoloan.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 