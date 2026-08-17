import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, HeadphonesIcon, Award } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "10+ Years Experience",
    desc: "A decade of deep technical expertise in Kanpur's market."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "500+ Installations",
    desc: "Proven track record across large-scale commercial projects."
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "24×7 Support",
    desc: "Rapid response times for all maintenance and emergencies."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Certified Engineers",
    desc: "Trained professionals for Hikvision, Cisco, and major brands."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0B1220] text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          <div className="lg:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-4xl md:text-5xl mb-6"
            >
              Why Choose KUSH?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#9CA3AF] text-lg mb-8 leading-relaxed"
            >
              We don't just sell boxes; we design ecosystems. From the first site survey to post-installation AMC, we take full ownership of your technology infrastructure.
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {['Transparent Pricing', 'Neat & Clean Cabling', 'Branded Hardware Only', 'Post-Sale Training'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-medium text-[#E5E7EB]">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="text-primary mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-white">{feature.title}</h3>
                  <p className="text-[#9CA3AF]">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
