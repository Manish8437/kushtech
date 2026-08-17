import React, { useState } from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

import cctvInstall from '@/assets/images/gallery-cctv-installation.jpg';
import cctvControl from '@/assets/images/gallery-cctv-controlroom.jpg';
import biometric from '@/assets/images/gallery-biometric.jpg';
import fireAlarm from '@/assets/images/gallery-fire-alarm.jpg';
import serverInstall from '@/assets/images/gallery-server-installation.jpg';
import serverRack from '@/assets/images/gallery-server-rack.jpg';
import wifiInstall from '@/assets/images/gallery-wifi-installation.jpg';
import cctvOutdoor from '@/assets/images/gallery-cctv-outdoor.jpg';

const projects = [
  {
    id: 1,
    title: "CCTV Installation — Kanpur Commercial Complex",
    cat: "CCTV",
    loc: "Kanpur",
    desc: "120 IP cameras across 3 floors with centralized NVR room, remote monitoring, and full cable management.",
    img: cctvInstall,
  },
  {
    id: 2,
    title: "Enterprise Networking — Lucknow Software Park",
    cat: "Networking",
    loc: "Lucknow",
    desc: "Structured CAT6A cabling for 500+ nodes, managed switches, fiber backbone, and enterprise Wi-Fi.",
    img: wifiInstall,
  },
  {
    id: 3,
    title: "Biometric + Access Control — Manufacturing Plant",
    cat: "Access Control",
    loc: "Kanpur",
    desc: "Face recognition attendance integrated with turnstiles and payroll software for 400+ employees.",
    img: biometric,
  },
  {
    id: 4,
    title: "Fire Alarm & Intrusion — Hospital Campus",
    cat: "Security",
    loc: "Jhansi",
    desc: "Addressable fire alarm panels across 5 wards with nurse-call integration and 24/7 monitoring.",
    img: fireAlarm,
  },
  {
    id: 5,
    title: "CCTV Control Room — Corporate HQ",
    cat: "CCTV",
    loc: "Agra",
    desc: "Centralized 64-channel control room with video wall, analytics software, and remote access.",
    img: cctvControl,
  },
  {
    id: 6,
    title: "Server Room Setup — School Campus",
    cat: "IT Infrastructure",
    loc: "Kanpur",
    desc: "Rack dressing, UPS setup, managed switches, NAS storage, and complete network configuration.",
    img: serverRack,
  },
  {
    id: 7,
    title: "Server Installation — University Data Centre",
    cat: "IT Infrastructure",
    loc: "Kanpur",
    desc: "Rack-mounted servers, SAN storage, blade chassis configuration, and OS deployment for 2000+ users.",
    img: serverInstall,
  },
  {
    id: 8,
    title: "ANPR Camera — Factory Gate",
    cat: "CCTV",
    loc: "Unnao",
    desc: "Automated number plate recognition with boom barrier integration for vehicle access management.",
    img: cctvOutdoor,
  }
];

const filters = ["All", "CCTV", "Networking", "Access Control", "IT Infrastructure", "Security"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.cat === activeFilter);

  return (
    <>
      <SEO
        title="Our Projects"
        description="Portfolio of completed security and IT infrastructure installations by KUSH INTEGRATED SYSTEMS across Kanpur, Lucknow, Agra, and Uttar Pradesh."
      />

      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg"
          >
            Real installations. Real results. A selection of projects we've delivered across Uttar Pradesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30'
                    : 'bg-card border border-border text-foreground hover:border-primary/40 hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-28 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500"
                >
                  {/* Real Photo Background */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider mb-3 w-fit">
                      {project.cat}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {project.desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-white/60">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.loc}
                      </div>
                      <div className="text-white/80 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 font-medium text-sm flex items-center gap-1">
                        View Details <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
