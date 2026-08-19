import React from 'react';
import { SEO } from '@/components/layout/SEO';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye, Users } from 'lucide-react';
import { StatsSection } from '@/components/home/StatsSection';
import { company } from '@/lib/company';

import teamPhoto from '@/assets/images/team-photo.jpg';

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about KUSH INTEGRATED SYSTEMS — Kanpur's trusted enterprise security, networking, and IT infrastructure company with 10+ years of experience across Uttar Pradesh."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium"
          >
            <span>Home</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-primary">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* Story + Team Photo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Bridging the Technology Gap in Uttar Pradesh
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                Founded with a clear vision to bring enterprise-grade security and IT infrastructure to the businesses of Kanpur, <strong className="text-foreground">KUSH INTEGRATED SYSTEMS</strong> has grown into the region's most trusted technology backbone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                We realized early on that organizations don't just need equipment — they need reliable, integrated ecosystems. Whether it's a factory requiring perimeter surveillance, a hospital building a critical data network, or a corporate office setting up its first server room, we approach every project with an engineering mindset and a commitment to perfection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From a single CCTV camera to a 500-node enterprise network, we've delivered 500+ projects across Kanpur, Lucknow, Agra, Jhansi, Unnao and beyond — always on time, always within budget, always immaculate.
              </p>
            </motion.div>

            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={teamPhoto}
                  alt="KUSH INTEGRATED SYSTEMS engineering team"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-2xl shadow-xl border">
                <p className="font-heading font-bold text-2xl text-primary">500+</p>
                <p className="text-sm text-muted-foreground font-medium">Projects Delivered</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 rounded-[2rem]"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver state-of-the-art, scalable, and secure technology infrastructure that empowers organizations to operate efficiently and safely — without worrying about their backend systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-10 rounded-[2rem]"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the undisputed leader in integrated security and networking solutions across North India — recognized for uncompromising quality, technical expertise, and a customer-first approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Why We're Different */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Why We're Different</h2>
            <p className="text-muted-foreground">What sets us apart from regular system integrators.</p>
          </div>

          <div className="space-y-4">
            {[
              { title: "Engineering-First Approach", body: "We design before we deploy. Every installation begins with a site survey and a custom plan — no guesswork, no shortcuts." },
              { title: "Premium Hardware Only", body: "We strictly install globally trusted brands — Hikvision, Cisco, HPE, Schneider, Honeywell — with full manufacturer warranties." },
              { title: "Obsessive Cable Management", body: "A messy rack is a liability. We ensure structured, labelled, colour-coded cabling on every single project." },
              { title: "Transparent Pricing", body: "Detailed, itemized quotations with no hidden costs. What we quote is what you pay." },
              { title: "Dedicated AMC Division", body: "A separate support team dedicated entirely to post-installation maintenance — available 6 days a week with emergency support 24/7." },
            ].map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 p-6 glass-panel rounded-2xl border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-heading font-semibold text-foreground">{point.title}:</span>{' '}
                  <span className="text-muted-foreground">{point.body}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground">The experts driving our technical excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {company.leadership.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center glass-panel p-8 rounded-3xl border"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-5 border-4 border-background shadow-lg">
                  <span className="font-heading font-bold text-xl text-primary">{member.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
