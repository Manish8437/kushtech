import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Wifi, Server } from 'lucide-react';

const brands = [
  { name: "Hikvision", desc: "Industry-leading IP cameras and NVR/DVR systems", icon: ShieldCheck, color: "text-blue-500" },
  { name: "Dahua", desc: "Professional CCTV and access control solutions", icon: ShieldCheck, color: "text-red-500" },
  { name: "CP Plus", desc: "Affordable CCTV systems for SMEs", icon: ShieldCheck, color: "text-orange-500" },
  { name: "D-Link", desc: "Networking switches, routers, Wi-Fi equipment", icon: Wifi, color: "text-cyan-500" },
  { name: "TP-Link", desc: "Consumer and SME Wi-Fi and networking", icon: Wifi, color: "text-teal-500" },
  { name: "Cisco", desc: "Enterprise networking, switches, firewalls", icon: Server, color: "text-blue-600" },
  { name: "HPE", desc: "Servers, storage, networking (HP Enterprise)", icon: Server, color: "text-emerald-500" },
  { name: "Schneider Electric", desc: "Rack solutions, UPS, power management", icon: Cpu, color: "text-green-600" },
  { name: "Honeywell", desc: "Fire alarm and security systems", icon: ShieldCheck, color: "text-red-600" },
  { name: "Bosch Security", desc: "High-end CCTV, fire detection", icon: ShieldCheck, color: "text-indigo-600" }
];

export default function Brands() {
  return (
    <>
      <SEO title="Brands We Install" description="Trusted global technology brands we use for our installations." />
      
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Brands We Install
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A security or network system is only as reliable as its weakest component. We strictly partner with industry leaders to ensure zero downtime.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, idx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-panel p-8 rounded-3xl border flex items-start gap-5 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 ${brand.color} group-hover:scale-110 transition-transform`}>
                  <brand.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-foreground tracking-tight mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {brand.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
