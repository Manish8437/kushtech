import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Wifi, Server, HardDrive } from 'lucide-react';
import { company } from '@/lib/company';

const brandMeta: Record<string, { desc: string; icon: typeof ShieldCheck; color: string }> = {
  "CP Plus": { desc: "Affordable CCTV systems for homes and SMEs", icon: ShieldCheck, color: "text-orange-500" },
  "Prama India": { desc: "Indian-made surveillance and security products", icon: ShieldCheck, color: "text-purple-500" },
  Hifocus: { desc: "Affordable CCTV cameras and DVR/NVR systems", icon: ShieldCheck, color: "text-amber-500" },
  Dahua: { desc: "Professional CCTV and access control solutions", icon: ShieldCheck, color: "text-red-500" },
  Hikvision: { desc: "Industry-leading IP cameras and NVR/DVR systems", icon: ShieldCheck, color: "text-blue-500" },
  Secureye: { desc: "CCTV, biometric, and smart security solutions", icon: ShieldCheck, color: "text-rose-500" },
  NEXIVUE: { desc: "Made-in-India AI surveillance cameras and NVRs", icon: ShieldCheck, color: "text-sky-500" },
  Sparsh: { desc: "CCTV cameras and video surveillance systems", icon: ShieldCheck, color: "text-orange-600" },
  Honeywell: { desc: "Enterprise video and intelligent security systems", icon: ShieldCheck, color: "text-red-600" },
  SECURUS: { desc: "Make-in-India CCTV cameras, NVRs, and PoE switches", icon: ShieldCheck, color: "text-yellow-600" },
  AMCOM: { desc: "Surveillance and security products for Indian markets", icon: ShieldCheck, color: "text-lime-600" },
  "TVT India": { desc: "IP and analog cameras, NVRs, and video intercoms", icon: ShieldCheck, color: "text-indigo-500" },
  Panasonic: { desc: "Enterprise surveillance cameras and video systems", icon: ShieldCheck, color: "text-blue-700" },
  eSSL: { desc: "Biometric attendance and access control devices", icon: ShieldCheck, color: "text-cyan-600" },
  CCL: { desc: "EPABX, IP-PBX, intercom, and telephone systems", icon: Server, color: "text-orange-700" },
  Matrix: { desc: "EPABX, telephony, video, and access control", icon: Server, color: "text-slate-500" },
  Telesoft: { desc: "Telecom and communication system solutions", icon: Server, color: "text-green-600" },
  "D-Link": { desc: "Networking switches, routers, and Wi-Fi equipment", icon: Wifi, color: "text-cyan-500" },
  "TP-Link": { desc: "Consumer and SME Wi-Fi and networking", icon: Wifi, color: "text-teal-500" },
  Digisol: { desc: "Indian networking switches, routers, and Wi-Fi", icon: Wifi, color: "text-red-500" },
  Tenda: { desc: "Home and SME routers, Wi-Fi, and switches", icon: Wifi, color: "text-orange-500" },
  "UniFi & Ubiquiti": { desc: "Enterprise UniFi Wi-Fi, switching, and networking", icon: Wifi, color: "text-sky-600" },
  Seagate: { desc: "Surveillance and NAS hard drives for video storage", icon: HardDrive, color: "text-emerald-500" },
  WD: { desc: "WD Purple and NAS storage for CCTV and backup", icon: HardDrive, color: "text-blue-600" },
  QNAP: { desc: "Network attached storage for video and backups", icon: Cpu, color: "text-cyan-700" },
  Synology: { desc: "NAS systems for surveillance recording and data", icon: Cpu, color: "text-orange-600" },
};

const brands = company.brands.map((name) => ({
  name,
  ...brandMeta[name],
}));

export default function Brands() {
  return (
    <>
      <SEO title="Brands We Install" description="Trusted technology brands we use for our installations — CP Plus, Hikvision, Dahua, Prama, Honeywell, eSSL, D-Link, TP-Link, and more." />
      
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
                transition={{ delay: Math.min(idx * 0.03, 0.4) }}
                className="glass-panel p-8 rounded-3xl border flex items-start gap-5 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 ${brand.color} group-hover:scale-110 transition-transform`}>
                  <brand.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{brand.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{brand.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
