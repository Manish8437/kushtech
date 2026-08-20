import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, Factory, ShoppingBag, UtensilsCrossed, Briefcase, Landmark, Home } from 'lucide-react';

const industries = [
  { icon: Building2, name: "Education", desc: "Campus-wide Wi-Fi, classroom CCTV, and access control." },
  { icon: Stethoscope, name: "Healthcare", desc: "Patient monitoring, PA systems, and secure networks." },
  { icon: Factory, name: "Manufacturing", desc: "Perimeter security, time-attendance, and rugged cabling." },
  { icon: ShoppingBag, name: "Retail", desc: "Anti-theft surveillance and high-speed POS networks." },
  { icon: UtensilsCrossed, name: "Hospitality", desc: "Guest Wi-Fi, fire alarms, and smart automation." },
  { icon: Briefcase, name: "Corporates", desc: "Server setups, EPABX, and biometric security." },
  { icon: Landmark, name: "Government", desc: "Compliant security systems and data infrastructure." },
  { icon: Home, name: "Real Estate", desc: "Video door phones and smart society management." },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6"
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Different sectors require different security and network architectures. We customize our approach for your specific operational challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-panel p-6 md:p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-primary/5 hover:border-primary/20 transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300">
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{ind.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground text-balance">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
