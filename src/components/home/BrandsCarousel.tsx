import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { company } from '@/lib/company';

const assetBase = import.meta.env.BASE_URL;

const productsRow1 = company.products.slice(0, 3);
const productsRow2 = company.products.slice(3);

function ProductMarqueeItem({ name, image }: { name: string; image: string }) {
  return (
    <div className="flex items-center justify-center min-w-[140px] md:min-w-[180px] h-16 md:h-20 px-6 md:px-10 bg-background/60 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
      <img
        src={`${assetBase}${image}`}
        alt={name}
        className="max-h-10 md:max-h-12 max-w-[120px] md:max-w-[150px] object-contain opacity-70 hover:opacity-100 transition-opacity"
        loading="lazy"
      />
    </div>
  );
}

export function BrandsCarousel() {
  return (
    <section className="py-20 bg-secondary/50 overflow-hidden border-y border-border">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="font-heading font-bold text-2xl text-muted-foreground tracking-widest uppercase">
          Trusted Products We Install
        </h2>
        <Link
          href="/products"
          className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
        >
          View all products
        </Link>
      </div>

      <div className="relative flex flex-col gap-8 w-full max-w-[100vw]">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -900] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex items-center gap-8 md:gap-12 px-6 md:px-12"
          >
            {[...productsRow1, ...productsRow1, ...productsRow1, ...productsRow1].map((product, i) => (
              <ProductMarqueeItem key={`${product.name}-${i}`} name={product.name} image={product.image} />
            ))}
          </motion.div>
        </div>

        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [-900, 0] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex items-center gap-8 md:gap-12 px-6 md:px-12"
          >
            {[...productsRow2, ...productsRow2, ...productsRow2, ...productsRow2].map((product, i) => (
              <ProductMarqueeItem key={`${product.name}-${i}`} name={product.name} image={product.image} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
