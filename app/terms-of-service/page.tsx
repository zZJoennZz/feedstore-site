// app/terms/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Are you hungry? Are you looking for some great BBQ? Do you have an upcoming event that needs catering? Look no further! Call us at (817) 488-1445.',
};

export default function TermsPage() {
  return (
    <main className="bg-bbq-cream min-h-screen">
      <Navbar />

      {/* Simple Header */}
      <section className="relative h-[50vh] min-h-[300px] bg-white flex items-center justify-center overflow-hidden">
        <div className="relative z-20 text-center text-white px-4 pt-20">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-bbq-dark">
            TERMS OF <span className="text-bbq-red">SERVICE</span>
          </h1>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 bg-bbq-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white text-bbq-dark p-8 rounded-lg shadow-sm legal">
            {/* Termageddon Terms of Service Embed */}
            <div
              id="policy"
              data-policy-key="ZEZsU1ZHSTBURmRKY0UxSk1IYzlQUT09"
              data-extra="email-links=true&h-align=left&h-depth=3&no-title=true&table-style=accordion"
            >
              Please wait while the policy is loaded. If it does not load, please{' '}
              <a
                rel="nofollow"
                href="https://app.termageddon.com/api/policy/ZEZsU1ZHSTBURmRKY0UxSk1IYzlQUT09?email-links=true&h-align=left&h-depth=3&table-style=accordion"
                target="_blank"
                aria-label="View Terms of Service"
                className="text-bbq-red hover:underline font-bold"
              >
                click here to view the terms of service
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Termageddon Script */}
      <script src="https://app.termageddon.com/js/termageddon.js" async />
    </main>
  );
}
