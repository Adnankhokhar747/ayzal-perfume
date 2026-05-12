'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  if (!isLoading) return null;
  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="text-gold text-2xl">AYZAL</div>
    </motion.div>
  );
}
