import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitFormToEmail } from '@/lib/submitForm';

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form._honey.value) return;

    setLoading(true);

    const formData = new FormData(form);
    const result = await submitFormToEmail(
      {
        name: String(formData.get("name") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        email: String(formData.get("email") ?? ""),
        service: String(formData.get("service") ?? ""),
        message: String(formData.get("message") ?? ""),
      },
      { subject: "Contact form — KIS website" },
    );

    setLoading(false);

    if (result.ok) {
      toast({
        title: "Message Sent Successfully",
        description: "We will get back to you within 24 hours.",
      });
      form.reset();
    } else {
      toast({
        title: "Could not send message",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name *</label>
          <input 
            type="text"
            name="name"
            required 
            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone Number *</label>
          <input 
            type="tel"
            name="phone"
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
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          placeholder="john@company.com"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Service Required</label>
        <select
          name="service"
          required 
          className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground appearance-none"
        >
          <option value="">Select a service...</option>
          <option value="CCTV Installation">CCTV Installation</option>
          <option value="Networking Solution">Networking Solutions</option>
          <option value="Biometric & Access Control">Biometric & Access Control</option>
          <option value="Fire Alarm System">Fire Alarm Systems</option>
          <option value="Data Recover">Data Recovery</option>
          <option value="AMC Services">AMC Services</option>
          <option value="Other Query">Other Query</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Message *</label>
        <textarea
          name="message"
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
