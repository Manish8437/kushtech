import React from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Newsletter() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've successfully joined our newsletter.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-[2rem] text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="font-heading font-bold text-3xl mb-4 text-foreground">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get the latest insights on enterprise security, networking tips, and exclusive AMC offers directly in your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              required
              placeholder="Enter your email address" 
              className="flex-1 bg-background/50 border border-border rounded-full px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
            />
            <button 
              type="submit"
              className="bg-foreground text-background font-medium px-8 py-3 md:py-4 rounded-full hover:bg-foreground/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
}
