import React from 'react';
import { Link } from 'wouter';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { company } from '@/lib/company';

const assetBase = import.meta.env.BASE_URL;

export default function Products() {
  return (
    <>
      <SEO
        title="Our Products"
        description="Authorized dealer for Hikvision, CP Plus, Prama, Dahua, Uniview, and Hifocus CCTV and surveillance products in Kanpur."
      />

      <section className="pt-32 pb-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We supply and install premium CCTV and surveillance products from India's most trusted brands.
          </motion.p>
        </div>
      </section>

      <section className="py-12 pb-24 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {company.products.map((product, idx) => (
              <motion.a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group glass-panel rounded-2xl border overflow-hidden hover:border-primary/40 hover:shadow-xl transition-all"
              >
                <div className="aspect-[4/3] bg-white flex items-center justify-center p-6">
                  <img
                    src={`${assetBase}${product.image}`}
                    alt={`${product.name} products`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="px-5 py-4 border-t flex items-center justify-between gap-2">
                  <span className="font-heading font-semibold text-foreground">{product.name}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mt-12"
          >
            Need help choosing the right product?{' '}
            <Link href="/contact" className="text-primary hover:underline font-medium">
              Contact us for a free consultation
            </Link>
          </motion.p>
        </div>
      </section>
    </>
  );
}
