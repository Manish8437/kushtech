import React, { useState } from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ZoomIn } from 'lucide-react';

import cctvInstall from '@/assets/images/gallery-cctv-installation.jpg';
import cctvControl from '@/assets/images/gallery-cctv-controlroom.jpg';
import cctvOutdoor from '@/assets/images/gallery-cctv-outdoor.jpg';
import serverRack from '@/assets/images/gallery-server-rack.jpg';
import structuredCabling from '@/assets/images/gallery-structured-cabling.jpg';
import wifiInstall from '@/assets/images/gallery-wifi-installation.jpg';
import biometric from '@/assets/images/gallery-biometric.jpg';
import accessControl from '@/assets/images/gallery-access-control.jpg';
import serverInstall from '@/assets/images/gallery-server-installation.jpg';
import fireAlarm from '@/assets/images/gallery-fire-alarm.jpg';
import projectFactory from '@/assets/images/project-factory-cctv.jpg';
import projectUniversity from '@/assets/images/project-university-network.jpg';

const galleryItems = [
  { id: 1,  cat: "CCTV",           title: "CCTV Camera Installation",        location: "Commercial Complex, Kanpur",     img: cctvInstall,      desc: "Professional dome camera installation on building exterior with tidy cable routing." },
  { id: 2,  cat: "Networking",     title: "Server Rack & Structured Cabling", location: "Corporate Office, Lucknow",      img: serverRack,       desc: "Enterprise-grade rack dressing with labelled patch panels and managed power strips." },
  { id: 3,  cat: "Access Control", title: "Biometric Attendance System",      location: "Manufacturing Plant, Kanpur",    img: biometric,        desc: "Fingerprint + card attendance terminal integrated with HRMS for real-time tracking." },
  { id: 4,  cat: "CCTV",           title: "CCTV Control Room Setup",          location: "Hospital Campus, Jhansi",        img: cctvControl,      desc: "Centralized monitoring room with 16-camera NVR, UPS backup, and HD video wall." },
  { id: 5,  cat: "Servers",        title: "Server Installation & Config",     location: "School Campus, Kanpur",          img: serverInstall,    desc: "Rack-mounted server installation with OS configuration, RAID setup, and testing." },
  { id: 6,  cat: "Networking",     title: "Enterprise Wi-Fi Deployment",      location: "University, Kanpur",             img: wifiInstall,      desc: "Ceiling-mount enterprise access points providing seamless Wi-Fi across 50,000 sq ft." },
  { id: 7,  cat: "Access Control", title: "Access Control Door Lock",         location: "Corporate HQ, Agra",             img: accessControl,    desc: "Magnetic lock + card reader with electric strike for secured entry management." },
  { id: 8,  cat: "CCTV",           title: "Outdoor PTZ Camera",               location: "Factory Gate, Unnao",            img: cctvOutdoor,      desc: "Heavy-duty outdoor PTZ camera with IR night vision, weatherproof housing, 360° pan." },
  { id: 9,  cat: "Networking",     title: "Structured Cabling Project",       location: "Software Park, Lucknow",         img: structuredCabling, desc: "CAT6A structured cabling for 500+ nodes, tested to TIA-568C standards." },
  { id: 10, cat: "Servers",        title: "Fire Alarm System",                location: "Hospital, Jhansi",               img: fireAlarm,        desc: "Addressable fire alarm panel installation with smoke detectors across all floors." },
  { id: 11, cat: "CCTV",           title: "Industrial CCTV Coverage",         location: "Industrial Estate, Kanpur",      img: projectFactory,   desc: "End-to-end CCTV coverage across large factory floor with 120+ cameras." },
  { id: 12, cat: "Networking",     title: "Campus Network Infrastructure",    location: "Educational Campus, Kanpur",     img: projectUniversity, desc: "Full campus networking with fiber backbone, server room, and managed switches." },
];

const filters = ["All", "CCTV", "Networking", "Servers", "Access Control"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(i => i.cat === activeFilter);

  return (
    <>
      <SEO
        title="Project Gallery"
        description="See KUSH INTEGRATED SYSTEMS' real installation work — CCTV, networking, access control, servers and more across Kanpur, Lucknow, and Uttar Pradesh."
      />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-4"
          >
            Project Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg"
          >
            A visual record of our clean installations, professional cabling, and enterprise deployments across Uttar Pradesh.
          </motion.p>

          {/* Filter Tabs */}
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

      {/* Gallery Grid */}
      <section className="pb-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  onClick={() => setLightboxItem(item)}
                  className="aspect-square rounded-2xl cursor-pointer relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Real Photo */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold rounded-full uppercase tracking-wide">
                      {item.cat}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-5">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <ZoomIn className="w-5 h-5" />
                      <span className="text-sm font-semibold">{item.title}</span>
                    </div>
                    <p className="text-white/70 text-xs text-center line-clamp-2">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <img
                  src={lightboxItem.img}
                  alt={lightboxItem.title}
                  className="w-full max-h-[70vh] object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
                  <span className="px-3 py-1 bg-primary/80 text-white text-xs font-semibold rounded-full uppercase tracking-wider backdrop-blur-md mb-3 inline-block">
                    {lightboxItem.cat}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                    {lightboxItem.title}
                  </h2>
                  <p className="text-white/70 text-sm mb-1">{lightboxItem.location}</p>
                  <p className="text-white/60 text-sm max-w-2xl">{lightboxItem.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
