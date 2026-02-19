'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/#events', label: 'Events Calendar' },
    { href: '/about-us', label: 'About Us' },
    { href: '/press', label: 'Press & Awards' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${isScrolled ? 'nav-solid' : 'nav-blur'}`}>
      <div className={`max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        {/* Logo - Now with dynamic sizing */}
        <a href="/" className="flex items-center">
          <div className={`relative transition-all duration-300 ${isScrolled ? 'w-[80px] h-[80px]' : 'w-[200px] h-[200px]'}`}>
            <Image src="/img/feedstore-logo.png" alt="FeedStore Logo" fill className="object-contain" priority />
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white bg-black/20 p-2 rounded"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-display text-lg tracking-wide items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-bbq-red transition text-shadow px-2 py-1 rounded hover:bg-white/10">
              {link.label}
            </a>
          ))}
          <a href="/catering" className="bg-bbq-red px-6 py-2 font-bold hover:bg-red-700 transition rounded shadow-lg cursor-pointer">
            Catering
          </a>
          <a href="/#contact" className="bg-bbq-red px-6 py-2 font-bold hover:bg-red-700 transition rounded shadow-lg cursor-pointer">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden nav-solid border-t border-white/10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col p-4 gap-4 font-display">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-bbq-red transition py-2">
              {link.label}
            </a>
          ))}
          <a href="/catering" className="bg-bbq-red px-6 py-3 font-bold text-center rounded mt-2">
            Catering
          </a>
          <a href="/#contact" className="bg-bbq-red px-6 py-3 font-bold text-center rounded mt-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
