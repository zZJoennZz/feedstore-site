import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
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
            P: +1 (555) 123-4567
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

        {/* Image */}
        <div className="relative">
          <div className="w-full h-48 bg-neutral-800 rounded overflow-hidden">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=300&h=300&fit=crop')] bg-cover bg-center opacity-60" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Feedstore BBQ. All rights reserved.
      </div>
    </footer>
  );
}
