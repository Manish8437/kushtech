import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ContactForm } from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch for free site surveys and quotations." />
      
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Whether you need a new installation, an upgrade to your existing infrastructure, or immediate technical support.
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-background min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-panel p-8 rounded-3xl border border-destructive/20 bg-destructive/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Phone className="w-16 h-16 text-destructive" />
                </div>
                <h3 className="font-heading font-bold text-xl text-destructive mb-2 relative z-10">24/7 Emergency Support</h3>
                <p className="text-sm text-muted-foreground mb-4 relative z-10">For critical server down or security breach issues.</p>
                <a href="tel:+917275442374" className="inline-flex font-bold text-xl text-foreground relative z-10 hover:text-primary transition-colors">
                  +91 7275442374
                </a>
              </div>

              <div className="glass-panel p-8 rounded-3xl border space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      84/18 Fazalganj, Near MSME Technology Centre, <br/>
                      Kanpur, Uttar Pradesh – 208012
                    </p>
                    <a href="https://maps.google.com/?q=84/18+Fazalganj+Kanpur+UP" target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm font-semibold text-primary hover:underline">
                      View on Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Email Us</h4>
                    <a href="mailto:kushintegratedsystems@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      kushintegratedsystems@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">Mon–Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-xs text-muted-foreground mt-1">Sun: Emergency Calls Only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 glass-panel p-8 md:p-12 rounded-[2.5rem] border"
            >
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Send a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
