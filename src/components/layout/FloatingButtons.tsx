import React, { useEffect, useState } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { company, telLink } from '@/lib/company';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <TooltipProvider delayDuration={300}>
        <AnimatePresence>
          {showBackToTop && (
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={scrollToTop}
                  className="w-14 h-14 bg-secondary text-secondary-foreground border border-border rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shrink-0"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="left" sideOffset={10}>
                <p>Back to top</p>
              </TooltipContent>
            </Tooltip>
          )}
        </AnimatePresence>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
              href={telLink(company.contact.primaryPhone)}
              className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all shrink-0"
              aria-label="Call Now"
            >
              <Phone className="w-6 h-6" fill="currentColor" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={10}>
            <p>Call Now</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
              href={`https://wa.me/${company.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all relative shrink-0"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-7 h-7" />
              <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={10}>
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
