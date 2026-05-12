'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  { id: 1, likes: '12.5k', comments: '342', url: 'https://images.unsplash.com/photo-1594035910385-fa47790a7d6d?w=400' },
  { id: 2, likes: '8.2k', comments: '189', url: 'https://images.unsplash.com/photo-1563170351-be8270ed72d9?w=400' },
  { id: 3, likes: '15.7k', comments: '521', url: 'https://images.unsplash.com/photo-1590736704728-f4734bb5b5b7?w=400' },
  { id: 4, likes: '6.9k', comments: '156', url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400' },
  { id: 5, likes: '21.3k', comments: '892', url: 'https://images.unsplash.com/photo-1602162040083-1d1a8e9e0c46?w=400' },
  { id: 6, likes: '10.1k', comments: '278', url: 'https://images.unsplash.com/photo-1594035910385-fa47790a7d6d?w=400' },
];

export default function SocialGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-32">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-subtitle">@AYZALPERFUME</span>
          <h2 className="section-title">Follow the <span className="text-gold">Elegance</span></h2>
          <p className="text-gray-400 mt-4">Join our community of fragrance enthusiasts on Instagram</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img 
                src={img.url} 
                alt="Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 text-white">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-sm font-sans">{img.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                      </svg>
                      <span className="text-sm font-sans">{img.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-3 text-gold border-b-2 border-gold/50 pb-2 hover:border-gold hover:gap-4 transition-all duration-300 group">
            <span className="tracking-wider">FOLLOW ON INSTAGRAM</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}