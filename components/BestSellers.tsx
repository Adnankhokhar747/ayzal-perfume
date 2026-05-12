'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const bestSellers = [
  { 
    name: 'Royal Oud Noir', 
    price: '$450', 
    notes: 'Oud, Saffron, Amber, Musk', 
    rating: 5, 
    volume: '100ml',
    description: 'A commanding presence of rare Cambodian oud, infused with golden saffron and wrapped in warm amber musk.',
    projection: 'Powerful',
    longevity: '12+ hours',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400'
  },
  { 
    name: 'Golden Elixir', 
    price: '$380', 
    notes: 'Rose, Vanilla, Sandalwood, Patchouli', 
    rating: 5, 
    volume: '100ml',
    description: 'A luminous blend of Taif rose and Bourbon vanilla, resting on a creamy sandalwood base.',
    projection: 'Moderate to Heavy',
    longevity: '10+ hours',
    image: 'https://images.unsplash.com/photo-1563170351-be8270ed72d9?w=400'
  },
  { 
    name: 'Midnight Mystique', 
    price: '$420', 
    notes: 'Incense, Leather, Cypriol, Vetiver', 
    rating: 5, 
    volume: '100ml',
    description: 'Dark, smoky incense intertwined with supple leather and earthy vetiver.',
    projection: 'Heavy',
    longevity: '14+ hours',
    image: 'https://images.unsplash.com/photo-1590736704728-f4734bb5b5b7?w=400'
  },
];

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState<typeof bestSellers[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black via-charcoal/20 to-black">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="section-subtitle">BESTSELLERS</span>
            <h2 className="section-title">Most Coveted <span className="text-gold">Elixirs</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">Discover our most celebrated fragrances, beloved by connoisseurs worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card p-8 text-center group cursor-pointer hover:shadow-2xl hover:shadow-gold/20 transition-all duration-500"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-gold text-sm tracking-wider">VIEW DETAILS</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-gold mb-2">{product.name}</h3>
                <p className="text-3xl font-light mb-4">{product.price}</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < product.rating ? 'text-gold' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-4">{product.notes}</p>
                <button className="w-full py-3 border border-gold/50 text-gold text-sm tracking-wider hover:bg-gold hover:text-black transition-all duration-300 rounded-full">
                  DISCOVER
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-4xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-4 right-4 text-gold text-3xl hover:text-gold-light transition-colors" onClick={() => setSelectedProduct(null)}>×</button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto rounded-2xl" />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-serif text-gold mb-2">{selectedProduct.name}</h2>
                  <p className="text-4xl font-light mb-4">{selectedProduct.price}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{selectedProduct.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm"><span className="text-gold">Notes:</span> {selectedProduct.notes}</p>
                    <p className="text-sm"><span className="text-gold">Volume:</span> {selectedProduct.volume}</p>
                    <p className="text-sm"><span className="text-gold">Projection:</span> {selectedProduct.projection}</p>
                    <p className="text-sm"><span className="text-gold">Longevity:</span> {selectedProduct.longevity}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 bg-gold text-black font-sans text-sm tracking-wider hover:bg-gold-light transition-all duration-300 rounded-full">
                      ADD TO CART
                    </button>
                    <button className="flex-1 py-3 border border-gold text-gold font-sans text-sm tracking-wider hover:bg-gold/10 transition-all duration-300 rounded-full">
                      SAMPLE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}