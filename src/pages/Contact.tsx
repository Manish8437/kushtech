import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';
import { company, formatPhone, telLink } from '@/lib/company';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Sandeep Kushwaha for free site surveys and quotations. Call +91 7275442374 or +91 8005354413." />
      
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
                <div className="flex flex-col gap-1 relative z-10">
                  {company.contact.phones.map((phone) => (
                    <a key={phone} href={telLink(phone)} className="inline-flex font-bold text-xl text-foreground hover:text-primary transition-colors">
                      {formatPhone(phone)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-8 rounded-3xl border space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Contact Person</h4>
                    <p className="text-sm text-muted-foreground">{company.contact.person}</p>
                    <p className="text-xs text-muted-foreground mt-1">{company.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Office Address</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {company.address.line1}, {company.address.line2}, <br/>
                      {company.address.city}, {company.address.state} – {company.address.pincode}
                    </p>
                    <a href={company.address.mapsUrl} target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm font-semibold text-primary hover:underline">
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Email Us</h4>
                    <a href={`mailto:${company.contact.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {company.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">{company.hours.weekdays}</p>
                    <p className="text-xs text-muted-foreground mt-1">{company.hours.sunday}</p>
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
