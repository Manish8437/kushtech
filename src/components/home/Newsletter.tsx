import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitFormToEmail } from '@/lib/submitForm';

export function Newsletter() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form._honey.value) return;

    setLoading(true);

    const formData = new FormData(form);
    const result = await submitFormToEmail(
      { email: String(formData.get("email") ?? "") },
      { subject: "Newsletter subscription — KIS website" },
    );

    setLoading(false);

    if (result.ok) {
      toast({
        title: "Subscribed!",
        description: "You've successfully joined our newsletter.",
      });
      form.reset();
    } else {
      toast({
        title: "Subscription failed",
        description: result.message,
        variant: "destructive",
      });
    }
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
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <input 
              type="email"
              name="email"
              required
              placeholder="Enter your email address" 
              className="flex-1 bg-background/50 border border-border rounded-full px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-foreground text-background font-medium px-8 py-3 md:py-4 rounded-full hover:bg-foreground/90 transition-colors whitespace-nowrap disabled:opacity-70"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
}
