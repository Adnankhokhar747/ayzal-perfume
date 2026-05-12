'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid SSR issues with Three.js
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Collection = dynamic(() => import('@/components/Collection'), { ssr: false });
const Signature = dynamic(() => import('@/components/Signature'), { ssr: false });
const BestSellers = dynamic(() => import('@/components/BestSellers'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const SocialGallery = dynamic(() => import('@/components/SocialGallery'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Initialize smooth scroll with Lenis only on client side
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        lerp: 0.1,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };
    
    initLenis();
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <main className="bg-black overflow-x-hidden">
        <Hero />
        <About />
        <Collection />
        <Signature />
        <BestSellers />
        <Testimonials />
        <SocialGallery />
        <Contact />
      </main>
    </>
  );
}