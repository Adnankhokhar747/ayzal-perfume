// components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsVisible(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener('mousemove', moveCursor);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className={`fixed top-0 left-0 z-[200] pointer-events-none rounded-full mix-blend-difference ${
          isHovering ? 'w-12 h-12 bg-gold' : 'w-6 h-6 bg-white'
        }`}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        className="fixed top-0 left-0 z-[199] pointer-events-none rounded-full border border-gold/50 w-10 h-10 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </>
  );
}