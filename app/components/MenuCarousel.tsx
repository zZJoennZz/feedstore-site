'use client';

import { useRef } from 'react';

interface MenuItem {
  title: string;
  desc: string;
  img: string;
}

export default function MenuCarousel({ items }: { items: MenuItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
        {items.map((item, idx) => (
          <div key={idx} className="min-w-[300px] md:min-w-[350px] snap-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-xl mb-4 aspect-[4/3]">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition duration-500"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl border-2 border-white px-6 py-2">VIEW ITEM</span>
              </div> */}
            </div>
            <h3 className="font-display text-xl font-bold text-bbq-red">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('left')}
        className="ml-1 cursor-pointer absolute left-0 top-1/2 text-bbq-red -translate-y-1/2 bg-white/90 px-3 py-2 rounded-full shadow-lg hover:bg-bbq-red hover:text-white transition z-10 hidden md:block"
      >
        ←
      </button>
      <button
        onClick={() => scroll('right')}
        className="mr-1 cursor-pointer absolute right-0 top-1/2 text-bbq-red -translate-y-1/2 bg-white/90 px-3 py-2 rounded-full shadow-lg hover:bg-bbq-red hover:text-white transition z-10 hidden md:block"
      >
        →
      </button>
    </div>
  );
}
