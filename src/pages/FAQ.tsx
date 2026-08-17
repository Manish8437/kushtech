import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We are headquartered in Kanpur and serve surrounding areas in Uttar Pradesh including Lucknow, Agra, Jhansi, Unnao, and more. For large enterprise projects, we can deploy teams across North India."
  },
  {
    q: "Do you offer Annual Maintenance Contracts (AMC)?",
    a: "Yes, we offer comprehensive AMC packages for CCTV systems, networking infrastructure, fire alarms, and IT hardware. Our AMCs include routine preventive maintenance and priority emergency support."
  },
  {
    q: "How long does CCTV installation take?",
    a: "Typically 1-3 days depending on the number of cameras and the complexity of the cabling. A small retail shop might take one day, while a multi-floor factory could take up to a week. We always provide a timeline during our site survey."
  },
  {
    q: "What camera brands do you install?",
    a: "We strictly use trusted global brands like Hikvision, Dahua, CP Plus, and Bosch to ensure high quality and easy warranty claims."
  },
  {
    q: "Do you provide remote monitoring setup?",
    a: "Yes, all our IP and HD CCTV setups include configuration for remote mobile access, allowing you to view your premises from anywhere in the world securely."
  },
  {
    q: "What is the warranty on installed systems?",
    a: "We provide a 1-year service warranty on our installation workmanship. The hardware itself carries the manufacturer's warranty, which is typically 1 to 3 years depending on the brand and model."
  },
  {
    q: "Do you handle structured cabling for new offices?",
    a: "Yes, we handle complete structured cabling projects. We coordinate with your architects and interior designers during the raw phase to lay concealed CAT6/Fiber cables before the walls are sealed."
  },
  {
    q: "Can you recover data from a crashed hard drive?",
    a: "We specialize in data recovery from HDDs, SSDs, and RAID configurations. If your server or computer storage has crashed, do not try to format it—bring it to us immediately."
  },
  {
    q: "Do you set up enterprise Wi-Fi networks?",
    a: "Yes, we design and install enterprise-grade Wi-Fi using seamless roaming access points (Ubiquiti, Cisco, TP-Link Omada) for large areas like campuses and hotels, ensuring no dead zones."
  },
  {
    q: "What is your response time for support calls?",
    a: "For clients under our AMC, our response time is within 4 hours. For non-AMC emergency calls, we typically deploy an engineer on the same day."
  },
  {
    q: "Do you install fire alarm systems?",
    a: "Yes, we supply and install both conventional and addressable fire alarm systems, complete with smoke detectors, heat detectors, manual call points, and hooters compliant with safety norms."
  },
  {
    q: "Can you integrate CCTV with access control?",
    a: "Absolutely. We design integrated security ecosystems where an access control event (like a forced door) can trigger the CCTV system to start recording or send an alert."
  },
  {
    q: "How do I request a free site survey?",
    a: "You can contact us via phone, WhatsApp, or by filling out the contact form on our website. Our team will schedule a visit at your convenience."
  },
  {
    q: "Do you handle EPABX and intercom systems?",
    a: "Yes, we install IP EPABX and analog intercom systems for offices, hospitals, and residential societies."
  },
  {
    q: "Are your engineers certified?",
    a: "Yes, our engineers are trained and certified directly by the brands we install, ensuring they know the exact specifications and best practices for the hardware."
  }
];

export default function FAQ() {
  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqs;
    const lowerSearch = search.toLowerCase();
    return faqs.filter(
      faq => faq.q.toLowerCase().includes(lowerSearch) || faq.a.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  return (
    <>
      <SEO title="Frequently Asked Questions" description="Answers to common questions about our security and IT services." />
      
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            FAQ
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-xl mx-auto mt-10"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-24 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No questions found matching "{search}". Try a different keyword.
            </div>
          ) : (
            <motion.div layout>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AnimatePresence>
                  {filteredFaqs.map((faq, idx) => (
                    <motion.div
                      key={idx}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AccordionItem value={`item-${idx}`} className="glass-panel border px-6 rounded-2xl">
                        <AccordionTrigger className="text-left font-heading font-semibold text-lg hover:no-underline hover:text-primary py-5">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Accordion>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
