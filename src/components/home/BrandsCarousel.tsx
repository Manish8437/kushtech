import React from 'react';
import { motion } from 'framer-motion';

const brandsRow1 = [
  "Hikvision", "Dahua", "CP Plus", "D-Link", "TP-Link", "Cisco"
];

const brandsRow2 = [
  "HPE", "Schneider Electric", "Honeywell", "Bosch", "eSSL", "Matrix"
];

export function BrandsCarousel() {
  return (
    <section className="py-20 bg-secondary/50 overflow-hidden border-y border-border">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="font-heading font-bold text-2xl text-muted-foreground tracking-widest uppercase">
          Trusted Global Brands We Install
        </h2>
      </div>

      <div className="relative flex flex-col gap-8 w-full max-w-[100vw]">
        {/* Left and Right Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - Scroll Left */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1035] }} // Adjust value based on content width
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex items-center gap-12 md:gap-24 px-6 md:px-12"
          >
            {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, i) => (
              <div key={i} className="text-3xl md:text-5xl font-heading font-extrabold text-foreground/20 hover:text-foreground/80 transition-colors cursor-default select-none">
                {brand}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [-1035, 0] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex items-center gap-12 md:gap-24 px-6 md:px-12"
          >
            {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, i) => (
              <div key={i} className="text-3xl md:text-5xl font-heading font-extrabold text-foreground/20 hover:text-foreground/80 transition-colors cursor-default select-none">
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
