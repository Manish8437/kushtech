import React from 'react';
import { company } from '@/lib/company';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Zap, Target, Shield } from 'lucide-react';

const jobs = [
  {
    title: "CCTV Installation Technician",
    type: "Full Time",
    loc: "Kanpur",
    exp: "1-3 years experience",
    desc: "Looking for an experienced technician capable of independently mounting and configuring IP and Analog HD cameras, crimping CAT6 cables, and setting up NVR/DVR systems. Knowledge of Hikvision and Dahua systems is required."
  },
  {
    title: "Network Engineer",
    type: "Full Time",
    loc: "Kanpur",
    exp: "2-4 years experience",
    desc: "We need a skilled network engineer to design and deploy enterprise Wi-Fi, manage structured cabling projects, and configure switches/routers. CCNA certification is highly preferred."
  },
  {
    title: "IT Support Executive",
    type: "Full Time",
    loc: "Kanpur",
    exp: "0-2 years (Freshers welcome)",
    desc: "An entry-level role handling basic IT support, Windows installation, printer troubleshooting, and hardware repair. You will work under our Lead Engineer. Great learning opportunity."
  }
];

export default function Career() {
  return (
    <>
      <SEO title="Careers" description="Join the KUSH INTEGRATED SYSTEMS team in Kanpur." />
      
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Join Our Growing Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We are always looking for driven, technical minds who obsess over clean cabling and flawless execution.
          </motion.p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-3xl text-center border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Competitive Pay</h3>
              <p className="text-muted-foreground text-sm">We value hard work and technical expertise. We offer industry-standard salaries with performance bonuses.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-3xl text-center border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Professional Training</h3>
              <p className="text-muted-foreground text-sm">Get hands-on experience and direct certification training from leading brands like Cisco, Dahua, and Hikvision.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-3xl text-center border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">Growth Opportunities</h3>
              <p className="text-muted-foreground text-sm">Start as a technician and grow into a Project Lead. We prefer promoting talent from within our own ranks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 bg-background min-h-[40vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8">Current Openings</h2>
          
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border flex flex-col md:flex-row gap-8 justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <Briefcase className="w-3.5 h-3.5" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" /> {job.loc}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" /> {job.exp}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{job.desc}</p>
                </div>
                
                <div className="flex items-center shrink-0">
                  <a 
                    href={`mailto:${company.contact.email}?subject=Application for ${job.title}`}
                    className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
