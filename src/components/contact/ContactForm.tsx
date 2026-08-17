import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent Successfully",
        description: "We will get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name *</label>
          <input 
            type="text" 
            required 
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone Number *</label>
          <input 
            type="tel" 
            required 
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <input 
          type="email" 
          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          placeholder="john@company.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Service Required</label>
        <select 
          required 
          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground appearance-none"
        >
          <option value="">Select a service...</option>
          <option value="CCTV">CCTV Installation</option>
          <option value="Networking">Networking Solutions</option>
          <option value="Biometric">Biometric & Access Control</option>
          <option value="FireAlarm">Fire Alarm Systems</option>
          <option value="DataRecovery">Data Recovery</option>
          <option value="AMC">AMC Services</option>
          <option value="Other">Other Query</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Message *</label>
        <textarea 
          required 
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
      >
        {loading ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>Send Message <Send className="w-5 h-5" /></>
        )}
      </button>
    </form>
  );
}
