import React, { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Shield, Server, Wifi, Activity } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Generate random particles for the background
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
        {/* Subtle Gradient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Kanpur's #1 Enterprise Technology Partner
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.1] tracking-tight text-foreground max-w-5xl mb-6"
        >
          Smart Technology.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Secure Future.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Kanpur's most trusted security & IT infrastructure partner — protecting businesses, homes, and institutions since day one.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(0,86,214,0.4)] flex items-center justify-center gap-2">
            Book Free Site Survey
          </Link>
          <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-primary/20 text-foreground rounded-full font-medium text-lg hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center">
            Explore Solutions
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl"
        >
          {[
            { icon: Shield, text: "500+ Projects" },
            { icon: Server, text: "100+ Clients" },
            { icon: Activity, text: "24/7 Support" },
            { icon: Wifi, text: "ISO Certified Work" }
          ].map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-2 glass-panel py-4 px-2 rounded-2xl">
              <badge.icon className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-foreground/80">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground gap-2"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
