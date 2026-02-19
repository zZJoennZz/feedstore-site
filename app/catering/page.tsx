// app/catering/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Catering For You Event With Feedstore BBQ | Southlake, TX',
  description:
    'We will be happy to customize any of our catering packages to meet YOUR needs. No event too BIG or SMALL! Give us a call at (817) 488-1445 or drop us an email."',
};

export default function CateringPage() {
  return (
    <main className="bg-bbq-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('img/Feedstore2.jpg')",
          }}
        />
        <div className="relative z-20 text-center text-white px-4 pt-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-shadow mb-4">CATERING</h1>
          <p className="font-display text-xl md:text-2xl tracking-widest text-shadow">NO EVENT TOO BIG OR SMALL</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bbq-dark mb-6">
              CATERING <span className="text-bbq-red">INFORMATION</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We will be happy to customize any of our catering packages to meet <span className="font-bold text-bbq-red">YOUR</span> needs.
            </p>
          </div>

          {/* Download Menu Button */}
          <div className="flex justify-center mb-16">
            <a
              href="/Southlake-Menu+03-2025_R3-compressed.pdf"
              download
              className="group bg-bbq-red text-white px-10 py-5 font-display font-bold text-xl rounded-lg hover:bg-red-800 transition shadow-xl flex items-center gap-4"
            >
              <svg className="w-8 h-8 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              DOWNLOAD MENU
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-bbq-cream p-8 rounded-lg border-2 border-bbq-red/20 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-bbq-dark mb-2">GIVE US A CALL</h3>
              <a href="tel:817-488-1445" className="text-3xl font-display font-bold text-bbq-red hover:text-bbq-dark transition">
                817-488-1445
              </a>
            </div>

            <div className="bg-bbq-cream p-8 rounded-lg border-2 border-bbq-red/20 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-bbq-red rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-bbq-dark mb-2">SEND US AN EMAIL</h3>
              <a href="mailto:info@feedstorebbq.com" className="text-xl font-display font-bold text-bbq-red hover:text-bbq-dark transition break-all">
                info@feedstorebbq.com
              </a>
            </div>
          </div>

          {/* Notice Box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-4">
              <div className="text-yellow-500 text-2xl">⚠️</div>
              <div>
                <h4 className="font-display font-bold text-lg text-yellow-800 mb-2">IMPORTANT NOTICE</h4>
                <p className="text-yellow-700 leading-relaxed">
                  Due to current events and the rising costs of meat, we have made adjustments to our current pricing. Please call in advance for
                  information on catering events and pricing. As always, we continue our work to provide you the highest quality of service. We
                  can&apos;t wait to see you again. Thanks!
                </p>
              </div>
            </div>
          </div>

          {/* Custom Packages */}
          <div className="bg-bbq-dark text-white p-10 rounded-lg text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">CUSTOM PACKAGES AVAILABLE</h3>
              <p className="text-xl text-gray-300 mb-6">Let us create the perfect menu for your special event.</p>
              <p className="font-display text-2xl text-bbq-orange">PLEASE CALL FOR RATES</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bbq-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-6">READY TO BOOK YOUR EVENT?</h2>
          <p className="text-xl mb-8 text-white/90">Contact us today and let&apos;s make your next gathering unforgettable.</p>
          <a
            href="tel:817-488-1445"
            className="inline-block bg-white text-bbq-red px-10 py-4 font-display font-bold text-xl rounded hover:bg-gray-100 transition shadow-xl"
          >
            CALL NOW: 817-488-1445
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
