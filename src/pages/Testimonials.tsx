import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, ExternalLink, MapPin } from 'lucide-react';

const testimonials = [
  {
    text: "KUSH INTEGRATED SYSTEMS installed our CCTV system across 3 floors in just 2 days. The neatness of their cabling and professionalism is unmatched in Kanpur. Every camera is perfectly positioned and the remote access works flawlessly.",
    author: "Rajesh Kumar",
    company: "Kanpur Textile Mills",
    location: "Kanpur",
    service: "CCTV Installation",
    initials: "RK",
    rating: 5
  },
  {
    text: "Their networking team set up our entire office Wi-Fi infrastructure without a single hiccup. No dead zones, no speed drops. Our 200 employees are on seamless connectivity every day. Highly recommended for corporate setups.",
    author: "Priya Sharma",
    company: "TechSoft Solutions",
    location: "Lucknow",
    service: "Enterprise Wi-Fi",
    initials: "PS",
    rating: 5
  },
  {
    text: "We are on their AMC plan and it is the best investment we have made. Quick response time, certified engineers, and they genuinely understand how critical uptime is for a hospital environment.",
    author: "Amit Verdi",
    company: "Green Valley Hospital",
    location: "Jhansi",
    service: "AMC Services",
    initials: "AV",
    rating: 5
  },
  {
    text: "Data recovery from our crashed server was miraculous. They recovered 4TB of critical business data in under 24 hours. I cannot overstate how much they saved our operations. Absolute professionals.",
    author: "Sunil Gupta",
    company: "Gupta Exports Pvt. Ltd.",
    location: "Agra",
    service: "Data Recovery",
    initials: "SG",
    rating: 5
  },
  {
    text: "The biometric access control system for our factory gates completely eliminated buddy-punching and manual attendance errors. Integration with our payroll software was smooth. Excellent technical team.",
    author: "Vikram Singh",
    company: "Singh Manufacturing Co.",
    location: "Kanpur",
    service: "Biometric System",
    initials: "VS",
    rating: 5
  },
  {
    text: "We hired KUSH for our smart home automation and could not be happier. Lights, ACs, curtains — all controlled from the phone. The installation was extremely clean with zero visible wires.",
    author: "Neha Agarwal",
    company: "Residential Client",
    location: "Lucknow",
    service: "Home Automation",
    initials: "NA",
    rating: 5
  },
  {
    text: "During a fire safety audit, KUSH upgraded our entire fire alarm panel within three days without disrupting daily operations. Their knowledge of compliance requirements was impressive.",
    author: "Dr. R.K. Mishra",
    company: "City Healthcare Centre",
    location: "Kanpur",
    service: "Fire Alarm",
    initials: "RM",
    rating: 5
  },
  {
    text: "Our IT team struggled with server room cabling for years. KUSH came in, assessed the situation, and delivered a perfectly organized rack setup with full documentation. Night and day difference.",
    author: "Sanjay Chawla",
    company: "Chawla & Associates",
    location: "Kanpur",
    service: "Server Room",
    initials: "SC",
    rating: 5
  },
  {
    text: "Got our full campus structured cabling done for 300+ nodes. Testing was thorough, documentation was handed over properly, and the project was completed ahead of schedule. Very satisfied.",
    author: "Prof. A.K. Tiwari",
    company: "Sunrise Institute, Kanpur",
    location: "Kanpur",
    service: "Structured Cabling",
    initials: "AT",
    rating: 5
  },
  {
    text: "Installed Video Door Phone system and IP intercom for our housing society. Neat work, reasonable pricing, and the after-sales support has been responsive every time we needed it.",
    author: "Meena Joshi",
    company: "Green Park Society",
    location: "Unnao",
    service: "Video Door Phone",
    initials: "MJ",
    rating: 5
  },
  {
    text: "The ANPR camera and boom barrier system at our plant gates has transformed our vehicle management. Accurate, fast, and low on maintenance. KUSH team handled the entire integration perfectly.",
    author: "Ravi Shankar",
    company: "Shankar Plastics Ltd.",
    location: "Unnao",
    service: "ANPR Camera",
    initials: "RS",
    rating: 5
  },
  {
    text: "Have been using their AMC for two years now. Response time is exceptional — they usually have an engineer on-site within 3–4 hours of a support call. Genuinely dependable.",
    author: "Deepak Malhotra",
    company: "Malhotra Group of Companies",
    location: "Kanpur",
    service: "AMC Services",
    initials: "DM",
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Client Testimonials"
        description="Read what clients across Kanpur, Lucknow, Agra, and Uttar Pradesh say about KUSH INTEGRATED SYSTEMS' security and IT infrastructure services."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4"
          >
            What Our Clients Say
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-10"
          >
            Over 500 projects delivered. We let our clients do the talking.
          </motion.p>

          {/* Google Reviews CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://share.google/nvsuz2wtCqQTMc0N8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 glass-panel px-8 py-4 rounded-2xl border hover:border-primary/40 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-bold text-sm shrink-0">G</div>
              <div className="text-left">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                  <span className="font-bold text-foreground ml-1">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground">120+ Reviews on Google Business</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
            </a>

            <a
              href="https://share.google/w5B3ZesRmNBD37ZCz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-medium text-sm hover:bg-primary/90 transition-all"
            >
              Write a Review <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 pb-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="glass-panel p-8 rounded-3xl flex flex-col relative group hover:shadow-xl transition-all duration-300 border"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />

                {/* Service badge */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 w-fit">
                  {item.service}
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-8 flex-1 leading-relaxed text-sm md:text-base">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary font-heading font-bold flex items-center justify-center text-sm shrink-0">
                    {item.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-semibold text-foreground text-sm">{item.author}</h4>
                    <p className="text-xs text-muted-foreground truncate">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Google CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center glass-panel rounded-3xl p-12 border max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-[#4285F4] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">G</div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">
              Verified on Google Business
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              All our reviews are genuine, verified Google reviews from real clients across Uttar Pradesh.
              Read our full profile and see our photo gallery on Google.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://share.google/nvsuz2wtCqQTMc0N8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4285F4] text-white rounded-2xl font-medium hover:bg-[#3b78e7] transition-all shadow-lg"
              >
                View Google Business Profile <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://share.google/w5B3ZesRmNBD37ZCz"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground rounded-2xl font-medium hover:border-primary hover:text-primary transition-all"
              >
                Leave Us a Review <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
