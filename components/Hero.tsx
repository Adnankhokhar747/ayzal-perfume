'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

const Perfume3D = dynamic(() => import('./Perfume3D'), { ssr: false });
const ParticleSystem = dynamic(() => import('./ParticleSystem'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.2]);

  useEffect(() => {
    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video autoplay failed:", e));
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title span',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 1.2, ease: 'power4.out' }
      );
      gsap.fromTo('.hero-cta button',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'back.out(0.5)' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background - High quality perfume video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1594035910385-fa47790a7d6d?q=80&w=2070"
      >
        {/* Multiple video sources for compatibility */}
        <source src="https://cdn.pixabay.com/video/2023/06/27/170047-836940137_large.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/video/2022/03/14/111213-689964549_large.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-gold/5 animate-gradient z-0" />

      <style jsx>{`
        @keyframes gradient {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>

      {/* Particle Effect */}
      <ParticleSystem />

      {/* 3D Perfume Bottle */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Perfume3D />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <div className="mb-8 overflow-hidden">
          <div className="hero-title text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-wider">
            {'AYZAL PERFUME'.split('').map((char, i) => (
              <span key={i} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gold text-sm md:text-base tracking-[0.5em] uppercase mb-12 font-sans font-light"
        >
          The Essence of Luxury
        </motion.p>
        <div className="hero-cta flex gap-6 flex-col sm:flex-row">
          <button className="px-10 py-4 bg-gold text-black font-sans text-sm tracking-wider hover:bg-gold-light transition-all duration-300 transform hover:scale-105 rounded-full">
            DISCOVER COLLECTION
          </button>
          <button className="px-10 py-4 border-2 border-gold text-gold font-sans text-sm tracking-wider hover:bg-gold/10 transition-all duration-300 transform hover:scale-105 rounded-full">
            EXPLORE FRAGRANCE
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}