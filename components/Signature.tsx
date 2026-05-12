'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Signature() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const particles = document.querySelectorAll('.fragrance-particle');
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: -200,
        opacity: 0,
        duration: 2,
        repeat: -1,
        delay: i * 0.05,
        ease: 'power1.out',
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-48 overflow-hidden min-h-screen flex items-center">
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0"
      >
        {/* Beautiful perfume background image from Unsplash */}
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1594035910385-fa47790a7d6d?q=80&w=2070")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
      </motion.div>

      <div className="luxury-container relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">THE SIGNATURE EXPERIENCE</span>
          <h2 className="section-title max-w-5xl mx-auto">
            A Fragrance That Becomes
            <span className="text-gold"> Your Identity</span>
          </h2>
          
          {/* Floating particles */}
          <div className="relative h-32 my-12">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="fragrance-particle absolute w-1 h-1 bg-gold rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${50 + Math.random() * 100}%`,
                  opacity: Math.random() * 0.6,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                }}
              />
            ))}
          </div>

          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Every Ayzal fragrance is a journey — an intimate expression of elegance.
            From the first spritz to the lingering dry-down, experience the signature
            that defines luxury. Our master perfumers spend months, sometimes years,
            perfecting each composition to ensure it becomes an extension of your identity.
          </p>

          <div className="mt-12 flex gap-6 justify-center flex-wrap">
            <div className="text-center px-6">
              <div className="text-4xl text-gold font-serif">50+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Exclusive Ingredients</div>
            </div>
            <div className="w-px h-12 bg-gold/30" />
            <div className="text-center px-6">
              <div className="text-4xl text-gold font-serif">100+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Hours of Crafting</div>
            </div>
            <div className="w-px h-12 bg-gold/30" />
            <div className="text-center px-6">
              <div className="text-4xl text-gold font-serif">24</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider">Months Maceration</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}