import React, { useState } from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Camera, Server, Fingerprint, Flame, HardDrive, Wifi, 
  MonitorSmartphone, RadioReceiver, ScanFace, 
  DoorClosed, ShieldAlert, Settings, Wrench, Clock, Database, Printer, Phone
} from 'lucide-react';

const categories = ["All", "Security", "Networking", "IT Support", "Automation"];

const servicesList = [
  { cat: "Security", title: "CCTV Installation", icon: Camera, desc: "End-to-end analog and IP CCTV solutions for homes and enterprises.", price: "Contact for Pricing" },
  { cat: "Security", title: "IP Camera Systems", icon: Camera, desc: "High-resolution digital network cameras with NVR integration.", price: "Contact for Pricing" },
  { cat: "Security", title: "PTZ Cameras", icon: MonitorSmartphone, desc: "Pan-Tilt-Zoom cameras for active perimeter monitoring.", price: "Contact for Pricing" },
  { cat: "Security", title: "ANPR Cameras", icon: ScanFace, desc: "Automatic Number Plate Recognition for entry gates and tolls.", price: "Contact for Pricing" },
  { cat: "Security", title: "Video Door Phone", icon: DoorClosed, desc: "Smart intercom systems with visual verification.", price: "Contact for Pricing" },
  { cat: "Security", title: "EPABX & Intercom", icon: Phone, desc: "Office telephony, intercom, and multi-line communication systems.", price: "Contact for Pricing" },
  { cat: "Security", title: "Biometric Systems", icon: Fingerprint, desc: "Fingerprint and facial recognition attendance solutions.", price: "Contact for Pricing" },
  { cat: "Security", title: "Access Control", icon: ShieldAlert, desc: "Card, PIN, and biometric door locking mechanisms.", price: "Contact for Pricing" },
  { cat: "Networking", title: "Networking Solutions", icon: Server, desc: "Complete local area network design and deployment.", price: "Contact for Pricing" },
  { cat: "Networking", title: "Enterprise Wi-Fi", icon: Wifi, desc: "High-density seamless wireless coverage for large spaces.", price: "Contact for Pricing" },
  { cat: "Networking", title: "Structured Cabling", icon: Settings, desc: "Neat, labeled, and certified CAT6/CAT6A cabling.", price: "Contact for Pricing" },
  { cat: "Networking", title: "Fiber Optic", icon: RadioReceiver, desc: "High-speed fiber splicing and backbone networking.", price: "Contact for Pricing" },
  { cat: "Networking", title: "Rack Installation", icon: Server, desc: "Server rack dressing, cable management, and PDU setup.", price: "Contact for Pricing" },
  { cat: "IT Support", title: "Server Installation", icon: Database, desc: "Windows/Linux server deployment and configuration.", price: "Contact for Pricing" },
  { cat: "IT Support", title: "NAS Storage", icon: HardDrive, desc: "Network Attached Storage for centralized data backups.", price: "Contact for Pricing" },
  { cat: "IT Support", title: "Data Recovery", icon: HardDrive, desc: "Professional recovery from corrupted or dead drives.", price: "Contact for Pricing" },
  { cat: "IT Support", title: "Computer Repair", icon: Wrench, desc: "Hardware and software troubleshooting for desktops.", price: "Contact for Pricing" },
  { cat: "IT Support", title: "Laptop Repair", icon: Wrench, desc: "Screen, battery, and motherboard level repairs.", price: "Contact for Pricing" },
  { cat: "IT Support", title: "Printer Setup", icon: Printer, desc: "Network printer configuration and maintenance.", price: "Contact for Pricing" },
  { cat: "Automation", title: "AMC Services", icon: Clock, desc: "Annual Maintenance Contracts for complete peace of mind.", price: "Contact for Pricing" },
  { cat: "Security", title: "Fire Alarm Systems", icon: Flame, desc: "Addressable and conventional fire detection panels.", price: "Contact for Pricing" },
  { cat: "Security", title: "Intrusion Alarm", icon: ShieldAlert, desc: "Motion sensors, glass break detectors, and hooters.", price: "Contact for Pricing" },
  { cat: "Automation", title: "Smart Home", icon: MonitorSmartphone, desc: "Lighting, AC, and curtain automation controlled via app.", price: "Contact for Pricing" }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredServices = activeTab === "All" 
    ? servicesList 
    : servicesList.filter(s => s.cat === activeTab);

  return (
    <>
      <SEO title="Our Services" description="Comprehensive technology services including CCTV, Networking, and IT Support." />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Our Services
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium mb-12"
          >
            <Link href="/">Home</Link>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-primary">Services</span>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel p-8 rounded-3xl flex flex-col group border hover:border-primary/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{service.desc}</p>
                  
                  <div className="pt-6 border-t flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-foreground/70">{service.price}</span>
                    <Link href="/contact" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      Get Quote &rarr;
                    </Link>
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
