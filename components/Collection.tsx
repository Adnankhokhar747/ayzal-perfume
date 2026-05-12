'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const collections = [
  { 
    name: "Men's Collection", 
    category: 'men', 
    desc: 'Bold, woody, and commanding fragrances for the modern gentleman',
    color: 'from-blue-900/40',
    note: 'Woody & Spicy',
    price: '$320 - $580',
    image: 'https://images.unsplash.com/photo-1594035910385-fa47790a7d6d?w=400'
  },
  { 
    name: "Women's Collection", 
    category: 'women', 
    desc: 'Floral, sensual, and enchanting scents that captivate',
    color: 'from-rose-900/40',
    note: 'Floral & Oriental',
    price: '$320 - $580',
    image: 'https://images.unsplash.com/photo-1563170351-be8270ed72d9?w=400'
  },
  { 
    name: 'Oud Collection', 
    category: 'oud', 
    desc: 'Deep, smoky, and mystical Arabian oud masterpieces',
    color: 'from-amber-900/40',
    note: 'Oud & Amber',
    price: '$450 - $750',
    image: 'https://images.unsplash.com/photo-1590736704728-f4734bb5b5b7?w=400'
  },
  { 
    name: 'Royal Collection', 
    category: 'royal', 
    desc: 'Regal, opulent, and exclusive limited editions',
    color: 'from-gold-900/40',
    note: 'Exclusive Blends',
    price: '$650 - $1,200',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400'
  },
];

export default function Collection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-charcoal/20">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">OUR COLLECTIONS</span>
          <h2 className="section-title">Fragrance <span className="text-gold">Masterpieces</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Discover our curated collections, each telling a unique story of luxury and craftsmanship</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative cursor-pointer group"
            >
              <div className={`glass-card p-6 text-center transition-all duration-500 ${hoveredIndex === idx ? 'transform -translate-y-2 shadow-2xl shadow-gold/20' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="w-40 h-40 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse group-hover:scale-150 transition-transform duration-700" />
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-gold mb-2">{collection.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{collection.note}</p>
                  <p className="text-gray-500 text-xs mb-4">{collection.desc}</p>
                  <p className="text-gold text-sm font-semibold mb-4">{collection.price}</p>
                  
                  <button className="mt-2 px-6 py-2 border border-gold/50 text-gold text-xs tracking-wider hover:bg-gold hover:text-black transition-all duration-300 rounded-full">
                    EXPLORE COLLECTION →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}