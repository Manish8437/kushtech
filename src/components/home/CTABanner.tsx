import React from 'react';
import { Link } from 'wouter';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTABanner() {
  return (
    <section className="py-20 bg-background relative px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0056D6] rounded-[2.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl"
        >
          {/* Decorative Rings */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 border-[40px] border-white/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 border-[20px] border-white/10 rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to Secure Your Business?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-xl">
              Book a free site survey today. Our experts will assess your security and IT needs to provide a customized, cost-effective solution.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-[#0056D6] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Book Free Survey <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+917275442374" 
              className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: +91 7275442374
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
