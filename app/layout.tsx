import type { Metadata } from 'next';
import { Oswald, Roboto_Condensed } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Feedstore BBQ - A Great Place to Meat',
  description: 'Authentic Texas barbecue smoked low and slow over hickory wood since 2001',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.variable} ${robotoCondensed.variable} font-body bg-bbq-cream text-bbq-dark antialiased`}>{children}</body>
    </html>
  );
}
