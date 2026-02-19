// app/press/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Press & Awards',
  description: "Feedstore BBQ in the news, awards, and recognitions. See what others are saying about Southlake's original BBQ since 2001.",
};

const awards = [
  {
    year: '2024',
    title: 'Best BBQ in Southlake',
    organization: 'Southlake Style Magazine',
    description: 'Voted #1 BBQ restaurant by local residents for the 5th consecutive year.',
  },
  {
    year: '2023',
    title: 'Texas Top 50 BBQ Joints',
    organization: 'Texas Monthly',
    description: 'Featured in the prestigious annual list of must-visit barbecue destinations across the Lone Star State.',
  },
  {
    year: '2022',
    title: 'Best Brisket in DFW',
    organization: 'Dallas Morning News',
    description: 'Our hickory-smoked brisket earned top honors in the annual BBQ showdown.',
  },
  {
    year: '2021',
    title: '20 Years of Excellence',
    organization: 'Southlake Chamber of Commerce',
    description: 'Recognized for two decades of service and contribution to the local community.',
  },
  {
    year: '2020',
    title: 'Best Family Restaurant',
    organization: 'DFW Child Magazine',
    description: 'Voted best family-friendly dining experience in the Dallas-Fort Worth area.',
  },
];

const pressFeatures = [
  {
    date: 'January 15, 2024',
    outlet: 'NBC DFW',
    title: 'Feedstore BBQ: A Southlake Tradition 20 Years in the Making',
    excerpt: 'Local news feature on how the Lafavers family turned a historic feed store into a beloved barbecue destination.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1544025162-d76690b60946?w=600&h=400&fit=crop',
  },
  {
    date: 'November 8, 2023',
    outlet: 'Texas Monthly',
    title: 'The Secret to Perfect Brisket? Patience and Hickory Wood',
    excerpt: 'An in-depth look at our smoking process and the tradition behind our award-winning barbecue.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=400&fit=crop',
  },
  {
    date: 'July 4, 2023',
    outlet: 'Southlake Journal',
    title: 'Feedstore BBQ Feeds 5,000 at Annual Fourth of July Celebration',
    excerpt: 'Community coverage of our largest catering event of the year supporting local first responders.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
  },
  {
    date: 'March 12, 2023',
    outlet: 'Dallas Observer',
    title: 'Hidden Gems: Why Southlake Locals Line Up for This BBQ',
    excerpt: 'Food critic review highlighting our St. Louis style ribs and homemade sides.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1547496502-ffa5ef9c94cd?w=600&h=400&fit=crop',
  },
];

const testimonials = [
  {
    quote: "The best brisket I've had outside of Lockhart. Feedstore BBQ is worth the drive from anywhere in DFW.",
    author: 'Daniel Vaughn',
    title: 'BBQ Editor, Texas Monthly',
  },
  {
    quote: 'A true Texas treasure. The Lafavers family has preserved the spirit of old Southlake while serving world-class barbecue.',
    author: 'Bud Kennedy',
    title: 'Food Critic, Fort Worth Star-Telegram',
  },
  {
    quote: 'Feedstore BBQ represents everything great about Texas barbecue - tradition, quality, and genuine hospitality.',
    author: 'Guy Fieri',
    title: 'Host, Diners, Drive-Ins and Dives',
  },
];

export default function PressPage() {
  return (
    <main className="bg-bbq-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('img/FeedStore_Hero_Image.jpg')",
          }}
        />
        <div className="relative z-20 text-center text-white px-4 pt-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-shadow mb-4">
            PRESS & <span className="text-bbq-red">AWARDS</span>
          </h1>
          <p className="font-display text-xl tracking-widest text-shadow">RECOGNIZED • FEATURED • CELEBRATED</p>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-5xl font-bold text-bbq-dark mb-12 text-center">
            AWARDS & <span className="text-bbq-red">RECOGNITION</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-bbq-cream p-6 rounded-lg border-2 border-bbq-red/20 hover:border-bbq-red transition duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-bbq-red text-white px-3 py-1 rounded font-display font-bold">{award.year}</span>
                  <svg className="w-8 h-8 text-bbq-orange group-hover:text-bbq-red transition" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.699-3.181a1 1 0 011.827 1.035L17.475 6.5l.839.419a1 1 0 01.475 1.318l-2 5a1 1 0 01-1.263.535l-2.5-.833a1 1 0 00-.632 0l-2.5.833a1 1 0 01-1.263-.535l-2-5a1 1 0 01.475-1.318l.839-.419-1.246-2.321a1 1 0 011.827-1.035L6.046 4.323 10 2.743V2zM5 11.5l1.5 3.75.5.167V11.5H5zm10 0h-2v3.917l.5-.167L15 11.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-bbq-dark mb-2">{award.title}</h3>
                <p className="text-bbq-red font-bold text-sm mb-2">{award.organization}</p>
                <p className="text-gray-600 text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-20 bg-bbq-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="font-display text-5xl font-bold mb-12 text-center">
            FEATURED <span className="text-bbq-orange">IN</span>
          </h2>

          {/* Logo placeholders - replace with actual outlet logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 opacity-70">
            {['Texas Monthly', 'Dallas Morning News', 'NBC DFW', 'Food Network', 'DFW Child', 'Southlake Style'].map((outlet, idx) => (
              <div key={idx} className="bg-white/10 px-6 py-3 rounded font-display font-bold text-lg">
                {outlet}
              </div>
            ))}
          </div>

          {/* Press Articles */}
          <div className="grid md:grid-cols-2 gap-8">
            {pressFeatures.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-500"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <span>{article.date}</span>
                    <span className="text-bbq-orange font-bold">{article.outlet}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-bbq-orange transition">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                  <span className="text-bbq-red font-bold text-sm group-hover:text-white transition">READ MORE →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-bbq-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-5xl font-bold text-bbq-dark mb-12 text-center">
            WHAT THE <span className="text-bbq-red">EXPERTS SAY</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg relative">
                <div className="text-bbq-red text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-gray-700 italic mb-6 relative z-10 pt-4">{item.quote}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-display font-bold text-bbq-dark">{item.author}</p>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="py-16 bg-bbq-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-4">MEDIA INQUIRIES</h2>
          <p className="text-xl mb-8 text-white/90">Interested in featuring Feedstore BBQ? Download our media kit or contact us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/files/feedstore-media-kit.pdf"
              download
              className="bg-white text-bbq-red px-8 py-4 font-display font-bold text-lg rounded hover:bg-gray-100 transition shadow-xl"
            >
              DOWNLOAD MEDIA KIT
            </a>
            <a
              href="mailto:bbq@feedstorebbq.com?subject=Media Inquiry"
              className="bg-transparent border-2 border-white text-white px-8 py-4 font-display font-bold text-lg rounded hover:bg-white hover:text-bbq-red transition"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
