import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
              href="tel:+917275442374"
              className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
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
              href="https://wa.me/917275442374"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all relative"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-7 h-7" />
              {/* Pulse effect */}
              <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
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
