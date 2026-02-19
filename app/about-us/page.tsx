// app/about/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

// Add this export for the page title
export const metadata: Metadata = {
  title: 'About Feedstore BBQ | A Southlake, TX Original Since 2001',
  description: `Feedstore BBQ is Southlake's oldest retail establishment as far as we can find. We've only been selling BBQ out of there since April 2001, but the Bailey family originally opened the Bailey Feed Store here in the late 1950's.`,
};

export default function AboutPage() {
  return (
    <main className="bg-bbq-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('../img/FeedStore_Hero_Image.jpg')",
          }}
        />
        <div className="relative z-20 text-center text-white px-4 pt-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-shadow mb-4">ABOUT US</h1>
          <p className="font-display text-xl md:text-2xl tracking-widest text-shadow">OUR STORY • OUR COMMITMENT • OUR FAMILY</p>
        </div>
      </section>

      {/* GO TEXAN Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <Image width={200} height={200} src="/img/GoTexan.png" alt="GoTexan Logo" />
          </div>
          <h2 className="font-display text-4xl font-bold text-bbq-dark mb-6">
            PROUD MEMBER OF <span className="text-bbq-red">GO TEXAN</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Feedstore BBQ is a proud member of the GO TEXAN program of the Texas Department of Agriculture. Being a GO TEXAN member means that we
            source as much of our foods and ingredients – including our Certified Hereford Beef – from Texas producers and distributors as we possibly
            can. We firmly believe in the commitment from GO TEXAN: to support and promote Texas-based businesses and connect them with customers
            across the Lone Star State.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-bbq-cream relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="font-display text-6xl font-bold text-bbq-dark mb-12 text-center">HISTORY</h2>

          {/* A Southlake Original */}
          <div className="mb-16">
            <h3 className="font-display text-3xl font-bold text-bbq-red mb-6">A SOUTHLAKE ORIGINAL</h3>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Feedstore BBQ is Southlake&apos;s oldest retail establishment as far as we can find. We&apos;ve only been selling BBQ out of there
                since April 2001, but the Bailey family originally opened the Bailey Feed Store here in the late 1950&apos;s. Miller&apos;s Grocery
                was the name of the spot when we moved to the small town of Southlake, TX (population 900) in June of 1974 to escape the fast-paced
                life of the big city. Bill & Phyllis Lafavers figured that their four children: Mike, Eva, Mark, and Matt needed more room to grow, so
                they bought a little land on a two-lane road behind Miller&apos;s Grocery.
              </p>
              <p>
                There were no red lights, just a couple of blinking yellow lights on 114. Miller&apos;s Grocery had two gas pumps (regular & ethyl)
                and Mr. Miller used to cut meat for us right behind the counter. It was always a great place to stop when you had an extra 25 cents
                burning a hole in your pocket because his candy selection stood up to anyone&apos;s. Mr. Miller sold the store to Dee Hutchins in the
                late 1970&apos;s and renamed the store Dee&apos;s Hitchin&apos; Post where she ran a successful feed and tack store until she sold it
                to the Lemieux family in the mid-1980&apos;s. The Lemieux family changed the name to Southlake Feed & Tack and did very well before
                deciding to sell in 1997.
              </p>
            </div>
          </div>

          {/* Photo and Continuation */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image src="/img/Bailey_FeedStore.jpg" alt="The Feed Store" fill className="object-cover sepia" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="font-display text-sm tracking-wider">FEED STORE - SOUTHLAKE, TX</p>
              </div>
            </div>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Bill and Phyllis Lafavers and family started Lafavers&apos; Enterprises, Inc. and decided to purchase the Feed & Tack in September of
                1997. Bill had always wanted to complete his property by buying the land and store that he looked at for so many years. We ran the
                store for a while until we figured out that all the animals were movin&apos; out of town and all these people kept movin&apos; in. We
                just figured we better start feeding all these hungry folks instead.
              </p>
              <p>
                After some extensive remodeling and our fingers crossed, we opened the Feedstore BBQ in April 2001. With some family recipes and the
                help and support of the great community of Southlake and all our surrounding neighbors we&apos;ve been serving up the best Texas BBQ
                and fixin&apos;s around ever since. We thank you for your continued and overwhelming support.
              </p>
              <p className="font-display text-xl font-bold text-bbq-red mt-6">— The Lafavers Family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-bbq-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="max-w-5xl mx-auto px-4 relative">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-4">OUR COMMITMENT</h2>
          <p className="text-center text-bbq-orange font-display text-xl tracking-widest mb-12">WE WILL</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Always Purchase And Prepare The Very Best Quality Meats And Freshest Vegetables Available.',
              'Prepare All Meats And Vegetables With Consistency, Patience, And Dedication To Bring Out The Very Best Flavor And Tenderness.',
              'Serve Our Customers A Consistent Quality Product At A Reasonable Price.',
              'Never Lower Our Quality Or Change The Preparation Process To Sell Or Compete At A Lower Price.',
              'Always Be The Cleanest, Friendliest And Best Family Oriented Bbq Restaurant For Our Fine Customers.',
            ].map((commitment, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-bbq-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-display font-bold text-sm">✓</span>
                  </div>
                  <p className="text-lg leading-relaxed">{commitment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block border-2 border-bbq-red bg-bbq-red/20 px-8 py-6 rounded-lg">
              <p className="font-display text-xl md:text-2xl font-bold tracking-wide">EVERYDAY WE COOK, WE WILL COOK EVERYTHING THE BEST WE CAN.</p>
              <p className="font-display text-lg text-bbq-orange mt-2">ALL PRODUCTS WORTH PRICE CHARGED.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bbq-red text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-6">COME VISIT US TODAY</h2>
          <p className="text-xl mb-8 text-white/90">Experience the taste of Texas tradition at Southlake&apos;s oldest establishment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-white text-bbq-red px-8 py-4 font-display font-bold text-lg rounded hover:bg-gray-100 transition shadow-xl">
              VIEW OUR MENU
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 font-display font-bold text-lg rounded hover:bg-white hover:text-bbq-red transition"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
