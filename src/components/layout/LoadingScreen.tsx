import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-primary leading-none">
                KUSH
              </span>
              <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-foreground opacity-80 leading-none mt-2">
                INTEGRATED SYSTEMS
              </span>
            </div>
            
            <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
