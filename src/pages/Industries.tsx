import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Stethoscope, Factory, ShoppingBag, 
  UtensilsCrossed, Building2, Landmark, Home
} from 'lucide-react';

const industriesData = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Schools, colleges, and university campuses require massive, secure networks and comprehensive physical surveillance to protect students and data.",
    services: ["Campus-wide Wi-Fi", "Classroom CCTV", "Library Access Control", "PA Systems"]
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Hospitals demand zero-downtime networks for critical systems and stringent access control for restricted medical areas.",
    services: ["Secure Patient Networks", "IP CCTV Surveillance", "Server Redundancy", "Fire Alarms"]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Factories face harsh environments. They need rugged cabling, perimeter security, and reliable biometric systems for shift workers.",
    services: ["Perimeter Security", "Time-Attendance Biometrics", "Industrial Wi-Fi", "Fiber Optic Cabling"]
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "From standalone boutiques to large malls, retail spaces need anti-theft surveillance and high-speed networks for POS terminals.",
    services: ["High-Res CCTV", "POS Network Setup", "Intrusion Alarms", "Guest Wi-Fi"]
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    desc: "Hotels and restaurants compete on guest experience. Flawless Wi-Fi and smart room automation are now baseline expectations.",
    services: ["Seamless Guest Wi-Fi", "Smart Automation", "CCTV Monitoring", "Fire Safety"]
  },
  {
    icon: Building2,
    title: "Corporates",
    desc: "Modern offices require structured server rooms, secure boardrooms, and flawless connectivity for employee productivity.",
    services: ["Structured Cabling", "Server Rack Setup", "Biometric Access", "Conference Tech"]
  },
  {
    icon: Landmark,
    title: "Government",
    desc: "Government installations require the highest level of compliance, data security, and specialized hardware deployment.",
    services: ["Compliant CCTV", "Secure Data Networks", "Access Control", "AMC Contracts"]
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Residential complexes and luxury villas benefit from smart automation and centralized community security monitoring.",
    services: ["Video Door Phones", "Society CCTV", "Home Automation", "Gate ANPR"]
  }
];

export default function Industries() {
  return (
    <>
      <SEO title="Industries We Serve" description="Customized technology and security solutions for various sectors." />
      
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Industries We Serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Technology isn't one-size-fits-all. We architect solutions based on the unique operational realities of your specific industry.
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-6 md:space-y-12">
            {industriesData.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row gap-8 items-center glass-panel p-8 md:p-12 rounded-[2.5rem] border ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <ind.icon className="w-16 h-16 md:w-24 md:h-24" />
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">{ind.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{ind.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {ind.services.map((srv, i) => (
                      <span key={i} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
