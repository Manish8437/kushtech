import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, HeadphonesIcon, Award } from 'lucide-react';
import { company } from '@/lib/company';

const valueIcons = [
  <ShieldCheck className="w-8 h-8" />,
  <Cpu className="w-8 h-8" />,
  <HeadphonesIcon className="w-8 h-8" />,
  <Award className="w-8 h-8" />,
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-4xl md:text-5xl mb-6"
            >
              Why Choose KUSH?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#9CA3AF] text-lg mb-4 leading-relaxed"
            >
              {company.subheadline}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-primary text-sm font-medium italic mb-8"
            >
              {company.tagline}
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {['Transparent Pricing', 'Neat & Clean Cabling', 'Branded Hardware Only', 'Post-Sale Training'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-medium text-[#E5E7EB]">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {company.values.map((value, idx) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="text-primary mb-6">
                    {valueIcons[idx]}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-white">{value}</h3>
                  <p className="text-[#9CA3AF]">
                    {idx === 0 && "Dependable systems backed by warranty and AMC support."}
                    {idx === 1 && "Latest HD, IP, WiFi, and biometric technology from global brands."}
                    {idx === 2 && "Dedicated field engineers available 6 days a week with 24/7 emergency support."}
                    {idx === 3 && "Certified installation with premium hardware and manufacturer warranties."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
