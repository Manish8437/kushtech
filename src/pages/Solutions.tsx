import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ShieldCheck, Network, Zap, Settings, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    id: "security",
    title: "Business Security Suite",
    icon: ShieldCheck,
    desc: "A completely integrated physical security perimeter for your premises.",
    features: ["IP CCTV Surveillance", "Biometric Access Control", "Fire Detection Panels", "Intrusion Alarms"],
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    id: "network",
    title: "Network Infrastructure Package",
    icon: Network,
    desc: "The high-speed data backbone required for modern enterprise operations.",
    features: ["Structured CAT6 Cabling", "Enterprise Wi-Fi Setup", "Server Rack Dressing", "Fiber Optic Backbone"],
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
  },
  {
    id: "smart",
    title: "Smart Office Bundle",
    icon: Zap,
    desc: "Modernize your workspace with automation and integrated comms.",
    features: ["Lighting & AC Automation", "Video Door Phones", "IP EPABX Systems", "Conference Room Setup"],
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    id: "support",
    title: "IT Support & AMC",
    icon: Settings,
    desc: "Proactive maintenance to ensure your systems never go down.",
    features: ["Annual Maintenance Contract", "Priority Data Recovery", "Hardware Repair", "Remote Monitoring"],
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  }
];

export default function Solutions() {
  return (
    <>
      <SEO title="Solutions Packages" description="End-to-end technology solution bundles for businesses." />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            End-to-End Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We've packaged our most requested services into cohesive bundles designed to solve specific operational challenges.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 md:p-10 rounded-[2rem] border relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${sol.color} border`}>
                  <sol.icon className="w-8 h-8" />
                </div>
                
                <h2 className="font-heading font-bold text-3xl text-foreground mb-4">{sol.title}</h2>
                <p className="text-muted-foreground mb-8 text-lg">{sol.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {sol.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className="inline-flex w-full justify-center px-6 py-4 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-semibold rounded-xl transition-all"
                >
                  Request This Solution
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0B1220] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Deployment Process</h2>
            <p className="text-[#9CA3AF] max-w-2xl mx-auto">How we take a project from concept to execution with zero downtime.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", name: "Site Survey", desc: "Physical inspection" },
                { step: "02", name: "Custom Design", desc: "Architecture & BOQ" },
                { step: "03", name: "Installation", desc: "Clean deployment" },
                { step: "04", name: "Testing", desc: "Rigorous QA" },
                { step: "05", name: "Support", desc: "Training & AMC" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#0F1A2E] border-4 border-[#0B1220] shadow-[0_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-center font-heading font-bold text-xl text-primary mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-[#9CA3AF]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
