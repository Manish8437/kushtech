import React from 'react';
import { Link } from 'wouter';
import { Camera, Fingerprint, ShieldAlert, Phone, DoorClosed, Wifi, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { company } from '@/lib/company';

const serviceIcons = [
  <Camera className="w-8 h-8" />,
  <Fingerprint className="w-8 h-8" />,
  <ShieldAlert className="w-8 h-8" />,
  <Phone className="w-8 h-8" />,
  <DoorClosed className="w-8 h-8" />,
  <Wifi className="w-8 h-8" />,
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6"
            >
              Our Core Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              {company.pillars.join(" · ")} — end-to-end solutions from sales, installation, and maintenance under one roof.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.coreServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-card hover:bg-card/80 border border-card-border p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {serviceIcons[idx]}
              </div>
              <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">{service.desc}</p>
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
