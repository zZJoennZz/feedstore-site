'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Footer() {
  const formRef = useRef<HTMLDivElement>(null);

  const quickLinks = [
    { href: '#', label: 'Our Story' },
    { href: '#', label: 'Menu' },
    { href: '#', label: 'Catering' },
    { href: '#', label: 'Careers' },
  ];

  const socialLinks = [
    { href: '#', label: 'Facebook' },
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'Yelp' },
  ];

  useEffect(() => {
    const container = formRef.current;
    if (!container) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/260194430039048';
    script.async = true;

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <footer className="bg-black text-white py-16 border-t-4 border-bbq-red">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/img/feedstore-logo.png" alt="FeedStore Logo" height={200} width={200} />
          </div>
          <p className="text-gray-400 text-sm">
            456 BBQ Lane, Dallas TX 75201 USA
            <br />
            P: 817-488-1445
            <br />
            E: info@feedstorebbq.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gray-300">QUICK LINKS</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
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
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Form */}
        <div>
          <h4 className="font-display font-bold text-lg mb-4 text-gray-300">STAY SMOKIN'</h4>
          {/* <div ref={formRef} className="w-full min-h-[200px]" /> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Feedstore BBQ. All rights reserved.</p>

          <Link href="https://selphmarketing.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
            <span className="text-gray-500 text-sm group-hover:text-gray-300 transition">Created by</span>
            <Image
              src="/img/Selph_Marketing_Logo_Transparent.png"
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
