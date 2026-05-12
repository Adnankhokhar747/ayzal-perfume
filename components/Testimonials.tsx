'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { 
    name: 'Victoria Chen', 
    role: 'Collector', 
    text: 'Ayzal has redefined what I expect from a fragrance. The complexity and longevity are unmatched in the world of niche perfumery. Royal Oud Noir has become my signature.', 
    rating: 5,
    location: 'Hong Kong'
  },
  { 
    name: 'Alexander Romanov', 
    role: 'Connoisseur', 
    text: 'Royal Oud Noir is nothing short of a masterpiece. It commands attention and leaves an unforgettable trail. The saffron and oud combination is pure genius.', 
    rating: 5,
    location: 'Russia'
  },
  { 
    name: 'Isabella Laurent', 
    role: 'Perfume Critic', 
    text: 'The artistry behind each Ayzal creation is breathtaking. Golden Elixir is my signature scent - it evolves beautifully throughout the day.', 
    rating: 5,
    location: 'France'
  },
  { 
    name: 'Mohammed Al Rashid', 
    role: 'Royal Family Member', 
    text: 'As someone who appreciates the finest oud, Ayzal offers an unparalleled experience. Their Royal Collection rivals the most prestigious houses.', 
    rating: 5,
    location: 'Dubai'
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gold/5 to-black" />
      <div className="luxury-container relative z-10">
        <div className="text-center mb-12">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">Whispers of <span className="text-gold">Admiration</span></h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12 text-center"
            >
              <div className="text-gold text-7xl mb-6 font-serif">“</div>
              <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed">{testimonials[current].text}</p>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h4 className="text-gold font-serif text-2xl">{testimonials[current].name}</h4>
              <p className="text-gray-400 text-sm">{testimonials[current].role} • {testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full ${current === idx ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-gold/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}