'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/catering', label: 'Catering' },
    { href: '/about-us', label: 'About Us' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/FeedstoreBBQ', label: 'Facebook' },
    { href: 'https://www.instagram.com/feedstorebbq/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black text-white py-16 border-t-4 border-bbq-red">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Image src={`/img/feedstore-logo.png`} alt="FeedStore Logo" height={200} width={200} />
          </div>
          <p className="text-gray-400 text-sm">
            456 BBQ Lane, Dallas TX 75201 USA
            <br />
            P: 817-488-1445
            <br />
            E: bbq@feedstorebbq.com
          </p>
          <div className="mt-4">
            <a href="http://www.gotexan.org/" target="_blank" rel="noopener noreferrer">
              <Image src={`/img/GoTexan.png`} width={100} height={100} alt="GoTexan Logo" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gray-300">QUICK LINKS</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gray-300">LEGAL</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gray-300">CONNECT</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Donation & Sponsorship Request Link */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gray-300">REQUEST SUPPORT</h4>
          <p className="text-gray-400 text-sm mb-4">Need support for your school, nonprofit, or community event? Submit a request.</p>
          <a
            href="https://form.jotform.com/260194430039048"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bbq-red hover:bg-red-700 text-white px-5 py-3 rounded-lg font-display font-bold text-sm transition shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            DONATION & SPONSORSHIP REQUEST
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Feedstore BBQ. All rights reserved.</p>

          {/* Legal links also in bottom bar for mobile visibility */}
          <div className="flex gap-6 text-sm text-gray-500 md:hidden">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            ))}
          </div>

          <Link href="https://selphmarketing.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <span className="text-gray-500 text-sm group-hover:text-gray-300 transition">Created by</span>
            <Image
              src={`/img/Selph_Marketing_Logo_Transparent.png`}
              alt="Selph Marketing"
              width={270}
              height={103}
              className="h-8 w-auto opacity-70 group-hover:opacity-100 transition bg-white rounded-md"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
