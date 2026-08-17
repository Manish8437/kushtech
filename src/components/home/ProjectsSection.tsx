import React from 'react';
import { Link } from 'wouter';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import cctvInstall from '@/assets/images/gallery-cctv-installation.jpg';
import biometric from '@/assets/images/gallery-biometric.jpg';
import wifiInstall from '@/assets/images/gallery-wifi-installation.jpg';

const projects = [
  {
    id: 1,
    title: "Kanpur Industrial Estate",
    category: "CCTV & Networking",
    desc: "Complete surveillance overhaul with 120 IP cameras and fiber backbone across 5 acres.",
    location: "Fazalganj, Kanpur",
    img: cctvInstall,
  },
  {
    id: 2,
    title: "Hospital Campus Security",
    category: "Biometric & Access Control",
    desc: "Multi-door access control integrated with employee time-attendance and visitor management.",
    location: "Gomti Nagar, Lucknow",
    img: biometric,
  },
  {
    id: 3,
    title: "University Wi-Fi Deployment",
    category: "Enterprise Wi-Fi",
    desc: "High-density wireless coverage across library, hostels, and admin blocks for 2000+ concurrent users.",
    location: "Kalyanpur, Kanpur",
    img: wifiInstall,
  }
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4"
            >
              Our Recent Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Real solutions deployed for real businesses across Uttar Pradesh.
            </motion.p>
          </div>
          <Link href="/projects" className="px-6 py-3 border border-border rounded-full hover:bg-secondary transition-colors whitespace-nowrap text-sm font-medium">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] flex flex-col justify-end shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Real Photo */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">{project.title}</h3>
                <p className="text-white/70 text-sm mb-6 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs text-white/60 font-medium">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <Link
                    href="/projects"
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-primary"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
