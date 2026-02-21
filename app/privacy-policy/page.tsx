import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';

export const metadata = {
  title: 'Privacy Policy | Chatora Coach',
  description: 'Privacy policy and data protection for Chatora Coach',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-2 mt-5">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: February 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Chatora Coach ("we," "us," "our," or "Company"). We
                are committed to protecting your privacy and ensuring you have a
                positive experience on our website and services. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you voluntarily provide to us, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Name, email address, and contact information</li>
                <li>Dietary preferences and health information</li>
                <li>Payment information (processed securely)</li>
                <li>Communication preferences</li>
                <li>Feedback and testimonials</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We also automatically collect certain information when you visit
                our website, including IP address, browser type, pages visited,
                and time spent on pages.
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our coaching services</li>
                <li>Process transactions and send related information</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical, physical, and administrative
                safeguards to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of other sites. We
                encourage you to review their privacy policies before providing
                any personal information.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of promotional communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website uses cookies to enhance your experience. Most web
                browsers allow you to control cookies through their settings.
                You can choose to disable or limit cookies, but this may affect
                your ability to use certain features of our website.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 font-semibold">Chatora Coach</p>
                <p className="text-gray-700">Operated by Moves n Stretch</p>
                <a
                  href="mailto:movesnstretch@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  movesnstretch@gmail.com
                </a>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by updating the "Last Updated" date of
                this policy. Your continued use of our services constitutes your
                acceptance of the updated Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
