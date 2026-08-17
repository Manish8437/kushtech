import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so it doesn't appear immediately on load
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
        >
          <div className="container mx-auto max-w-5xl pointer-events-auto">
            <div className="glass-panel rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border shadow-2xl">
              <div className="text-sm text-foreground/80">
                We use cookies to improve your experience and for analytics. By continuing to browse, you agree to our use of cookies. 
                Read our <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
              </div>
              <div className="flex gap-3 shrink-0">
                <button 
                  onClick={decline}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-border hover:bg-secondary transition-colors"
                >
                  Decline
                </button>
                <button 
                  onClick={accept}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
