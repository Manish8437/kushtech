import React from 'react';
import { Link } from 'wouter';
import { SEO } from '@/components/layout/SEO';
import { Network, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <div className="flex-1 flex items-center justify-center min-h-[80vh] py-20 bg-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center glass-panel p-12 rounded-3xl"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
              <Network className="w-12 h-12 text-primary absolute z-10" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
              />
            </div>
            
            <h1 className="font-heading font-bold text-6xl md:text-8xl text-foreground mb-4">404</h1>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
              Oops! Connection Lost
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              The page you're looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on the network.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/" 
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
                Return Home
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-3 bg-transparent text-foreground border border-border rounded-full font-medium hover:bg-secondary transition-all"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
