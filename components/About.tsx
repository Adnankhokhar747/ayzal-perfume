'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-line',
        { width: 0, opacity: 0 },
        {
          width: '100%',
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gold/5 to-black" />
      
      <div className="luxury-container relative z-10">
        <motion.div
          ref={textRef}
          style={{ opacity, y }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="section-subtitle">HERITAGE & ARTISTRY</span>
          <h2 className="section-title">
            The Essence of
            <span className="text-gold"> Timeless Luxury</span>
          </h2>
          <div className="about-line h-px bg-gradient-to-r from-transparent via-gold to-transparent my-8 mx-auto w-0" />
          <p className="text-gray-300 font-sans font-light leading-relaxed text-lg md:text-xl mb-8">
            Born from a passion for the rarest ingredients and an unwavering commitment to excellence,
            Ayzal Perfume redefines olfactory luxury. Each fragrance is meticulously crafted by master
            perfumers, blending precious woods, exotic florals, and golden ambers into symphonies that
            linger on the skin and in memory.
          </p>
          <p className="text-gray-400 font-sans font-light leading-relaxed text-base md:text-lg">
            From the mystical forests of Assam to the rose valleys of Taif, we source only the finest 
            ingredients to create scents that transcend time and trend.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-px bg-gold mx-auto mt-12 origin-left"
          />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}