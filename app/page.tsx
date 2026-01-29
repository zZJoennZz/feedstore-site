import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuCarousel from './components/MenuCarousel';
import Image from 'next/image';

export default function Home() {
  const menuItems = [
    {
      title: 'LITE PLATE',
      desc: 'Perfect portion for lighter appetites',
      img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=450&fit=crop',
    },
    {
      title: 'SANDWICHES',
      desc: 'Handheld BBQ perfection',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=450&fit=crop',
    },
    {
      title: 'BIG BOWL SALADS',
      desc: 'Fresh and hearty options',
      img: 'https://images.unsplash.com/photo-1547496502-ffa5ef9c94cd?w=600&h=450&fit=crop',
    },
    {
      title: 'MEAT PLATES',
      desc: 'The full BBQ experience',
      img: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=450&fit=crop',
    },
  ];

  const events = [
    {
      date: 'FEB 9',
      tag: 'LIVE',
      title: 'BBQ Cook-off',
      desc: 'Watch local pitmasters compete for the best brisket in Texas.',
      img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    },
    {
      date: 'FEB 10',
      tag: 'FAMILY',
      title: 'Family BBQ Day',
      desc: 'Kids eat free! Live music and games for the whole family.',
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
    },
    {
      date: 'FEB 11',
      tag: 'MUSIC',
      title: 'Live Music Night',
      desc: 'Local country and blues artists perform under the stars.',
      img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=400&fit=crop',
    },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 z-10" />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/meat-bbq.jpg')",
          }}
        />

        <div className="relative z-20 text-center text-white px-4 pt-16">
          <div className="mb-4 inline-block border-2 border-white/30 px-6 py-2 bg-black/20 backdrop-blur-sm rounded">
            <span className="font-body tracking-[0.3em] text-sm">FEEDSTORE • SOUTHLAKE, TX</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-2 text-shadow tracking-tight">A GREAT PLACE</h1>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-shadow tracking-tight mb-6">
            TO <span className="text-bbq-red bg-white/10 px-4 transform -rotate-2 inline-block backdrop-blur-sm">MEAT</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 text-shadow">
            Authentic Texas barbecue smoked low and slow over hickory wood since 2001
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-bbq-red text-white px-8 py-4 font-display font-bold text-lg rounded hover:bg-red-700 transition shadow-xl">
              VIEW MENU
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 font-display font-bold text-lg rounded hover:bg-white hover:text-bbq-dark transition shadow-xl">
              OUR STORY
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Southlake Original Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <h2 className={`font-heading text-5xl font-bold mb-6 text-bbq-dark`}>
              A SOUTHLAKE <span className="text-bbq-red">ORIGINAL</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              For more than 20 years, Feedstore BBQ has been serving the Southlake area legendary Texas barbecue using only the finest ingredients.
              Our pitmasters slow-smoke our meats over hickory wood for that authentic flavor you can&apos;t get anywhere else.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in community, tradition, and serving up plates that bring people together. Whether you&apos;re here for our award-winning
              brisket, fall-off-the-bone ribs, or our homemade sides, you&apos;re family here.
            </p>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Image src="/img/GoTexan.png" width={70} height={70} alt="GoTexan Logo" />
              </div>
              <div className="flex items-center gap-2">
                <Image src="/img/Certified Hereford Beef Logo.png" width={70} height={70} alt="Certified Hereford Beef Logo" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-bbq-red rounded-full flex items-center justify-center text-white font-display font-bold text-center leading-tight z-10 transform rotate-12 shadow-xl border-4 border-white">
              THE BEST
              <br />
              BBQ IN
              <br />
              TOWN
            </div>
            <div className="w-full h-[400px] relative">
              <div
                className="w-full h-full bg-cover bg-center rounded-lg shadow-2xl sepia"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop')",
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-bbq-red rounded-lg -z-10" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bbq-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">GREAT FOOD. FRIENDLY FACES. NO FUSS.</h2>
          <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
            From our family to yours, we serve up Texas hospitality with every plate. Come hungry, leave happy.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'LOCALLY LOVED SINCE 2001',
                desc: 'A Southlake staple where neighbors become friends over great barbecue.',
                img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop',
              },
              {
                title: 'GOOD FOOD FOR GOOD FRIENDS',
                desc: 'Share a plate, share a story, share the experience of authentic Texas BBQ.',
                img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
              },
              {
                title: 'THE PLACE TO MEAT UP',
                desc: 'Business lunches, family dinners, or just because. The perfect spot to gather.',
                img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="relative border border-white/20 rounded-lg hover:transform hover:scale-105 transition duration-300 overflow-hidden group h-[400px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${feature.img}')` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <h3 className="font-display text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{feature.desc}</p>
                  <button className="text-bbq-orange font-bold hover:text-white transition">JOIN US →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-6xl font-bold text-bbq-dark">MENU</h2>
              <div className="h-1 w-24 bg-bbq-red mt-2" />
            </div>
            <button className="border-2 border-bbq-dark px-6 py-2 font-display font-bold hover:bg-bbq-dark hover:text-white transition rounded">
              VIEW FULL MENU
            </button>
          </div>

          <MenuCarousel items={menuItems} />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-to-b from-bbq-dark to-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-display text-6xl font-bold">EVENTS</h2>
            <button className="border border-white/30 px-6 py-2 hover:bg-white hover:text-bbq-dark transition font-display rounded">VIEW ALL</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition duration-300"
              >
                <div className="relative h-48">
                  <div
                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition"
                    style={{ backgroundImage: `url('${event.img}')` }}
                  />
                  <div className="absolute top-4 left-4 bg-bbq-red px-4 py-2 rounded">
                    <div className="text-2xl font-display font-bold">{event.date}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded text-xs font-bold tracking-wider">{event.tag}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{event.desc}</p>
                  <button className="text-bbq-red font-bold hover:text-white transition text-sm">LEARN MORE →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-6xl font-bold mb-12 text-bbq-dark">CONTACT US</h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-bbq-red mb-2">LOCATION</h3>
                <p className="text-gray-700 text-lg">456 BBQ Lane, Dallas TX 75201 USA</p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-bbq-red mb-2">HOURS</h3>
                <p className="text-gray-700">
                  Monday - Saturday: 11am - 9pm
                  <br />
                  Sunday: 11am - 8pm
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-bbq-red mb-2">PHONE</h3>
                <p className="text-gray-700 text-xl font-bold">+1 (555) 123-4567</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                <h3 className="font-display text-gray-600 text-xl font-bold mb-4">SUBSCRIBE TODAY</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:border-bbq-red bg-white"
                  />
                  <button className="bg-bbq-red text-white px-6 py-3 rounded-r font-bold hover:bg-red-800 transition">→</button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-bbq-red mb-6">GET IN TOUCH</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bbq-red bg-white text-gray-900 placeholder:text-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Last"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bbq-red bg-white text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bbq-red bg-white text-gray-900 placeholder:text-gray-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bbq-red bg-white text-gray-900 placeholder:text-gray-500"
                />

                <div>
                  <label className="font-bold mb-3 block text-gray-700">HOW CAN WE HELP YOU?</label>
                  <div className="flex gap-6 text-gray-900">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-bbq-red w-5 h-5" />
                      <span>Catering</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-bbq-red w-5 h-5" />
                      <span>Events</span>
                    </label>
                  </div>
                </div>

                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-bbq-red bg-white text-gray-900 placeholder:text-gray-500 resize-none"
                />

                <button
                  type="submit"
                  className="bg-bbq-dark text-white px-8 py-4 font-display font-bold rounded hover:bg-bbq-red transition w-full text-lg"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
