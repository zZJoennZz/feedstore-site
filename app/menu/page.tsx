// app/menu/page.tsx
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Menu at Feedstore BBQ | Southlake, TX Since 2001',
  description: 'Come see our great menu! From our daily specials to meat by the pound, you will find the best Texas BBQ around right here!',
};

export default function MenuPage() {
  return (
    <main className="bg-bbq-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('../img/Feedstore25.jpg')",
          }}
        />
        <div className="relative z-20 text-center text-white px-4 pt-20">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-shadow mb-4">OUR MENU</h1>
          <p className="font-display text-xl tracking-widest text-shadow">AUTHENTIC TEXAS BBQ • SINCE 2001</p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Sandwiches */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">SANDWICHES</h2>
            <p className="text-gray-600 mb-6 italic">
              Sliced Brisket (Traditional Cut or Lean), Chopped Brisket (Wet or Dry), Turkey, Pulled Pork, Sausage, Jalapeño Link, Hot Link, Country
              Ham
            </p>
            <div className="grid md:grid-cols-2 gap-4 bg-bbq-cream p-6 rounded-lg">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-lg text-bbq-dark">Sandwich Only</span>
                <span className="font-display text-xl font-bold text-bbq-red">$13.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-lg text-bbq-dark">Sandwich Basket (1 side)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$14.50</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-lg text-bbq-dark">Sandwich Plate (2 sides)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$15.50</span>
              </div>
            </div>
          </div>

          {/* LUNCH SPECIAL */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">LUNCH SPECIAL</h2>
            <p className="text-gray-600 mb-6 italic">Chopped Brisket Sandwich (wet or dry, 2 sides) Pulled Pork Sandwich (with 2 sides)</p>
            <div className="bg-bbq-cream text-bbq-red p-6 rounded-lg text-left">
              <span className="font-display text-3xl font-bold">$13.00</span>
            </div>
            <div className="mt-4 bg-bbq-red/10 p-4 rounded-lg border-l-4 border-bbq-red">
              <p className="font-bold text-bbq-dark">Monday through Friday 11:00 to 3:00</p>
            </div>
          </div>

          {/* Meat Plates */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">MEAT PLATES</h2>
            <p className="text-gray-600 mb-6 italic">Comes with Two Sides</p>
            <p className="text-gray-700 mb-4">
              Sliced Brisket (Traditional Cut or Lean), Chopped Brisket (Wet or Dry), Turkey, Pulled Pork, Sausage, Jalapeño Link, Hot Link, Country
              Ham
            </p>
            <div className="bg-bbq-cream text-bbq-red p-6 rounded-lg text-left">
              <span className="font-display text-3xl font-bold">$21.00</span>
            </div>
          </div>

          {/* Mama’s Lite Plate */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">MAMA'S LITE PLATE</h2>
            <p className="text-gray-600 mb-6 italic">1 side</p>
            <div className="bg-bbq-cream text-bbq-red p-6 rounded-lg text-left">
              <span className="font-display text-3xl font-bold">$13.00</span>
            </div>
          </div>

          {/* Burnt Ends Plate */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">BURNT ENDS PLATE</h2>
            <p className="text-gray-600 mb-6 italic">Comes with Two Sides</p>
            <div className="bg-bbq-cream text-bbq-red p-6 rounded-lg text-left">
              <span className="font-display text-3xl font-bold">$25.00</span>
            </div>
            <div className="mt-4 bg-bbq-red/10 p-4 rounded-lg border-l-4 border-bbq-red">
              <p className="font-bold text-bbq-dark">Served Monday and Saturday</p>
            </div>
          </div>

          {/* Combo Plates */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">COMBO PLATES</h2>
            <p className="text-gray-600 mb-4 italic">Comes with Two Sides</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-lg text-bbq-dark">Two Meat Combo</span>
                <span className="font-display text-2xl font-bold text-bbq-red">$23.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-lg text-bbq-dark">Three Meat Combo</span>
                <span className="font-display text-2xl font-bold text-bbq-red">$24.50</span>
              </div>
            </div>
          </div>

          {/* St. Louis Style Pork Ribs */}
          <div className="mb-16 bg-bbq-dark text-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-bbq-red px-4 py-2 font-display font-bold text-sm">FAMOUS</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-bbq-orange">FEEDSTORE&apos;S FAMOUS</h2>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">ST. LOUIS STYLE PORK RIBS</h3>
            <p className="text-gray-300 mb-6 italic">Comes with Two Sides</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-lg">Rib Plate (5 bones)</span>
                <span className="font-display text-2xl font-bold text-bbq-orange">$24.00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-lg">Texas Size Rib Plate (7 bones)</span>
                <span className="font-display text-2xl font-bold text-bbq-orange">$26.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Full Rack Plate (12 bones)</span>
                <span className="font-display text-2xl font-bold text-bbq-orange">$45.00</span>
              </div>
            </div>
          </div>

          {/* Papa Bill's Burgers */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">
              PAPA BILL&apos;S BURGERS
            </h2>
            <p className="text-gray-600 mb-6 italic">Includes Lettuce, Tomato, Pickles, Onions, Cheese</p>
            <div className="grid md:grid-cols-2 gap-4 bg-bbq-cream p-6 rounded-lg">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Burger Only</span>
                <span className="font-display text-xl font-bold text-bbq-red">$13.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Burger Basket (with 1 side)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$15.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300 md:border-b-0">
                <span className="font-bold text-bbq-dark">Double Meat, Burger Only</span>
                <span className="font-display text-xl font-bold text-bbq-red">$16.00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-bbq-dark">Double Meat Burger Basket (with 1 side)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$18.00</span>
              </div>
            </div>
          </div>

          {/* EXTRA SIDES */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">EXTRA SIDES</h2>
            <p className="text-gray-600 mb-6 italic">Crispy Onion Strings • Fried Jalapenos • Fried Pickles</p>
            <div className="bg-bbq-cream text-bbq-red p-6 rounded-lg text-left">
              <span className="font-display text-3xl font-bold">$7.00</span>
            </div>
          </div>

          {/* VEGGIE PLATES */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-2 border-b-4 border-bbq-red pb-2 inline-block">VEGGIE PLATES</h2>
            <p className="text-gray-600 mb-6 italic"></p>
            <div className="grid md:grid-cols-2 gap-4 bg-bbq-cream p-6 rounded-lg">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">3 Veggies</span>
                <span className="font-display text-xl font-bold text-bbq-red">$9.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">4 Veggies</span>
                <span className="font-display text-xl font-bold text-bbq-red">$12.00</span>
              </div>
            </div>
          </div>

          {/* Kid's Menu */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">KID&apos;S MENU</h2>
            <p className="text-gray-600 mb-6 italic">12 and under - includes one side, fountain drink and ice cream</p>
            <div className="grid md:grid-cols-2 gap-4 bg-bbq-cream p-6 rounded-lg">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Any Meat (&apos;cept ribs or catfish)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$8.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Chicken Strips</span>
                <span className="font-display text-xl font-bold text-bbq-red">$6.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Grilled Cheese</span>
                <span className="font-display text-xl font-bold text-bbq-red">$5.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Kid&apos;s Ribs</span>
                <span className="font-display text-xl font-bold text-bbq-red">$10.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Kid&apos;s Catfish</span>
                <span className="font-display text-xl font-bold text-bbq-red">$10.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-bold text-bbq-dark">Kid&apos;s Sandwich</span>
                <span className="font-display text-xl font-bold text-bbq-red">$6.00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-bbq-dark">Chicken Strips (each)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$1.00</span>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">DESSERTS</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Cobbler of the Day With Ice Cream</span>
                <span className="font-display text-xl font-bold text-bbq-red">$4.00</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Banana Pudding</span>
                <span className="font-display text-xl font-bold text-bbq-red">$4.00</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <div>
                  <span className="font-bold block text-bbq-dark">Whole Banana Pudding</span>
                  <span className="text-sm text-gray-600">2 hour advanced notice, please</span>
                </div>
                <span className="font-display text-xl font-bold text-bbq-red">$27.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <div>
                  <span className="font-bold block text-bbq-dark">Whole Cobblers</span>
                  <span className="text-sm text-gray-600">2 hour advanced notice, please</span>
                </div>
                <span className="font-display text-xl font-bold text-bbq-red">$27.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <div>
                  <span className="font-bold block text-bbq-dark">Whole Pecan Cobbler</span>
                  <span className="text-sm text-gray-600">3-hour advanced notice, please</span>
                </div>
                <span className="font-display text-xl font-bold text-bbq-red">$29.00</span>
              </div>
            </div>
          </div>

          {/* Big Bowl Salads */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">BIG BOWL SALADS</h2>
            <p className="text-gray-600 mb-6 text-sm">Ranch • Honey Mustard • Blue Cheese • Sun Dried Tomato • Fat Free Italian • Chipotle Ranch</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Grilled Chicken</span>
                <span className="font-display text-xl font-bold text-bbq-red">$18.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Turkey & Ham Cobb</span>
                <span className="font-display text-xl font-bold text-bbq-red">$18.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Feedstore Salad (any meat &apos;cept ribs, chicken)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$18.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Plain ol&apos; Salad</span>
                <span className="font-display text-xl font-bold text-bbq-red">$12.00</span>
              </div>
            </div>
          </div>

          {/* Meats by the Pound */}
          <div className="mb-16 bg-bbq-dark text-white p-8 rounded-lg">
            <h2 className="font-display text-4xl font-bold mb-6 text-bbq-orange border-b-2 border-bbq-orange pb-2 inline-block">
              MEATS BY THE POUND
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Feedstore&apos;s Famous Pork Ribs</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$26.50</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Sliced Brisket</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$30.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Pulled Pork</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$23.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Turkey</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$25.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Ham</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$23.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Sausage</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$23.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Jalapeño Link</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$23.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Hot Link</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$23.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Chopped Brisket (wet or dry)</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$22.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Smoked Chicken (whole)</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$21.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Smoked Chicken (half)</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$11.00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span>Catfish</span>
                <span className="font-display text-xl font-bold text-bbq-orange">$24.00</span>
              </div>
              <div className="flex justify-between items-center py-2 md:col-span-2 bg-bbq-red/20 px-4 rounded">
                <span>
                  Burnt Ends <span className="text-sm text-bbq-orange">[Mondays and Saturday only]</span>
                </span>
                <span className="font-display text-xl font-bold text-bbq-orange">$31.00</span>
              </div>
            </div>
          </div>

          {/* Bakers */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">BAKERS</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Regular Baker</span>
                <span className="font-display text-xl font-bold text-bbq-red">$10.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream p-4 rounded-lg">
                <span className="font-bold text-bbq-dark">Meat Baker (any meat &apos;cept ribs or smoked chicken)</span>
                <span className="font-display text-xl font-bold text-bbq-red">$16.50</span>
              </div>
            </div>
          </div>

          {/* Catfish */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">CATFISH</h2>
            <div className="space-y-4">
              <div className="bg-bbq-cream p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg text-bbq-dark">Fried Catfish</span>
                  <span className="font-display text-2xl font-bold text-bbq-red">$19.50</span>
                </div>
                <p className="text-gray-600 text-sm">served with hush puppies & your choice of two sides</p>
              </div>
              <div className="bg-bbq-cream p-6 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg text-bbq-dark">Cajun Grilled Catfish</span>
                  <span className="font-display text-2xl font-bold text-bbq-red">$19.50</span>
                </div>
                <p className="text-gray-600 text-sm">your choice of two sides</p>
              </div>
            </div>
          </div>

          {/* Chicken Fried Steak */}
          <div className="mb-16 bg-bbq-red/10 p-8 rounded-lg border-2 border-bbq-red">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="font-display text-3xl font-bold text-bbq-red">CHICKEN FRIED STEAK</h2>
                <p className="text-gray-600 italic">Comes with Two Sides • Served Tuesday and Thursday</p>
              </div>
              <span className="font-display text-3xl font-bold text-bbq-red">$19.50</span>
            </div>
          </div>

          {/* Southern Style Sides */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">SOUTHERN STYLE SIDES</h2>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
              Potato Salad • Cole Slaw • Pinto Beans • Spicy Pinto Beans • Mama&apos;s Green Beans • Mashed Taters & Gravy • Mac & Cheese • Corn •
              Dirty Rice • Side Salad • Fresh Cut Fries • Fried Okra • Broccoli • Turnip Greens
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">Individual Side</span>
                <span className="font-display font-bold text-bbq-red">$4.00</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">1/2 Pint</span>
                <span className="font-display font-bold text-bbq-red">$5.00</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">Pint</span>
                <span className="font-display font-bold text-bbq-red">$7.00</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">Quart</span>
                <span className="font-display font-bold text-bbq-red">$11.00</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">2/3rds Gallon</span>
                <span className="font-display font-bold text-bbq-red">$25.00</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">Gallon</span>
                <span className="font-display font-bold text-bbq-red">$38.00</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">Rolls To Go</span>
                <span className="font-display font-bold text-bbq-red">$0.50</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">Buns To Go</span>
                <span className="font-display font-bold text-bbq-red">$0.50</span>
              </div>
              <div className="flex justify-between items-center text-bbq-dark bg-bbq-cream p-3 rounded">
                <span className="font-bold text-sm">Loaf Texas Toast</span>
                <span className="font-display font-bold text-bbq-red">$7.00</span>
              </div>
            </div>
          </div>

          {/* Drinks */}
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-bbq-red mb-4 border-b-4 border-bbq-red pb-2 inline-block">DRINKS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Fountain Drinks</span>
                <span className="font-display text-xl font-bold text-bbq-red">$2.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Regular or Sweet Tea</span>
                <span className="font-display text-xl font-bold text-bbq-red">$2.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Bottled Soda</span>
                <span className="font-display text-xl font-bold text-bbq-red">$3.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Bottled Water</span>
                <span className="font-display text-xl font-bold text-bbq-red">$2.00</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Gallon of Tea</span>
                <span className="font-display text-xl font-bold text-bbq-red">$6.00</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Energy Drinks</span>
                <span className="font-display text-xl font-bold text-bbq-red">$4.50</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Cold Beer</span>
                <span className="font-display text-xl font-bold text-bbq-red">$4.00</span>
              </div>
              <div className="flex justify-between items-center bg-bbq-cream text-bbq-dark p-4 rounded-lg">
                <span className="font-bold">Wine [375ml]</span>
                <span className="font-display text-xl font-bold text-bbq-red">$15.00</span>
              </div>
            </div>
          </div>

          {/* Breakfast */}
          <div className="mb-16 bg-bbq-orange/10 p-8 rounded-lg border-2 border-bbq-orange text-center">
            <h2 className="font-display text-3xl font-bold text-bbq-orange mb-2">BREAKFAST</h2>
            <p className="text-gray-700">See our breakfast menu</p>
            <p className="font-display text-xl font-bold text-bbq-red mt-2">[Coming Soon]</p>
          </div>

          {/* Reheating Instructions Download */}
          <div className="bg-bbq-dark text-white p-8 rounded-lg text-center">
            <h3 className="font-display text-2xl font-bold mb-4">TAKE SOME HOME?</h3>
            <p className="text-gray-300 mb-6">Download our reheating instructions to enjoy Feedstore BBQ at its best.</p>
            <a
              href="/Reheating_Brisket_Instructions.pdf"
              download
              className="inline-flex items-center gap-3 bg-bbq-red text-white px-8 py-4 font-display font-bold text-lg rounded-lg hover:bg-red-700 transition shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              DOWNLOAD REHEATING INSTRUCTIONS
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
